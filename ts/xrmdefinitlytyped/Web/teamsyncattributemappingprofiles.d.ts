interface TeamSyncAttributeMappingProfiles_Base extends WebEntity {
  syncattributemappingprofileid?: string | null;
  teamid?: string | null;
  teamsyncattributemappingprofileid?: string | null;
  versionnumber?: number | null;
}
interface TeamSyncAttributeMappingProfiles_Relationships {
  teamsyncattributemappingprofiles_association?: SyncAttributeMappingProfile_Result[] | null;
}
interface TeamSyncAttributeMappingProfiles extends TeamSyncAttributeMappingProfiles_Base, TeamSyncAttributeMappingProfiles_Relationships {
}
interface TeamSyncAttributeMappingProfiles_Create extends TeamSyncAttributeMappingProfiles {
}
interface TeamSyncAttributeMappingProfiles_Update extends TeamSyncAttributeMappingProfiles {
}
interface TeamSyncAttributeMappingProfiles_Select {
  syncattributemappingprofileid: WebAttribute<TeamSyncAttributeMappingProfiles_Select, { syncattributemappingprofileid: string | null }, {  }>;
  teamid: WebAttribute<TeamSyncAttributeMappingProfiles_Select, { teamid: string | null }, {  }>;
  teamsyncattributemappingprofileid: WebAttribute<TeamSyncAttributeMappingProfiles_Select, { teamsyncattributemappingprofileid: string | null }, {  }>;
  versionnumber: WebAttribute<TeamSyncAttributeMappingProfiles_Select, { versionnumber: number | null }, {  }>;
}
interface TeamSyncAttributeMappingProfiles_Filter {
  syncattributemappingprofileid: XQW.Guid;
  teamid: XQW.Guid;
  teamsyncattributemappingprofileid: XQW.Guid;
  versionnumber: number;
}
interface TeamSyncAttributeMappingProfiles_Expand {
  teamsyncattributemappingprofiles_association: WebExpand<TeamSyncAttributeMappingProfiles_Expand, SyncAttributeMappingProfile_Select, SyncAttributeMappingProfile_Filter, { teamsyncattributemappingprofiles_association: SyncAttributeMappingProfile_Result[] }>;
}
interface TeamSyncAttributeMappingProfiles_FormattedResult {
}
interface TeamSyncAttributeMappingProfiles_Result extends TeamSyncAttributeMappingProfiles_Base, TeamSyncAttributeMappingProfiles_Relationships {
  "@odata.etag": string;
}
interface TeamSyncAttributeMappingProfiles_RelatedOne {
}
interface TeamSyncAttributeMappingProfiles_RelatedMany {
  teamsyncattributemappingprofiles_association: WebMappingRetrieve<SyncAttributeMappingProfile_Select,SyncAttributeMappingProfile_Expand,SyncAttributeMappingProfile_Filter,SyncAttributeMappingProfile_Fixed,SyncAttributeMappingProfile_Result,SyncAttributeMappingProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  teamsyncattributemappingprofilescollection: WebMappingRetrieve<TeamSyncAttributeMappingProfiles_Select,TeamSyncAttributeMappingProfiles_Expand,TeamSyncAttributeMappingProfiles_Filter,TeamSyncAttributeMappingProfiles_Fixed,TeamSyncAttributeMappingProfiles_Result,TeamSyncAttributeMappingProfiles_FormattedResult>;
}
interface WebEntitiesRelated {
  teamsyncattributemappingprofilescollection: WebMappingRelated<TeamSyncAttributeMappingProfiles_RelatedOne,TeamSyncAttributeMappingProfiles_RelatedMany>;
}
interface WebEntitiesCUDA {
  teamsyncattributemappingprofilescollection: WebMappingCUDA<TeamSyncAttributeMappingProfiles_Create,TeamSyncAttributeMappingProfiles_Update,TeamSyncAttributeMappingProfiles_Select>;
}
