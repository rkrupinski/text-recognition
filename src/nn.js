import { Architect, Trainer } from 'synaptic';

const network = new Architect.Perceptron(100, 20 /* YOLO */, 10);

const trainer = new Trainer(network);

const train = trainer.trainAsync.bind(trainer);
const test = network.activate.bind(network);

export { train, test };
