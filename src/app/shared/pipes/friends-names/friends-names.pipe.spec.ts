import { TestBed } from '@angular/core/testing';
import { Friend } from '../../models/friends.model';
import { FriendsNamesPipe } from './friends-names.pipe';

describe('FriendsNamesPipe', () => {

  let pipe: FriendsNamesPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [FriendsNamesPipe]});
    pipe = TestBed.inject(FriendsNamesPipe);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {

    it('transforms list of names to string', () => {
      const friends = [
        {name: 'test'},
        {name: 'test 2'}
      ] as Array<Friend>;

      const result = pipe.transform(friends);
      expect(result).toEqual('test, test 2');
    });

  });

});
