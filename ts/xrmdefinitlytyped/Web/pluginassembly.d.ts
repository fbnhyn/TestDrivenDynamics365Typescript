interface PluginAssembly_Base extends WebEntity {
  authtype?: pluginassembly_authtype | null;
  componentstate?: componentstate | null;
  content?: string | null;
  createdon?: Date | null;
  culture?: string | null;
  customizationlevel?: number | null;
  description?: string | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ishidden?: any | null;
  ismanaged?: boolean | null;
  isolationmode?: pluginassembly_isolationmode | null;
  ispasswordset?: boolean | null;
  major?: number | null;
  minor?: number | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  password?: string | null;
  path?: string | null;
  pluginassemblyid?: string | null;
  pluginassemblyidunique?: string | null;
  publickeytoken?: string | null;
  solutionid?: string | null;
  sourcehash?: string | null;
  sourcetype?: pluginassembly_sourcetype | null;
  supportingsolutionid?: string | null;
  url?: string | null;
  username?: string | null;
  version?: string | null;
  versionnumber?: number | null;
}
interface PluginAssembly_Relationships {
  PackageId?: pluginpackage_Result | null;
  pluginassembly_plugintype?: PluginType_Result[] | null;
  userentityinstancedata_pluginassembly?: UserEntityInstanceData_Result[] | null;
}
interface PluginAssembly extends PluginAssembly_Base, PluginAssembly_Relationships {
  PackageId_bind$pluginpackages?: string | null;
  managedidentityid_bind$managedidentities?: string | null;
}
interface PluginAssembly_Create extends PluginAssembly {
}
interface PluginAssembly_Update extends PluginAssembly {
}
interface PluginAssembly_Select {
  authtype: WebAttribute<PluginAssembly_Select, { authtype: pluginassembly_authtype | null }, { authtype_formatted?: string }>;
  componentstate: WebAttribute<PluginAssembly_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  content: WebAttribute<PluginAssembly_Select, { content: string | null }, {  }>;
  createdby_guid: WebAttribute<PluginAssembly_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<PluginAssembly_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<PluginAssembly_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  culture: WebAttribute<PluginAssembly_Select, { culture: string | null }, {  }>;
  customizationlevel: WebAttribute<PluginAssembly_Select, { customizationlevel: number | null }, {  }>;
  description: WebAttribute<PluginAssembly_Select, { description: string | null }, {  }>;
  introducedversion: WebAttribute<PluginAssembly_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<PluginAssembly_Select, { iscustomizable: any | null }, {  }>;
  ishidden: WebAttribute<PluginAssembly_Select, { ishidden: any | null }, {  }>;
  ismanaged: WebAttribute<PluginAssembly_Select, { ismanaged: boolean | null }, {  }>;
  isolationmode: WebAttribute<PluginAssembly_Select, { isolationmode: pluginassembly_isolationmode | null }, { isolationmode_formatted?: string }>;
  ispasswordset: WebAttribute<PluginAssembly_Select, { ispasswordset: boolean | null }, {  }>;
  major: WebAttribute<PluginAssembly_Select, { major: number | null }, {  }>;
  managedidentityid_guid: WebAttribute<PluginAssembly_Select, { managedidentityid_guid: string | null }, { managedidentityid_formatted?: string }>;
  minor: WebAttribute<PluginAssembly_Select, { minor: number | null }, {  }>;
  modifiedby_guid: WebAttribute<PluginAssembly_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<PluginAssembly_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<PluginAssembly_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<PluginAssembly_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<PluginAssembly_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<PluginAssembly_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  packageid_guid: WebAttribute<PluginAssembly_Select, { packageid_guid: string | null }, { packageid_formatted?: string }>;
  password: WebAttribute<PluginAssembly_Select, { password: string | null }, {  }>;
  path: WebAttribute<PluginAssembly_Select, { path: string | null }, {  }>;
  pluginassemblyid: WebAttribute<PluginAssembly_Select, { pluginassemblyid: string | null }, {  }>;
  pluginassemblyidunique: WebAttribute<PluginAssembly_Select, { pluginassemblyidunique: string | null }, {  }>;
  publickeytoken: WebAttribute<PluginAssembly_Select, { publickeytoken: string | null }, {  }>;
  solutionid: WebAttribute<PluginAssembly_Select, { solutionid: string | null }, {  }>;
  sourcehash: WebAttribute<PluginAssembly_Select, { sourcehash: string | null }, {  }>;
  sourcetype: WebAttribute<PluginAssembly_Select, { sourcetype: pluginassembly_sourcetype | null }, { sourcetype_formatted?: string }>;
  supportingsolutionid: WebAttribute<PluginAssembly_Select, { supportingsolutionid: string | null }, {  }>;
  url: WebAttribute<PluginAssembly_Select, { url: string | null }, {  }>;
  username: WebAttribute<PluginAssembly_Select, { username: string | null }, {  }>;
  version: WebAttribute<PluginAssembly_Select, { version: string | null }, {  }>;
  versionnumber: WebAttribute<PluginAssembly_Select, { versionnumber: number | null }, {  }>;
}
interface PluginAssembly_Filter {
  authtype: pluginassembly_authtype;
  componentstate: componentstate;
  content: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  culture: string;
  customizationlevel: number;
  description: string;
  introducedversion: string;
  iscustomizable: any;
  ishidden: any;
  ismanaged: boolean;
  isolationmode: pluginassembly_isolationmode;
  ispasswordset: boolean;
  major: number;
  managedidentityid_guid: XQW.Guid;
  minor: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  packageid_guid: XQW.Guid;
  password: string;
  path: string;
  pluginassemblyid: XQW.Guid;
  pluginassemblyidunique: XQW.Guid;
  publickeytoken: string;
  solutionid: XQW.Guid;
  sourcehash: string;
  sourcetype: pluginassembly_sourcetype;
  supportingsolutionid: XQW.Guid;
  url: string;
  username: string;
  version: string;
  versionnumber: number;
}
interface PluginAssembly_Expand {
  PackageId: WebExpand<PluginAssembly_Expand, pluginpackage_Select, pluginpackage_Filter, { PackageId: pluginpackage_Result }>;
  createdby: WebExpand<PluginAssembly_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<PluginAssembly_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  managedidentityid: WebExpand<PluginAssembly_Expand, ManagedIdentity_Select, ManagedIdentity_Filter, { managedidentityid: ManagedIdentity_Result }>;
  modifiedby: WebExpand<PluginAssembly_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<PluginAssembly_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<PluginAssembly_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  pluginassembly_plugintype: WebExpand<PluginAssembly_Expand, PluginType_Select, PluginType_Filter, { pluginassembly_plugintype: PluginType_Result[] }>;
  userentityinstancedata_pluginassembly: WebExpand<PluginAssembly_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_pluginassembly: UserEntityInstanceData_Result[] }>;
}
interface PluginAssembly_FormattedResult {
  authtype_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  isolationmode_formatted?: string;
  managedidentityid_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  packageid_formatted?: string;
  sourcetype_formatted?: string;
}
interface PluginAssembly_Result extends PluginAssembly_Base, PluginAssembly_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  managedidentityid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  packageid_guid: string | null;
}
interface PluginAssembly_RelatedOne {
  PackageId: WebMappingRetrieve<pluginpackage_Select,pluginpackage_Expand,pluginpackage_Filter,pluginpackage_Fixed,pluginpackage_Result,pluginpackage_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  managedidentityid: WebMappingRetrieve<ManagedIdentity_Select,ManagedIdentity_Expand,ManagedIdentity_Filter,ManagedIdentity_Fixed,ManagedIdentity_Result,ManagedIdentity_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface PluginAssembly_RelatedMany {
  pluginassembly_plugintype: WebMappingRetrieve<PluginType_Select,PluginType_Expand,PluginType_Filter,PluginType_Fixed,PluginType_Result,PluginType_FormattedResult>;
  userentityinstancedata_pluginassembly: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  pluginassemblies: WebMappingRetrieve<PluginAssembly_Select,PluginAssembly_Expand,PluginAssembly_Filter,PluginAssembly_Fixed,PluginAssembly_Result,PluginAssembly_FormattedResult>;
}
interface WebEntitiesRelated {
  pluginassemblies: WebMappingRelated<PluginAssembly_RelatedOne,PluginAssembly_RelatedMany>;
}
interface WebEntitiesCUDA {
  pluginassemblies: WebMappingCUDA<PluginAssembly_Create,PluginAssembly_Update,PluginAssembly_Select>;
}
