import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
class RedisService {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis({
      port: 6379,
      host: '127.0.0.1',
      retryStrategy: (times) => Math.min(times * 50, 2000), // Qayta ulanish strategiyasi
    });

    this.redis.on('error', (err) => {
      console.error('Redis xatosi:', err);
    });

    this.redis.on('connect', () => {
      console.log('Redis ulandi');
    });
  }

  getClient(): Redis {
    return this.redis;
  }
}

export default RedisService;
