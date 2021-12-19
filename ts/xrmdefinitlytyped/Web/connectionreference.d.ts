interface connectionreference_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  connectionid?: string | null;
  connectionreferencedisplayname?: string | null;
  connectionreferenceid?: string | null;
  connectionreferencelogicalname?: string | null;
  connectorid?: string | null;
  createdon?: Date | null;
  description?: string | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: connectionreference_statecode | null;
  statuscode?: connectionreference_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface connectionreference_Relationships {
  CustomConnectorId?: connector_Result | null;
  connectionreference_AsyncOperations?: AsyncOperation_Result[] | null;
  connectionreference_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  connectionreference_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  connectionreference_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  connectionreference_ProcessSession?: ProcessSession_Result[] | null;
  connectionreference_SyncErrors?: SyncError_Result[] | null;
  connectionreference_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_AIConfiguration_ConnectionReference?: msdyn_AIConfiguration_Result[] | null;
}
interface connectionreference extends connectionreference_Base, connectionreference_Relationships {
  CustomConnectorId_bind$connectors?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface connectionreference_Create extends connectionreference {
}
interface connectionreference_Update extends connectionreference {
}
interface connectionreference_Select {
  componentidunique: WebAttribute<connectionreference_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<connectionreference_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  connectionid: WebAttribute<connectionreference_Select, { connectionid: string | null }, {  }>;
  connectionreferencedisplayname: WebAttribute<connectionreference_Select, { connectionreferencedisplayname: string | null }, {  }>;
  connectionreferenceid: WebAttribute<connectionreference_Select, { connectionreferenceid: string | null }, {  }>;
  connectionreferencelogicalname: WebAttribute<connectionreference_Select, { connectionreferencelogicalname: string | null }, {  }>;
  connectorid: WebAttribute<connectionreference_Select, { connectorid: string | null }, {  }>;
  createdby_guid: WebAttribute<connectionreference_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<connectionreference_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<connectionreference_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customconnectorid_guid: WebAttribute<connectionreference_Select, { customconnectorid_guid: string | null }, { customconnectorid_formatted?: string }>;
  description: WebAttribute<connectionreference_Select, { description: string | null }, {  }>;
  importsequencenumber: WebAttribute<connectionreference_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<connectionreference_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<connectionreference_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<connectionreference_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<connectionreference_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<connectionreference_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  overriddencreatedon: WebAttribute<connectionreference_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<connectionreference_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<connectionreference_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<connectionreference_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<connectionreference_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<connectionreference_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<connectionreference_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<connectionreference_Select, { statecode: connectionreference_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<connectionreference_Select, { statuscode: connectionreference_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<connectionreference_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<connectionreference_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<connectionreference_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<connectionreference_Select, { versionnumber: number | null }, {  }>;
}
interface connectionreference_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  connectionid: string;
  connectionreferencedisplayname: string;
  connectionreferenceid: XQW.Guid;
  connectionreferencelogicalname: string;
  connectorid: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customconnectorid_guid: XQW.Guid;
  description: string;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: connectionreference_statecode;
  statuscode: connectionreference_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface connectionreference_Expand {
  CustomConnectorId: WebExpand<connectionreference_Expand, connector_Select, connector_Filter, { CustomConnectorId: connector_Result }>;
  connectionreference_AsyncOperations: WebExpand<connectionreference_Expand, AsyncOperation_Select, AsyncOperation_Filter, { connectionreference_AsyncOperations: AsyncOperation_Result[] }>;
  connectionreference_BulkDeleteFailures: WebExpand<connectionreference_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { connectionreference_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  connectionreference_MailboxTrackingFolders: WebExpand<connectionreference_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { connectionreference_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  connectionreference_PrincipalObjectAttributeAccesses: WebExpand<connectionreference_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { connectionreference_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  connectionreference_ProcessSession: WebExpand<connectionreference_Expand, ProcessSession_Select, ProcessSession_Filter, { connectionreference_ProcessSession: ProcessSession_Result[] }>;
  connectionreference_SyncErrors: WebExpand<connectionreference_Expand, SyncError_Select, SyncError_Filter, { connectionreference_SyncErrors: SyncError_Result[] }>;
  connectionreference_UserEntityInstanceDatas: WebExpand<connectionreference_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { connectionreference_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  createdby: WebExpand<connectionreference_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<connectionreference_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<connectionreference_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<connectionreference_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AIConfiguration_ConnectionReference: WebExpand<connectionreference_Expand, msdyn_AIConfiguration_Select, msdyn_AIConfiguration_Filter, { msdyn_AIConfiguration_ConnectionReference: msdyn_AIConfiguration_Result[] }>;
  ownerid: WebExpand<connectionreference_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<connectionreference_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<connectionreference_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<connectionreference_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface connectionreference_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  customconnectorid_formatted?: string;
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
interface connectionreference_Result extends connectionreference_Base, connectionreference_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  customconnectorid_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface connectionreference_RelatedOne {
  CustomConnectorId: WebMappingRetrieve<connector_Select,connector_Expand,connector_Filter,connector_Fixed,connector_Result,connector_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface connectionreference_RelatedMany {
  connectionreference_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  connectionreference_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  connectionreference_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  connectionreference_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  connectionreference_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  connectionreference_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  connectionreference_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_AIConfiguration_ConnectionReference: WebMappingRetrieve<msdyn_AIConfiguration_Select,msdyn_AIConfiguration_Expand,msdyn_AIConfiguration_Filter,msdyn_AIConfiguration_Fixed,msdyn_AIConfiguration_Result,msdyn_AIConfiguration_FormattedResult>;
}
interface WebEntitiesRetrieve {
  connectionreferences: WebMappingRetrieve<connectionreference_Select,connectionreference_Expand,connectionreference_Filter,connectionreference_Fixed,connectionreference_Result,connectionreference_FormattedResult>;
}
interface WebEntitiesRelated {
  connectionreferences: WebMappingRelated<connectionreference_RelatedOne,connectionreference_RelatedMany>;
}
interface WebEntitiesCUDA {
  connectionreferences: WebMappingCUDA<connectionreference_Create,connectionreference_Update,connectionreference_Select>;
}
