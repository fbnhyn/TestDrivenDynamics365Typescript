interface MobileOfflineProfileItemAssociation_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  isvalidated?: boolean | null;
  mobileofflineprofileitemassociationid?: string | null;
  mobileofflineprofileitemassociationidunique?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  processid?: string | null;
  profileitemassociationentityfilter?: string | null;
  publishedon?: Date | null;
  relationshipdata?: string | null;
  relationshipdisplayname?: string | null;
  relationshipid?: string | null;
  relationshipname?: string | null;
  selectedrelationshipsschema?: selectedmobileofflineenabledentityrelationships | null;
  solutionid?: string | null;
  stageid?: string | null;
  supportingsolutionid?: string | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
}
interface MobileOfflineProfileItemAssociation_Relationships {
  regardingobjectid?: MobileOfflineProfileItem_Result | null;
}
interface MobileOfflineProfileItemAssociation extends MobileOfflineProfileItemAssociation_Base, MobileOfflineProfileItemAssociation_Relationships {
}
interface MobileOfflineProfileItemAssociation_Create extends MobileOfflineProfileItemAssociation {
  regardingobjectid_bind$mobileofflineprofileitems?: string | null;
}
interface MobileOfflineProfileItemAssociation_Update extends MobileOfflineProfileItemAssociation {
}
interface MobileOfflineProfileItemAssociation_Select {
  componentstate: WebAttribute<MobileOfflineProfileItemAssociation_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<MobileOfflineProfileItemAssociation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  introducedversion: WebAttribute<MobileOfflineProfileItemAssociation_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<MobileOfflineProfileItemAssociation_Select, { ismanaged: boolean | null }, {  }>;
  isvalidated: WebAttribute<MobileOfflineProfileItemAssociation_Select, { isvalidated: boolean | null }, {  }>;
  mobileofflineprofileitemassociationid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { mobileofflineprofileitemassociationid: string | null }, {  }>;
  mobileofflineprofileitemassociationidunique: WebAttribute<MobileOfflineProfileItemAssociation_Select, { mobileofflineprofileitemassociationidunique: string | null }, {  }>;
  mobileofflineprofileitemid_guid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { mobileofflineprofileitemid_guid: string | null }, { mobileofflineprofileitemid_formatted?: string }>;
  modifiedby_guid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<MobileOfflineProfileItemAssociation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<MobileOfflineProfileItemAssociation_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<MobileOfflineProfileItemAssociation_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  processid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { processid: string | null }, {  }>;
  profileitemassociationentityfilter: WebAttribute<MobileOfflineProfileItemAssociation_Select, { profileitemassociationentityfilter: string | null }, {  }>;
  publishedon: WebAttribute<MobileOfflineProfileItemAssociation_Select, { publishedon: Date | null }, { publishedon_formatted?: string }>;
  relationshipdata: WebAttribute<MobileOfflineProfileItemAssociation_Select, { relationshipdata: string | null }, {  }>;
  relationshipdisplayname: WebAttribute<MobileOfflineProfileItemAssociation_Select, { relationshipdisplayname: string | null }, {  }>;
  relationshipid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { relationshipid: string | null }, {  }>;
  relationshipname: WebAttribute<MobileOfflineProfileItemAssociation_Select, { relationshipname: string | null }, {  }>;
  selectedrelationshipsschema: WebAttribute<MobileOfflineProfileItemAssociation_Select, { selectedrelationshipsschema: selectedmobileofflineenabledentityrelationships | null }, { selectedrelationshipsschema_formatted?: string }>;
  solutionid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { solutionid: string | null }, {  }>;
  stageid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { stageid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<MobileOfflineProfileItemAssociation_Select, { supportingsolutionid: string | null }, {  }>;
  traversedpath: WebAttribute<MobileOfflineProfileItemAssociation_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<MobileOfflineProfileItemAssociation_Select, { versionnumber: number | null }, {  }>;
}
interface MobileOfflineProfileItemAssociation_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  introducedversion: string;
  ismanaged: boolean;
  isvalidated: boolean;
  mobileofflineprofileitemassociationid: XQW.Guid;
  mobileofflineprofileitemassociationidunique: XQW.Guid;
  mobileofflineprofileitemid_guid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  processid: XQW.Guid;
  profileitemassociationentityfilter: string;
  publishedon: Date;
  relationshipdata: string;
  relationshipdisplayname: string;
  relationshipid: XQW.Guid;
  relationshipname: string;
  selectedrelationshipsschema: selectedmobileofflineenabledentityrelationships;
  solutionid: XQW.Guid;
  stageid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  traversedpath: string;
  versionnumber: number;
}
interface MobileOfflineProfileItemAssociation_Expand {
  createdby: WebExpand<MobileOfflineProfileItemAssociation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<MobileOfflineProfileItemAssociation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<MobileOfflineProfileItemAssociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<MobileOfflineProfileItemAssociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<MobileOfflineProfileItemAssociation_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  regardingobjectid: WebExpand<MobileOfflineProfileItemAssociation_Expand, MobileOfflineProfileItem_Select, MobileOfflineProfileItem_Filter, { regardingobjectid: MobileOfflineProfileItem_Result }>;
}
interface MobileOfflineProfileItemAssociation_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  mobileofflineprofileitemid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  publishedon_formatted?: string;
  selectedrelationshipsschema_formatted?: string;
}
interface MobileOfflineProfileItemAssociation_Result extends MobileOfflineProfileItemAssociation_Base, MobileOfflineProfileItemAssociation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  mobileofflineprofileitemid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface MobileOfflineProfileItemAssociation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  regardingobjectid: WebMappingRetrieve<MobileOfflineProfileItem_Select,MobileOfflineProfileItem_Expand,MobileOfflineProfileItem_Filter,MobileOfflineProfileItem_Fixed,MobileOfflineProfileItem_Result,MobileOfflineProfileItem_FormattedResult>;
}
interface MobileOfflineProfileItemAssociation_RelatedMany {
}
interface WebEntitiesRetrieve {
  mobileofflineprofileitemassociations: WebMappingRetrieve<MobileOfflineProfileItemAssociation_Select,MobileOfflineProfileItemAssociation_Expand,MobileOfflineProfileItemAssociation_Filter,MobileOfflineProfileItemAssociation_Fixed,MobileOfflineProfileItemAssociation_Result,MobileOfflineProfileItemAssociation_FormattedResult>;
}
interface WebEntitiesRelated {
  mobileofflineprofileitemassociations: WebMappingRelated<MobileOfflineProfileItemAssociation_RelatedOne,MobileOfflineProfileItemAssociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  mobileofflineprofileitemassociations: WebMappingCUDA<MobileOfflineProfileItemAssociation_Create,MobileOfflineProfileItemAssociation_Update,MobileOfflineProfileItemAssociation_Select>;
}
