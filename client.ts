import { Kafka } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['<PRIVATE_IP>:9092'],
});
