export interface HttpClientSpy {
  get: jasmine.Spy;
  post: jasmine.Spy;
  put: jasmine.Spy;
  delete: jasmine.Spy;
}
