import express from "express";

class CommonRoutesConfig {
  app: express.Application;
  name: string;

  constructor(app: express.Application, name: string) {
    this.app = app;
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

export { CommonRoutesConfig };