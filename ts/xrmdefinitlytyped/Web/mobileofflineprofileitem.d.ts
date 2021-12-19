interface MobileOfflineProfileItem_Base extends WebEntity {
  canbefollowed?: boolean | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  entityobjecttypecode?: number | null;
  getrelatedentityrecords?: boolean | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  isvalidated?: boolean | null;
  isvisibleingrid?: boolean | null;
  mobileofflineprofileitemid?: string | null;
  mobileofflineprofileitemidunique?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  processid?: string | null;
  profileitementityfilter?: string | null;
  publishedon?: Date | null;
  recorddistributioncriteria?: mobileofflineprofileitem_recorddistributioncriteria | null;
  recordsownedbyme?: boolean | null;
  recordsownedbymybusinessunit?: boolean | null;
  recordsownedbymyteam?: boolean | null;
  relationshipdata?: string | null;
  selectedentitymetadata?: string | null;
  selectedentitytypecode?: string | null;
  solutionid?: string | null;
  stageid?: string | null;
  supportingsolutionid?: string | null;
  syncintervalinminutes?: number | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
  viewquery?: string | null;
}
interface MobileOfflineProfileItem_Relationships {
  MobileOfflineProfileItem_MobileOfflineProfileItemAssociation?: MobileOfflineProfileItemAssociation_Result[] | null;
}
interface MobileOfflineProfileItem extends MobileOfflineProfileItem_Base, MobileOfflineProfileItem_Relationships {
  profileitemrule_bind$savedqueries?: string | null;
}
interface MobileOfflineProfileItem_Create extends MobileOfflineProfileItem {
  regardingobjectid_bind$mobileofflineprofiles?: string | null;
}
interface MobileOfflineProfileItem_Update extends MobileOfflineProfileItem {
}
interface MobileOfflineProfileItem_Select {
  canbefollowed: WebAttribute<MobileOfflineProfileItem_Select, { canbefollowed: boolean | null }, {  }>;
  componentstate: WebAttribute<MobileOfflineProfileItem_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<MobileOfflineProfileItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<MobileOfflineProfileItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<MobileOfflineProfileItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  entityobjecttypecode: WebAttribute<MobileOfflineProfileItem_Select, { entityobjecttypecode: number | null }, {  }>;
  getrelatedentityrecords: WebAttribute<MobileOfflineProfileItem_Select, { getrelatedentityrecords: boolean | null }, {  }>;
  introducedversion: WebAttribute<MobileOfflineProfileItem_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<MobileOfflineProfileItem_Select, { ismanaged: boolean | null }, {  }>;
  isvalidated: WebAttribute<MobileOfflineProfileItem_Select, { isvalidated: boolean | null }, {  }>;
  isvisibleingrid: WebAttribute<MobileOfflineProfileItem_Select, { isvisibleingrid: boolean | null }, {  }>;
  mobileofflineprofileitemid: WebAttribute<MobileOfflineProfileItem_Select, { mobileofflineprofileitemid: string | null }, {  }>;
  mobileofflineprofileitemidunique: WebAttribute<MobileOfflineProfileItem_Select, { mobileofflineprofileitemidunique: string | null }, {  }>;
  modifiedby_guid: WebAttribute<MobileOfflineProfileItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<MobileOfflineProfileItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<MobileOfflineProfileItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<MobileOfflineProfileItem_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<MobileOfflineProfileItem_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<MobileOfflineProfileItem_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  processid: WebAttribute<MobileOfflineProfileItem_Select, { processid: string | null }, {  }>;
  profileitementityfilter: WebAttribute<MobileOfflineProfileItem_Select, { profileitementityfilter: string | null }, {  }>;
  profileitemrule_guid: WebAttribute<MobileOfflineProfileItem_Select, { profileitemrule_guid: string | null }, { profileitemrule_formatted?: string }>;
  publishedon: WebAttribute<MobileOfflineProfileItem_Select, { publishedon: Date | null }, { publishedon_formatted?: string }>;
  recorddistributioncriteria: WebAttribute<MobileOfflineProfileItem_Select, { recorddistributioncriteria: mobileofflineprofileitem_recorddistributioncriteria | null }, { recorddistributioncriteria_formatted?: string }>;
  recordsownedbyme: WebAttribute<MobileOfflineProfileItem_Select, { recordsownedbyme: boolean | null }, {  }>;
  recordsownedbymybusinessunit: WebAttribute<MobileOfflineProfileItem_Select, { recordsownedbymybusinessunit: boolean | null }, {  }>;
  recordsownedbymyteam: WebAttribute<MobileOfflineProfileItem_Select, { recordsownedbymyteam: boolean | null }, {  }>;
  regardingobjectid_guid: WebAttribute<MobileOfflineProfileItem_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  relationshipdata: WebAttribute<MobileOfflineProfileItem_Select, { relationshipdata: string | null }, {  }>;
  selectedentitymetadata: WebAttribute<MobileOfflineProfileItem_Select, { selectedentitymetadata: string | null }, {  }>;
  selectedentitytypecode: WebAttribute<MobileOfflineProfileItem_Select, { selectedentitytypecode: string | null }, {  }>;
  solutionid: WebAttribute<MobileOfflineProfileItem_Select, { solutionid: string | null }, {  }>;
  stageid: WebAttribute<MobileOfflineProfileItem_Select, { stageid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<MobileOfflineProfileItem_Select, { supportingsolutionid: string | null }, {  }>;
  syncintervalinminutes: WebAttribute<MobileOfflineProfileItem_Select, { syncintervalinminutes: number | null }, {  }>;
  traversedpath: WebAttribute<MobileOfflineProfileItem_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<MobileOfflineProfileItem_Select, { versionnumber: number | null }, {  }>;
  viewquery: WebAttribute<MobileOfflineProfileItem_Select, { viewquery: string | null }, {  }>;
}
interface MobileOfflineProfileItem_Filter {
  canbefollowed: boolean;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  entityobjecttypecode: number;
  getrelatedentityrecords: boolean;
  introducedversion: string;
  ismanaged: boolean;
  isvalidated: boolean;
  isvisibleingrid: boolean;
  mobileofflineprofileitemid: XQW.Guid;
  mobileofflineprofileitemidunique: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  processid: XQW.Guid;
  profileitementityfilter: string;
  profileitemrule_guid: XQW.Guid;
  publishedon: Date;
  recorddistributioncriteria: mobileofflineprofileitem_recorddistributioncriteria;
  recordsownedbyme: boolean;
  recordsownedbymybusinessunit: boolean;
  recordsownedbymyteam: boolean;
  regardingobjectid_guid: XQW.Guid;
  relationshipdata: string;
  selectedentitymetadata: string;
  selectedentitytypecode: string;
  solutionid: XQW.Guid;
  stageid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  syncintervalinminutes: number;
  traversedpath: string;
  versionnumber: number;
  viewquery: string;
}
interface MobileOfflineProfileItem_Expand {
  MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: WebExpand<MobileOfflineProfileItem_Expand, MobileOfflineProfileItemAssociation_Select, MobileOfflineProfileItemAssociation_Filter, { MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: MobileOfflineProfileItemAssociation_Result[] }>;
  createdby: WebExpand<MobileOfflineProfileItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<MobileOfflineProfileItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<MobileOfflineProfileItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<MobileOfflineProfileItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<MobileOfflineProfileItem_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  profileitemrule: WebExpand<MobileOfflineProfileItem_Expand, SavedQuery_Select, SavedQuery_Filter, { profileitemrule: SavedQuery_Result }>;
  regardingobjectid: WebExpand<MobileOfflineProfileItem_Expand, MobileOfflineProfile_Select, MobileOfflineProfile_Filter, { regardingobjectid: MobileOfflineProfile_Result }>;
}
interface MobileOfflineProfileItem_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  profileitemrule_formatted?: string;
  publishedon_formatted?: string;
  recorddistributioncriteria_formatted?: string;
  regardingobjectid_formatted?: string;
}
interface MobileOfflineProfileItem_Result extends MobileOfflineProfileItem_Base, MobileOfflineProfileItem_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  profileitemrule_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface MobileOfflineProfileItem_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  profileitemrule: WebMappingRetrieve<SavedQuery_Select,SavedQuery_Expand,SavedQuery_Filter,SavedQuery_Fixed,SavedQuery_Result,SavedQuery_FormattedResult>;
  regardingobjectid: WebMappingRetrieve<MobileOfflineProfile_Select,MobileOfflineProfile_Expand,MobileOfflineProfile_Filter,MobileOfflineProfile_Fixed,MobileOfflineProfile_Result,MobileOfflineProfile_FormattedResult>;
}
interface MobileOfflineProfileItem_RelatedMany {
  MobileOfflineProfileItem_MobileOfflineProfileItemAssociation: WebMappingRetrieve<MobileOfflineProfileItemAssociation_Select,MobileOfflineProfileItemAssociation_Expand,MobileOfflineProfileItemAssociation_Filter,MobileOfflineProfileItemAssociation_Fixed,MobileOfflineProfileItemAssociation_Result,MobileOfflineProfileItemAssociation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  mobileofflineprofileitems: WebMappingRetrieve<MobileOfflineProfileItem_Select,MobileOfflineProfileItem_Expand,MobileOfflineProfileItem_Filter,MobileOfflineProfileItem_Fixed,MobileOfflineProfileItem_Result,MobileOfflineProfileItem_FormattedResult>;
}
interface WebEntitiesRelated {
  mobileofflineprofileitems: WebMappingRelated<MobileOfflineProfileItem_RelatedOne,MobileOfflineProfileItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  mobileofflineprofileitems: WebMappingCUDA<MobileOfflineProfileItem_Create,MobileOfflineProfileItem_Update,MobileOfflineProfileItem_Select>;
}
