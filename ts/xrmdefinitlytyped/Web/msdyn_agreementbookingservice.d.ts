interface msdyn_agreementbookingservice_Base extends WebEntity {
  createdon?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_agreementbookingserviceid?: string | null;
  msdyn_currency?: number | null;
  msdyn_currency_base?: number | null;
  msdyn_duration?: number | null;
  msdyn_durationtobill?: number | null;
  msdyn_iscopied?: boolean | null;
  msdyn_lineorder?: number | null;
  msdyn_name?: string | null;
  msdyn_unitamount?: number | null;
  msdyn_unitamount_base?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_agreementbookingservice_statecode | null;
  statuscode?: msdyn_agreementbookingservice_statuscode | null;
  timezoneruleversionnumber?: number | null;
  transactioncurrencyid_guid?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_agreementbookingservice_Relationships {
  msdyn_agreementbookingservice_ActivityPointers?: ActivityPointer_Result[] | null;
  msdyn_agreementbookingservice_Annotations?: Annotation_Result[] | null;
  msdyn_agreementbookingservice_Appointments?: Appointment_Result[] | null;
  msdyn_agreementbookingservice_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_agreementbookingservice_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_agreementbookingservice_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingservice_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_agreementbookingservice_Emails?: Email_Result[] | null;
  msdyn_agreementbookingservice_Faxes?: Fax_Result[] | null;
  msdyn_agreementbookingservice_Letters?: Letter_Result[] | null;
  msdyn_agreementbookingservice_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_agreementbookingservice_PhoneCalls?: PhoneCall_Result[] | null;
  msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_agreementbookingservice_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_agreementbookingservice_RecurringAppointmentMasters?: RecurringAppointmentMaster_Result[] | null;
  msdyn_agreementbookingservice_ServiceAppointments?: ServiceAppointment_Result[] | null;
  msdyn_agreementbookingservice_SocialActivities?: SocialActivity_Result[] | null;
  msdyn_agreementbookingservice_SyncErrors?: SyncError_Result[] | null;
  msdyn_agreementbookingservice_Tasks?: Task_Result[] | null;
  msdyn_agreementbookingservice_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_agreementbookingservice_connections1?: Connection_Result[] | null;
  msdyn_agreementbookingservice_connections2?: Connection_Result[] | null;
  msdyn_agreementbookingservice_msdyn_approvals?: msdyn_approval_Result[] | null;
  msdyn_agreementbookingservice_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  msdyn_agreementbookingservice_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_agreementbookingservice_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  msdyn_agreementbookingservice_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  msdyn_agreementbookingservice_msfp_alerts?: msfp_alert_Result[] | null;
  msdyn_agreementbookingservice_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  msdyn_agreementbookingservice_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService?: msdyn_workorderservice_Result[] | null;
}
interface msdyn_agreementbookingservice extends msdyn_agreementbookingservice_Base, msdyn_agreementbookingservice_Relationships {
  msdyn_agreement_bind$msdyn_agreements?: string | null;
  msdyn_agreementbookingincident_bind$msdyn_agreementbookingincidents?: string | null;
  msdyn_agreementbookingsetup_bind$msdyn_agreementbookingsetups?: string | null;
  msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  msdyn_pricelist_bind$pricelevels?: string | null;
  msdyn_service_bind$products?: string | null;
  msdyn_unit_bind$uoms?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface msdyn_agreementbookingservice_Create extends msdyn_agreementbookingservice {
}
interface msdyn_agreementbookingservice_Update extends msdyn_agreementbookingservice {
}
interface msdyn_agreementbookingservice_Select {
  createdby_guid: WebAttribute<msdyn_agreementbookingservice_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_agreementbookingservice_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_agreementbookingservice_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  exchangerate: WebAttribute<msdyn_agreementbookingservice_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<msdyn_agreementbookingservice_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_agreementbookingservice_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_agreementbookingservice_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_agreementbookingservice_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_agreement_guid: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_agreement_guid: string | null }, { msdyn_agreement_formatted?: string }>;
  msdyn_agreementbookingincident_guid: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_agreementbookingincident_guid: string | null }, { msdyn_agreementbookingincident_formatted?: string }>;
  msdyn_agreementbookingserviceid: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_agreementbookingserviceid: string | null }, {  }>;
  msdyn_agreementbookingsetup_guid: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_agreementbookingsetup_guid: string | null }, { msdyn_agreementbookingsetup_formatted?: string }>;
  msdyn_currency: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_currency: number | null; transactioncurrencyid_guid: string | null }, { msdyn_currency_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_currency_base: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_currency_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_currency_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_duration: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_duration: number | null }, {  }>;
  msdyn_durationtobill: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_durationtobill: number | null }, {  }>;
  msdyn_iscopied: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_iscopied: boolean | null }, {  }>;
  msdyn_lineorder: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_lineorder: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_service_guid: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_service_guid: string | null }, { msdyn_service_formatted?: string }>;
  msdyn_unit_guid: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_unit_guid: string | null }, { msdyn_unit_formatted?: string }>;
  msdyn_unitamount: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_unitamount: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitamount_formatted?: string; transactioncurrencyid_formatted?: string }>;
  msdyn_unitamount_base: WebAttribute<msdyn_agreementbookingservice_Select, { msdyn_unitamount_base: number | null; transactioncurrencyid_guid: string | null }, { msdyn_unitamount_base_formatted?: string; transactioncurrencyid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_agreementbookingservice_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_agreementbookingservice_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_agreementbookingservice_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_agreementbookingservice_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_agreementbookingservice_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_agreementbookingservice_Select, { statecode: msdyn_agreementbookingservice_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_agreementbookingservice_Select, { statuscode: msdyn_agreementbookingservice_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_agreementbookingservice_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<msdyn_agreementbookingservice_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<msdyn_agreementbookingservice_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_agreementbookingservice_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_agreementbookingservice_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  exchangerate: any;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_agreement_guid: XQW.Guid;
  msdyn_agreementbookingincident_guid: XQW.Guid;
  msdyn_agreementbookingserviceid: XQW.Guid;
  msdyn_agreementbookingsetup_guid: XQW.Guid;
  msdyn_currency: number;
  msdyn_currency_base: number;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_duration: number;
  msdyn_durationtobill: number;
  msdyn_iscopied: boolean;
  msdyn_lineorder: number;
  msdyn_name: string;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_service_guid: XQW.Guid;
  msdyn_unit_guid: XQW.Guid;
  msdyn_unitamount: number;
  msdyn_unitamount_base: number;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_agreementbookingservice_statecode;
  statuscode: msdyn_agreementbookingservice_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_agreementbookingservice_Expand {
  createdby: WebExpand<msdyn_agreementbookingservice_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_agreementbookingservice_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_agreementbookingservice_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_agreementbookingservice_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_agreement: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { msdyn_agreement: msdyn_agreement_Result }>;
  msdyn_agreementbookingincident: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_agreementbookingincident_Select, msdyn_agreementbookingincident_Filter, { msdyn_agreementbookingincident: msdyn_agreementbookingincident_Result }>;
  msdyn_agreementbookingservice_ActivityPointers: WebExpand<msdyn_agreementbookingservice_Expand, ActivityPointer_Select, ActivityPointer_Filter, { msdyn_agreementbookingservice_ActivityPointers: ActivityPointer_Result[] }>;
  msdyn_agreementbookingservice_Annotations: WebExpand<msdyn_agreementbookingservice_Expand, Annotation_Select, Annotation_Filter, { msdyn_agreementbookingservice_Annotations: Annotation_Result[] }>;
  msdyn_agreementbookingservice_Appointments: WebExpand<msdyn_agreementbookingservice_Expand, Appointment_Select, Appointment_Filter, { msdyn_agreementbookingservice_Appointments: Appointment_Result[] }>;
  msdyn_agreementbookingservice_AsyncOperations: WebExpand<msdyn_agreementbookingservice_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_agreementbookingservice_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_agreementbookingservice_BulkDeleteFailures: WebExpand<msdyn_agreementbookingservice_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_agreementbookingservice_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_agreementbookingservice_DuplicateBaseRecord: WebExpand<msdyn_agreementbookingservice_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingservice_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingservice_DuplicateMatchingRecord: WebExpand<msdyn_agreementbookingservice_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_agreementbookingservice_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_agreementbookingservice_Emails: WebExpand<msdyn_agreementbookingservice_Expand, Email_Select, Email_Filter, { msdyn_agreementbookingservice_Emails: Email_Result[] }>;
  msdyn_agreementbookingservice_Faxes: WebExpand<msdyn_agreementbookingservice_Expand, Fax_Select, Fax_Filter, { msdyn_agreementbookingservice_Faxes: Fax_Result[] }>;
  msdyn_agreementbookingservice_Letters: WebExpand<msdyn_agreementbookingservice_Expand, Letter_Select, Letter_Filter, { msdyn_agreementbookingservice_Letters: Letter_Result[] }>;
  msdyn_agreementbookingservice_MailboxTrackingFolders: WebExpand<msdyn_agreementbookingservice_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_agreementbookingservice_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_agreementbookingservice_PhoneCalls: WebExpand<msdyn_agreementbookingservice_Expand, PhoneCall_Select, PhoneCall_Filter, { msdyn_agreementbookingservice_PhoneCalls: PhoneCall_Result[] }>;
  msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses: WebExpand<msdyn_agreementbookingservice_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_agreementbookingservice_ProcessSession: WebExpand<msdyn_agreementbookingservice_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_agreementbookingservice_ProcessSession: ProcessSession_Result[] }>;
  msdyn_agreementbookingservice_RecurringAppointmentMasters: WebExpand<msdyn_agreementbookingservice_Expand, RecurringAppointmentMaster_Select, RecurringAppointmentMaster_Filter, { msdyn_agreementbookingservice_RecurringAppointmentMasters: RecurringAppointmentMaster_Result[] }>;
  msdyn_agreementbookingservice_ServiceAppointments: WebExpand<msdyn_agreementbookingservice_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { msdyn_agreementbookingservice_ServiceAppointments: ServiceAppointment_Result[] }>;
  msdyn_agreementbookingservice_SocialActivities: WebExpand<msdyn_agreementbookingservice_Expand, SocialActivity_Select, SocialActivity_Filter, { msdyn_agreementbookingservice_SocialActivities: SocialActivity_Result[] }>;
  msdyn_agreementbookingservice_SyncErrors: WebExpand<msdyn_agreementbookingservice_Expand, SyncError_Select, SyncError_Filter, { msdyn_agreementbookingservice_SyncErrors: SyncError_Result[] }>;
  msdyn_agreementbookingservice_Tasks: WebExpand<msdyn_agreementbookingservice_Expand, Task_Select, Task_Filter, { msdyn_agreementbookingservice_Tasks: Task_Result[] }>;
  msdyn_agreementbookingservice_UserEntityInstanceDatas: WebExpand<msdyn_agreementbookingservice_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_agreementbookingservice_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_agreementbookingservice_connections1: WebExpand<msdyn_agreementbookingservice_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingservice_connections1: Connection_Result[] }>;
  msdyn_agreementbookingservice_connections2: WebExpand<msdyn_agreementbookingservice_Expand, Connection_Select, Connection_Filter, { msdyn_agreementbookingservice_connections2: Connection_Result[] }>;
  msdyn_agreementbookingservice_msdyn_approvals: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_approval_Select, msdyn_approval_Filter, { msdyn_agreementbookingservice_msdyn_approvals: msdyn_approval_Result[] }>;
  msdyn_agreementbookingservice_msdyn_bookingalerts: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { msdyn_agreementbookingservice_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  msdyn_agreementbookingservice_msdyn_ocliveworkitems: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_agreementbookingservice_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  msdyn_agreementbookingservice_msdyn_ocoutboundmessages: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { msdyn_agreementbookingservice_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  msdyn_agreementbookingservice_msdyn_ocsessions: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_agreementbookingservice_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  msdyn_agreementbookingservice_msfp_alerts: WebExpand<msdyn_agreementbookingservice_Expand, msfp_alert_Select, msfp_alert_Filter, { msdyn_agreementbookingservice_msfp_alerts: msfp_alert_Result[] }>;
  msdyn_agreementbookingservice_msfp_surveyinvites: WebExpand<msdyn_agreementbookingservice_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { msdyn_agreementbookingservice_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  msdyn_agreementbookingservice_msfp_surveyresponses: WebExpand<msdyn_agreementbookingservice_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { msdyn_agreementbookingservice_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  msdyn_agreementbookingsetup: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_agreementbookingsetup_Select, msdyn_agreementbookingsetup_Filter, { msdyn_agreementbookingsetup: msdyn_agreementbookingsetup_Result }>;
  msdyn_customerasset: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_customerasset: msdyn_customerasset_Result }>;
  msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService: WebExpand<msdyn_agreementbookingservice_Expand, msdyn_workorderservice_Select, msdyn_workorderservice_Filter, { msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService: msdyn_workorderservice_Result[] }>;
  msdyn_pricelist: WebExpand<msdyn_agreementbookingservice_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_pricelist: PriceLevel_Result }>;
  msdyn_service: WebExpand<msdyn_agreementbookingservice_Expand, Product_Select, Product_Filter, { msdyn_service: Product_Result }>;
  msdyn_unit: WebExpand<msdyn_agreementbookingservice_Expand, UoM_Select, UoM_Filter, { msdyn_unit: UoM_Result }>;
  ownerid: WebExpand<msdyn_agreementbookingservice_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_agreementbookingservice_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_agreementbookingservice_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_agreementbookingservice_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<msdyn_agreementbookingservice_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface msdyn_agreementbookingservice_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_agreement_formatted?: string;
  msdyn_agreementbookingincident_formatted?: string;
  msdyn_agreementbookingsetup_formatted?: string;
  msdyn_currency_base_formatted?: string;
  msdyn_currency_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_pricelist_formatted?: string;
  msdyn_service_formatted?: string;
  msdyn_unit_formatted?: string;
  msdyn_unitamount_base_formatted?: string;
  msdyn_unitamount_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface msdyn_agreementbookingservice_Result extends msdyn_agreementbookingservice_Base, msdyn_agreementbookingservice_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agreement_guid: string | null;
  msdyn_agreementbookingincident_guid: string | null;
  msdyn_agreementbookingsetup_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_pricelist_guid: string | null;
  msdyn_service_guid: string | null;
  msdyn_unit_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface msdyn_agreementbookingservice_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_agreement: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  msdyn_agreementbookingincident: WebMappingRetrieve<msdyn_agreementbookingincident_Select,msdyn_agreementbookingincident_Expand,msdyn_agreementbookingincident_Filter,msdyn_agreementbookingincident_Fixed,msdyn_agreementbookingincident_Result,msdyn_agreementbookingincident_FormattedResult>;
  msdyn_agreementbookingsetup: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
  msdyn_customerasset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_pricelist: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  msdyn_service: WebMappingRetrieve<Product_Select,Product_Expand,Product_Filter,Product_Fixed,Product_Result,Product_FormattedResult>;
  msdyn_unit: WebMappingRetrieve<UoM_Select,UoM_Expand,UoM_Filter,UoM_Fixed,UoM_Result,UoM_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface msdyn_agreementbookingservice_RelatedMany {
  msdyn_agreementbookingservice_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  msdyn_agreementbookingservice_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_agreementbookingservice_Appointments: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  msdyn_agreementbookingservice_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_agreementbookingservice_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_agreementbookingservice_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingservice_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_agreementbookingservice_Emails: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  msdyn_agreementbookingservice_Faxes: WebMappingRetrieve<Fax_Select,Fax_Expand,Fax_Filter,Fax_Fixed,Fax_Result,Fax_FormattedResult>;
  msdyn_agreementbookingservice_Letters: WebMappingRetrieve<Letter_Select,Letter_Expand,Letter_Filter,Letter_Fixed,Letter_Result,Letter_FormattedResult>;
  msdyn_agreementbookingservice_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_agreementbookingservice_PhoneCalls: WebMappingRetrieve<PhoneCall_Select,PhoneCall_Expand,PhoneCall_Filter,PhoneCall_Fixed,PhoneCall_Result,PhoneCall_FormattedResult>;
  msdyn_agreementbookingservice_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_agreementbookingservice_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_agreementbookingservice_RecurringAppointmentMasters: WebMappingRetrieve<RecurringAppointmentMaster_Select,RecurringAppointmentMaster_Expand,RecurringAppointmentMaster_Filter,RecurringAppointmentMaster_Fixed,RecurringAppointmentMaster_Result,RecurringAppointmentMaster_FormattedResult>;
  msdyn_agreementbookingservice_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  msdyn_agreementbookingservice_SocialActivities: WebMappingRetrieve<SocialActivity_Select,SocialActivity_Expand,SocialActivity_Filter,SocialActivity_Fixed,SocialActivity_Result,SocialActivity_FormattedResult>;
  msdyn_agreementbookingservice_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_agreementbookingservice_Tasks: WebMappingRetrieve<Task_Select,Task_Expand,Task_Filter,Task_Fixed,Task_Result,Task_FormattedResult>;
  msdyn_agreementbookingservice_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_agreementbookingservice_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingservice_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_agreementbookingservice_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  msdyn_agreementbookingservice_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  msdyn_agreementbookingservice_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_agreementbookingservice_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  msdyn_agreementbookingservice_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_agreementbookingservice_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  msdyn_agreementbookingservice_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  msdyn_agreementbookingservice_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  msdyn_msdyn_agreementbookingservice_msdyn_workorderservice_AgreementBookingService: WebMappingRetrieve<msdyn_workorderservice_Select,msdyn_workorderservice_Expand,msdyn_workorderservice_Filter,msdyn_workorderservice_Fixed,msdyn_workorderservice_Result,msdyn_workorderservice_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_agreementbookingservices: WebMappingRetrieve<msdyn_agreementbookingservice_Select,msdyn_agreementbookingservice_Expand,msdyn_agreementbookingservice_Filter,msdyn_agreementbookingservice_Fixed,msdyn_agreementbookingservice_Result,msdyn_agreementbookingservice_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_agreementbookingservices: WebMappingRelated<msdyn_agreementbookingservice_RelatedOne,msdyn_agreementbookingservice_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_agreementbookingservices: WebMappingCUDA<msdyn_agreementbookingservice_Create,msdyn_agreementbookingservice_Update,msdyn_agreementbookingservice_Select>;
}
