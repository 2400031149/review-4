import { createServer, build, preview } from 'vite';

async function run() {
  const cmd = process.argv[2] || 'dev';

  try {
    if (cmd === 'dev') {
      const server = await createServer();
      await server.listen();
      server.printUrls();
    } else if (cmd === 'build') {
      await build();
      console.log('Build complete');
    } else if (cmd === 'preview') {
      const server = await preview({ port: 5173 });
      await server.listen();
      server.printUrls();
    } else {
      console.error('Unknown command:', cmd);
      console.error('Usage: node vite.js [dev|build|preview]');
      process.exit(1);
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
