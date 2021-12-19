interface msdyn_incidenttypeproduct_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_description?: string | null;
  msdyn_incidenttypeproductid?: string | null;
  msdyn_internaldescription?: string | null;
  msdyn_lineorder?: number | null;
  msdyn_name?: string | null;
  msdyn_quantity?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_incidenttypeproduct_statecode | null;
  statuscode?: msdyn_incidenttypeproduct_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_incidenttypeproduct_Relationships {
  msdyn_AppliedSuggestionResult?: msdyn_incidenttyperecommendationresult_Result | null;
  msdyn_incidenttypeproduct_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_incidenttypeproduct_Annotations?: Annotation_Result[] | null;
  msdyn_incidenttypeproduct_Appointments?: Appointment_Result[] | null;
  msdyn_incidenttypeproduct_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_incidenttypeproduct_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_incidenttypeproduct_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttypeproduct_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_incidenttypeproduct_Emails?: Email_Result[] | null;
  msdyn_incidenttypeproduct_Faxes?: Fax_Result[] | null;
  msdyn_incidenttypeproduct_Letters?: Letter_Result[] | null;
  msdyn_incidenttypeproduct_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_incidenttypeproduct_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_incidenttypeproduct_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_incidenttypeproduct_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_incidenttypeproduct_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_incidenttypeproduct_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_incidenttypeproduct_SharePointDocumentLocations?: SharePointDocumentLocation_Result[] | null;
  msdyn_incidenttypeproduct_SharePointDocuments?: SharePointDocument_Result[] | null;
  msdyn_incidenttypeproduct_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_incidenttypeproduct_SyncErrors?: SyncError_Result[] | null;
  msdyn_incidenttypeproduct_Tasks?: Task_Result[] | null;
  msdyn_incidenttypeproduct_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_incidenttypeproduct_connections1?: Connection_Result[] | null;
  msdyn_incidenttypeproduct_connections2?: Connection_Result[] | null;
  msdyn_incidenttypeproduct_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_incidenttypeproduct_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_incidenttypeproduct_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_incidenttypeproduct_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_incidenttypeproduct_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_incidenttypeproduct_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_incidenttypeproduct_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_incidenttypeproduct_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
}
interface msdyn_incidenttypeproduct extends msdyn_incidenttypeproduct_Base, msdyn_incidenttypeproduct_Relationships {
  msdyn_AppliedSuggestionResult_bind$msdyn_incidenttyperecommendationresults?: string | null;
  msdyn_incidenttype_bind$msdyn_incidenttypes?: string | null;
  msdyn_product_bind$products?: string | null;
  msdyn_unit_bind$uoms?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_incidenttypeproduct_Create extends msdyn_incidenttypeproduct {
}
interface msdyn_incidenttypeproduct_Update extends msdyn_incidenttypeproduct {
}
interface msdyn_incidenttypeproduct_Select {
  createdby_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_incidenttypeproduct_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_incidenttypeproduct_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_incidenttypeproduct_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_appliedsuggestionresult_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_appliedsuggestionresult_guid: string | null }, { msdyn_appliedsuggestionresult_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_description: string | null }, {  }>;
  msdyn_incidenttype_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_incidenttype_guid: string | null }, { msdyn_incidenttype_formatted?: string }>;
  msdyn_incidenttypeproductid: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_incidenttypeproductid: string | null }, {  }>;
  msdyn_internaldescription: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_internaldescription: string | null }, {  }>;
  msdyn_lineorder: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_lineorder: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_name: string | null }, {  }>;
  msdyn_product_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_product_guid: string | null }, { msdyn_product_formatted?: string }>;
  msdyn_quantity: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_quantity: number | null }, {  }>;
  msdyn_unit_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_incidenttypeproduct_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_incidenttypeproduct_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_incidenttypeproduct_Select, { statecode: msdyn_incidenttypeproduct_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_incidenttypeproduct_Select, { statuscode: msdyn_incidenttypeproduct_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_incidenttypeproduct_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_incidenttypeproduct_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_incidenttypeproduct_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_incidenttypeproduct_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_appliedsuggestionresult_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_incidenttype_guid: XQW.Guid;
  msdyn_incidenttypeproductid: XQW.Guid;
  msdyn_internaldescription: string;
  msdyn_lineorder: number;
  msdyn_name: string;
  msdyn_product_guid: XQW.Guid;
  msdyn_quantity: number;
  msdyn_unit_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_incidenttypeproduct_statecode;
  statuscode: msdyn_incidenttypeproduct_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_incidenttypeproduct_Expand {
  createdby: WebExpand<msdyn_incidenttypeproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_incidenttypeproduct_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_incidenttypeproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_incidenttypeproduct_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_AppliedSuggestionResult: WebExpand<msdyn_incidenttypeproduct_Expand, msdyn_incidenttyperecommendationresult_Select, msdyn_incidenttyperecommendationresult_Filter, { msdyn_AppliedSuggestionResult: msdyn_incidenttyperecommendationresult_Result }>;
  msdyn_incidenttype: WebExpand<msdyn_incidenttypeproduct_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_incidenttype: msdyn_incidenttype_Result }>;
  msdyn_incidenttypeproduct_ActivityPointers: WebExpand<msdyn_incidenttypeproduct_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_incidenttypeproduct_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_incidenttypeproduct_Annotations: WebExpand<msdyn_incidenttypeproduct_Expand, Annotation_Select, Annotation_Filter, { msdyn_incidenttypeproduct_Annotations: Annotation_Result[] }>;
  msdyn_incidenttypeproduct_Appointments: WebExpand<msdyn_incidenttypeproduct_Expand, Appointment_Select, Appointment_Filter, { msdyn_incidenttypeproduct_Appointments: Appointment_Result[] }>;
  msdyn_incidenttypeproduct_AsyncOperations: WebExpand<msdyn_incidenttypeproduct_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_incidenttypeproduct_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_incidenttypeproduct_BulkDeleteFailures: WebExpand<msdyn_incidenttypeproduct_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_incidenttypeproduct_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_incidenttypeproduct_DuplicateBaseRecord: WebExpand<msdyn_incidenttypeproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttypeproduct_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttypeproduct_DuplicateMatchingRecord: WebExpand<msdyn_incidenttypeproduct_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_incidenttypeproduct_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_incidenttypeproduct_Emails: WebExpand<msdyn_incidenttypeproduct_Expand, Email_Select, Email_Filter, { msdyn_incidenttypeproduct_Emails: Email_Result[] }>;
  msdyn_incidenttypeproduct_Faxes: WebExpand<msdyn_incidenttypeproduct_Expand, Fax_Select, Fax_Filter, { msdyn_incidenttypeproduct_Faxes: Fax_Result[] }>;
  msdyn_incidenttypeproduct_Letters: WebExpand<msdyn_incidenttypeproduct_Expand, Letter_Select, Letter_Filter, { msdyn_incidenttypeproduct_Letters: Letter_Result[] }>;
  msdyn_incidenttypeproduct_MailboxTrackingFolders: WebExpand<msdyn_incidenttypeproduct_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_incidenttypeproduct_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_incidenttypeproduct_PhoneCalls: WebExpand<msdyn_incidenttypeproduct_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_incidenttypeproduct_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_incidenttypeproduct_PrincipalObjectAttributeAccesses: WebExpand<msdyn_incidenttypeproduct_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_incidenttypeproduct_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_incidenttypeproduct_ProcessSession: WebExpand<msdyn_incidenttypeproduct_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_incidenttypeproduct_ProcessSession: ProcessSession_Result[] }>;
  msdyn_incidenttypeproduct_RecurringAppointmentMasters: WebExpand<msdyn_incidenttypeproduct_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_incidenttypeproduct_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_incidenttypeproduct_ServiceAppointments: WebExpand<msdyn_incidenttypeproduct_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_incidenttypeproduct_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_incidenttypeproduct_SharePointDocumentLocations: WebExpand<msdyn_incidenttypeproduct_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { msdyn_incidenttypeproduct_SharePointDocumentLocations: SharePointDocumentLocation_Result[] }>;
  msdyn_incidenttypeproduct_SharePointDocuments: WebExpand<msdyn_incidenttypeproduct_Expand, SharePointDocument_Select, SharePointDocument_Filter, { msdyn_incidenttypeproduct_SharePointDocuments: SharePointDocument_Result[] }>;
  msdyn_incidenttypeproduct_SocialActivities: WebExpand<msdyn_incidenttypeproduct_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_incidenttypeproduct_SocialActivities: SocialActivity_Result[] }>;
  msdyn_incidenttypeproduct_SyncErrors: WebExpand<msdyn_incidenttypeproduct_Expand, SyncError_Select, SyncError_Filter, { msdyn_incidenttypeproduct_SyncErrors: SyncError_Result[] }>;
  msdyn_incidenttypeproduct_Tasks: WebExpand<msdyn_incidenttypeproduct_Expand, Task_Select, Task_Filter, { msdyn_incidenttypeproduct_Tasks: Task_Result[] }>;
  msdyn_incidenttypeproduct_UserEntityInstanceDatas: WebExpand<msdyn_incidenttypeproduct_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_incidenttypeproduct_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_incidenttypeproduct_connections1: WebExpand<msdyn_incidenttypeproduct_Expand, Connection_Select, Connection_Filter, { msdyn_incidenttypeproduct_connections1: Connection_Result[] }>;
  msdyn_incidenttypeproduct_connections2: WebExpand<msdyn_incidenttypeproduct_Expand, Connection_Select, Connection_Filter, { msdyn_incidenttypeproduct_connections2: Connection_Result[] }>;
  msdyn_incidenttypeproduct_msdyn_approvals: WebExpand<msdyn_incidenttypeproduct_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_incidenttypeproduct_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_incidenttypeproduct_msdyn_bookingalerts: WebExpand<msdyn_incidenttypeproduct_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_incidenttypeproduct_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_incidenttypeproduct_msdyn_ocliveworkitems: WebExpand<msdyn_incidenttypeproduct_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_incidenttypeproduct_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_incidenttypeproduct_msdyn_ocoutboundmessages: WebExpand<msdyn_incidenttypeproduct_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_incidenttypeproduct_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_incidenttypeproduct_msdyn_ocsessions: WebExpand<msdyn_incidenttypeproduct_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_incidenttypeproduct_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_incidenttypeproduct_msfp_alerts: WebExpand<msdyn_incidenttypeproduct_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_incidenttypeproduct_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_incidenttypeproduct_msfp_surveyinvites: WebExpand<msdyn_incidenttypeproduct_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_incidenttypeproduct_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_incidenttypeproduct_msfp_surveyresponses: WebExpand<msdyn_incidenttypeproduct_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_incidenttypeproduct_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_product: WebExpand<msdyn_incidenttypeproduct_Expand, Product_Select, Product_Filter, { msdyn_product: Product_Result }>;
  msdyn_unit: WebExpand<msdyn_incidenttypeproduct_Expand, UoM_Select, UoM_Filter, { msdyn_unit: UoM_Result }>;
  ownerid: WebExpand<msdyn_incidenttypeproduct_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_incidenttypeproduct_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_incidenttypeproduct_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_incidenttypeproduct_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_incidenttypeproduct_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_appliedsuggestionresult_formatted?: string;
  msdyn_incidenttype_formatted?: string;
  msdyn_product_formatted?: string;
  msdyn_unit_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_incidenttypeproduct_Result extends msdyn_incidenttypeproduct_Base, msdyn_incidenttypeproduct_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_appliedsuggestionresult_guid: string | null;
  msdyn_incidenttype_guid: string | null;
  msdyn_product_guid: string | null;
  msdyn_unit_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_incidenttypeproduct_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_AppliedSuggestionResult: WebMappingRetrieve<msdyn_incidenttyperecommendationresult_Select,msdyn_incidenttyperecommendationresult_Expand,msdyn_incidenttyperecommendationresult_Filter,msdyn_incidenttyperecommendationresult_Fixed,msdyn_incidenttyperecommendationresult_Result,msdyn_incidenttyperecommendationresult_FormattedResult>;
  msdyn_incidenttype: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  msdyn_product: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_incidenttypeproduct_RelatedMany {
  msdyn_incidenttypeproduct_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_incidenttypeproduct_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_incidenttypeproduct_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_incidenttypeproduct_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_incidenttypeproduct_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_incidenttypeproduct_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttypeproduct_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_incidenttypeproduct_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_incidenttypeproduct_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_incidenttypeproduct_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_incidenttypeproduct_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_incidenttypeproduct_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_incidenttypeproduct_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_incidenttypeproduct_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_incidenttypeproduct_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_incidenttypeproduct_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_incidenttypeproduct_SharePointDocumentLocations: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  msdyn_incidenttypeproduct_SharePointDocuments: WebMappingRetrieve<SharePointDocument_Select,SharePointDocument_Expand,SharePointDocument_Filter,SharePointDocument_Fixed,SharePointDocument_Result,SharePointDocument_FormattedResult>;
  msdyn_incidenttypeproduct_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_incidenttypeproduct_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_incidenttypeproduct_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_incidenttypeproduct_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_incidenttypeproduct_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_incidenttypeproduct_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_incidenttypeproduct_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_incidenttypeproduct_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_incidenttypeproduct_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_incidenttypeproduct_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_incidenttypeproduct_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_incidenttypeproduct_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_incidenttypeproduct_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_incidenttypeproduct_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_incidenttypeproducts: WebMappingRetrieve<msdyn_incidenttypeproduct_Select,msdyn_incidenttypeproduct_Expand,msdyn_incidenttypeproduct_Filter,msdyn_incidenttypeproduct_Fixed,msdyn_incidenttypeproduct_Result,msdyn_incidenttypeproduct_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_incidenttypeproducts: WebMappingRelated<msdyn_incidenttypeproduct_RelatedOne,msdyn_incidenttypeproduct_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_incidenttypeproducts: WebMappingCUDA<msdyn_incidenttypeproduct_Create,msdyn_incidenttypeproduct_Update,msdyn_incidenttypeproduct_Select>;
}
