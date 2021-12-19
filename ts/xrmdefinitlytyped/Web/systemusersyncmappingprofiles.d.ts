interface SystemUserSyncMappingProfiles_Base extends WebEntity {
  syncattributemappingprofileid?: string | null;
  systemuserid?: string | null;
  systemusersyncmappingprofileid?: string | null;
  versionnumber?: number | null;
}
interface SystemUserSyncMappingProfiles_Relationships {
  systemusersyncmappingprofiles_association?: SyncAttributeMappingProfile_Result[] | null;
}
interface SystemUserSyncMappingProfiles extends SystemUserSyncMappingProfiles_Base, SystemUserSyncMappingProfiles_Relationships {
}
interface SystemUserSyncMappingProfiles_Create extends SystemUserSyncMappingProfiles {
}
interface SystemUserSyncMappingProfiles_Update extends SystemUserSyncMappingProfiles {
}
interface SystemUserSyncMappingProfiles_Select {
  syncattributemappingprofileid: WebAttribute<SystemUserSyncMappingProfiles_Select, { syncattributemappingprofileid: string | null }, {  }>;
  systemuserid: WebAttribute<SystemUserSyncMappingProfiles_Select, { systemuserid: string | null }, {  }>;
  systemusersyncmappingprofileid: WebAttribute<SystemUserSyncMappingProfiles_Select, { systemusersyncmappingprofileid: string | null }, {  }>;
  versionnumber: WebAttribute<SystemUserSyncMappingProfiles_Select, { versionnumber: number | null }, {  }>;
}
interface SystemUserSyncMappingProfiles_Filter {
  syncattributemappingprofileid: XQW.Guid;
  systemuserid: XQW.Guid;
  systemusersyncmappingprofileid: XQW.Guid;
  versionnumber: number;
}
interface SystemUserSyncMappingProfiles_Expand {
  systemusersyncmappingprofiles_association: WebExpand<SystemUserSyncMappingProfiles_Expand, SyncAttributeMappingProfile_Select, SyncAttributeMappingProfile_Filter, { systemusersyncmappingprofiles_association: SyncAttributeMappingProfile_Result[] }>;
}
interface SystemUserSyncMappingProfiles_FormattedResult {
}
interface SystemUserSyncMappingProfiles_Result extends SystemUserSyncMappingProfiles_Base, SystemUserSyncMappingProfiles_Relationships {
  "@odata.etag": string;
}
interface SystemUserSyncMappingProfiles_RelatedOne {
}
interface SystemUserSyncMappingProfiles_RelatedMany {
  systemusersyncmappingprofiles_association: WebMappingRetrieve<SyncAttributeMappingProfile_Select,SyncAttributeMappingProfile_Expand,SyncAttributeMappingProfile_Filter,SyncAttributeMappingProfile_Fixed,SyncAttributeMappingProfile_Result,SyncAttributeMappingProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  systemusersyncmappingprofilescollection: WebMappingRetrieve<SystemUserSyncMappingProfiles_Select,SystemUserSyncMappingProfiles_Expand,SystemUserSyncMappingProfiles_Filter,SystemUserSyncMappingProfiles_Fixed,SystemUserSyncMappingProfiles_Result,SystemUserSyncMappingProfiles_FormattedResult>;
}
interface WebEntitiesRelated {
  systemusersyncmappingprofilescollection: WebMappingRelated<SystemUserSyncMappingProfiles_RelatedOne,SystemUserSyncMappingProfiles_RelatedMany>;
}
interface WebEntitiesCUDA {
  systemusersyncmappingprofilescollection: WebMappingCUDA<SystemUserSyncMappingProfiles_Create,SystemUserSyncMappingProfiles_Update,SystemUserSyncMappingProfiles_Select>;
}
