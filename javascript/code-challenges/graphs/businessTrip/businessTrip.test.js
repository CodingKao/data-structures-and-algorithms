const { Graph } = require('../graph/graph');
const { businessTrip, createBusinessTrip } = require('../businessTrip/businessTrip');

describe('Graph', () => {
  it('can initialize', () => {
    const graph = createBusinessTrip();

    expect(graph.size()).toEqual(6);
    expect(businessTrip(graph, ['Pandora', 'Metroville'])).toEqual('$82');
  });
});
