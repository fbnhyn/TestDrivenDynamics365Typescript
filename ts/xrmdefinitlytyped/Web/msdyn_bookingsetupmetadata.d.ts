interface msdyn_bookingsetupmetadata_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_availabledurationminimumpercentage?: number | null;
  msdyn_bookingrelationshiplogicalname?: string | null;
  msdyn_bookingsetupmetadataid?: string | null;
  msdyn_bookingstatusfieldlogicalname?: string | null;
  msdyn_cancelbookingswhenmoving?: boolean | null;
  msdyn_defaultbookingduration?: number | null;
  msdyn_disablerequirementautocreation?: boolean | null;
  msdyn_enablequickbook?: boolean | null;
  msdyn_entitylogicalname?: string | null;
  msdyn_requirementrelationshiplogicalname?: string | null;
  msdyn_resourceavailabilityretrievallimit?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bookingsetupmetadata_statecode | null;
  statuscode?: msdyn_bookingsetupmetadata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bookingsetupmetadata_Relationships {
  msdyn_CloneEntityQuery?: msdyn_Configuration_Result | null;
  msdyn_DefaultBookingCanceledStatus?: BookingStatus_Result | null;
  msdyn_DefaultBookingCommittedStatus?: BookingStatus_Result | null;
  msdyn_DefaultRequirementActiveStatus?: msdyn_requirementstatus_Result | null;
  msdyn_DefaultRequirementCanceledStatus?: msdyn_requirementstatus_Result | null;
  msdyn_DefaultRequirementCompletedStatus?: msdyn_requirementstatus_Result | null;
  msdyn_RetrieveConstraintsQuery?: msdyn_Configuration_Result | null;
  msdyn_RetrieveResourcesQuery?: msdyn_Configuration_Result | null;
  msdyn_bookingsetupmetadata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bookingsetupmetadata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bookingsetupmetadata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bookingsetupmetadata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bookingsetupmetadata_SyncErrors?: SyncError_Result[] | null;
  msdyn_bookingsetupmetadata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_msdyn_bookingsetupmetadata_bookableresour?: BookableResourceBooking_Result[] | null;
  msdyn_msdyn_bookingsetupmetadata_msdyn_resource?: msdyn_resourcerequirement_Result[] | null;
}
interface msdyn_bookingsetupmetadata extends msdyn_bookingsetupmetadata_Base, msdyn_bookingsetupmetadata_Relationships {
  msdyn_CloneEntityQuery_bind$msdyn_configurations?: string | null;
  msdyn_DefaultBookingCanceledStatus_bind$bookingstatuses?: string | null;
  msdyn_DefaultBookingCommittedStatus_bind$bookingstatuses?: string | null;
  msdyn_DefaultRequirementActiveStatus_bind$msdyn_requirementstatuses?: string | null;
  msdyn_DefaultRequirementCanceledStatus_bind$msdyn_requirementstatuses?: string | null;
  msdyn_DefaultRequirementCompletedStatus_bind$msdyn_requirementstatuses?: string | null;
  msdyn_RetrieveConstraintsQuery_bind$msdyn_configurations?: string | null;
  msdyn_RetrieveResourcesQuery_bind$msdyn_configurations?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_bookingsetupmetadata_Create extends msdyn_bookingsetupmetadata {
}
interface msdyn_bookingsetupmetadata_Update extends msdyn_bookingsetupmetadata {
}
interface msdyn_bookingsetupmetadata_Select {
  createdby_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bookingsetupmetadata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_bookingsetupmetadata_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bookingsetupmetadata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_availabledurationminimumpercentage: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_availabledurationminimumpercentage: number | null }, {  }>;
  msdyn_bookingrelationshiplogicalname: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_bookingrelationshiplogicalname: string | null }, {  }>;
  msdyn_bookingsetupmetadataid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_bookingsetupmetadataid: string | null }, {  }>;
  msdyn_bookingstatusfieldlogicalname: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_bookingstatusfieldlogicalname: string | null }, {  }>;
  msdyn_cancelbookingswhenmoving: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_cancelbookingswhenmoving: boolean | null }, {  }>;
  msdyn_cloneentityquery_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_cloneentityquery_guid: string | null }, { msdyn_cloneentityquery_formatted?: string }>;
  msdyn_defaultbookingcanceledstatus_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_defaultbookingcanceledstatus_guid: string | null }, { msdyn_defaultbookingcanceledstatus_formatted?: string }>;
  msdyn_defaultbookingcommittedstatus_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_defaultbookingcommittedstatus_guid: string | null }, { msdyn_defaultbookingcommittedstatus_formatted?: string }>;
  msdyn_defaultbookingduration: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_defaultbookingduration: number | null }, {  }>;
  msdyn_defaultrequirementactivestatus_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_defaultrequirementactivestatus_guid: string | null }, { msdyn_defaultrequirementactivestatus_formatted?: string }>;
  msdyn_defaultrequirementcanceledstatus_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_defaultrequirementcanceledstatus_guid: string | null }, { msdyn_defaultrequirementcanceledstatus_formatted?: string }>;
  msdyn_defaultrequirementcompletedstatus_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_defaultrequirementcompletedstatus_guid: string | null }, { msdyn_defaultrequirementcompletedstatus_formatted?: string }>;
  msdyn_disablerequirementautocreation: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_disablerequirementautocreation: boolean | null }, {  }>;
  msdyn_enablequickbook: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_enablequickbook: boolean | null }, {  }>;
  msdyn_entitylogicalname: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_entitylogicalname: string | null }, {  }>;
  msdyn_requirementrelationshiplogicalname: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_requirementrelationshiplogicalname: string | null }, {  }>;
  msdyn_resourceavailabilityretrievallimit: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_resourceavailabilityretrievallimit: number | null }, {  }>;
  msdyn_retrieveconstraintsquery_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_retrieveconstraintsquery_guid: string | null }, { msdyn_retrieveconstraintsquery_formatted?: string }>;
  msdyn_retrieveresourcesquery_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { msdyn_retrieveresourcesquery_guid: string | null }, { msdyn_retrieveresourcesquery_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_bookingsetupmetadata_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_bookingsetupmetadata_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_bookingsetupmetadata_Select, { statecode: msdyn_bookingsetupmetadata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bookingsetupmetadata_Select, { statuscode: msdyn_bookingsetupmetadata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bookingsetupmetadata_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bookingsetupmetadata_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bookingsetupmetadata_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bookingsetupmetadata_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_availabledurationminimumpercentage: number;
  msdyn_bookingrelationshiplogicalname: string;
  msdyn_bookingsetupmetadataid: XQW.Guid;
  msdyn_bookingstatusfieldlogicalname: string;
  msdyn_cancelbookingswhenmoving: boolean;
  msdyn_cloneentityquery_guid: XQW.Guid;
  msdyn_defaultbookingcanceledstatus_guid: XQW.Guid;
  msdyn_defaultbookingcommittedstatus_guid: XQW.Guid;
  msdyn_defaultbookingduration: number;
  msdyn_defaultrequirementactivestatus_guid: XQW.Guid;
  msdyn_defaultrequirementcanceledstatus_guid: XQW.Guid;
  msdyn_defaultrequirementcompletedstatus_guid: XQW.Guid;
  msdyn_disablerequirementautocreation: boolean;
  msdyn_enablequickbook: boolean;
  msdyn_entitylogicalname: string;
  msdyn_requirementrelationshiplogicalname: string;
  msdyn_resourceavailabilityretrievallimit: number;
  msdyn_retrieveconstraintsquery_guid: XQW.Guid;
  msdyn_retrieveresourcesquery_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_bookingsetupmetadata_statecode;
  statuscode: msdyn_bookingsetupmetadata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bookingsetupmetadata_Expand {
  createdby: WebExpand<msdyn_bookingsetupmetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bookingsetupmetadata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bookingsetupmetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bookingsetupmetadata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_CloneEntityQuery: WebExpand<msdyn_bookingsetupmetadata_Expand, msdyn_Configuration_Select, msdyn_Configuration_Filter, { msdyn_CloneEntityQuery: msdyn_Configuration_Result }>;
  msdyn_DefaultBookingCanceledStatus: WebExpand<msdyn_bookingsetupmetadata_Expand, BookingStatus_Select, BookingStatus_Filter, { msdyn_DefaultBookingCanceledStatus: BookingStatus_Result }>;
  msdyn_DefaultBookingCommittedStatus: WebExpand<msdyn_bookingsetupmetadata_Expand, BookingStatus_Select, BookingStatus_Filter, { msdyn_DefaultBookingCommittedStatus: BookingStatus_Result }>;
  msdyn_DefaultRequirementActiveStatus: WebExpand<msdyn_bookingsetupmetadata_Expand, msdyn_requirementstatus_Select, msdyn_requirementstatus_Filter, { msdyn_DefaultRequirementActiveStatus: msdyn_requirementstatus_Result }>;
  msdyn_DefaultRequirementCanceledStatus: WebExpand<msdyn_bookingsetupmetadata_Expand, msdyn_requirementstatus_Select, msdyn_requirementstatus_Filter, { msdyn_DefaultRequirementCanceledStatus: msdyn_requirementstatus_Result }>;
  msdyn_DefaultRequirementCompletedStatus: WebExpand<msdyn_bookingsetupmetadata_Expand, msdyn_requirementstatus_Select, msdyn_requirementstatus_Filter, { msdyn_DefaultRequirementCompletedStatus: msdyn_requirementstatus_Result }>;
  msdyn_RetrieveConstraintsQuery: WebExpand<msdyn_bookingsetupmetadata_Expand, msdyn_Configuration_Select, msdyn_Configuration_Filter, { msdyn_RetrieveConstraintsQuery: msdyn_Configuration_Result }>;
  msdyn_RetrieveResourcesQuery: WebExpand<msdyn_bookingsetupmetadata_Expand, msdyn_Configuration_Select, msdyn_Configuration_Filter, { msdyn_RetrieveResourcesQuery: msdyn_Configuration_Result }>;
  msdyn_bookingsetupmetadata_AsyncOperations: WebExpand<msdyn_bookingsetupmetadata_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bookingsetupmetadata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bookingsetupmetadata_BulkDeleteFailures: WebExpand<msdyn_bookingsetupmetadata_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bookingsetupmetadata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bookingsetupmetadata_MailboxTrackingFolders: WebExpand<msdyn_bookingsetupmetadata_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bookingsetupmetadata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bookingsetupmetadata_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bookingsetupmetadata_ProcessSession: WebExpand<msdyn_bookingsetupmetadata_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bookingsetupmetadata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bookingsetupmetadata_SyncErrors: WebExpand<msdyn_bookingsetupmetadata_Expand, SyncError_Select, SyncError_Filter, { msdyn_bookingsetupmetadata_SyncErrors: SyncError_Result[] }>;
  msdyn_bookingsetupmetadata_UserEntityInstanceDatas: WebExpand<msdyn_bookingsetupmetadata_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bookingsetupmetadata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_msdyn_bookingsetupmetadata_bookableresour: WebExpand<msdyn_bookingsetupmetadata_Expand, BookableResourceBooking_Select, BookableResourceBooking_Filter, { msdyn_msdyn_bookingsetupmetadata_bookableresour: BookableResourceBooking_Result[] }>;
  msdyn_msdyn_bookingsetupmetadata_msdyn_resource: WebExpand<msdyn_bookingsetupmetadata_Expand, msdyn_resourcerequirement_Select, msdyn_resourcerequirement_Filter, { msdyn_msdyn_bookingsetupmetadata_msdyn_resource: msdyn_resourcerequirement_Result[] }>;
  ownerid: WebExpand<msdyn_bookingsetupmetadata_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_bookingsetupmetadata_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_bookingsetupmetadata_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_bookingsetupmetadata_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_bookingsetupmetadata_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_cloneentityquery_formatted?: string;
  msdyn_defaultbookingcanceledstatus_formatted?: string;
  msdyn_defaultbookingcommittedstatus_formatted?: string;
  msdyn_defaultrequirementactivestatus_formatted?: string;
  msdyn_defaultrequirementcanceledstatus_formatted?: string;
  msdyn_defaultrequirementcompletedstatus_formatted?: string;
  msdyn_retrieveconstraintsquery_formatted?: string;
  msdyn_retrieveresourcesquery_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_bookingsetupmetadata_Result extends msdyn_bookingsetupmetadata_Base, msdyn_bookingsetupmetadata_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_cloneentityquery_guid: string | null;
  msdyn_defaultbookingcanceledstatus_guid: string | null;
  msdyn_defaultbookingcommittedstatus_guid: string | null;
  msdyn_defaultrequirementactivestatus_guid: string | null;
  msdyn_defaultrequirementcanceledstatus_guid: string | null;
  msdyn_defaultrequirementcompletedstatus_guid: string | null;
  msdyn_retrieveconstraintsquery_guid: string | null;
  msdyn_retrieveresourcesquery_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_bookingsetupmetadata_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_CloneEntityQuery: WebMappingRetrieve<msdyn_Configuration_Select,msdyn_Configuration_Expand,msdyn_Configuration_Filter,msdyn_Configuration_Fixed,msdyn_Configuration_Result,msdyn_Configuration_FormattedResult>;
  msdyn_DefaultBookingCanceledStatus: WebMappingRetrieve<BookingStatus_Select,BookingStatus_Expand,BookingStatus_Filter,BookingStatus_Fixed,BookingStatus_Result,BookingStatus_FormattedResult>;
  msdyn_DefaultBookingCommittedStatus: WebMappingRetrieve<BookingStatus_Select,BookingStatus_Expand,BookingStatus_Filter,BookingStatus_Fixed,BookingStatus_Result,BookingStatus_FormattedResult>;
  msdyn_DefaultRequirementActiveStatus: WebMappingRetrieve<msdyn_requirementstatus_Select,msdyn_requirementstatus_Expand,msdyn_requirementstatus_Filter,msdyn_requirementstatus_Fixed,msdyn_requirementstatus_Result,msdyn_requirementstatus_FormattedResult>;
  msdyn_DefaultRequirementCanceledStatus: WebMappingRetrieve<msdyn_requirementstatus_Select,msdyn_requirementstatus_Expand,msdyn_requirementstatus_Filter,msdyn_requirementstatus_Fixed,msdyn_requirementstatus_Result,msdyn_requirementstatus_FormattedResult>;
  msdyn_DefaultRequirementCompletedStatus: WebMappingRetrieve<msdyn_requirementstatus_Select,msdyn_requirementstatus_Expand,msdyn_requirementstatus_Filter,msdyn_requirementstatus_Fixed,msdyn_requirementstatus_Result,msdyn_requirementstatus_FormattedResult>;
  msdyn_RetrieveConstraintsQuery: WebMappingRetrieve<msdyn_Configuration_Select,msdyn_Configuration_Expand,msdyn_Configuration_Filter,msdyn_Configuration_Fixed,msdyn_Configuration_Result,msdyn_Configuration_FormattedResult>;
  msdyn_RetrieveResourcesQuery: WebMappingRetrieve<msdyn_Configuration_Select,msdyn_Configuration_Expand,msdyn_Configuration_Filter,msdyn_Configuration_Fixed,msdyn_Configuration_Result,msdyn_Configuration_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_bookingsetupmetadata_RelatedMany {
  msdyn_bookingsetupmetadata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bookingsetupmetadata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bookingsetupmetadata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bookingsetupmetadata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bookingsetupmetadata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bookingsetupmetadata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bookingsetupmetadata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_msdyn_bookingsetupmetadata_bookableresour: WebMappingRetrieve<BookableResourceBooking_Select,BookableResourceBooking_Expand,BookableResourceBooking_Filter,BookableResourceBooking_Fixed,BookableResourceBooking_Result,BookableResourceBooking_FormattedResult>;
  msdyn_msdyn_bookingsetupmetadata_msdyn_resource: WebMappingRetrieve<msdyn_resourcerequirement_Select,msdyn_resourcerequirement_Expand,msdyn_resourcerequirement_Filter,msdyn_resourcerequirement_Fixed,msdyn_resourcerequirement_Result,msdyn_resourcerequirement_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bookingsetupmetadatas: WebMappingRetrieve<msdyn_bookingsetupmetadata_Select,msdyn_bookingsetupmetadata_Expand,msdyn_bookingsetupmetadata_Filter,msdyn_bookingsetupmetadata_Fixed,msdyn_bookingsetupmetadata_Result,msdyn_bookingsetupmetadata_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bookingsetupmetadatas: WebMappingRelated<msdyn_bookingsetupmetadata_RelatedOne,msdyn_bookingsetupmetadata_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bookingsetupmetadatas: WebMappingCUDA<msdyn_bookingsetupmetadata_Create,msdyn_bookingsetupmetadata_Update,msdyn_bookingsetupmetadata_Select>;
}
