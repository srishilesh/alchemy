/* tslint:disable:max-classes-per-file */

import * as React from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { Address, ISchemeState, IDAOState, IProposalState } from "@daostack/client";
import Card from "components/Scheme/ContributionRewardExtRewarders/Competition/Card";
import * as css from "./Competitions.scss";

interface IProps {
  daoState: IDAOState;
  scheme: ISchemeState;
  proposals: Array<IProposalState>;
  currentAccountAddress: Address;
}

export default class CompetitionsList extends React.Component<IProps, null> {


  public render(): RenderOutput {
    const { daoState, scheme, proposals} = this.props;
    const daoAvatarAddress = daoState.address;

    return <React.Fragment>
      <BreadcrumbsItem to={`/dao/${daoAvatarAddress}/scheme/${scheme.id}/crx`}>Competitions</BreadcrumbsItem>
      <div className={css.competitionCards}>
        {
          proposals.map((proposal: IProposalState) => {
            return <Card key={proposal.id} proposalState={proposal} daoState={daoState}></Card>;
          // (<Link key={proposal.id} to={`/dao/${daoState.address}/proposal/${proposal.id}`}>{humanProposalTitle(proposal)}</Link>);
          })
        }
      </div>
    </React.Fragment>;
  }
}