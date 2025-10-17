import { teamMembers, type TeamCategory, type TeamMember } from './generated/team-data';

export type { TeamCategory, TeamMember };
export { teamMembers };

export const orderedCategories: TeamCategory[] = [
  'Medici',
  'Tehnicieni dentari',
  'Asistenti medicali',
  'Management & suport',
];

