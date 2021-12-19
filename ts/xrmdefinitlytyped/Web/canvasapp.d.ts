interface CanvasApp_Base extends WebEntity {
  aadcreatedbyid?: string | null;
  aadlastmodifiedbyid?: string | null;
  aadlastpublishedbyid?: string | null;
  admincontrolbypassconsent?: boolean | null;
  appcomponentdependencies?: string | null;
  appcomponents?: string | null;
  appopenuri?: string | null;
  appversion?: string | null;
  authorizationreferences?: string | null;
  backgroundcolor?: string | null;
  bypassconsent?: boolean | null;
  canconsumeapppass?: boolean | null;
  canvasappid?: string | null;
  canvasapprowid?: string | null;
  canvasapptype?: canvasapp_canvasapptype | null;
  cdsdependencies?: string | null;
  commitmessage?: string | null;
  componentstate?: componentstate | null;
  connectionreferences?: string | null;
  createdbyclientversion?: string | null;
  createdtime?: Date | null;
  databasereferences?: string | null;
  description?: string | null;
  displayname?: string | null;
  embeddedapp?: string | null;
  galleryitemid?: string | null;
  introducedversion?: string | null;
  iscdsupgraded?: boolean | null;
  iscustomizable?: any | null;
  isfeaturedapp?: boolean | null;
  isheroapp?: boolean | null;
  ishidden?: boolean | null;
  ismanaged?: boolean | null;
  lastmodifiedtime?: Date | null;
  lastpublishtime?: Date | null;
  minclientversion?: string | null;
  name?: string | null;
  overwritetime?: Date | null;
  publisher?: string | null;
  solutionid?: string | null;
  status?: string | null;
  supportingsolutionid?: string | null;
  tags?: string | null;
  uniquecanvasappid?: string | null;
  versionnumber?: number | null;
}
interface CanvasApp_Relationships {
  Comment_Artifact_CanvasApp?: Comment_Result[] | null;
  FK_CanvasApp_Solution?: Solution_Result | null;
  assets?: FileAttachment_Result | null;
  backgroundimage?: FileAttachment_Result | null;
  canvasapp_FileAttachments?: FileAttachment_Result[] | null;
  canvasapp_appaction_onclickeventformulacomponentlibraryid?: appaction_Result[] | null;
  canvasapp_appaction_visibilityformulacomponentlibraryid?: appaction_Result[] | null;
  canvasapp_appelement_canvasappid?: AppElement_Result[] | null;
  canvasappextendedmetadata?: CanvasAppExtendedMetadata_Result[] | null;
  document?: FileAttachment_Result | null;
  largeicon?: FileAttachment_Result | null;
  mediumicon?: FileAttachment_Result | null;
  smallicon?: FileAttachment_Result | null;
  teamsicon?: FileAttachment_Result | null;
  wideicon?: FileAttachment_Result | null;
}
interface CanvasApp extends CanvasApp_Base, CanvasApp_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface CanvasApp_Create extends CanvasApp {
}
interface CanvasApp_Update extends CanvasApp {
}
interface CanvasApp_Select {
  aadcreatedbyid: WebAttribute<CanvasApp_Select, { aadcreatedbyid: string | null }, {  }>;
  aadlastmodifiedbyid: WebAttribute<CanvasApp_Select, { aadlastmodifiedbyid: string | null }, {  }>;
  aadlastpublishedbyid: WebAttribute<CanvasApp_Select, { aadlastpublishedbyid: string | null }, {  }>;
  admincontrolbypassconsent: WebAttribute<CanvasApp_Select, { admincontrolbypassconsent: boolean | null }, {  }>;
  appcomponentdependencies: WebAttribute<CanvasApp_Select, { appcomponentdependencies: string | null }, {  }>;
  appcomponents: WebAttribute<CanvasApp_Select, { appcomponents: string | null }, {  }>;
  appopenuri: WebAttribute<CanvasApp_Select, { appopenuri: string | null }, {  }>;
  appversion: WebAttribute<CanvasApp_Select, { appversion: string | null }, {  }>;
  authorizationreferences: WebAttribute<CanvasApp_Select, { authorizationreferences: string | null }, {  }>;
  backgroundcolor: WebAttribute<CanvasApp_Select, { backgroundcolor: string | null }, {  }>;
  bypassconsent: WebAttribute<CanvasApp_Select, { bypassconsent: boolean | null }, {  }>;
  canconsumeapppass: WebAttribute<CanvasApp_Select, { canconsumeapppass: boolean | null }, {  }>;
  canvasappid: WebAttribute<CanvasApp_Select, { canvasappid: string | null }, {  }>;
  canvasapprowid: WebAttribute<CanvasApp_Select, { canvasapprowid: string | null }, {  }>;
  canvasapptype: WebAttribute<CanvasApp_Select, { canvasapptype: canvasapp_canvasapptype | null }, { canvasapptype_formatted?: string }>;
  cdsdependencies: WebAttribute<CanvasApp_Select, { cdsdependencies: string | null }, {  }>;
  commitmessage: WebAttribute<CanvasApp_Select, { commitmessage: string | null }, {  }>;
  componentstate: WebAttribute<CanvasApp_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  connectionreferences: WebAttribute<CanvasApp_Select, { connectionreferences: string | null }, {  }>;
  createdbyclientversion: WebAttribute<CanvasApp_Select, { createdbyclientversion: string | null }, {  }>;
  createdtime: WebAttribute<CanvasApp_Select, { createdtime: Date | null }, { createdtime_formatted?: string }>;
  databasereferences: WebAttribute<CanvasApp_Select, { databasereferences: string | null }, {  }>;
  description: WebAttribute<CanvasApp_Select, { description: string | null }, {  }>;
  displayname: WebAttribute<CanvasApp_Select, { displayname: string | null }, {  }>;
  embeddedapp: WebAttribute<CanvasApp_Select, { embeddedapp: string | null }, {  }>;
  galleryitemid: WebAttribute<CanvasApp_Select, { galleryitemid: string | null }, {  }>;
  introducedversion: WebAttribute<CanvasApp_Select, { introducedversion: string | null }, {  }>;
  iscdsupgraded: WebAttribute<CanvasApp_Select, { iscdsupgraded: boolean | null }, {  }>;
  iscustomizable: WebAttribute<CanvasApp_Select, { iscustomizable: any | null }, {  }>;
  isfeaturedapp: WebAttribute<CanvasApp_Select, { isfeaturedapp: boolean | null }, {  }>;
  isheroapp: WebAttribute<CanvasApp_Select, { isheroapp: boolean | null }, {  }>;
  ishidden: WebAttribute<CanvasApp_Select, { ishidden: boolean | null }, {  }>;
  ismanaged: WebAttribute<CanvasApp_Select, { ismanaged: boolean | null }, {  }>;
  lastmodifiedtime: WebAttribute<CanvasApp_Select, { lastmodifiedtime: Date | null }, { lastmodifiedtime_formatted?: string }>;
  lastpublishtime: WebAttribute<CanvasApp_Select, { lastpublishtime: Date | null }, { lastpublishtime_formatted?: string }>;
  minclientversion: WebAttribute<CanvasApp_Select, { minclientversion: string | null }, {  }>;
  name: WebAttribute<CanvasApp_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<CanvasApp_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<CanvasApp_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<CanvasApp_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<CanvasApp_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<CanvasApp_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  publisher: WebAttribute<CanvasApp_Select, { publisher: string | null }, {  }>;
  solutionid: WebAttribute<CanvasApp_Select, { solutionid: string | null }, {  }>;
  status: WebAttribute<CanvasApp_Select, { status: string | null }, {  }>;
  supportingsolutionid: WebAttribute<CanvasApp_Select, { supportingsolutionid: string | null }, {  }>;
  tags: WebAttribute<CanvasApp_Select, { tags: string | null }, {  }>;
  uniquecanvasappid: WebAttribute<CanvasApp_Select, { uniquecanvasappid: string | null }, {  }>;
  versionnumber: WebAttribute<CanvasApp_Select, { versionnumber: number | null }, {  }>;
}
interface CanvasApp_Filter {
  aadcreatedbyid: string;
  aadlastmodifiedbyid: string;
  aadlastpublishedbyid: string;
  admincontrolbypassconsent: boolean;
  appcomponentdependencies: string;
  appcomponents: string;
  appopenuri: string;
  appversion: string;
  authorizationreferences: string;
  backgroundcolor: string;
  bypassconsent: boolean;
  canconsumeapppass: boolean;
  canvasappid: XQW.Guid;
  canvasapprowid: XQW.Guid;
  canvasapptype: canvasapp_canvasapptype;
  cdsdependencies: string;
  commitmessage: string;
  componentstate: componentstate;
  connectionreferences: string;
  createdbyclientversion: string;
  createdtime: Date;
  databasereferences: string;
  description: string;
  displayname: string;
  embeddedapp: string;
  galleryitemid: string;
  introducedversion: string;
  iscdsupgraded: boolean;
  iscustomizable: any;
  isfeaturedapp: boolean;
  isheroapp: boolean;
  ishidden: boolean;
  ismanaged: boolean;
  lastmodifiedtime: Date;
  lastpublishtime: Date;
  minclientversion: string;
  name: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  publisher: string;
  solutionid: XQW.Guid;
  status: string;
  supportingsolutionid: XQW.Guid;
  tags: string;
  uniquecanvasappid: string;
  versionnumber: number;
}
interface CanvasApp_Expand {
  Comment_Artifact_CanvasApp: WebExpand<CanvasApp_Expand, Comment_Select, Comment_Filter, { Comment_Artifact_CanvasApp: Comment_Result[] }>;
  FK_CanvasApp_Solution: WebExpand<CanvasApp_Expand, Solution_Select, Solution_Filter, { FK_CanvasApp_Solution: Solution_Result }>;
  assets: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { assets: FileAttachment_Result }>;
  backgroundimage: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { backgroundimage: FileAttachment_Result }>;
  canvasapp_FileAttachments: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { canvasapp_FileAttachments: FileAttachment_Result[] }>;
  canvasapp_appaction_onclickeventformulacomponentlibraryid: WebExpand<CanvasApp_Expand, appaction_Select, appaction_Filter, { canvasapp_appaction_onclickeventformulacomponentlibraryid: appaction_Result[] }>;
  canvasapp_appaction_visibilityformulacomponentlibraryid: WebExpand<CanvasApp_Expand, appaction_Select, appaction_Filter, { canvasapp_appaction_visibilityformulacomponentlibraryid: appaction_Result[] }>;
  canvasapp_appelement_canvasappid: WebExpand<CanvasApp_Expand, AppElement_Select, AppElement_Filter, { canvasapp_appelement_canvasappid: AppElement_Result[] }>;
  canvasappextendedmetadata: WebExpand<CanvasApp_Expand, CanvasAppExtendedMetadata_Select, CanvasAppExtendedMetadata_Filter, { canvasappextendedmetadata: CanvasAppExtendedMetadata_Result[] }>;
  document: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { document: FileAttachment_Result }>;
  largeicon: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { largeicon: FileAttachment_Result }>;
  mediumicon: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { mediumicon: FileAttachment_Result }>;
  ownerid: WebExpand<CanvasApp_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<CanvasApp_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  smallicon: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { smallicon: FileAttachment_Result }>;
  teamsicon: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { teamsicon: FileAttachment_Result }>;
  wideicon: WebExpand<CanvasApp_Expand, FileAttachment_Select, FileAttachment_Filter, { wideicon: FileAttachment_Result }>;
}
interface CanvasApp_FormattedResult {
  canvasapptype_formatted?: string;
  componentstate_formatted?: string;
  createdtime_formatted?: string;
  lastmodifiedtime_formatted?: string;
  lastpublishtime_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
}
interface CanvasApp_Result extends CanvasApp_Base, CanvasApp_Relationships {
  "@odata.etag": string;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface CanvasApp_RelatedOne {
  FK_CanvasApp_Solution: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
  assets: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  backgroundimage: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  document: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  largeicon: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  mediumicon: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  smallicon: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  teamsicon: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  wideicon: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
}
interface CanvasApp_RelatedMany {
  Comment_Artifact_CanvasApp: WebMappingRetrieve<Comment_Select,Comment_Expand,Comment_Filter,Comment_Fixed,Comment_Result,Comment_FormattedResult>;
  canvasapp_FileAttachments: WebMappingRetrieve<FileAttachment_Select,FileAttachment_Expand,FileAttachment_Filter,FileAttachment_Fixed,FileAttachment_Result,FileAttachment_FormattedResult>;
  canvasapp_appaction_onclickeventformulacomponentlibraryid: WebMappingRetrieve<appaction_Select,appaction_Expand,appaction_Filter,appaction_Fixed,appaction_Result,appaction_FormattedResult>;
  canvasapp_appaction_visibilityformulacomponentlibraryid: WebMappingRetrieve<appaction_Select,appaction_Expand,appaction_Filter,appaction_Fixed,appaction_Result,appaction_FormattedResult>;
  canvasapp_appelement_canvasappid: WebMappingRetrieve<AppElement_Select,AppElement_Expand,AppElement_Filter,AppElement_Fixed,AppElement_Result,AppElement_FormattedResult>;
  canvasappextendedmetadata: WebMappingRetrieve<CanvasAppExtendedMetadata_Select,CanvasAppExtendedMetadata_Expand,CanvasAppExtendedMetadata_Filter,CanvasAppExtendedMetadata_Fixed,CanvasAppExtendedMetadata_Result,CanvasAppExtendedMetadata_FormattedResult>;
}
interface WebEntitiesRetrieve {
  canvasapps: WebMappingRetrieve<CanvasApp_Select,CanvasApp_Expand,CanvasApp_Filter,CanvasApp_Fixed,CanvasApp_Result,CanvasApp_FormattedResult>;
}
interface WebEntitiesRelated {
  canvasapps: WebMappingRelated<CanvasApp_RelatedOne,CanvasApp_RelatedMany>;
}
interface WebEntitiesCUDA {
  canvasapps: WebMappingCUDA<CanvasApp_Create,CanvasApp_Update,CanvasApp_Select>;
}
