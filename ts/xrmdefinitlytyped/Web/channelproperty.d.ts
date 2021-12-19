interface ChannelProperty_Base extends WebEntity {
  applicationsource?: string | null;
  channelpropertyid?: string | null;
  channelpropertyidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  datatype?: channelproperty_datatypecode | null;
  description?: string | null;
  importsequencenumber?: number | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: channelproperty_statecode | null;
  statuscode?: channelproperty_statuscode | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ChannelProperty_Relationships {
}
interface ChannelProperty extends ChannelProperty_Base, ChannelProperty_Relationships {
}
interface ChannelProperty_Create extends ChannelProperty {
  regardingobjectid_bind$channelpropertygroups?: string | null;
}
interface ChannelProperty_Update extends ChannelProperty {
}
interface ChannelProperty_Select {
  applicationsource: WebAttribute<ChannelProperty_Select, { applicationsource: string | null }, {  }>;
  channelpropertyid: WebAttribute<ChannelProperty_Select, { channelpropertyid: string | null }, {  }>;
  channelpropertyidunique: WebAttribute<ChannelProperty_Select, { channelpropertyidunique: string | null }, {  }>;
  componentstate: WebAttribute<ChannelProperty_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ChannelProperty_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ChannelProperty_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ChannelProperty_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  datatype: WebAttribute<ChannelProperty_Select, { datatype: channelproperty_datatypecode | null }, { datatype_formatted?: string }>;
  description: WebAttribute<ChannelProperty_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<ChannelProperty_Select, { importsequencenumber: number | null }, {  }>;
  ismanaged: WebAttribute<ChannelProperty_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ChannelProperty_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ChannelProperty_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ChannelProperty_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ChannelProperty_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ChannelProperty_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ChannelProperty_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<ChannelProperty_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  regardingobjectid_guid: WebAttribute<ChannelProperty_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  solutionid: WebAttribute<ChannelProperty_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<ChannelProperty_Select, { statecode: channelproperty_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ChannelProperty_Select, { statuscode: channelproperty_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ChannelProperty_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ChannelProperty_Select, { versionnumber: number | null }, {  }>;
}
interface ChannelProperty_Filter {
  applicationsource: string;
  channelpropertyid: XQW.Guid;
  channelpropertyidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  datatype: channelproperty_datatypecode;
  description: string;
  importsequencenumber: number;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  regardingobjectid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: channelproperty_statecode;
  statuscode: channelproperty_statuscode;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface ChannelProperty_Expand {
  createdby: WebExpand<ChannelProperty_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ChannelProperty_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ChannelProperty_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ChannelProperty_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ChannelProperty_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  regardingobjectid: WebExpand<ChannelProperty_Expand, ChannelPropertyGroup_Select, ChannelPropertyGroup_Filter, { regardingobjectid: ChannelPropertyGroup_Result }>;
}
interface ChannelProperty_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  datatype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  regardingobjectid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ChannelProperty_Result extends ChannelProperty_Base, ChannelProperty_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  regardingobjectid_guid: string | null;
}
interface ChannelProperty_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  regardingobjectid: WebMappingRetrieve<ChannelPropertyGroup_Select,ChannelPropertyGroup_Expand,ChannelPropertyGroup_Filter,ChannelPropertyGroup_Fixed,ChannelPropertyGroup_Result,ChannelPropertyGroup_FormattedResult>;
}
interface ChannelProperty_RelatedMany {
}
interface WebEntitiesRetrieve {
  channelproperties: WebMappingRetrieve<ChannelProperty_Select,ChannelProperty_Expand,ChannelProperty_Filter,ChannelProperty_Fixed,ChannelProperty_Result,ChannelProperty_FormattedResult>;
}
interface WebEntitiesRelated {
  channelproperties: WebMappingRelated<ChannelProperty_RelatedOne,ChannelProperty_RelatedMany>;
}
interface WebEntitiesCUDA {
  channelproperties: WebMappingCUDA<ChannelProperty_Create,ChannelProperty_Update,ChannelProperty_Select>;
}
