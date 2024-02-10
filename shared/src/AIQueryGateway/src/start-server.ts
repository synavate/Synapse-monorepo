#!/usr/bin/env node

import { serve } from '@hono/node-server'

import app from './index'

// Extract the port number from the command line arguments
const defaultPort = 8787;
const args = process.argv.slice(2);
const portArg = args.find(arg => arg.startsWith('--port='));
const port = portArg ? parseInt(portArg.split('=')[1]) : defaultPort;
const host = environment === 'dev' || environment === 'production' ? 'localhost' : 'internaldns'; // @TODO HAYDN FIX



serve({
  fetch: app.fetch,
  port: port,
})

console.log(`Your AI Gateway is now running on http://${host}:${port} 🚀`)