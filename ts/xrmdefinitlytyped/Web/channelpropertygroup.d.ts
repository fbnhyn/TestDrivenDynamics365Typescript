interface ChannelPropertyGroup_Base extends WebEntity {
  channelpropertygroupid?: string | null;
  channelpropertygroupidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  importsequencenumber?: number | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  regardingtypecode?: convertrule_channelactivity | null;
  solutionid?: string | null;
  statecode?: channelpropertygroup_statecode | null;
  statuscode?: channelpropertygroup_statuscode | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ChannelPropertyGroup_Relationships {
  ChannelPropertyGroup_ChannelProperty?: ChannelProperty_Result[] | null;
  channelpropertygroup_convertrule?: ConvertRule_Result[] | null;
}
interface ChannelPropertyGroup extends ChannelPropertyGroup_Base, ChannelPropertyGroup_Relationships {
}
interface ChannelPropertyGroup_Create extends ChannelPropertyGroup {
}
interface ChannelPropertyGroup_Update extends ChannelPropertyGroup {
}
interface ChannelPropertyGroup_Select {
  channelpropertygroupid: WebAttribute<ChannelPropertyGroup_Select, { channelpropertygroupid: string | null }, {  }>;
  channelpropertygroupidunique: WebAttribute<ChannelPropertyGroup_Select, { channelpropertygroupidunique: string | null }, {  }>;
  componentstate: WebAttribute<ChannelPropertyGroup_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ChannelPropertyGroup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ChannelPropertyGroup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ChannelPropertyGroup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ChannelPropertyGroup_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<ChannelPropertyGroup_Select, { importsequencenumber: number | null }, {  }>;
  ismanaged: WebAttribute<ChannelPropertyGroup_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ChannelPropertyGroup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ChannelPropertyGroup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ChannelPropertyGroup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ChannelPropertyGroup_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<ChannelPropertyGroup_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<ChannelPropertyGroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<ChannelPropertyGroup_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  regardingtypecode: WebAttribute<ChannelPropertyGroup_Select, { regardingtypecode: convertrule_channelactivity | null }, { regardingtypecode_formatted?: string }>;
  solutionid: WebAttribute<ChannelPropertyGroup_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<ChannelPropertyGroup_Select, { statecode: channelpropertygroup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ChannelPropertyGroup_Select, { statuscode: channelpropertygroup_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ChannelPropertyGroup_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ChannelPropertyGroup_Select, { versionnumber: number | null }, {  }>;
}
interface ChannelPropertyGroup_Filter {
  channelpropertygroupid: XQW.Guid;
  channelpropertygroupidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
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
  regardingtypecode: convertrule_channelactivity;
  solutionid: XQW.Guid;
  statecode: channelpropertygroup_statecode;
  statuscode: channelpropertygroup_statuscode;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface ChannelPropertyGroup_Expand {
  ChannelPropertyGroup_ChannelProperty: WebExpand<ChannelPropertyGroup_Expand, ChannelProperty_Select, ChannelProperty_Filter, { ChannelPropertyGroup_ChannelProperty: ChannelProperty_Result[] }>;
  channelpropertygroup_convertrule: WebExpand<ChannelPropertyGroup_Expand, ConvertRule_Select, ConvertRule_Filter, { channelpropertygroup_convertrule: ConvertRule_Result[] }>;
  createdby: WebExpand<ChannelPropertyGroup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ChannelPropertyGroup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ChannelPropertyGroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ChannelPropertyGroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<ChannelPropertyGroup_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface ChannelPropertyGroup_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  regardingtypecode_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface ChannelPropertyGroup_Result extends ChannelPropertyGroup_Base, ChannelPropertyGroup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface ChannelPropertyGroup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface ChannelPropertyGroup_RelatedMany {
  ChannelPropertyGroup_ChannelProperty: WebMappingRetrieve<ChannelProperty_Select,ChannelProperty_Expand,ChannelProperty_Filter,ChannelProperty_Fixed,ChannelProperty_Result,ChannelProperty_FormattedResult>;
  channelpropertygroup_convertrule: WebMappingRetrieve<ConvertRule_Select,ConvertRule_Expand,ConvertRule_Filter,ConvertRule_Fixed,ConvertRule_Result,ConvertRule_FormattedResult>;
}
interface WebEntitiesRetrieve {
  channelpropertygroups: WebMappingRetrieve<ChannelPropertyGroup_Select,ChannelPropertyGroup_Expand,ChannelPropertyGroup_Filter,ChannelPropertyGroup_Fixed,ChannelPropertyGroup_Result,ChannelPropertyGroup_FormattedResult>;
}
interface WebEntitiesRelated {
  channelpropertygroups: WebMappingRelated<ChannelPropertyGroup_RelatedOne,ChannelPropertyGroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  channelpropertygroups: WebMappingCUDA<ChannelPropertyGroup_Create,ChannelPropertyGroup_Update,ChannelPropertyGroup_Select>;
}
