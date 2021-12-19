interface Attachment_Base extends WebEntity {
  attachmentid?: string | null;
  body?: string | null;
  filename?: string | null;
  filepointer?: string | null;
  filesize?: number | null;
  mimetype?: string | null;
  prefix?: string | null;
  storagepointer?: string | null;
  subject?: string | null;
  versionnumber?: number | null;
}
interface Attachment_Relationships {
  Attachment_SyncErrors?: SyncError_Result[] | null;
  attachment_activity_mime_attachments?: ActivityMimeAttachment_Result[] | null;
  userentityinstancedata_attachment?: UserEntityInstanceData_Result[] | null;
}
interface Attachment extends Attachment_Base, Attachment_Relationships {
}
interface Attachment_Create extends Attachment {
}
interface Attachment_Update extends Attachment {
}
interface Attachment_Select {
  attachmentid: WebAttribute<Attachment_Select, { attachmentid: string | null }, {  }>;
  body: WebAttribute<Attachment_Select, { body: string | null }, {  }>;
  filename: WebAttribute<Attachment_Select, { filename: string | null }, {  }>;
  filepointer: WebAttribute<Attachment_Select, { filepointer: string | null }, {  }>;
  filesize: WebAttribute<Attachment_Select, { filesize: number | null }, {  }>;
  mimetype: WebAttribute<Attachment_Select, { mimetype: string | null }, {  }>;
  prefix: WebAttribute<Attachment_Select, { prefix: string | null }, {  }>;
  storagepointer: WebAttribute<Attachment_Select, { storagepointer: string | null }, {  }>;
  subject: WebAttribute<Attachment_Select, { subject: string | null }, {  }>;
  versionnumber: WebAttribute<Attachment_Select, { versionnumber: number | null }, {  }>;
}
interface Attachment_Filter {
  attachmentid: XQW.Guid;
  body: string;
  filename: string;
  filepointer: string;
  filesize: number;
  mimetype: string;
  prefix: string;
  storagepointer: string;
  subject: string;
  versionnumber: number;
}
interface Attachment_Expand {
  Attachment_SyncErrors: WebExpand<Attachment_Expand, SyncError_Select, SyncError_Filter, { Attachment_SyncErrors: SyncError_Result[] }>;
  attachment_activity_mime_attachments: WebExpand<Attachment_Expand, ActivityMimeAttachment_Select, ActivityMimeAttachment_Filter, { attachment_activity_mime_attachments: ActivityMimeAttachment_Result[] }>;
  userentityinstancedata_attachment: WebExpand<Attachment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_attachment: UserEntityInstanceData_Result[] }>;
}
interface Attachment_FormattedResult {
}
interface Attachment_Result extends Attachment_Base, Attachment_Relationships {
  "@odata.etag": string;
}
interface Attachment_RelatedOne {
}
interface Attachment_RelatedMany {
  Attachment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  attachment_activity_mime_attachments: WebMappingRetrieve<ActivityMimeAttachment_Select,ActivityMimeAttachment_Expand,ActivityMimeAttachment_Filter,ActivityMimeAttachment_Fixed,ActivityMimeAttachment_Result,ActivityMimeAttachment_FormattedResult>;
  userentityinstancedata_attachment: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  attachments: WebMappingRetrieve<Attachment_Select,Attachment_Expand,Attachment_Filter,Attachment_Fixed,Attachment_Result,Attachment_FormattedResult>;
}
interface WebEntitiesRelated {
  attachments: WebMappingRelated<Attachment_RelatedOne,Attachment_RelatedMany>;
}
interface WebEntitiesCUDA {
  attachments: WebMappingCUDA<Attachment_Create,Attachment_Update,Attachment_Select>;
}
