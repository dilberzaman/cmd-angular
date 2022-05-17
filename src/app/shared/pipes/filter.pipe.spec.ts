import { FilterPipe } from './filter.pipe';
describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('search filter', () => {
    let patient: any[] = [{ name: 'Ramesh' },
    { name: 'Kotesh' }, { name: 'Umesh' }];

    expect(pipe.transform(patient,'mes'))
    .toEqual([{ name: 'Ramesh' }, { name: 'Umesh' }]);

    expect(pipe.transform(patient,''))
    .toEqual([{ name: 'Ramesh' },
    { name: 'Kotesh' }, { name: 'Umesh' }]);
  });
});