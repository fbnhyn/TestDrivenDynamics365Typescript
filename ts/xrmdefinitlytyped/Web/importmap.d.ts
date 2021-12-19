interface ImportMap_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  entitiesperfile?: importmap_entitiesperfile | null;
  importmapid?: string | null;
  importmapidunique?: string | null;
  importmaptype?: importmap_importmaptype | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  isvalidforimport?: boolean | null;
  iswizardcreated?: boolean | null;
  mapcustomizations?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  source?: string | null;
  sourcetype?: importmap_sourcetype | null;
  sourceuseridentifierforsourcecrmuserlink?: string | null;
  sourceuseridentifierforsourcedatasourceuserlink?: string | null;
  statecode?: importmap_statecode | null;
  statuscode?: importmap_statuscode | null;
  supportingsolutionid?: string | null;
  targetentity?: importmap_targetentity | null;
  targetuseridentifierforsourcecrmuserlink?: string | null;
}
interface ImportMap_Relationships {
  ColumnMapping_ImportMap?: ColumnMapping_Result[] | null;
  ImportEntityMapping_ImportMap?: ImportEntityMapping_Result[] | null;
  ImportMap_AsyncOperations?: AsyncOperation_Result[] | null;
  ImportMap_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  ImportMap_ImportFile?: ImportFile_Result[] | null;
  ImportMap_SyncErrors?: SyncError_Result[] | null;
  OwnerMapping_ImportMap?: OwnerMapping_Result[] | null;
  TransformationMapping_ImportMap?: TransformationMapping_Result[] | null;
  userentityinstancedata_importmap?: UserEntityInstanceData_Result[] | null;
}
interface ImportMap extends ImportMap_Base, ImportMap_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface ImportMap_Create extends ImportMap {
}
interface ImportMap_Update extends ImportMap {
}
interface ImportMap_Select {
  componentstate: WebAttribute<ImportMap_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<ImportMap_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ImportMap_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ImportMap_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ImportMap_Select, { description: string | null }, {  }>;
  entitiesperfile: WebAttribute<ImportMap_Select, { entitiesperfile: importmap_entitiesperfile | null }, { entitiesperfile_formatted?: string }>;
  importmapid: WebAttribute<ImportMap_Select, { importmapid: string | null }, {  }>;
  importmapidunique: WebAttribute<ImportMap_Select, { importmapidunique: string | null }, {  }>;
  importmaptype: WebAttribute<ImportMap_Select, { importmaptype: importmap_importmaptype | null }, { importmaptype_formatted?: string }>;
  introducedversion: WebAttribute<ImportMap_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<ImportMap_Select, { ismanaged: boolean | null }, {  }>;
  isvalidforimport: WebAttribute<ImportMap_Select, { isvalidforimport: boolean | null }, {  }>;
  iswizardcreated: WebAttribute<ImportMap_Select, { iswizardcreated: boolean | null }, {  }>;
  mapcustomizations: WebAttribute<ImportMap_Select, { mapcustomizations: string | null }, {  }>;
  modifiedby_guid: WebAttribute<ImportMap_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ImportMap_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ImportMap_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ImportMap_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<ImportMap_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ImportMap_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ImportMap_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<ImportMap_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<ImportMap_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<ImportMap_Select, { solutionid: string | null }, {  }>;
  source: WebAttribute<ImportMap_Select, { source: string | null }, {  }>;
  sourcetype: WebAttribute<ImportMap_Select, { sourcetype: importmap_sourcetype | null }, { sourcetype_formatted?: string }>;
  sourceuseridentifierforsourcecrmuserlink: WebAttribute<ImportMap_Select, { sourceuseridentifierforsourcecrmuserlink: string | null }, {  }>;
  sourceuseridentifierforsourcedatasourceuserlink: WebAttribute<ImportMap_Select, { sourceuseridentifierforsourcedatasourceuserlink: string | null }, {  }>;
  statecode: WebAttribute<ImportMap_Select, { statecode: importmap_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<ImportMap_Select, { statuscode: importmap_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<ImportMap_Select, { supportingsolutionid: string | null }, {  }>;
  targetentity: WebAttribute<ImportMap_Select, { targetentity: importmap_targetentity | null }, { targetentity_formatted?: string }>;
  targetuseridentifierforsourcecrmuserlink: WebAttribute<ImportMap_Select, { targetuseridentifierforsourcecrmuserlink: string | null }, {  }>;
}
interface ImportMap_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  entitiesperfile: importmap_entitiesperfile;
  importmapid: XQW.Guid;
  importmapidunique: XQW.Guid;
  importmaptype: importmap_importmaptype;
  introducedversion: string;
  ismanaged: boolean;
  isvalidforimport: boolean;
  iswizardcreated: boolean;
  mapcustomizations: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  source: string;
  sourcetype: importmap_sourcetype;
  sourceuseridentifierforsourcecrmuserlink: string;
  sourceuseridentifierforsourcedatasourceuserlink: string;
  statecode: importmap_statecode;
  statuscode: importmap_statuscode;
  supportingsolutionid: XQW.Guid;
  targetentity: importmap_targetentity;
  targetuseridentifierforsourcecrmuserlink: string;
}
interface ImportMap_Expand {
  ColumnMapping_ImportMap: WebExpand<ImportMap_Expand, ColumnMapping_Select, ColumnMapping_Filter, { ColumnMapping_ImportMap: ColumnMapping_Result[] }>;
  ImportEntityMapping_ImportMap: WebExpand<ImportMap_Expand, ImportEntityMapping_Select, ImportEntityMapping_Filter, { ImportEntityMapping_ImportMap: ImportEntityMapping_Result[] }>;
  ImportMap_AsyncOperations: WebExpand<ImportMap_Expand, AsyncOperation_Select, AsyncOperation_Filter, { ImportMap_AsyncOperations: AsyncOperation_Result[] }>;
  ImportMap_BulkDeleteFailures: WebExpand<ImportMap_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { ImportMap_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  ImportMap_ImportFile: WebExpand<ImportMap_Expand, ImportFile_Select, ImportFile_Filter, { ImportMap_ImportFile: ImportFile_Result[] }>;
  ImportMap_SyncErrors: WebExpand<ImportMap_Expand, SyncError_Select, SyncError_Filter, { ImportMap_SyncErrors: SyncError_Result[] }>;
  OwnerMapping_ImportMap: WebExpand<ImportMap_Expand, OwnerMapping_Select, OwnerMapping_Filter, { OwnerMapping_ImportMap: OwnerMapping_Result[] }>;
  TransformationMapping_ImportMap: WebExpand<ImportMap_Expand, TransformationMapping_Select, TransformationMapping_Filter, { TransformationMapping_ImportMap: TransformationMapping_Result[] }>;
  createdby: WebExpand<ImportMap_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<ImportMap_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<ImportMap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<ImportMap_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<ImportMap_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<ImportMap_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<ImportMap_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<ImportMap_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  userentityinstancedata_importmap: WebExpand<ImportMap_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_importmap: UserEntityInstanceData_Result[] }>;
}
interface ImportMap_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  entitiesperfile_formatted?: string;
  importmaptype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  sourcetype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  targetentity_formatted?: string;
}
interface ImportMap_Result extends ImportMap_Base, ImportMap_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface ImportMap_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface ImportMap_RelatedMany {
  ColumnMapping_ImportMap: WebMappingRetrieve<ColumnMapping_Select,ColumnMapping_Expand,ColumnMapping_Filter,ColumnMapping_Fixed,ColumnMapping_Result,ColumnMapping_FormattedResult>;
  ImportEntityMapping_ImportMap: WebMappingRetrieve<ImportEntityMapping_Select,ImportEntityMapping_Expand,ImportEntityMapping_Filter,ImportEntityMapping_Fixed,ImportEntityMapping_Result,ImportEntityMapping_FormattedResult>;
  ImportMap_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  ImportMap_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  ImportMap_ImportFile: WebMappingRetrieve<ImportFile_Select,ImportFile_Expand,ImportFile_Filter,ImportFile_Fixed,ImportFile_Result,ImportFile_FormattedResult>;
  ImportMap_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  OwnerMapping_ImportMap: WebMappingRetrieve<OwnerMapping_Select,OwnerMapping_Expand,OwnerMapping_Filter,OwnerMapping_Fixed,OwnerMapping_Result,OwnerMapping_FormattedResult>;
  TransformationMapping_ImportMap: WebMappingRetrieve<TransformationMapping_Select,TransformationMapping_Expand,TransformationMapping_Filter,TransformationMapping_Fixed,TransformationMapping_Result,TransformationMapping_FormattedResult>;
  userentityinstancedata_importmap: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  importmaps: WebMappingRetrieve<ImportMap_Select,ImportMap_Expand,ImportMap_Filter,ImportMap_Fixed,ImportMap_Result,ImportMap_FormattedResult>;
}
interface WebEntitiesRelated {
  importmaps: WebMappingRelated<ImportMap_RelatedOne,ImportMap_RelatedMany>;
}
interface WebEntitiesCUDA {
  importmaps: WebMappingCUDA<ImportMap_Create,ImportMap_Update,ImportMap_Select>;
}
