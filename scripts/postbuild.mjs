import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = new URL('../dist/', import.meta.url).pathname;
const source = join(outputDirectory, 'index.html');
const routes = [
  'research',
  'stories',
  'stories/easecation',
  'stories/first-robotics',
  'stories/robomaster',
  'stories/robotics-lab-infrastructure',
  'stories/kiwi-codeshin',
  'stories/earlier-projects',
];

for (const route of routes) {
  const routeDirectory = join(outputDirectory, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(source, join(routeDirectory, 'index.html'));
}

await copyFile(source, join(outputDirectory, '404.html'));
