interface PrincipalSyncAttributeMap_Base extends WebEntity {
  allowedsyncdirection?: number | null;
  attributecrmdisplayname?: string | null;
  attributecrmname?: string | null;
  attributeexchangedisplayname?: string | null;
  attributeexchangename?: string | null;
  computedproperties?: string | null;
  defaultsyncdirection?: principalsyncattributemapping_syncdirection | null;
  entitytypecode?: string | null;
  iscomputed?: boolean | null;
  mappingname?: string | null;
  principalid?: string | null;
  principalsyncattributemapid?: string | null;
  syncdirection?: principalsyncattributemapping_syncdirection | null;
  versionnumber?: number | null;
}
interface PrincipalSyncAttributeMap_Relationships {
}
interface PrincipalSyncAttributeMap extends PrincipalSyncAttributeMap_Base, PrincipalSyncAttributeMap_Relationships {
}
interface PrincipalSyncAttributeMap_Create extends PrincipalSyncAttributeMap {
}
interface PrincipalSyncAttributeMap_Update extends PrincipalSyncAttributeMap {
}
interface PrincipalSyncAttributeMap_Select {
  allowedsyncdirection: WebAttribute<PrincipalSyncAttributeMap_Select, { allowedsyncdirection: number | null }, {  }>;
  attributecrmdisplayname: WebAttribute<PrincipalSyncAttributeMap_Select, { attributecrmdisplayname: string | null }, {  }>;
  attributecrmname: WebAttribute<PrincipalSyncAttributeMap_Select, { attributecrmname: string | null }, {  }>;
  attributeexchangedisplayname: WebAttribute<PrincipalSyncAttributeMap_Select, { attributeexchangedisplayname: string | null }, {  }>;
  attributeexchangename: WebAttribute<PrincipalSyncAttributeMap_Select, { attributeexchangename: string | null }, {  }>;
  computedproperties: WebAttribute<PrincipalSyncAttributeMap_Select, { computedproperties: string | null }, {  }>;
  defaultsyncdirection: WebAttribute<PrincipalSyncAttributeMap_Select, { defaultsyncdirection: principalsyncattributemapping_syncdirection | null }, { defaultsyncdirection_formatted?: string }>;
  entitytypecode: WebAttribute<PrincipalSyncAttributeMap_Select, { entitytypecode: string | null }, {  }>;
  iscomputed: WebAttribute<PrincipalSyncAttributeMap_Select, { iscomputed: boolean | null }, {  }>;
  mappingname: WebAttribute<PrincipalSyncAttributeMap_Select, { mappingname: string | null }, {  }>;
  organizationid_guid: WebAttribute<PrincipalSyncAttributeMap_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  parentprincipalsyncattributemappingid_guid: WebAttribute<PrincipalSyncAttributeMap_Select, { parentprincipalsyncattributemappingid_guid: string | null }, { parentprincipalsyncattributemappingid_formatted?: string }>;
  principalid: WebAttribute<PrincipalSyncAttributeMap_Select, { principalid: string | null }, {  }>;
  principalsyncattributemapid: WebAttribute<PrincipalSyncAttributeMap_Select, { principalsyncattributemapid: string | null }, {  }>;
  syncdirection: WebAttribute<PrincipalSyncAttributeMap_Select, { syncdirection: principalsyncattributemapping_syncdirection | null }, { syncdirection_formatted?: string }>;
  versionnumber: WebAttribute<PrincipalSyncAttributeMap_Select, { versionnumber: number | null }, {  }>;
}
interface PrincipalSyncAttributeMap_Filter {
  allowedsyncdirection: number;
  attributecrmdisplayname: string;
  attributecrmname: string;
  attributeexchangedisplayname: string;
  attributeexchangename: string;
  computedproperties: string;
  defaultsyncdirection: principalsyncattributemapping_syncdirection;
  entitytypecode: string;
  iscomputed: boolean;
  mappingname: string;
  organizationid_guid: XQW.Guid;
  parentprincipalsyncattributemappingid_guid: XQW.Guid;
  principalid: XQW.Guid;
  principalsyncattributemapid: XQW.Guid;
  syncdirection: principalsyncattributemapping_syncdirection;
  versionnumber: number;
}
interface PrincipalSyncAttributeMap_Expand {
  organizationid: WebExpand<PrincipalSyncAttributeMap_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface PrincipalSyncAttributeMap_FormattedResult {
  defaultsyncdirection_formatted?: string;
  organizationid_formatted?: string;
  parentprincipalsyncattributemappingid_formatted?: string;
  syncdirection_formatted?: string;
}
interface PrincipalSyncAttributeMap_Result extends PrincipalSyncAttributeMap_Base, PrincipalSyncAttributeMap_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  parentprincipalsyncattributemappingid_guid: string | null;
}
interface PrincipalSyncAttributeMap_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface PrincipalSyncAttributeMap_RelatedMany {
}
interface WebEntitiesRetrieve {
  principalsyncattributemaps: WebMappingRetrieve<PrincipalSyncAttributeMap_Select,PrincipalSyncAttributeMap_Expand,PrincipalSyncAttributeMap_Filter,PrincipalSyncAttributeMap_Fixed,PrincipalSyncAttributeMap_Result,PrincipalSyncAttributeMap_FormattedResult>;
}
interface WebEntitiesRelated {
  principalsyncattributemaps: WebMappingRelated<PrincipalSyncAttributeMap_RelatedOne,PrincipalSyncAttributeMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  principalsyncattributemaps: WebMappingCUDA<PrincipalSyncAttributeMap_Create,PrincipalSyncAttributeMap_Update,PrincipalSyncAttributeMap_Select>;
}
