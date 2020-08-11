import { HttpClientSpy } from '../interfaces/http-client-spy.interface';

export const getHttpClientSpy = (): HttpClientSpy => jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
