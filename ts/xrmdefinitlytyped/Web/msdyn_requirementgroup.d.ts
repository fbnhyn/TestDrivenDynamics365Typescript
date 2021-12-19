interface msdyn_requirementgroup_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_autogrouptype?: msdyn_requirementgroup_msdyn_autogrouptype | null;
  msdyn_istemplate?: boolean | null;
  msdyn_name?: string | null;
  msdyn_requirementgroupid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_requirementgroup_statecode | null;
  statuscode?: msdyn_requirementgroup_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_requirementgroup_Relationships {
  msdyn_requirementgroup_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_requirementgroup_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_requirementgroup_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementgroup_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_requirementgroup_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_requirementgroup_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_requirementgroup_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_requirementgroup_SyncErrors?: SyncError_Result[] | null;
  msdyn_requirementgroup_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_requirementgroup_bookableresourcebooking_requirementgroupid?: BookableResourceBooking_Result[] | null;
  msdyn_requirementgroup_incidenttype_reqgroup?: msdyn_incidenttype_requirementgroup_Result[] | null;
  msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid?: msdyn_requirementgroup_Result[] | null;
  msdyn_requirementgroup_requirementrelationship_requirementgroupid?: msdyn_requirementrelationship_Result[] | null;
  msdyn_requirementgroup_resourcerequirement_requirementgroupid?: msdyn_resourcerequirement_Result[] | null;
  msdyn_requirementgroup_service?: Service_Result[] | null;
}
interface msdyn_requirementgroup extends msdyn_requirementgroup_Base, msdyn_requirementgroup_Relationships {
  msdyn_requirementgrouptemplateid_bind$msdyn_requirementgroups?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_requirementgroup_Create extends msdyn_requirementgroup {
}
interface msdyn_requirementgroup_Update extends msdyn_requirementgroup {
}
interface msdyn_requirementgroup_Select {
  createdby_guid: WebAttribute<msdyn_requirementgroup_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_requirementgroup_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_requirementgroup_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_requirementgroup_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_requirementgroup_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_requirementgroup_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_requirementgroup_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_autogrouptype: WebAttribute<msdyn_requirementgroup_Select, { msdyn_autogrouptype: msdyn_requirementgroup_msdyn_autogrouptype | null }, { msdyn_autogrouptype_formatted?: string }>;
  msdyn_istemplate: WebAttribute<msdyn_requirementgroup_Select, { msdyn_istemplate: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_requirementgroup_Select, { msdyn_name: string | null }, {  }>;
  msdyn_requirementgroupid: WebAttribute<msdyn_requirementgroup_Select, { msdyn_requirementgroupid: string | null }, {  }>;
  msdyn_requirementgrouptemplateid_guid: WebAttribute<msdyn_requirementgroup_Select, { msdyn_requirementgrouptemplateid_guid: string | null }, { msdyn_requirementgrouptemplateid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_requirementgroup_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_requirementgroup_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_requirementgroup_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_requirementgroup_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_requirementgroup_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_requirementgroup_Select, { statecode: msdyn_requirementgroup_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_requirementgroup_Select, { statuscode: msdyn_requirementgroup_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_requirementgroup_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_requirementgroup_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_requirementgroup_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_requirementgroup_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_autogrouptype: msdyn_requirementgroup_msdyn_autogrouptype;
  msdyn_istemplate: boolean;
  msdyn_name: string;
  msdyn_requirementgroupid: XQW.Guid;
  msdyn_requirementgrouptemplateid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_requirementgroup_statecode;
  statuscode: msdyn_requirementgroup_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_requirementgroup_Expand {
  createdby: WebExpand<msdyn_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_requirementgroup_AsyncOperations: WebExpand<msdyn_requirementgroup_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_requirementgroup_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_requirementgroup_BulkDeleteFailures: WebExpand<msdyn_requirementgroup_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_requirementgroup_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_requirementgroup_DuplicateBaseRecord: WebExpand<msdyn_requirementgroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementgroup_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementgroup_DuplicateMatchingRecord: WebExpand<msdyn_requirementgroup_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_requirementgroup_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_requirementgroup_MailboxTrackingFolders: WebExpand<msdyn_requirementgroup_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_requirementgroup_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_requirementgroup_PrincipalObjectAttributeAccesses: WebExpand<msdyn_requirementgroup_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_requirementgroup_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_requirementgroup_ProcessSession: WebExpand<msdyn_requirementgroup_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_requirementgroup_ProcessSession: ProcessSession_Result[] }>;
  msdyn_requirementgroup_SyncErrors: WebExpand<msdyn_requirementgroup_Expand, SyncError_Select, SyncError_Filter, { msdyn_requirementgroup_SyncErrors: SyncError_Result[] }>;
  msdyn_requirementgroup_UserEntityInstanceDatas: WebExpand<msdyn_requirementgroup_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_requirementgroup_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_requirementgroup_bookableresourcebooking_requirementgroupid: WebExpand<msdyn_requirementgroup_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_requirementgroup_bookableresourcebooking_requirementgroupid: BookableResourceBooking_Result[] }>;
  msdyn_requirementgroup_incidenttype_reqgroup: WebExpand<msdyn_requirementgroup_Expand, msdyn_incidenttype_requirementgroup_Select, msdyn_incidenttype_requirementgroup_Filter, { msdyn_requirementgroup_incidenttype_reqgroup: msdyn_incidenttype_requirementgroup_Result[] }>;
  msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid: WebExpand<msdyn_requirementgroup_Expand, msdyn_requirementgroup_Select, msdyn_requirementgroup_Filter, { msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid: msdyn_requirementgroup_Result[] }>;
  msdyn_requirementgroup_requirementrelationship_requirementgroupid: WebExpand<msdyn_requirementgroup_Expand, msdyn_requirementrelationship_Select, msdyn_requirementrelationship_Filter, { msdyn_requirementgroup_requirementrelationship_requirementgroupid: msdyn_requirementrelationship_Result[] }>;
  msdyn_requirementgroup_resourcerequirement_requirementgroupid: WebExpand<msdyn_requirementgroup_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_requirementgroup_resourcerequirement_requirementgroupid: msdyn_resourcerequirement_Result[] }>;
  msdyn_requirementgroup_service: WebExpand<msdyn_requirementgroup_Expand, Service_Select, Service_Filter, { msdyn_requirementgroup_service: Service_Result[] }>;
  msdyn_requirementgrouptemplateid: WebExpand<msdyn_requirementgroup_Expand, msdyn_requirementgroup_Select, msdyn_requirementgroup_Filter, { msdyn_requirementgrouptemplateid: msdyn_requirementgroup_Result }>;
  ownerid: WebExpand<msdyn_requirementgroup_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_requirementgroup_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_requirementgroup_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_requirementgroup_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_requirementgroup_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_autogrouptype_formatted?: string;
  msdyn_requirementgrouptemplateid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_requirementgroup_Result extends msdyn_requirementgroup_Base, msdyn_requirementgroup_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_requirementgrouptemplateid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_requirementgroup_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_requirementgrouptemplateid: WebMappingRetrieve<msdyn_requirementgroup_Select,msdyn_requirementgroup_Expand,msdyn_requirementgroup_Filter,msdyn_requirementgroup_Fixed,msdyn_requirementgroup_Result,msdyn_requirementgroup_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_requirementgroup_RelatedMany {
  msdyn_requirementgroup_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_requirementgroup_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_requirementgroup_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementgroup_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_requirementgroup_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_requirementgroup_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_requirementgroup_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_requirementgroup_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_requirementgroup_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_requirementgroup_bookableresourcebooking_requirementgroupid: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_requirementgroup_incidenttype_reqgroup: WebMappingRetrieve<msdyn_incidenttype_requirementgroup_Select,msdyn_incidenttype_requirementgroup_Expand,msdyn_incidenttype_requirementgroup_Filter,msdyn_incidenttype_requirementgroup_Fixed,msdyn_incidenttype_requirementgroup_Result,msdyn_incidenttype_requirementgroup_FormattedResult>;
  msdyn_requirementgroup_requirementgroup_requirementgrouptemplateid: WebMappingRetrieve<msdyn_requirementgroup_Select,msdyn_requirementgroup_Expand,msdyn_requirementgroup_Filter,msdyn_requirementgroup_Fixed,msdyn_requirementgroup_Result,msdyn_requirementgroup_FormattedResult>;
  msdyn_requirementgroup_requirementrelationship_requirementgroupid: WebMappingRetrieve<msdyn_requirementrelationship_Select,msdyn_requirementrelationship_Expand,msdyn_requirementrelationship_Filter,msdyn_requirementrelationship_Fixed,msdyn_requirementrelationship_Result,msdyn_requirementrelationship_FormattedResult>;
  msdyn_requirementgroup_resourcerequirement_requirementgroupid: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
  msdyn_requirementgroup_service: WebMappingRetrieve<Service_Select,Service_Expand,Service_Filter,Service_Fixed,Service_Result,Service_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_requirementgroups: WebMappingRetrieve<msdyn_requirementgroup_Select,msdyn_requirementgroup_Expand,msdyn_requirementgroup_Filter,msdyn_requirementgroup_Fixed,msdyn_requirementgroup_Result,msdyn_requirementgroup_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_requirementgroups: WebMappingRelated<msdyn_requirementgroup_RelatedOne,msdyn_requirementgroup_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_requirementgroups: WebMappingCUDA<msdyn_requirementgroup_Create,msdyn_requirementgroup_Update,msdyn_requirementgroup_Select>;
}
