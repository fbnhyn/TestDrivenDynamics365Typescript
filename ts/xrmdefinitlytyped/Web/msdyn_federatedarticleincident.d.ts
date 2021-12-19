interface msdyn_federatedarticleincident_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_federatedarticleincidentid?: string | null;
  msdyn_name?: string | null;
  msdyn_searchproviderarticleid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_federatedarticleincident_statecode | null;
  statuscode?: msdyn_federatedarticleincident_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_federatedarticleincident_Relationships {
  msdyn_federatedarticleincident_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_federatedarticleincident_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_federatedarticleincident_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_federatedarticleincident_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_federatedarticleincident_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_federatedarticleincident_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_federatedarticleincident_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_federatedarticleincident_SyncErrors?: SyncError_Result[] | null;
  msdyn_federatedarticleincident_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_federatedarticleincident extends msdyn_federatedarticleincident_Base, msdyn_federatedarticleincident_Relationships {
  msdyn_federatedarticleid_bind$msdyn_federatedarticles?: string | null;
  msdyn_incidentid_bind$incidents?: string | null;
}
interface msdyn_federatedarticleincident_Create extends msdyn_federatedarticleincident {
}
interface msdyn_federatedarticleincident_Update extends msdyn_federatedarticleincident {
}
interface msdyn_federatedarticleincident_Select {
  createdby_guid: WebAttribute<msdyn_federatedarticleincident_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_federatedarticleincident_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_federatedarticleincident_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_federatedarticleincident_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_federatedarticleincident_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_federatedarticleincident_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_federatedarticleincident_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_federatedarticleid_guid: WebAttribute<msdyn_federatedarticleincident_Select, { msdyn_federatedarticleid_guid: string | null }, { msdyn_federatedarticleid_formatted?: string }>;
  msdyn_federatedarticleincidentid: WebAttribute<msdyn_federatedarticleincident_Select, { msdyn_federatedarticleincidentid: string | null }, {  }>;
  msdyn_incidentid_guid: WebAttribute<msdyn_federatedarticleincident_Select, { msdyn_incidentid_guid: string | null }, { msdyn_incidentid_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_federatedarticleincident_Select, { msdyn_name: string | null }, {  }>;
  msdyn_searchproviderarticleid: WebAttribute<msdyn_federatedarticleincident_Select, { msdyn_searchproviderarticleid: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_federatedarticleincident_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_federatedarticleincident_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_federatedarticleincident_Select, { statecode: msdyn_federatedarticleincident_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_federatedarticleincident_Select, { statuscode: msdyn_federatedarticleincident_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_federatedarticleincident_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_federatedarticleincident_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_federatedarticleincident_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_federatedarticleincident_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_federatedarticleid_guid: XQW.Guid;
  msdyn_federatedarticleincidentid: XQW.Guid;
  msdyn_incidentid_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_searchproviderarticleid: string;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_federatedarticleincident_statecode;
  statuscode: msdyn_federatedarticleincident_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_federatedarticleincident_Expand {
  createdby: WebExpand<msdyn_federatedarticleincident_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_federatedarticleincident_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_federatedarticleincident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_federatedarticleincident_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_federatedarticleid: WebExpand<msdyn_federatedarticleincident_Expand, msdyn_federatedarticle_Select, msdyn_federatedarticle_Filter, { msdyn_federatedarticleid: msdyn_federatedarticle_Result }>;
  msdyn_federatedarticleincident_AsyncOperations: WebExpand<msdyn_federatedarticleincident_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_federatedarticleincident_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_federatedarticleincident_BulkDeleteFailures: WebExpand<msdyn_federatedarticleincident_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_federatedarticleincident_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_federatedarticleincident_DuplicateBaseRecord: WebExpand<msdyn_federatedarticleincident_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_federatedarticleincident_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_federatedarticleincident_DuplicateMatchingRecord: WebExpand<msdyn_federatedarticleincident_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_federatedarticleincident_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_federatedarticleincident_MailboxTrackingFolders: WebExpand<msdyn_federatedarticleincident_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_federatedarticleincident_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_federatedarticleincident_PrincipalObjectAttributeAccesses: WebExpand<msdyn_federatedarticleincident_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_federatedarticleincident_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_federatedarticleincident_ProcessSession: WebExpand<msdyn_federatedarticleincident_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_federatedarticleincident_ProcessSession: ProcessSession_Result[] }>;
  msdyn_federatedarticleincident_SyncErrors: WebExpand<msdyn_federatedarticleincident_Expand, SyncError_Select, SyncError_Filter, { msdyn_federatedarticleincident_SyncErrors: SyncError_Result[] }>;
  msdyn_federatedarticleincident_UserEntityInstanceDatas: WebExpand<msdyn_federatedarticleincident_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_federatedarticleincident_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_incidentid: WebExpand<msdyn_federatedarticleincident_Expand, Incident_Select, Incident_Filter, { msdyn_incidentid: Incident_Result }>;
  organizationid: WebExpand<msdyn_federatedarticleincident_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_federatedarticleincident_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_federatedarticleid_formatted?: string;
  msdyn_incidentid_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_federatedarticleincident_Result extends msdyn_federatedarticleincident_Base, msdyn_federatedarticleincident_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_federatedarticleid_guid: string | null;
  msdyn_incidentid_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_federatedarticleincident_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_federatedarticleid: WebMappingRetrieve<msdyn_federatedarticle_Select,msdyn_federatedarticle_Expand,msdyn_federatedarticle_Filter,msdyn_federatedarticle_Fixed,msdyn_federatedarticle_Result,msdyn_federatedarticle_FormattedResult>;
  msdyn_incidentid: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_federatedarticleincident_RelatedMany {
  msdyn_federatedarticleincident_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_federatedarticleincident_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_federatedarticleincident_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_federatedarticleincident_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_federatedarticleincident_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_federatedarticleincident_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_federatedarticleincident_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_federatedarticleincident_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_federatedarticleincident_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_federatedarticleincidents: WebMappingRetrieve<msdyn_federatedarticleincident_Select,msdyn_federatedarticleincident_Expand,msdyn_federatedarticleincident_Filter,msdyn_federatedarticleincident_Fixed,msdyn_federatedarticleincident_Result,msdyn_federatedarticleincident_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_federatedarticleincidents: WebMappingRelated<msdyn_federatedarticleincident_RelatedOne,msdyn_federatedarticleincident_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_federatedarticleincidents: WebMappingCUDA<msdyn_federatedarticleincident_Create,msdyn_federatedarticleincident_Update,msdyn_federatedarticleincident_Select>;
}
