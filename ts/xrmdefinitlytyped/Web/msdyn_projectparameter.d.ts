interface msdyn_projectparameter_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_allowskillupdatebyresource?: boolean | null;
  msdyn_backgroundapprovalthreshold?: number | null;
  msdyn_description?: string | null;
  msdyn_pricelistdefaultingiscurrencyagnostic?: boolean | null;
  msdyn_projectparameterid?: string | null;
  msdyn_projectresourcerequirementsvisibletore?: boolean | null;
  msdyn_resourceallocationmode?: msdyn_projectparameter_msdyn_resourceallocationmode | null;
  msdyn_upgradebatchsize?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_projectparameter_statecode | null;
  statuscode?: msdyn_projectparameter_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_projectparameter_Relationships {
  msdyn_defaultWorkTemplate?: msdyn_workhourtemplate_Result | null;
  msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter?: msdyn_projectparameterpricelist_Result[] | null;
  msdyn_projectparameter_Annotations?: Annotation_Result[] | null;
  msdyn_projectparameter_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_projectparameter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_projectparameter_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_projectparameter_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_projectparameter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_projectparameter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_projectparameter_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_projectparameter_SyncErrors?: SyncError_Result[] | null;
  msdyn_projectparameter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_projectparameter extends msdyn_projectparameter_Base, msdyn_projectparameter_Relationships {
  msdyn_defaultWorkTemplate_bind$msdyn_workhourtemplates?: string | null;
  msdyn_defaultorganizationalunit_bind$msdyn_organizationalunits?: string | null;
  msdyn_invoicefrequency_bind$msdyn_invoicefrequencies?: string | null;
  msdyn_projectmanagerrole_bind$bookableresourcecategories?: string | null;
  msdyn_teammemberrole_bind$bookableresourcecategories?: string | null;
}
interface msdyn_projectparameter_Create extends msdyn_projectparameter {
}
interface msdyn_projectparameter_Update extends msdyn_projectparameter {
}
interface msdyn_projectparameter_Select {
  createdby_guid: WebAttribute<msdyn_projectparameter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_projectparameter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_projectparameter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_projectparameter_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_projectparameter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_projectparameter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_projectparameter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_allowskillupdatebyresource: WebAttribute<msdyn_projectparameter_Select, { msdyn_allowskillupdatebyresource: boolean | null }, {  }>;
  msdyn_backgroundapprovalthreshold: WebAttribute<msdyn_projectparameter_Select, { msdyn_backgroundapprovalthreshold: number | null }, {  }>;
  msdyn_defaultorganizationalunit_guid: WebAttribute<msdyn_projectparameter_Select, { msdyn_defaultorganizationalunit_guid: string | null }, { msdyn_defaultorganizationalunit_formatted?: string }>;
  msdyn_defaultworktemplate_guid: WebAttribute<msdyn_projectparameter_Select, { msdyn_defaultworktemplate_guid: string | null }, { msdyn_defaultworktemplate_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_projectparameter_Select, { msdyn_description: string | null }, {  }>;
  msdyn_invoicefrequency_guid: WebAttribute<msdyn_projectparameter_Select, { msdyn_invoicefrequency_guid: string | null }, { msdyn_invoicefrequency_formatted?: string }>;
  msdyn_pricelistdefaultingiscurrencyagnostic: WebAttribute<msdyn_projectparameter_Select, { msdyn_pricelistdefaultingiscurrencyagnostic: boolean | null }, {  }>;
  msdyn_projectmanagerrole_guid: WebAttribute<msdyn_projectparameter_Select, { msdyn_projectmanagerrole_guid: string | null }, { msdyn_projectmanagerrole_formatted?: string }>;
  msdyn_projectparameterid: WebAttribute<msdyn_projectparameter_Select, { msdyn_projectparameterid: string | null }, {  }>;
  msdyn_projectresourcerequirementsvisibletore: WebAttribute<msdyn_projectparameter_Select, { msdyn_projectresourcerequirementsvisibletore: boolean | null }, {  }>;
  msdyn_resourceallocationmode: WebAttribute<msdyn_projectparameter_Select, { msdyn_resourceallocationmode: msdyn_projectparameter_msdyn_resourceallocationmode | null }, { msdyn_resourceallocationmode_formatted?: string }>;
  msdyn_teammemberrole_guid: WebAttribute<msdyn_projectparameter_Select, { msdyn_teammemberrole_guid: string | null }, { msdyn_teammemberrole_formatted?: string }>;
  msdyn_upgradebatchsize: WebAttribute<msdyn_projectparameter_Select, { msdyn_upgradebatchsize: number | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_projectparameter_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_projectparameter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  statecode: WebAttribute<msdyn_projectparameter_Select, { statecode: msdyn_projectparameter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_projectparameter_Select, { statuscode: msdyn_projectparameter_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_projectparameter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_projectparameter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_projectparameter_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_projectparameter_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_allowskillupdatebyresource: boolean;
  msdyn_backgroundapprovalthreshold: number;
  msdyn_defaultorganizationalunit_guid: XQW.Guid;
  msdyn_defaultworktemplate_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_invoicefrequency_guid: XQW.Guid;
  msdyn_pricelistdefaultingiscurrencyagnostic: boolean;
  msdyn_projectmanagerrole_guid: XQW.Guid;
  msdyn_projectparameterid: XQW.Guid;
  msdyn_projectresourcerequirementsvisibletore: boolean;
  msdyn_resourceallocationmode: msdyn_projectparameter_msdyn_resourceallocationmode;
  msdyn_teammemberrole_guid: XQW.Guid;
  msdyn_upgradebatchsize: number;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  statecode: msdyn_projectparameter_statecode;
  statuscode: msdyn_projectparameter_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_projectparameter_Expand {
  createdby: WebExpand<msdyn_projectparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_projectparameter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_projectparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_projectparameter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_defaultWorkTemplate: WebExpand<msdyn_projectparameter_Expand, msdyn_workhourtemplate_Select, msdyn_workhourtemplate_Filter, { msdyn_defaultWorkTemplate: msdyn_workhourtemplate_Result }>;
  msdyn_defaultorganizationalunit: WebExpand<msdyn_projectparameter_Expand, msdyn_organizationalunit_Select, msdyn_organizationalunit_Filter, { msdyn_defaultorganizationalunit: msdyn_organizationalunit_Result }>;
  msdyn_invoicefrequency: WebExpand<msdyn_projectparameter_Expand, msdyn_invoicefrequency_Select, msdyn_invoicefrequency_Filter, { msdyn_invoicefrequency: msdyn_invoicefrequency_Result }>;
  msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter: WebExpand<msdyn_projectparameter_Expand, msdyn_projectparameterpricelist_Select, msdyn_projectparameterpricelist_Filter, { msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter: msdyn_projectparameterpricelist_Result[] }>;
  msdyn_projectmanagerrole: WebExpand<msdyn_projectparameter_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_projectmanagerrole: BookableResourceCategory_Result }>;
  msdyn_projectparameter_Annotations: WebExpand<msdyn_projectparameter_Expand, Annotation_Select, Annotation_Filter, { msdyn_projectparameter_Annotations: Annotation_Result[] }>;
  msdyn_projectparameter_AsyncOperations: WebExpand<msdyn_projectparameter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_projectparameter_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_projectparameter_BulkDeleteFailures: WebExpand<msdyn_projectparameter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_projectparameter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_projectparameter_DuplicateBaseRecord: WebExpand<msdyn_projectparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projectparameter_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_projectparameter_DuplicateMatchingRecord: WebExpand<msdyn_projectparameter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_projectparameter_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_projectparameter_MailboxTrackingFolders: WebExpand<msdyn_projectparameter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_projectparameter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_projectparameter_PrincipalObjectAttributeAccesses: WebExpand<msdyn_projectparameter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_projectparameter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_projectparameter_ProcessSession: WebExpand<msdyn_projectparameter_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_projectparameter_ProcessSession: ProcessSession_Result[] }>;
  msdyn_projectparameter_SyncErrors: WebExpand<msdyn_projectparameter_Expand, SyncError_Select, SyncError_Filter, { msdyn_projectparameter_SyncErrors: SyncError_Result[] }>;
  msdyn_projectparameter_UserEntityInstanceDatas: WebExpand<msdyn_projectparameter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_projectparameter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_teammemberrole: WebExpand<msdyn_projectparameter_Expand, BookableResourceCategory_Select, BookableResourceCategory_Filter, { msdyn_teammemberrole: BookableResourceCategory_Result }>;
  organizationid: WebExpand<msdyn_projectparameter_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface msdyn_projectparameter_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_defaultorganizationalunit_formatted?: string;
  msdyn_defaultworktemplate_formatted?: string;
  msdyn_invoicefrequency_formatted?: string;
  msdyn_projectmanagerrole_formatted?: string;
  msdyn_resourceallocationmode_formatted?: string;
  msdyn_teammemberrole_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_projectparameter_Result extends msdyn_projectparameter_Base, msdyn_projectparameter_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_defaultorganizationalunit_guid: string | null;
  msdyn_defaultworktemplate_guid: string | null;
  msdyn_invoicefrequency_guid: string | null;
  msdyn_projectmanagerrole_guid: string | null;
  msdyn_teammemberrole_guid: string | null;
  organizationid_guid: string | null;
}
interface msdyn_projectparameter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_defaultWorkTemplate: WebMappingRetrieve<msdyn_workhourtemplate_Select,msdyn_workhourtemplate_Expand,msdyn_workhourtemplate_Filter,msdyn_workhourtemplate_Fixed,msdyn_workhourtemplate_Result,msdyn_workhourtemplate_FormattedResult>;
  msdyn_defaultorganizationalunit: WebMappingRetrieve<msdyn_organizationalunit_Select,msdyn_organizationalunit_Expand,msdyn_organizationalunit_Filter,msdyn_organizationalunit_Fixed,msdyn_organizationalunit_Result,msdyn_organizationalunit_FormattedResult>;
  msdyn_invoicefrequency: WebMappingRetrieve<msdyn_invoicefrequency_Select,msdyn_invoicefrequency_Expand,msdyn_invoicefrequency_Filter,msdyn_invoicefrequency_Fixed,msdyn_invoicefrequency_Result,msdyn_invoicefrequency_FormattedResult>;
  msdyn_projectmanagerrole: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  msdyn_teammemberrole: WebMappingRetrieve<BookableResourceCategory_Select,BookableResourceCategory_Expand,BookableResourceCategory_Filter,BookableResourceCategory_Fixed,BookableResourceCategory_Result,BookableResourceCategory_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface msdyn_projectparameter_RelatedMany {
  msdyn_msdyn_projectparameter_msdyn_projectparameterpricelist_ProjectParameter: WebMappingRetrieve<msdyn_projectparameterpricelist_Select,msdyn_projectparameterpricelist_Expand,msdyn_projectparameterpricelist_Filter,msdyn_projectparameterpricelist_Fixed,msdyn_projectparameterpricelist_Result,msdyn_projectparameterpricelist_FormattedResult>;
  msdyn_projectparameter_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_projectparameter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_projectparameter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_projectparameter_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projectparameter_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_projectparameter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_projectparameter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_projectparameter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_projectparameter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_projectparameter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_projectparameters: WebMappingRetrieve<msdyn_projectparameter_Select,msdyn_projectparameter_Expand,msdyn_projectparameter_Filter,msdyn_projectparameter_Fixed,msdyn_projectparameter_Result,msdyn_projectparameter_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_projectparameters: WebMappingRelated<msdyn_projectparameter_RelatedOne,msdyn_projectparameter_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_projectparameters: WebMappingCUDA<msdyn_projectparameter_Create,msdyn_projectparameter_Update,msdyn_projectparameter_Select>;
}
