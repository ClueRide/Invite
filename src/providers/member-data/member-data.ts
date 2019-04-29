import {Injectable} from '@angular/core';
import {AutoCompleteDataProvider} from "../../components/auto-complete/auto-complete-data-provider.service";
import {MemberService} from "front-end-common";

/**
 * Provides instances of Member that match the given term.
 */
@Injectable()
export class MemberDataProvider implements AutoCompleteDataProvider {

  labelAttribute: string;

  constructor(
    private memberService: MemberService,
  ) {
    this.labelAttribute = 'displayName';
  }

  getResults(term: any): any {
    return this.memberService.fetchMatchingMembers(term);
  }

}
