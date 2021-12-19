interface connector_Base extends WebEntity {
  componentstate?: componentstate | null;
  connectionparameters?: string | null;
  connectorid?: string | null;
  connectoridunique?: string | null;
  connectorinternalid?: string | null;
  connectortype?: connectortype | null;
  createdon?: Date | null;
  description?: string | null;
  displayname?: string | null;
  iconblobid?: string | null;
  iconbrandcolor?: string | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  openapidefinition?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  policytemplateinstances?: string | null;
  solutionid?: string | null;
  statecode?: connector_statecode | null;
  statuscode?: connector_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface connector_Relationships {
  connector_AsyncOperations?: AsyncOperation_Result[] | null;
  connector_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  connector_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  connector_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  connector_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  connector_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  connector_ProcessSession?: ProcessSession_Result[] | null;
  connector_SyncErrors?: SyncError_Result[] | null;
  connector_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  connector_connectionreference?: connectionreference_Result[] | null;
  iconblobid_imagedescriptor?: ImageDescriptor_Result | null;
}
interface connector extends connector_Base, connector_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface connector_Create extends connector {
}
interface connector_Update extends connector {
}
interface connector_Select {
  componentstate: WebAttribute<connector_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  connectionparameters: WebAttribute<connector_Select, { connectionparameters: string | null }, {  }>;
  connectorid: WebAttribute<connector_Select, { connectorid: string | null }, {  }>;
  connectoridunique: WebAttribute<connector_Select, { connectoridunique: string | null }, {  }>;
  connectorinternalid: WebAttribute<connector_Select, { connectorinternalid: string | null }, {  }>;
  connectortype: WebAttribute<connector_Select, { connectortype: connectortype | null }, { connectortype_formatted?: string }>;
  createdby_guid: WebAttribute<connector_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<connector_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<connector_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<connector_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<connector_Select, { displayname: string | null }, {  }>;
  iconblobid: WebAttribute<connector_Select, { iconblobid: string | null }, {  }>;
  iconbrandcolor: WebAttribute<connector_Select, { iconbrandcolor: string | null }, {  }>;
  importsequencenumber: WebAttribute<connector_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<connector_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<connector_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<connector_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<connector_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<connector_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<connector_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<connector_Select, { name: string | null }, {  }>;
  openapidefinition: WebAttribute<connector_Select, { openapidefinition: string | null }, {  }>;
  overriddencreatedon: WebAttribute<connector_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<connector_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<connector_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<connector_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<connector_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<connector_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  policytemplateinstances: WebAttribute<connector_Select, { policytemplateinstances: string | null }, {  }>;
  solutionid: WebAttribute<connector_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<connector_Select, { statecode: connector_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<connector_Select, { statuscode: connector_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<connector_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<connector_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<connector_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<connector_Select, { versionnumber: number | null }, {  }>;
}
interface connector_Filter {
  componentstate: componentstate;
  connectionparameters: string;
  connectorid: XQW.Guid;
  connectoridunique: XQW.Guid;
  connectorinternalid: string;
  connectortype: connectortype;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  displayname: string;
  iconblobid: XQW.Guid;
  iconbrandcolor: string;
  importsequencenumber: number;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  openapidefinition: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  policytemplateinstances: string;
  solutionid: XQW.Guid;
  statecode: connector_statecode;
  statuscode: connector_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface connector_Expand {
  connector_AsyncOperations: WebExpand<connector_Expand, AsyncOperation_Select, AsyncOperation_Filter, { connector_AsyncOperations: AsyncOperation_Result[] }>;
  connector_BulkDeleteFailures: WebExpand<connector_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { connector_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  connector_DuplicateBaseRecord: WebExpand<connector_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { connector_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  connector_DuplicateMatchingRecord: WebExpand<connector_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { connector_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  connector_MailboxTrackingFolders: WebExpand<connector_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { connector_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  connector_PrincipalObjectAttributeAccesses: WebExpand<connector_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { connector_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  connector_ProcessSession: WebExpand<connector_Expand, ProcessSession_Select, ProcessSession_Filter, { connector_ProcessSession: ProcessSession_Result[] }>;
  connector_SyncErrors: WebExpand<connector_Expand, SyncError_Select, SyncError_Filter, { connector_SyncErrors: SyncError_Result[] }>;
  connector_UserEntityInstanceDatas: WebExpand<connector_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { connector_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  connector_connectionreference: WebExpand<connector_Expand, connectionreference_Select, connectionreference_Filter, { connector_connectionreference: connectionreference_Result[] }>;
  createdby: WebExpand<connector_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<connector_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  iconblobid_imagedescriptor: WebExpand<connector_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { iconblobid_imagedescriptor: ImageDescriptor_Result }>;
  modifiedby: WebExpand<connector_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<connector_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<connector_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<connector_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<connector_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<connector_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface connector_FormattedResult {
  componentstate_formatted?: string;
  connectortype_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface connector_Result extends connector_Base, connector_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface connector_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  iconblobid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface connector_RelatedMany {
  connector_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  connector_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  connector_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  connector_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  connector_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  connector_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  connector_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  connector_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  connector_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  connector_connectionreference: WebMappingRetrieve<connectionreference_Select,connectionreference_Expand,connectionreference_Filter,connectionreference_Fixed,connectionreference_Result,connectionreference_FormattedResult>;
}
interface WebEntitiesRetrieve {
  connectors: WebMappingRetrieve<connector_Select,connector_Expand,connector_Filter,connector_Fixed,connector_Result,connector_FormattedResult>;
}
interface WebEntitiesRelated {
  connectors: WebMappingRelated<connector_RelatedOne,connector_RelatedMany>;
}
interface WebEntitiesCUDA {
  connectors: WebMappingCUDA<connector_Create,connector_Update,connector_Select>;
}
