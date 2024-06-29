import { kafka } from './client';
import { Kafka, Consumer, EachMessagePayload } from 'kafkajs';

const group: string = process.argv[2];

async function init() {
  const consumer: Consumer = kafka.consumer({ groupId: group });
  await consumer.connect();

  await consumer.subscribe({ topics: ['rider-updates'], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      console.log(
        `${group}: [${topic}]: PART:${partition}:`,
        message.value?.toString()
      );
    },
  });
}

init();
