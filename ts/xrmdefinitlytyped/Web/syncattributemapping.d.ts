interface SyncAttributeMapping_Base extends WebEntity {
  allowedsyncdirection?: number | null;
  attributecrmname?: string | null;
  attributeexchangename?: string | null;
  componentstate?: componentstate | null;
  computedproperties?: string | null;
  defaultsyncdirection?: syncattributemapping_syncdirection | null;
  entitytypecode?: string | null;
  iscomputed?: boolean | null;
  ismanaged?: boolean | null;
  mappingname?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  syncattributemappingid?: string | null;
  syncattributemappingidunique?: string | null;
  syncdirection?: syncattributemapping_syncdirection | null;
}
interface SyncAttributeMapping_Relationships {
}
interface SyncAttributeMapping extends SyncAttributeMapping_Base, SyncAttributeMapping_Relationships {
}
interface SyncAttributeMapping_Create extends SyncAttributeMapping {
  syncattributemappingprofileid_bind$syncattributemappingprofiles?: string | null;
}
interface SyncAttributeMapping_Update extends SyncAttributeMapping {
}
interface SyncAttributeMapping_Select {
  allowedsyncdirection: WebAttribute<SyncAttributeMapping_Select, { allowedsyncdirection: number | null }, {  }>;
  attributecrmname: WebAttribute<SyncAttributeMapping_Select, { attributecrmname: string | null }, {  }>;
  attributeexchangename: WebAttribute<SyncAttributeMapping_Select, { attributeexchangename: string | null }, {  }>;
  componentstate: WebAttribute<SyncAttributeMapping_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  computedproperties: WebAttribute<SyncAttributeMapping_Select, { computedproperties: string | null }, {  }>;
  defaultsyncdirection: WebAttribute<SyncAttributeMapping_Select, { defaultsyncdirection: syncattributemapping_syncdirection | null }, { defaultsyncdirection_formatted?: string }>;
  entitytypecode: WebAttribute<SyncAttributeMapping_Select, { entitytypecode: string | null }, {  }>;
  iscomputed: WebAttribute<SyncAttributeMapping_Select, { iscomputed: boolean | null }, {  }>;
  ismanaged: WebAttribute<SyncAttributeMapping_Select, { ismanaged: boolean | null }, {  }>;
  mappingname: WebAttribute<SyncAttributeMapping_Select, { mappingname: string | null }, {  }>;
  organizationid_guid: WebAttribute<SyncAttributeMapping_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<SyncAttributeMapping_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentsyncattributemappingid_guid: WebAttribute<SyncAttributeMapping_Select, { parentsyncattributemappingid_guid: string | null }, { parentsyncattributemappingid_formatted?: string }>;
  solutionid: WebAttribute<SyncAttributeMapping_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SyncAttributeMapping_Select, { supportingsolutionid: string | null }, {  }>;
  syncattributemappingid: WebAttribute<SyncAttributeMapping_Select, { syncattributemappingid: string | null }, {  }>;
  syncattributemappingidunique: WebAttribute<SyncAttributeMapping_Select, { syncattributemappingidunique: string | null }, {  }>;
  syncattributemappingprofileid_guid: WebAttribute<SyncAttributeMapping_Select, { syncattributemappingprofileid_guid: string | null }, { syncattributemappingprofileid_formatted?: string }>;
  syncdirection: WebAttribute<SyncAttributeMapping_Select, { syncdirection: syncattributemapping_syncdirection | null }, { syncdirection_formatted?: string }>;
}
interface SyncAttributeMapping_Filter {
  allowedsyncdirection: number;
  attributecrmname: string;
  attributeexchangename: string;
  componentstate: componentstate;
  computedproperties: string;
  defaultsyncdirection: syncattributemapping_syncdirection;
  entitytypecode: string;
  iscomputed: boolean;
  ismanaged: boolean;
  mappingname: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  parentsyncattributemappingid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  syncattributemappingid: XQW.Guid;
  syncattributemappingidunique: XQW.Guid;
  syncattributemappingprofileid_guid: XQW.Guid;
  syncdirection: syncattributemapping_syncdirection;
}
interface SyncAttributeMapping_Expand {
  syncattributemappingprofileid: WebExpand<SyncAttributeMapping_Expand, SyncAttributeMappingProfile_Select, SyncAttributeMappingProfile_Filter, { syncattributemappingprofileid: SyncAttributeMappingProfile_Result }>;
}
interface SyncAttributeMapping_FormattedResult {
  componentstate_formatted?: string;
  defaultsyncdirection_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  parentsyncattributemappingid_formatted?: string;
  syncattributemappingprofileid_formatted?: string;
  syncdirection_formatted?: string;
}
interface SyncAttributeMapping_Result extends SyncAttributeMapping_Base, SyncAttributeMapping_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  parentsyncattributemappingid_guid: string | null;
  syncattributemappingprofileid_guid: string | null;
}
interface SyncAttributeMapping_RelatedOne {
  syncattributemappingprofileid: WebMappingRetrieve<SyncAttributeMappingProfile_Select,SyncAttributeMappingProfile_Expand,SyncAttributeMappingProfile_Filter,SyncAttributeMappingProfile_Fixed,SyncAttributeMappingProfile_Result,SyncAttributeMappingProfile_FormattedResult>;
}
interface SyncAttributeMapping_RelatedMany {
}
interface WebEntitiesRetrieve {
  syncattributemappings: WebMappingRetrieve<SyncAttributeMapping_Select,SyncAttributeMapping_Expand,SyncAttributeMapping_Filter,SyncAttributeMapping_Fixed,SyncAttributeMapping_Result,SyncAttributeMapping_FormattedResult>;
}
interface WebEntitiesRelated {
  syncattributemappings: WebMappingRelated<SyncAttributeMapping_RelatedOne,SyncAttributeMapping_RelatedMany>;
}
interface WebEntitiesCUDA {
  syncattributemappings: WebMappingCUDA<SyncAttributeMapping_Create,SyncAttributeMapping_Update,SyncAttributeMapping_Select>;
}
