interface msdyn_richtextfile_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_imageblobid?: string | null;
  msdyn_name?: string | null;
  msdyn_parententity_fieldname?: string | null;
  msdyn_parententityname?: string | null;
  msdyn_parentid?: string | null;
  msdyn_richtextfileid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_richtextfile_statecode | null;
  statuscode?: msdyn_richtextfile_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_richtextfile_Relationships {
  msdyn_imageblobid_imagedescriptor?: ImageDescriptor_Result | null;
  msdyn_richtextfile_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_richtextfile_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_richtextfile_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_richtextfile_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_richtextfile_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_richtextfile_SyncErrors?: SyncError_Result[] | null;
  msdyn_richtextfile_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_richtextfile extends msdyn_richtextfile_Base, msdyn_richtextfile_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_richtextfile_Create extends msdyn_richtextfile {
}
interface msdyn_richtextfile_Update extends msdyn_richtextfile {
}
interface msdyn_richtextfile_Select {
  createdby_guid: WebAttribute<msdyn_richtextfile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_richtextfile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_richtextfile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_richtextfile_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_richtextfile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_richtextfile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_richtextfile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_imageblobid: WebAttribute<msdyn_richtextfile_Select, { msdyn_imageblobid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_richtextfile_Select, { msdyn_name: string | null }, {  }>;
  msdyn_parententity_fieldname: WebAttribute<msdyn_richtextfile_Select, { msdyn_parententity_fieldname: string | null }, {  }>;
  msdyn_parententityname: WebAttribute<msdyn_richtextfile_Select, { msdyn_parententityname: string | null }, {  }>;
  msdyn_parentid: WebAttribute<msdyn_richtextfile_Select, { msdyn_parentid: string | null }, {  }>;
  msdyn_richtextfileid: WebAttribute<msdyn_richtextfile_Select, { msdyn_richtextfileid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_richtextfile_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_richtextfile_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_richtextfile_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_richtextfile_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_richtextfile_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_richtextfile_Select, { statecode: msdyn_richtextfile_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_richtextfile_Select, { statuscode: msdyn_richtextfile_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_richtextfile_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_richtextfile_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_richtextfile_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_richtextfile_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_imageblobid: XQW.Guid;
  msdyn_name: string;
  msdyn_parententity_fieldname: string;
  msdyn_parententityname: string;
  msdyn_parentid: string;
  msdyn_richtextfileid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_richtextfile_statecode;
  statuscode: msdyn_richtextfile_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_richtextfile_Expand {
  createdby: WebExpand<msdyn_richtextfile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_richtextfile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_richtextfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_richtextfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_imageblobid_imagedescriptor: WebExpand<msdyn_richtextfile_Expand, ImageDescriptor_Select, ImageDescriptor_Filter, { msdyn_imageblobid_imagedescriptor: ImageDescriptor_Result }>;
  msdyn_richtextfile_AsyncOperations: WebExpand<msdyn_richtextfile_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_richtextfile_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_richtextfile_BulkDeleteFailures: WebExpand<msdyn_richtextfile_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_richtextfile_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_richtextfile_MailboxTrackingFolders: WebExpand<msdyn_richtextfile_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_richtextfile_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_richtextfile_PrincipalObjectAttributeAccesses: WebExpand<msdyn_richtextfile_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_richtextfile_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_richtextfile_ProcessSession: WebExpand<msdyn_richtextfile_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_richtextfile_ProcessSession: ProcessSession_Result[] }>;
  msdyn_richtextfile_SyncErrors: WebExpand<msdyn_richtextfile_Expand, SyncError_Select, SyncError_Filter, { msdyn_richtextfile_SyncErrors: SyncError_Result[] }>;
  msdyn_richtextfile_UserEntityInstanceDatas: WebExpand<msdyn_richtextfile_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_richtextfile_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_richtextfile_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_richtextfile_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_richtextfile_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_richtextfile_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_richtextfile_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_richtextfile_Result extends msdyn_richtextfile_Base, msdyn_richtextfile_Relationships {
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
interface msdyn_richtextfile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_imageblobid_imagedescriptor: WebMappingRetrieve<ImageDescriptor_Select,ImageDescriptor_Expand,ImageDescriptor_Filter,ImageDescriptor_Fixed,ImageDescriptor_Result,ImageDescriptor_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_richtextfile_RelatedMany {
  msdyn_richtextfile_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_richtextfile_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_richtextfile_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_richtextfile_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_richtextfile_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_richtextfile_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_richtextfile_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_richtextfiles: WebMappingRetrieve<msdyn_richtextfile_Select,msdyn_richtextfile_Expand,msdyn_richtextfile_Filter,msdyn_richtextfile_Fixed,msdyn_richtextfile_Result,msdyn_richtextfile_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_richtextfiles: WebMappingRelated<msdyn_richtextfile_RelatedOne,msdyn_richtextfile_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_richtextfiles: WebMappingCUDA<msdyn_richtextfile_Create,msdyn_richtextfile_Update,msdyn_richtextfile_Select>;
}
