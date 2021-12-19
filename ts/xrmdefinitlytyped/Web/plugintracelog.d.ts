interface PluginTraceLog_Base extends WebEntity {
  configuration?: string | null;
  correlationid?: string | null;
  createdon?: Date | null;
  depth?: number | null;
  exceptiondetails?: string | null;
  issystemcreated?: boolean | null;
  messageblock?: string | null;
  messagename?: string | null;
  mode?: plugintracelog_mode | null;
  operationtype?: plugintracelog_operationtype | null;
  organizationid?: string | null;
  performanceconstructorduration?: number | null;
  performanceconstructorstarttime?: Date | null;
  performanceexecutionduration?: number | null;
  performanceexecutionstarttime?: Date | null;
  persistencekey?: string | null;
  pluginstepid?: string | null;
  plugintracelogid?: string | null;
  primaryentity?: string | null;
  profile?: string | null;
  requestid?: string | null;
  secureconfiguration?: string | null;
  typename?: string | null;
}
interface PluginTraceLog_Relationships {
}
interface PluginTraceLog extends PluginTraceLog_Base, PluginTraceLog_Relationships {
}
interface PluginTraceLog_Create extends PluginTraceLog {
}
interface PluginTraceLog_Update extends PluginTraceLog {
}
interface PluginTraceLog_Select {
  configuration: WebAttribute<PluginTraceLog_Select, { configuration: string | null }, {  }>;
  correlationid: WebAttribute<PluginTraceLog_Select, { correlationid: string | null }, {  }>;
  createdby_guid: WebAttribute<PluginTraceLog_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PluginTraceLog_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PluginTraceLog_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  depth: WebAttribute<PluginTraceLog_Select, { depth: number | null }, {  }>;
  exceptiondetails: WebAttribute<PluginTraceLog_Select, { exceptiondetails: string | null }, {  }>;
  issystemcreated: WebAttribute<PluginTraceLog_Select, { issystemcreated: boolean | null }, {  }>;
  messageblock: WebAttribute<PluginTraceLog_Select, { messageblock: string | null }, {  }>;
  messagename: WebAttribute<PluginTraceLog_Select, { messagename: string | null }, {  }>;
  mode: WebAttribute<PluginTraceLog_Select, { mode: plugintracelog_mode | null }, { mode_formatted?: string }>;
  operationtype: WebAttribute<PluginTraceLog_Select, { operationtype: plugintracelog_operationtype | null }, { operationtype_formatted?: string }>;
  organizationid: WebAttribute<PluginTraceLog_Select, { organizationid: string | null }, {  }>;
  performanceconstructorduration: WebAttribute<PluginTraceLog_Select, { performanceconstructorduration: number | null }, {  }>;
  performanceconstructorstarttime: WebAttribute<PluginTraceLog_Select, { performanceconstructorstarttime: Date | null }, { performanceconstructorstarttime_formatted?: string }>;
  performanceexecutionduration: WebAttribute<PluginTraceLog_Select, { performanceexecutionduration: number | null }, {  }>;
  performanceexecutionstarttime: WebAttribute<PluginTraceLog_Select, { performanceexecutionstarttime: Date | null }, { performanceexecutionstarttime_formatted?: string }>;
  persistencekey: WebAttribute<PluginTraceLog_Select, { persistencekey: string | null }, {  }>;
  pluginstepid: WebAttribute<PluginTraceLog_Select, { pluginstepid: string | null }, {  }>;
  plugintracelogid: WebAttribute<PluginTraceLog_Select, { plugintracelogid: string | null }, {  }>;
  primaryentity: WebAttribute<PluginTraceLog_Select, { primaryentity: string | null }, {  }>;
  profile: WebAttribute<PluginTraceLog_Select, { profile: string | null }, {  }>;
  requestid: WebAttribute<PluginTraceLog_Select, { requestid: string | null }, {  }>;
  secureconfiguration: WebAttribute<PluginTraceLog_Select, { secureconfiguration: string | null }, {  }>;
  typename: WebAttribute<PluginTraceLog_Select, { typename: string | null }, {  }>;
}
interface PluginTraceLog_Filter {
  configuration: string;
  correlationid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  depth: number;
  exceptiondetails: string;
  issystemcreated: boolean;
  messageblock: string;
  messagename: string;
  mode: plugintracelog_mode;
  operationtype: plugintracelog_operationtype;
  organizationid: XQW.Guid;
  performanceconstructorduration: number;
  performanceconstructorstarttime: Date;
  performanceexecutionduration: number;
  performanceexecutionstarttime: Date;
  persistencekey: XQW.Guid;
  pluginstepid: XQW.Guid;
  plugintracelogid: XQW.Guid;
  primaryentity: string;
  profile: string;
  requestid: XQW.Guid;
  secureconfiguration: string;
  typename: string;
}
interface PluginTraceLog_Expand {
  createdby: WebExpand<PluginTraceLog_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PluginTraceLog_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
}
interface PluginTraceLog_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  mode_formatted?: string;
  operationtype_formatted?: string;
  performanceconstructorstarttime_formatted?: string;
  performanceexecutionstarttime_formatted?: string;
}
interface PluginTraceLog_Result extends PluginTraceLog_Base, PluginTraceLog_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
}
interface PluginTraceLog_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface PluginTraceLog_RelatedMany {
}
interface WebEntitiesRetrieve {
  plugintracelogs: WebMappingRetrieve<PluginTraceLog_Select,PluginTraceLog_Expand,PluginTraceLog_Filter,PluginTraceLog_Fixed,PluginTraceLog_Result,PluginTraceLog_FormattedResult>;
}
interface WebEntitiesRelated {
  plugintracelogs: WebMappingRelated<PluginTraceLog_RelatedOne,PluginTraceLog_RelatedMany>;
}
interface WebEntitiesCUDA {
  plugintracelogs: WebMappingCUDA<PluginTraceLog_Create,PluginTraceLog_Update,PluginTraceLog_Select>;
}
