// @flow

import type {AftermathStateType} from './missions/aftermath';
import type {AppStateType} from './app';
import type {ArmedAndOperationalStateType} from './missions/armedAndOperational';
import type {BreakingPointStateType} from './missions/breakingPoint';
import type {BrushfireStateType} from './missions/brushfire';
import type {CanyonRunStateType} from './missions/canyonRun';
import type {CapturedStateType} from './missions/captured';
import type {ChainOfCommandStateType} from './missions/chainOfCommand';
import type {DarkObsessionStateType} from './missions/darkObsession';
import type {DesperateHourStateType} from './missions/desperateHour';
import type {DrawnInStateType} from './missions/drawnIn';
import type {EventsStateType} from './events';
import type {FireInTheSkyStateType} from './missions/fireInTheSky';
import type {FlySoloStateType} from './missions/flySolo';
import type {ForestAmbushStateType} from './missions/forestAmbush';
import type {FriendsOfOldStateType} from './missions/friendsOfOld';
import type {GenerousDonationsStateType} from './missions/generousDonations';
import type {HighMoonStateType} from './missions/highMoon';
import type {HomecomingStateType} from './missions/homecoming';
import type {HuntedDownStateType} from './missions/huntedDown';
import type {ImperialHospitalityStateType} from './missions/imperialHospitality';
import type {ImperialsStateType} from './imperials';
import type {ImpoundedStateType} from './missions/impounded';
import type {IncomingStateType} from './missions/incoming';
import type {IndebtedStateType} from './missions/indebted';
import type {InfiltratedStateType} from './missions/infiltrated';
import type {LastStandStateType} from './missions/lastStand';
import type {LooseCannonStateType} from './missions/looseCannon';
import type {MeansOfProductionStateType} from './missions/meansOfProduction';
import type {MissionStateType} from './mission';
import type {ModalStateType} from './modal';
import type {PastLifeEnemiesStateType} from './missions/pastLifeEnemies';
import type {RebelsStateType} from './rebels';
import type {ShadyDealingsStateType} from './missions/shadyDealings';
import type {SympathyForTheRebellionStateType} from './missions/sympathyForTheRebellion';
import type {TargetOfOpportunityStateType} from './missions/targetOfOpportunity';
import type {TemptationStateType} from './missions/temptation';
import type {TheSourceStateType} from './missions/theSource';
import type {TheSpiceJobStateType} from './missions/theSpiceJob';
import type {UnderSiegeStateType} from './missions/underSiege';
import type {VipersDenStateType} from './missions/vipersDen';
import type {WantedStateType} from './missions/wanted';

export type StateType = {
  aftermath: AftermathStateType,
  app: AppStateType,
  armedAndOperational: ArmedAndOperationalStateType,
  breakingPoint: BreakingPointStateType,
  brushfire: BrushfireStateType,
  canyonRun: CanyonRunStateType,
  captured: CapturedStateType,
  chainOfCommand: ChainOfCommandStateType,
  darkObsession: DarkObsessionStateType,
  desperateHour: DesperateHourStateType,
  drawnIn: DrawnInStateType,
  events: EventsStateType,
  fireInTheSky: FireInTheSkyStateType,
  flySolo: FlySoloStateType,
  forestAmbush: ForestAmbushStateType,
  friendsOfOld: FriendsOfOldStateType,
  generousDonations: GenerousDonationsStateType,
  highMoon: HighMoonStateType,
  homecoming: HomecomingStateType,
  huntedDown: HuntedDownStateType,
  imperialHospitality: ImperialHospitalityStateType,
  imperials: ImperialsStateType,
  impounded: ImpoundedStateType,
  incoming: IncomingStateType,
  indebted: IndebtedStateType,
  infiltrated: InfiltratedStateType,
  lastStand: LastStandStateType,
  looseCannon: LooseCannonStateType,
  meansOfProduction: MeansOfProductionStateType,
  mission: MissionStateType,
  modal: ModalStateType,
  pastLifeEnemies: PastLifeEnemiesStateType,
  rebels: RebelsStateType,
  shadyDealings: ShadyDealingsStateType,
  sympathyForTheRebellion: SympathyForTheRebellionStateType,
  targetOfOpportunity: TargetOfOpportunityStateType,
  temptation: TemptationStateType,
  theSpiceJob: TheSpiceJobStateType,
  theSource: TheSourceStateType,
  underSiege: UnderSiegeStateType,
  vipersDen: VipersDenStateType,
  wanted: WantedStateType,
};
