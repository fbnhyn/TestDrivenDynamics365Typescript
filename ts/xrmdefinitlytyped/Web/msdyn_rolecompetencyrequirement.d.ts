interface msdyn_rolecompetencyrequirement_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_characteristictype?: bookableresourcecharacteristictype | null;
  msdyn_name?: string | null;
  msdyn_rolecompetencyrequirementid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_rolecompetencyrequirement_statecode | null;
  statuscode?: msdyn_rolecompetencyrequirement_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_rolecompetencyrequirement_Relationships {
  msdyn_rolecompetencyrequirement_Annotations?: Annotation_Result[] | null;
  msdyn_rolecompetencyrequirement_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_rolecompetencyrequirement_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_rolecompetencyrequirement_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_rolecompetencyrequirement_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_rolecompetencyrequirement_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_rolecompetencyrequirement_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_rolecompetencyrequirement_SyncErrors?: SyncError_Result[] | null;
  msdyn_rolecompetencyrequirement_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_rolecompetencyrequirement extends msdyn_rolecompetencyrequirement_Base, msdyn_rolecompetencyrequirement_Relationships {
  msdyn_characteristic_bind$characteristics?: string | null;
  msdyn_ratingvalue_bind$ratingvalues?: string | null;
  msdyn_resourcecategory_bind$bookableresourcecategories?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_rolecompetencyrequirement_Create extends msdyn_rolecompetencyrequirement {
}
interface msdyn_rolecompetencyrequirement_Update extends msdyn_rolecompetencyrequirement {
}
interface msdyn_rolecompetencyrequirement_Select {
  createdby_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_rolecompetencyrequirement_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_rolecompetencyrequirement_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_rolecompetencyrequirement_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_characteristic_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { msdyn_characteristic_guid: string | null }, { msdyn_characteristic_formatted?: string }>;
  msdyn_characteristictype: WebAttribute<msdyn_rolecompetencyrequirement_Select, { msdyn_characteristictype: bookableresourcecharacteristictype | null }, { msdyn_characteristictype_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_rolecompetencyrequirement_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ratingvalue_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { msdyn_ratingvalue_guid: string | null }, { msdyn_ratingvalue_formatted?: string }>;
  msdyn_resourcecategory_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { msdyn_resourcecategory_guid: string | null }, { msdyn_resourcecategory_formatted?: string }>;
  msdyn_rolecompetencyrequirementid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { msdyn_rolecompetencyrequirementid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_rolecompetencyrequirement_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_rolecompetencyrequirement_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_rolecompetencyrequirement_Select, { statecode: msdyn_rolecompetencyrequirement_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_rolecompetencyrequirement_Select, { statuscode: msdyn_rolecompetencyrequirement_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_rolecompetencyrequirement_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_rolecompetencyrequirement_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_rolecompetencyrequirement_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_rolecompetencyrequirement_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_characteristic_guid: XQW.Guid;
  msdyn_characteristictype: bookableresourcecharacteristictype;
  msdyn_name: string;
  msdyn_ratingvalue_guid: XQW.Guid;
  msdyn_resourcecategory_guid: XQW.Guid;
  msdyn_rolecompetencyrequirementid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_rolecompetencyrequirement_statecode;
  statuscode: msdyn_rolecompetencyrequirement_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_rolecompetencyrequirement_Expand {
  createdby: WebExpand<msdyn_rolecompetencyrequirement_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_rolecompetencyrequirement_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_rolecompetencyrequirement_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_rolecompetencyrequirement_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_characteristic: WebExpand<msdyn_rolecompetencyrequirement_Expand, Characteristic_Select, Characteristic_Filter, { msdyn_characteristic: Characteristic_Result }>;
  msdyn_ratingvalue: WebExpand<msdyn_rolecompetencyrequirement_Expand, RatingValue_Select, RatingValue_Filter, { msdyn_ratingvalue: RatingValue_Result }>;
  msdyn_resourcecategory: WebExpand<msdyn_rolecompetencyrequirement_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_resourcecategory: BookableResourceCategory_Result }>;
  msdyn_rolecompetencyrequirement_Annotations: WebExpand<msdyn_rolecompetencyrequirement_Expand, Annotation_Select, Annotation_Filter, { msdyn_rolecompetencyrequirement_Annotations: Annotation_Result[] }>;
  msdyn_rolecompetencyrequirement_AsyncOperations: WebExpand<msdyn_rolecompetencyrequirement_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_rolecompetencyrequirement_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_rolecompetencyrequirement_BulkDeleteFailures: WebExpand<msdyn_rolecompetencyrequirement_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_rolecompetencyrequirement_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_rolecompetencyrequirement_DuplicateBaseRecord: WebExpand<msdyn_rolecompetencyrequirement_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rolecompetencyrequirement_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_rolecompetencyrequirement_DuplicateMatchingRecord: WebExpand<msdyn_rolecompetencyrequirement_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_rolecompetencyrequirement_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_rolecompetencyrequirement_MailboxTrackingFolders: WebExpand<msdyn_rolecompetencyrequirement_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_rolecompetencyrequirement_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses: WebExpand<msdyn_rolecompetencyrequirement_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_rolecompetencyrequirement_ProcessSession: WebExpand<msdyn_rolecompetencyrequirement_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_rolecompetencyrequirement_ProcessSession: ProcessSession_Result[] }>;
  msdyn_rolecompetencyrequirement_SyncErrors: WebExpand<msdyn_rolecompetencyrequirement_Expand, SyncError_Select, SyncError_Filter, { msdyn_rolecompetencyrequirement_SyncErrors: SyncError_Result[] }>;
  msdyn_rolecompetencyrequirement_UserEntityInstanceDatas: WebExpand<msdyn_rolecompetencyrequirement_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_rolecompetencyrequirement_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_rolecompetencyrequirement_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_rolecompetencyrequirement_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_rolecompetencyrequirement_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_rolecompetencyrequirement_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_rolecompetencyrequirement_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_characteristic_formatted?: string;
  msdyn_characteristictype_formatted?: string;
  msdyn_ratingvalue_formatted?: string;
  msdyn_resourcecategory_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_rolecompetencyrequirement_Result extends msdyn_rolecompetencyrequirement_Base, msdyn_rolecompetencyrequirement_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_characteristic_guid: string | null;
  msdyn_ratingvalue_guid: string | null;
  msdyn_resourcecategory_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_rolecompetencyrequirement_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_characteristic: WebMappingRetrieve<Characteristic_Select,Characteristic_Expand,Characteristic_Filter,Characteristic_Fixed,Characteristic_Result,Characteristic_FormattedResult>;
  msdyn_ratingvalue: WebMappingRetrieve<RatingValue_Select,RatingValue_Expand,RatingValue_Filter,RatingValue_Fixed,RatingValue_Result,RatingValue_FormattedResult>;
  msdyn_resourcecategory: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_rolecompetencyrequirement_RelatedMany {
  msdyn_rolecompetencyrequirement_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_rolecompetencyrequirement_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_rolecompetencyrequirement_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_rolecompetencyrequirement_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rolecompetencyrequirement_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_rolecompetencyrequirement_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_rolecompetencyrequirement_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_rolecompetencyrequirement_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_rolecompetencyrequirement_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_rolecompetencyrequirement_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_rolecompetencyrequirements: WebMappingRetrieve<msdyn_rolecompetencyrequirement_Select,msdyn_rolecompetencyrequirement_Expand,msdyn_rolecompetencyrequirement_Filter,msdyn_rolecompetencyrequirement_Fixed,msdyn_rolecompetencyrequirement_Result,msdyn_rolecompetencyrequirement_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_rolecompetencyrequirements: WebMappingRelated<msdyn_rolecompetencyrequirement_RelatedOne,msdyn_rolecompetencyrequirement_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_rolecompetencyrequirements: WebMappingCUDA<msdyn_rolecompetencyrequirement_Create,msdyn_rolecompetencyrequirement_Update,msdyn_rolecompetencyrequirement_Select>;
}
