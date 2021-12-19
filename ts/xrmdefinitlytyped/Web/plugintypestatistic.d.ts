interface PluginTypeStatistic_Base extends WebEntity {
  averageexecutetimeinmilliseconds?: number | null;
  crashcontributionpercent?: number | null;
  crashcount?: number | null;
  crashpercent?: number | null;
  createdon?: Date | null;
  executecount?: number | null;
  failurecount?: number | null;
  failurepercent?: number | null;
  modifiedon?: Date | null;
  plugintypestatisticid?: string | null;
  terminatecpucontributionpercent?: number | null;
  terminatehandlescontributionpercent?: number | null;
  terminatememorycontributionpercent?: number | null;
  terminateothercontributionpercent?: number | null;
}
interface PluginTypeStatistic_Relationships {
  userentityinstancedata_plugintypestatistic?: UserEntityInstanceData_Result[] | null;
}
interface PluginTypeStatistic extends PluginTypeStatistic_Base, PluginTypeStatistic_Relationships {
}
interface PluginTypeStatistic_Create extends PluginTypeStatistic {
}
interface PluginTypeStatistic_Update extends PluginTypeStatistic {
}
interface PluginTypeStatistic_Select {
  averageexecutetimeinmilliseconds: WebAttribute<PluginTypeStatistic_Select, { averageexecutetimeinmilliseconds: number | null }, {  }>;
  crashcontributionpercent: WebAttribute<PluginTypeStatistic_Select, { crashcontributionpercent: number | null }, {  }>;
  crashcount: WebAttribute<PluginTypeStatistic_Select, { crashcount: number | null }, {  }>;
  crashpercent: WebAttribute<PluginTypeStatistic_Select, { crashpercent: number | null }, {  }>;
  createdby_guid: WebAttribute<PluginTypeStatistic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PluginTypeStatistic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PluginTypeStatistic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  executecount: WebAttribute<PluginTypeStatistic_Select, { executecount: number | null }, {  }>;
  failurecount: WebAttribute<PluginTypeStatistic_Select, { failurecount: number | null }, {  }>;
  failurepercent: WebAttribute<PluginTypeStatistic_Select, { failurepercent: number | null }, {  }>;
  modifiedby_guid: WebAttribute<PluginTypeStatistic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PluginTypeStatistic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PluginTypeStatistic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<PluginTypeStatistic_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  plugintypeid_guid: WebAttribute<PluginTypeStatistic_Select, { plugintypeid_guid: string | null }, { plugintypeid_formatted?: string }>;
  plugintypestatisticid: WebAttribute<PluginTypeStatistic_Select, { plugintypestatisticid: string | null }, {  }>;
  terminatecpucontributionpercent: WebAttribute<PluginTypeStatistic_Select, { terminatecpucontributionpercent: number | null }, {  }>;
  terminatehandlescontributionpercent: WebAttribute<PluginTypeStatistic_Select, { terminatehandlescontributionpercent: number | null }, {  }>;
  terminatememorycontributionpercent: WebAttribute<PluginTypeStatistic_Select, { terminatememorycontributionpercent: number | null }, {  }>;
  terminateothercontributionpercent: WebAttribute<PluginTypeStatistic_Select, { terminateothercontributionpercent: number | null }, {  }>;
}
interface PluginTypeStatistic_Filter {
  averageexecutetimeinmilliseconds: number;
  crashcontributionpercent: number;
  crashcount: number;
  crashpercent: number;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  executecount: number;
  failurecount: number;
  failurepercent: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  plugintypeid_guid: XQW.Guid;
  plugintypestatisticid: XQW.Guid;
  terminatecpucontributionpercent: number;
  terminatehandlescontributionpercent: number;
  terminatememorycontributionpercent: number;
  terminateothercontributionpercent: number;
}
interface PluginTypeStatistic_Expand {
  createdby: WebExpand<PluginTypeStatistic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PluginTypeStatistic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<PluginTypeStatistic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PluginTypeStatistic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<PluginTypeStatistic_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  plugintypeid: WebExpand<PluginTypeStatistic_Expand, PluginType_Select, PluginType_Filter, { plugintypeid: PluginType_Result }>;
  userentityinstancedata_plugintypestatistic: WebExpand<PluginTypeStatistic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_plugintypestatistic: UserEntityInstanceData_Result[] }>;
}
interface PluginTypeStatistic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  plugintypeid_formatted?: string;
}
interface PluginTypeStatistic_Result extends PluginTypeStatistic_Base, PluginTypeStatistic_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  plugintypeid_guid: string | null;
}
interface PluginTypeStatistic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  plugintypeid: WebMappingRetrieve<PluginType_Select,PluginType_Expand,PluginType_Filter,PluginType_Fixed,PluginType_Result,PluginType_FormattedResult>;
}
interface PluginTypeStatistic_RelatedMany {
  userentityinstancedata_plugintypestatistic: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  plugintypestatistics: WebMappingRetrieve<PluginTypeStatistic_Select,PluginTypeStatistic_Expand,PluginTypeStatistic_Filter,PluginTypeStatistic_Fixed,PluginTypeStatistic_Result,PluginTypeStatistic_FormattedResult>;
}
interface WebEntitiesRelated {
  plugintypestatistics: WebMappingRelated<PluginTypeStatistic_RelatedOne,PluginTypeStatistic_RelatedMany>;
}
interface WebEntitiesCUDA {
  plugintypestatistics: WebMappingCUDA<PluginTypeStatistic_Create,PluginTypeStatistic_Update,PluginTypeStatistic_Select>;
}
