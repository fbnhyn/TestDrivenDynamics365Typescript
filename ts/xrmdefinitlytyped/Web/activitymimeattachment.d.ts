interface ActivityMimeAttachment_Base extends WebEntity {
  activitymimeattachmentid?: string | null;
  activitymimeattachmentidunique?: string | null;
  activitysubject?: string | null;
  anonymouslink?: string | null;
  attachmentcontentid?: string | null;
  attachmentnumber?: number | null;
  body?: string | null;
  componentstate?: componentstate | null;
  filename?: string | null;
  filesize?: number | null;
  isfollowed?: boolean | null;
  ismanaged?: boolean | null;
  mimetype?: string | null;
  objecttypecode?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  subject?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ActivityMimeAttachment_Relationships {
  ActivityMimeAttachment_AsyncOperations?: AsyncOperation_Result[] | null;
  ActivityMimeAttachment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ActivityMimeAttachment_SyncErrors?: SyncError_Result[] | null;
  objectid_activitypointer?: ActivityPointer_Result | null;
  objectid_appointment?: Appointment_Result | null;
  objectid_email?: Email_Result | null;
  objectid_template?: Template_Result | null;
  userentityinstancedata_activitymimeattachment?: UserEntityInstanceData_Result[] | null;
}
interface ActivityMimeAttachment extends ActivityMimeAttachment_Base, ActivityMimeAttachment_Relationships {
  attachmentid_bind$attachments?: string | null;
  objectid_activitypointer_bind$activitypointers?: string | null;
  objectid_appointment_bind$appointments?: string | null;
  objectid_email_bind$emails?: string | null;
  objectid_template_bind$templates?: string | null;
}
interface ActivityMimeAttachment_Create extends ActivityMimeAttachment {
}
interface ActivityMimeAttachment_Update extends ActivityMimeAttachment {
}
interface ActivityMimeAttachment_Select {
  activityid_guid: WebAttribute<ActivityMimeAttachment_Select, { activityid_guid: string | null }, { activityid_formatted?: string }>;
  activitymimeattachmentid: WebAttribute<ActivityMimeAttachment_Select, { activitymimeattachmentid: string | null }, {  }>;
  activitymimeattachmentidunique: WebAttribute<ActivityMimeAttachment_Select, { activitymimeattachmentidunique: string | null }, {  }>;
  activitysubject: WebAttribute<ActivityMimeAttachment_Select, { activitysubject: string | null }, {  }>;
  anonymouslink: WebAttribute<ActivityMimeAttachment_Select, { anonymouslink: string | null }, {  }>;
  attachmentcontentid: WebAttribute<ActivityMimeAttachment_Select, { attachmentcontentid: string | null }, {  }>;
  attachmentid_guid: WebAttribute<ActivityMimeAttachment_Select, { attachmentid_guid: string | null }, { attachmentid_formatted?: string }>;
  attachmentnumber: WebAttribute<ActivityMimeAttachment_Select, { attachmentnumber: number | null }, {  }>;
  body: WebAttribute<ActivityMimeAttachment_Select, { body: string | null }, {  }>;
  componentstate: WebAttribute<ActivityMimeAttachment_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  filename: WebAttribute<ActivityMimeAttachment_Select, { filename: string | null }, {  }>;
  filesize: WebAttribute<ActivityMimeAttachment_Select, { filesize: number | null }, {  }>;
  isfollowed: WebAttribute<ActivityMimeAttachment_Select, { isfollowed: boolean | null }, {  }>;
  ismanaged: WebAttribute<ActivityMimeAttachment_Select, { ismanaged: boolean | null }, {  }>;
  mimetype: WebAttribute<ActivityMimeAttachment_Select, { mimetype: string | null }, {  }>;
  objectid_guid: WebAttribute<ActivityMimeAttachment_Select, { objectid_guid: string | null }, { objectid_formatted?: string }>;
  objecttypecode: WebAttribute<ActivityMimeAttachment_Select, { objecttypecode: string | null }, {  }>;
  overwritetime: WebAttribute<ActivityMimeAttachment_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ActivityMimeAttachment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ActivityMimeAttachment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<ActivityMimeAttachment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<ActivityMimeAttachment_Select, { solutionid: string | null }, {  }>;
  subject: WebAttribute<ActivityMimeAttachment_Select, { subject: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ActivityMimeAttachment_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ActivityMimeAttachment_Select, { versionnumber: number | null }, {  }>;
}
interface ActivityMimeAttachment_Filter {
  activityid_guid: XQW.Guid;
  activitymimeattachmentid: XQW.Guid;
  activitymimeattachmentidunique: XQW.Guid;
  activitysubject: string;
  anonymouslink: string;
  attachmentcontentid: string;
  attachmentid_guid: XQW.Guid;
  attachmentnumber: number;
  body: string;
  componentstate: componentstate;
  filename: string;
  filesize: number;
  isfollowed: boolean;
  ismanaged: boolean;
  mimetype: string;
  objectid_guid: XQW.Guid;
  objecttypecode: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  subject: string;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface ActivityMimeAttachment_Expand {
  ActivityMimeAttachment_AsyncOperations: WebExpand<ActivityMimeAttachment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ActivityMimeAttachment_AsyncOperations: AsyncOperation_Result[] }>;
  ActivityMimeAttachment_BulkDeleteFailures: WebExpand<ActivityMimeAttachment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ActivityMimeAttachment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ActivityMimeAttachment_SyncErrors: WebExpand<ActivityMimeAttachment_Expand, SyncError_Select, SyncError_Filter, { ActivityMimeAttachment_SyncErrors: SyncError_Result[] }>;
  attachmentid: WebExpand<ActivityMimeAttachment_Expand, Attachment_Select, Attachment_Filter, { attachmentid: Attachment_Result }>;
  objectid_activitypointer: WebExpand<ActivityMimeAttachment_Expand, ActivityPointer_Select, ActivityPointer_Filter, { objectid_activitypointer: ActivityPointer_Result }>;
  objectid_appointment: WebExpand<ActivityMimeAttachment_Expand, Appointment_Select, Appointment_Filter, { objectid_appointment: Appointment_Result }>;
  objectid_email: WebExpand<ActivityMimeAttachment_Expand, Email_Select, Email_Filter, { objectid_email: Email_Result }>;
  objectid_template: WebExpand<ActivityMimeAttachment_Expand, Template_Select, Template_Filter, { objectid_template: Template_Result }>;
  userentityinstancedata_activitymimeattachment: WebExpand<ActivityMimeAttachment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_activitymimeattachment: UserEntityInstanceData_Result[] }>;
}
interface ActivityMimeAttachment_FormattedResult {
  activityid_formatted?: string;
  attachmentid_formatted?: string;
  componentstate_formatted?: string;
  objectid_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
}
interface ActivityMimeAttachment_Result extends ActivityMimeAttachment_Base, ActivityMimeAttachment_Relationships {
  "@odata.etag": string;
  activityid_guid: string | null;
  attachmentid_guid: string | null;
  objectid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
}
interface ActivityMimeAttachment_RelatedOne {
  attachmentid: WebMappingRetrieve<Attachment_Select,Attachment_Expand,Attachment_Filter,Attachment_Fixed,Attachment_Result,Attachment_FormattedResult>;
  objectid_activitypointer: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  objectid_appointment: WebMappingRetrieve<Appointment_Select,Appointment_Expand,Appointment_Filter,Appointment_Fixed,Appointment_Result,Appointment_FormattedResult>;
  objectid_email: WebMappingRetrieve<Email_Select,Email_Expand,Email_Filter,Email_Fixed,Email_Result,Email_FormattedResult>;
  objectid_template: WebMappingRetrieve<Template_Select,Template_Expand,Template_Filter,Template_Fixed,Template_Result,Template_FormattedResult>;
}
interface ActivityMimeAttachment_RelatedMany {
  ActivityMimeAttachment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ActivityMimeAttachment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ActivityMimeAttachment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_activitymimeattachment: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  activitymimeattachments: WebMappingRetrieve<ActivityMimeAttachment_Select,ActivityMimeAttachment_Expand,ActivityMimeAttachment_Filter,ActivityMimeAttachment_Fixed,ActivityMimeAttachment_Result,ActivityMimeAttachment_FormattedResult>;
}
interface WebEntitiesRelated {
  activitymimeattachments: WebMappingRelated<ActivityMimeAttachment_RelatedOne,ActivityMimeAttachment_RelatedMany>;
}
interface WebEntitiesCUDA {
  activitymimeattachments: WebMappingCUDA<ActivityMimeAttachment_Create,ActivityMimeAttachment_Update,ActivityMimeAttachment_Select>;
}
