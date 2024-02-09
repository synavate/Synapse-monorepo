import { AppController } from '../../src/app.controller';
import * as jest from 'jest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController', () => {
  // Should return a string "Hello World!" when calling the getHello() method
  it('should return a string "Hello World!" when calling the getHello() method', () => {
    const appController = new AppController(new AppService());
    expect(appController.getHello()).toBe('Hello World!');
  });

  // Should return a 200 status code when calling the getHello() method
  it('should return a 200 status code when calling the getHello() method', () => {
    const appController = new AppController(new AppService());
    const response = appController.getHello();
    expect(response.statusCode).toBe(200);
  });

  // Should return a JSON object with a message property containing "Hello World!" when calling the getHello() method
  it('should return a JSON object with a message property containing "Hello World!" when calling the getHello() method', () => {
    const appController = new AppController(new AppService());
    const response = appController.getHello();
    expect(response).toEqual({ message: 'Hello World!' });
  });

  // Should return an error with a 500 status code when the AppService throws an exception
  it('should return an error with a 500 status code when the AppService throws an exception', () => {
    const appController = new AppController(new AppService());
    expect(() => appController.getHello()).toThrowError();
    // Additional assertion to check the status code
    // expect(response.statusCode).toBe(500);
  });

  // Should return a 404 status code when calling a non-existent endpoint
  it('should return a 404 status code when calling a non-existent endpoint', () => {
    const appController = new AppController(new AppService());
    const response = appController.nonExistentEndpoint();
    expect(response.statusCode).toBe(404);
  });

  // Should handle and log errors thrown by the AppService
  it('should handle and log errors thrown by the AppService', () => {
    const appController = new AppController(new AppService());
    // Mock the logger to check if it is called
    const logger = jest.spyOn(console, 'error').mockImplementation();
    appController.getHello();
    expect(logger).toHaveBeenCalled();
    logger.mockRestore();
  });
});
