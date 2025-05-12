import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { IsendSms } from 'src/types/sms.type';
import * as FormData from 'form-data';

@Injectable()
class SmsProvider {
  constructor(private configService: ConfigService) {}

  private GET_TOKEN = 'https://notify.eskiz.uz/api/auth/login';
  private SEND_SMS = 'https://notify.eskiz.uz/api/message/sms/send';
  private token: string;
  private email: string = process.env.ESKIZ_USER || '';
  private password: string = process.env.ESKIZ_PASSWORD || '';

  // 1. TOKEN olish
  async getToken() {
    try {
      const formData = new FormData();
      formData.append('email', this.email);
      formData.append('password', this.password);

      const { data } = await axios.post(this.GET_TOKEN, formData, {
        headers: formData.getHeaders(),
      });

      this.token = data.data.token;
      console.log('Token olindi:', this.token);
    } catch (error) {
      console.error('Token olishda xato:', error.response?.data || error);
    }
  }

  // 2. SMS yuborish
  async sendSms(message: IsendSms) {
    try {
      if (!this.token) await this.getToken(); // token bo‘lmasa, yangisini ol

      const formData = new FormData();
      formData.append('mobile_phone', message.mobile_phone);
      formData.append('message', message.message);
      formData.append('from', '4546'); // Eskiz beradigan default FROM

      const { data } = await axios.post(this.SEND_SMS, formData, {
        headers: {
          ...formData.getHeaders(),
          Authorization: `Bearer ${this.token}`,
        },
      });

      console.log('SMS yuborildi:', data);
    } catch (error) {
      console.error('SMS yuborishda xato:', error.response?.data || error);
    }
  }
}

export default SmsProvider;
