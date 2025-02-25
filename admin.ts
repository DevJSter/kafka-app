import { kafka } from './client';
import { Kafka, Admin } from 'kafkajs';

async function init() {
  const admin: Admin = kafka.admin();
  console.log('Admin connecting...');
  await admin.connect();
  console.log('Admin Connection Success...');

  console.log('Creating Topic [rider-updates]');
  await admin.createTopics({
    topics: [
      {
        topic: 'rider-updates',
        numPartitions: 2,
      },
    ],
  });
  console.log('Topic Created Success [rider-updates]');

  console.log('Disconnecting Admin...');
  await admin.disconnect();
}

init();
