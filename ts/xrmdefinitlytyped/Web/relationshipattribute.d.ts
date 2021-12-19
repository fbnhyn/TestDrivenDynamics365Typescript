interface RelationshipAttribute_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  name?: string | null;
  overwritetime?: Date | null;
  relationshipattributeid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
}
interface RelationshipAttribute_Relationships {
  referencedattributeid_relationshipattribute?: Attribute_Result | null;
  referencingattributeid_relationshipattribute?: Attribute_Result | null;
  relationshipattribute_AsyncOperations?: AsyncOperation_Result[] | null;
  relationshipattribute_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  relationshipattribute_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  relationshipattribute_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  relationshipattribute_SyncErrors?: SyncError_Result[] | null;
  relationshipattribute_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  relationshipid_relationshipattribute?: Relationship_Result | null;
}
interface RelationshipAttribute extends RelationshipAttribute_Base, RelationshipAttribute_Relationships {
}
interface RelationshipAttribute_Create extends RelationshipAttribute {
  referencedattributeid_relationshipattribute_bind$attributes?: string | null;
  referencingattributeid_relationshipattribute_bind$attributes?: string | null;
  relationshipid_relationshipattribute_bind$relationships?: string | null;
}
interface RelationshipAttribute_Update extends RelationshipAttribute {
}
interface RelationshipAttribute_Select {
  componentidunique: WebAttribute<RelationshipAttribute_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<RelationshipAttribute_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<RelationshipAttribute_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<RelationshipAttribute_Select, { ismanaged: boolean | null }, {  }>;
  name: WebAttribute<RelationshipAttribute_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<RelationshipAttribute_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<RelationshipAttribute_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  referencedattributeid_guid: WebAttribute<RelationshipAttribute_Select, { referencedattributeid_guid: string | null }, { referencedattributeid_formatted?: string }>;
  referencingattributeid_guid: WebAttribute<RelationshipAttribute_Select, { referencingattributeid_guid: string | null }, { referencingattributeid_formatted?: string }>;
  relationshipattributeid: WebAttribute<RelationshipAttribute_Select, { relationshipattributeid: string | null }, {  }>;
  relationshipid_guid: WebAttribute<RelationshipAttribute_Select, { relationshipid_guid: string | null }, { relationshipid_formatted?: string }>;
  solutionid: WebAttribute<RelationshipAttribute_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<RelationshipAttribute_Select, { supportingsolutionid: string | null }, {  }>;
}
interface RelationshipAttribute_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  referencedattributeid_guid: XQW.Guid;
  referencingattributeid_guid: XQW.Guid;
  relationshipattributeid: XQW.Guid;
  relationshipid_guid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
}
interface RelationshipAttribute_Expand {
  organizationid: WebExpand<RelationshipAttribute_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  referencedattributeid_relationshipattribute: WebExpand<RelationshipAttribute_Expand, Attribute_Select, Attribute_Filter, { referencedattributeid_relationshipattribute: Attribute_Result }>;
  referencingattributeid_relationshipattribute: WebExpand<RelationshipAttribute_Expand, Attribute_Select, Attribute_Filter, { referencingattributeid_relationshipattribute: Attribute_Result }>;
  relationshipattribute_AsyncOperations: WebExpand<RelationshipAttribute_Expand, AsyncOperation_Select, AsyncOperation_Filter, { relationshipattribute_AsyncOperations: AsyncOperation_Result[] }>;
  relationshipattribute_BulkDeleteFailures: WebExpand<RelationshipAttribute_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { relationshipattribute_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  relationshipattribute_MailboxTrackingFolders: WebExpand<RelationshipAttribute_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { relationshipattribute_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  relationshipattribute_PrincipalObjectAttributeAccesses: WebExpand<RelationshipAttribute_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { relationshipattribute_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  relationshipattribute_SyncErrors: WebExpand<RelationshipAttribute_Expand, SyncError_Select, SyncError_Filter, { relationshipattribute_SyncErrors: SyncError_Result[] }>;
  relationshipattribute_UserEntityInstanceDatas: WebExpand<RelationshipAttribute_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { relationshipattribute_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  relationshipid_relationshipattribute: WebExpand<RelationshipAttribute_Expand, Relationship_Select, Relationship_Filter, { relationshipid_relationshipattribute: Relationship_Result }>;
}
interface RelationshipAttribute_FormattedResult {
  componentstate_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  referencedattributeid_formatted?: string;
  referencingattributeid_formatted?: string;
  relationshipid_formatted?: string;
}
interface RelationshipAttribute_Result extends RelationshipAttribute_Base, RelationshipAttribute_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
  referencedattributeid_guid: string | null;
  referencingattributeid_guid: string | null;
  relationshipid_guid: string | null;
}
interface RelationshipAttribute_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  referencedattributeid_relationshipattribute: WebMappingRetrieve<Attribute_Select,Attribute_Expand,Attribute_Filter,Attribute_Fixed,Attribute_Result,Attribute_FormattedResult>;
  referencingattributeid_relationshipattribute: WebMappingRetrieve<Attribute_Select,Attribute_Expand,Attribute_Filter,Attribute_Fixed,Attribute_Result,Attribute_FormattedResult>;
  relationshipid_relationshipattribute: WebMappingRetrieve<Relationship_Select,Relationship_Expand,Relationship_Filter,Relationship_Fixed,Relationship_Result,Relationship_FormattedResult>;
}
interface RelationshipAttribute_RelatedMany {
  relationshipattribute_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  relationshipattribute_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  relationshipattribute_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  relationshipattribute_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  relationshipattribute_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  relationshipattribute_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  relationshipattributes: WebMappingRetrieve<RelationshipAttribute_Select,RelationshipAttribute_Expand,RelationshipAttribute_Filter,RelationshipAttribute_Fixed,RelationshipAttribute_Result,RelationshipAttribute_FormattedResult>;
}
interface WebEntitiesRelated {
  relationshipattributes: WebMappingRelated<RelationshipAttribute_RelatedOne,RelationshipAttribute_RelatedMany>;
}
interface WebEntitiesCUDA {
  relationshipattributes: WebMappingCUDA<RelationshipAttribute_Create,RelationshipAttribute_Update,RelationshipAttribute_Select>;
}
