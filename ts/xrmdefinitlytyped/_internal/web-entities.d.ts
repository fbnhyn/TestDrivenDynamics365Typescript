interface WebMappingRetrieve<ISelect, IExpand, IFilter, IFixed, Result, FormattedResult> {
}
interface WebMappingCUDA<ICreate, IUpdate, ISelect> {
}
interface WebMappingRelated<ISingle, IMultiple> {
}
interface WebEntity {
}
interface WebEntity_Fixed {
  "@odata.etag": string;
}
interface Account_Base extends WebEntity {
}
interface Account_Fixed extends WebEntity_Fixed {
  accountid: string;
}
interface Account extends Account_Base, Account_Relationships {
}
interface Account_Relationships {
}
interface Account_Result extends Account_Base, Account_Relationships {
}
interface Account_FormattedResult {
}
interface Account_Select {
}
interface Account_Expand {
}
interface Account_Filter {
}
interface Account_Create extends Account {
}
interface Account_Update extends Account {
}
interface AccountLeads_Base extends WebEntity {
}
interface AccountLeads_Fixed extends WebEntity_Fixed {
  accountleadid: string;
}
interface AccountLeads extends AccountLeads_Base, AccountLeads_Relationships {
}
interface AccountLeads_Relationships {
}
interface AccountLeads_Result extends AccountLeads_Base, AccountLeads_Relationships {
}
interface AccountLeads_FormattedResult {
}
interface AccountLeads_Select {
}
interface AccountLeads_Expand {
}
interface AccountLeads_Filter {
}
interface AccountLeads_Create extends AccountLeads {
}
interface AccountLeads_Update extends AccountLeads {
}
interface ACIViewMapper_Base extends WebEntity {
}
interface ACIViewMapper_Fixed extends WebEntity_Fixed {
  aciviewmapperid: string;
}
interface ACIViewMapper extends ACIViewMapper_Base, ACIViewMapper_Relationships {
}
interface ACIViewMapper_Relationships {
}
interface ACIViewMapper_Result extends ACIViewMapper_Base, ACIViewMapper_Relationships {
}
interface ACIViewMapper_FormattedResult {
}
interface ACIViewMapper_Select {
}
interface ACIViewMapper_Expand {
}
interface ACIViewMapper_Filter {
}
interface ACIViewMapper_Create extends ACIViewMapper {
}
interface ACIViewMapper_Update extends ACIViewMapper {
}
interface ActionCard_Base extends WebEntity {
}
interface ActionCard_Fixed extends WebEntity_Fixed {
  actioncardid: string;
}
interface ActionCard extends ActionCard_Base, ActionCard_Relationships {
}
interface ActionCard_Relationships {
}
interface ActionCard_Result extends ActionCard_Base, ActionCard_Relationships {
}
interface ActionCard_FormattedResult {
}
interface ActionCard_Select {
}
interface ActionCard_Expand {
}
interface ActionCard_Filter {
}
interface ActionCard_Create extends ActionCard {
}
interface ActionCard_Update extends ActionCard {
}
interface ActionCardUserSettings_Base extends WebEntity {
}
interface ActionCardUserSettings_Fixed extends WebEntity_Fixed {
  actioncardusersettingsid: string;
}
interface ActionCardUserSettings extends ActionCardUserSettings_Base, ActionCardUserSettings_Relationships {
}
interface ActionCardUserSettings_Relationships {
}
interface ActionCardUserSettings_Result extends ActionCardUserSettings_Base, ActionCardUserSettings_Relationships {
}
interface ActionCardUserSettings_FormattedResult {
}
interface ActionCardUserSettings_Select {
}
interface ActionCardUserSettings_Expand {
}
interface ActionCardUserSettings_Filter {
}
interface ActionCardUserSettings_Create extends ActionCardUserSettings {
}
interface ActionCardUserSettings_Update extends ActionCardUserSettings {
}
interface ActionCardUserState_Base extends WebEntity {
}
interface ActionCardUserState_Fixed extends WebEntity_Fixed {
  actioncarduserstateid: string;
}
interface ActionCardUserState extends ActionCardUserState_Base, ActionCardUserState_Relationships {
}
interface ActionCardUserState_Relationships {
}
interface ActionCardUserState_Result extends ActionCardUserState_Base, ActionCardUserState_Relationships {
}
interface ActionCardUserState_FormattedResult {
}
interface ActionCardUserState_Select {
}
interface ActionCardUserState_Expand {
}
interface ActionCardUserState_Filter {
}
interface ActionCardUserState_Create extends ActionCardUserState {
}
interface ActionCardUserState_Update extends ActionCardUserState {
}
interface activityfileattachment_Base extends WebEntity {
}
interface activityfileattachment_Fixed extends WebEntity_Fixed {
  activityfileattachmentid: string;
}
interface activityfileattachment extends activityfileattachment_Base, activityfileattachment_Relationships {
}
interface activityfileattachment_Relationships {
}
interface activityfileattachment_Result extends activityfileattachment_Base, activityfileattachment_Relationships {
}
interface activityfileattachment_FormattedResult {
}
interface activityfileattachment_Select {
}
interface activityfileattachment_Expand {
}
interface activityfileattachment_Filter {
}
interface activityfileattachment_Create extends activityfileattachment {
}
interface activityfileattachment_Update extends activityfileattachment {
}
interface ActivityMimeAttachment_Base extends WebEntity {
}
interface ActivityMimeAttachment_Fixed extends WebEntity_Fixed {
  activitymimeattachmentid: string;
}
interface ActivityMimeAttachment extends ActivityMimeAttachment_Base, ActivityMimeAttachment_Relationships {
}
interface ActivityMimeAttachment_Relationships {
}
interface ActivityMimeAttachment_Result extends ActivityMimeAttachment_Base, ActivityMimeAttachment_Relationships {
}
interface ActivityMimeAttachment_FormattedResult {
}
interface ActivityMimeAttachment_Select {
}
interface ActivityMimeAttachment_Expand {
}
interface ActivityMimeAttachment_Filter {
}
interface ActivityMimeAttachment_Create extends ActivityMimeAttachment {
}
interface ActivityMimeAttachment_Update extends ActivityMimeAttachment {
}
interface activitymonitor_Base extends WebEntity {
}
interface activitymonitor_Fixed extends WebEntity_Fixed {
  activitymonitorid: string;
}
interface activitymonitor extends activitymonitor_Base, activitymonitor_Relationships {
}
interface activitymonitor_Relationships {
}
interface activitymonitor_Result extends activitymonitor_Base, activitymonitor_Relationships {
}
interface activitymonitor_FormattedResult {
}
interface activitymonitor_Select {
}
interface activitymonitor_Expand {
}
interface activitymonitor_Filter {
}
interface activitymonitor_Create extends activitymonitor {
}
interface activitymonitor_Update extends activitymonitor {
}
interface ActivityParty_Base extends WebEntity {
}
interface ActivityParty_Fixed extends WebEntity_Fixed {
  activitypartyid: string;
}
interface ActivityParty extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_Relationships {
}
interface ActivityParty_Result extends ActivityParty_Base, ActivityParty_Relationships {
}
interface ActivityParty_FormattedResult {
}
interface ActivityParty_Select {
}
interface ActivityParty_Expand {
}
interface ActivityParty_Filter {
}
interface ActivityParty_Create extends ActivityParty {
}
interface ActivityParty_Update extends ActivityParty {
}
interface ActivityPointer_Base extends WebEntity {
}
interface ActivityPointer_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface ActivityPointer extends ActivityPointer_Base, ActivityPointer_Relationships {
}
interface ActivityPointer_Relationships {
}
interface ActivityPointer_Result extends ActivityPointer_Base, ActivityPointer_Relationships {
}
interface ActivityPointer_FormattedResult {
}
interface ActivityPointer_Select {
}
interface ActivityPointer_Expand {
}
interface ActivityPointer_Filter {
}
interface ActivityPointer_Create extends ActivityPointer {
}
interface ActivityPointer_Update extends ActivityPointer {
}
interface adminsettingsentity_Base extends WebEntity {
}
interface adminsettingsentity_Fixed extends WebEntity_Fixed {
  adminsettingsentityid: string;
}
interface adminsettingsentity extends adminsettingsentity_Base, adminsettingsentity_Relationships {
}
interface adminsettingsentity_Relationships {
}
interface adminsettingsentity_Result extends adminsettingsentity_Base, adminsettingsentity_Relationships {
}
interface adminsettingsentity_FormattedResult {
}
interface adminsettingsentity_Select {
}
interface adminsettingsentity_Expand {
}
interface adminsettingsentity_Filter {
}
interface adminsettingsentity_Create extends adminsettingsentity {
}
interface adminsettingsentity_Update extends adminsettingsentity {
}
interface AdvancedSimilarityRule_Base extends WebEntity {
}
interface AdvancedSimilarityRule_Fixed extends WebEntity_Fixed {
  advancedsimilarityruleid: string;
}
interface AdvancedSimilarityRule extends AdvancedSimilarityRule_Base, AdvancedSimilarityRule_Relationships {
}
interface AdvancedSimilarityRule_Relationships {
}
interface AdvancedSimilarityRule_Result extends AdvancedSimilarityRule_Base, AdvancedSimilarityRule_Relationships {
}
interface AdvancedSimilarityRule_FormattedResult {
}
interface AdvancedSimilarityRule_Select {
}
interface AdvancedSimilarityRule_Expand {
}
interface AdvancedSimilarityRule_Filter {
}
interface AdvancedSimilarityRule_Create extends AdvancedSimilarityRule {
}
interface AdvancedSimilarityRule_Update extends AdvancedSimilarityRule {
}
interface Annotation_Base extends WebEntity {
}
interface Annotation_Fixed extends WebEntity_Fixed {
  annotationid: string;
}
interface Annotation extends Annotation_Base, Annotation_Relationships {
}
interface Annotation_Relationships {
}
interface Annotation_Result extends Annotation_Base, Annotation_Relationships {
}
interface Annotation_FormattedResult {
}
interface Annotation_Select {
}
interface Annotation_Expand {
}
interface Annotation_Filter {
}
interface Annotation_Create extends Annotation {
}
interface Annotation_Update extends Annotation {
}
interface AnnualFiscalCalendar_Base extends WebEntity {
}
interface AnnualFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface AnnualFiscalCalendar extends AnnualFiscalCalendar_Base, AnnualFiscalCalendar_Relationships {
}
interface AnnualFiscalCalendar_Relationships {
}
interface AnnualFiscalCalendar_Result extends AnnualFiscalCalendar_Base, AnnualFiscalCalendar_Relationships {
}
interface AnnualFiscalCalendar_FormattedResult {
}
interface AnnualFiscalCalendar_Select {
}
interface AnnualFiscalCalendar_Expand {
}
interface AnnualFiscalCalendar_Filter {
}
interface AnnualFiscalCalendar_Create extends AnnualFiscalCalendar {
}
interface AnnualFiscalCalendar_Update extends AnnualFiscalCalendar {
}
interface appaction_Base extends WebEntity {
}
interface appaction_Fixed extends WebEntity_Fixed {
  appactionid: string;
}
interface appaction extends appaction_Base, appaction_Relationships {
}
interface appaction_Relationships {
}
interface appaction_Result extends appaction_Base, appaction_Relationships {
}
interface appaction_FormattedResult {
}
interface appaction_Select {
}
interface appaction_Expand {
}
interface appaction_Filter {
}
interface appaction_Create extends appaction {
}
interface appaction_Update extends appaction {
}
interface AppConfig_Base extends WebEntity {
}
interface AppConfig_Fixed extends WebEntity_Fixed {
  appconfigid: string;
}
interface AppConfig extends AppConfig_Base, AppConfig_Relationships {
}
interface AppConfig_Relationships {
}
interface AppConfig_Result extends AppConfig_Base, AppConfig_Relationships {
}
interface AppConfig_FormattedResult {
}
interface AppConfig_Select {
}
interface AppConfig_Expand {
}
interface AppConfig_Filter {
}
interface AppConfig_Create extends AppConfig {
}
interface AppConfig_Update extends AppConfig {
}
interface AppConfigInstance_Base extends WebEntity {
}
interface AppConfigInstance_Fixed extends WebEntity_Fixed {
  appconfiginstanceid: string;
}
interface AppConfigInstance extends AppConfigInstance_Base, AppConfigInstance_Relationships {
}
interface AppConfigInstance_Relationships {
}
interface AppConfigInstance_Result extends AppConfigInstance_Base, AppConfigInstance_Relationships {
}
interface AppConfigInstance_FormattedResult {
}
interface AppConfigInstance_Select {
}
interface AppConfigInstance_Expand {
}
interface AppConfigInstance_Filter {
}
interface AppConfigInstance_Create extends AppConfigInstance {
}
interface AppConfigInstance_Update extends AppConfigInstance {
}
interface AppConfigMaster_Base extends WebEntity {
}
interface AppConfigMaster_Fixed extends WebEntity_Fixed {
  appconfigmasterid: string;
}
interface AppConfigMaster extends AppConfigMaster_Base, AppConfigMaster_Relationships {
}
interface AppConfigMaster_Relationships {
}
interface AppConfigMaster_Result extends AppConfigMaster_Base, AppConfigMaster_Relationships {
}
interface AppConfigMaster_FormattedResult {
}
interface AppConfigMaster_Select {
}
interface AppConfigMaster_Expand {
}
interface AppConfigMaster_Filter {
}
interface AppConfigMaster_Create extends AppConfigMaster {
}
interface AppConfigMaster_Update extends AppConfigMaster {
}
interface AppElement_Base extends WebEntity {
}
interface AppElement_Fixed extends WebEntity_Fixed {
  appelementid: string;
}
interface AppElement extends AppElement_Base, AppElement_Relationships {
}
interface AppElement_Relationships {
}
interface AppElement_Result extends AppElement_Base, AppElement_Relationships {
}
interface AppElement_FormattedResult {
}
interface AppElement_Select {
}
interface AppElement_Expand {
}
interface AppElement_Filter {
}
interface AppElement_Create extends AppElement {
}
interface AppElement_Update extends AppElement {
}
interface ApplicationFile_Base extends WebEntity {
}
interface ApplicationFile_Fixed extends WebEntity_Fixed {
  fileid: string;
}
interface ApplicationFile extends ApplicationFile_Base, ApplicationFile_Relationships {
}
interface ApplicationFile_Relationships {
}
interface ApplicationFile_Result extends ApplicationFile_Base, ApplicationFile_Relationships {
}
interface ApplicationFile_FormattedResult {
}
interface ApplicationFile_Select {
}
interface ApplicationFile_Expand {
}
interface ApplicationFile_Filter {
}
interface ApplicationFile_Create extends ApplicationFile {
}
interface ApplicationFile_Update extends ApplicationFile {
}
interface ApplicationUser_Base extends WebEntity {
}
interface ApplicationUser_Fixed extends WebEntity_Fixed {
  applicationuserid: string;
}
interface ApplicationUser extends ApplicationUser_Base, ApplicationUser_Relationships {
}
interface ApplicationUser_Relationships {
}
interface ApplicationUser_Result extends ApplicationUser_Base, ApplicationUser_Relationships {
}
interface ApplicationUser_FormattedResult {
}
interface ApplicationUser_Select {
}
interface ApplicationUser_Expand {
}
interface ApplicationUser_Filter {
}
interface ApplicationUser_Create extends ApplicationUser {
}
interface ApplicationUser_Update extends ApplicationUser {
}
interface applicationuserprofile_Base extends WebEntity {
}
interface applicationuserprofile_Fixed extends WebEntity_Fixed {
  applicationuserprofileid: string;
}
interface applicationuserprofile extends applicationuserprofile_Base, applicationuserprofile_Relationships {
}
interface applicationuserprofile_Relationships {
}
interface applicationuserprofile_Result extends applicationuserprofile_Base, applicationuserprofile_Relationships {
}
interface applicationuserprofile_FormattedResult {
}
interface applicationuserprofile_Select {
}
interface applicationuserprofile_Expand {
}
interface applicationuserprofile_Filter {
}
interface applicationuserprofile_Create extends applicationuserprofile {
}
interface applicationuserprofile_Update extends applicationuserprofile {
}
interface applicationuserrole_Base extends WebEntity {
}
interface applicationuserrole_Fixed extends WebEntity_Fixed {
  applicationuserroleid: string;
}
interface applicationuserrole extends applicationuserrole_Base, applicationuserrole_Relationships {
}
interface applicationuserrole_Relationships {
}
interface applicationuserrole_Result extends applicationuserrole_Base, applicationuserrole_Relationships {
}
interface applicationuserrole_FormattedResult {
}
interface applicationuserrole_Select {
}
interface applicationuserrole_Expand {
}
interface applicationuserrole_Filter {
}
interface applicationuserrole_Create extends applicationuserrole {
}
interface applicationuserrole_Update extends applicationuserrole {
}
interface AppModule_Base extends WebEntity {
}
interface AppModule_Fixed extends WebEntity_Fixed {
  appmoduleid: string;
}
interface AppModule extends AppModule_Base, AppModule_Relationships {
}
interface AppModule_Relationships {
}
interface AppModule_Result extends AppModule_Base, AppModule_Relationships {
}
interface AppModule_FormattedResult {
}
interface AppModule_Select {
}
interface AppModule_Expand {
}
interface AppModule_Filter {
}
interface AppModule_Create extends AppModule {
}
interface AppModule_Update extends AppModule {
}
interface AppModuleComponent_Base extends WebEntity {
}
interface AppModuleComponent_Fixed extends WebEntity_Fixed {
  appmodulecomponentid: string;
}
interface AppModuleComponent extends AppModuleComponent_Base, AppModuleComponent_Relationships {
}
interface AppModuleComponent_Relationships {
}
interface AppModuleComponent_Result extends AppModuleComponent_Base, AppModuleComponent_Relationships {
}
interface AppModuleComponent_FormattedResult {
}
interface AppModuleComponent_Select {
}
interface AppModuleComponent_Expand {
}
interface AppModuleComponent_Filter {
}
interface AppModuleComponent_Create extends AppModuleComponent {
}
interface AppModuleComponent_Update extends AppModuleComponent {
}
interface AppModuleComponentEdge_Base extends WebEntity {
}
interface AppModuleComponentEdge_Fixed extends WebEntity_Fixed {
  appmodulecomponentedgeid: string;
}
interface AppModuleComponentEdge extends AppModuleComponentEdge_Base, AppModuleComponentEdge_Relationships {
}
interface AppModuleComponentEdge_Relationships {
}
interface AppModuleComponentEdge_Result extends AppModuleComponentEdge_Base, AppModuleComponentEdge_Relationships {
}
interface AppModuleComponentEdge_FormattedResult {
}
interface AppModuleComponentEdge_Select {
}
interface AppModuleComponentEdge_Expand {
}
interface AppModuleComponentEdge_Filter {
}
interface AppModuleComponentEdge_Create extends AppModuleComponentEdge {
}
interface AppModuleComponentEdge_Update extends AppModuleComponentEdge {
}
interface AppModuleComponentNode_Base extends WebEntity {
}
interface AppModuleComponentNode_Fixed extends WebEntity_Fixed {
  appmodulecomponentnodeid: string;
}
interface AppModuleComponentNode extends AppModuleComponentNode_Base, AppModuleComponentNode_Relationships {
}
interface AppModuleComponentNode_Relationships {
}
interface AppModuleComponentNode_Result extends AppModuleComponentNode_Base, AppModuleComponentNode_Relationships {
}
interface AppModuleComponentNode_FormattedResult {
}
interface AppModuleComponentNode_Select {
}
interface AppModuleComponentNode_Expand {
}
interface AppModuleComponentNode_Filter {
}
interface AppModuleComponentNode_Create extends AppModuleComponentNode {
}
interface AppModuleComponentNode_Update extends AppModuleComponentNode {
}
interface AppModuleMetadata_Base extends WebEntity {
}
interface AppModuleMetadata_Fixed extends WebEntity_Fixed {
  appmodulemetadataid: string;
}
interface AppModuleMetadata extends AppModuleMetadata_Base, AppModuleMetadata_Relationships {
}
interface AppModuleMetadata_Relationships {
}
interface AppModuleMetadata_Result extends AppModuleMetadata_Base, AppModuleMetadata_Relationships {
}
interface AppModuleMetadata_FormattedResult {
}
interface AppModuleMetadata_Select {
}
interface AppModuleMetadata_Expand {
}
interface AppModuleMetadata_Filter {
}
interface AppModuleMetadata_Create extends AppModuleMetadata {
}
interface AppModuleMetadata_Update extends AppModuleMetadata {
}
interface AppModuleMetadataDependency_Base extends WebEntity {
}
interface AppModuleMetadataDependency_Fixed extends WebEntity_Fixed {
  appmodulemetadatadependencyid: string;
}
interface AppModuleMetadataDependency extends AppModuleMetadataDependency_Base, AppModuleMetadataDependency_Relationships {
}
interface AppModuleMetadataDependency_Relationships {
}
interface AppModuleMetadataDependency_Result extends AppModuleMetadataDependency_Base, AppModuleMetadataDependency_Relationships {
}
interface AppModuleMetadataDependency_FormattedResult {
}
interface AppModuleMetadataDependency_Select {
}
interface AppModuleMetadataDependency_Expand {
}
interface AppModuleMetadataDependency_Filter {
}
interface AppModuleMetadataDependency_Create extends AppModuleMetadataDependency {
}
interface AppModuleMetadataDependency_Update extends AppModuleMetadataDependency {
}
interface AppModuleMetadataOperationLog_Base extends WebEntity {
}
interface AppModuleMetadataOperationLog_Fixed extends WebEntity_Fixed {
  appmodulemetadataoperationlogid: string;
}
interface AppModuleMetadataOperationLog extends AppModuleMetadataOperationLog_Base, AppModuleMetadataOperationLog_Relationships {
}
interface AppModuleMetadataOperationLog_Relationships {
}
interface AppModuleMetadataOperationLog_Result extends AppModuleMetadataOperationLog_Base, AppModuleMetadataOperationLog_Relationships {
}
interface AppModuleMetadataOperationLog_FormattedResult {
}
interface AppModuleMetadataOperationLog_Select {
}
interface AppModuleMetadataOperationLog_Expand {
}
interface AppModuleMetadataOperationLog_Filter {
}
interface AppModuleMetadataOperationLog_Create extends AppModuleMetadataOperationLog {
}
interface AppModuleMetadataOperationLog_Update extends AppModuleMetadataOperationLog {
}
interface AppModuleRoles_Base extends WebEntity {
}
interface AppModuleRoles_Fixed extends WebEntity_Fixed {
  appmoduleroleid: string;
}
interface AppModuleRoles extends AppModuleRoles_Base, AppModuleRoles_Relationships {
}
interface AppModuleRoles_Relationships {
}
interface AppModuleRoles_Result extends AppModuleRoles_Base, AppModuleRoles_Relationships {
}
interface AppModuleRoles_FormattedResult {
}
interface AppModuleRoles_Select {
}
interface AppModuleRoles_Expand {
}
interface AppModuleRoles_Filter {
}
interface AppModuleRoles_Create extends AppModuleRoles {
}
interface AppModuleRoles_Update extends AppModuleRoles {
}
interface appnotification_Base extends WebEntity {
}
interface appnotification_Fixed extends WebEntity_Fixed {
  appnotificationid: string;
}
interface appnotification extends appnotification_Base, appnotification_Relationships {
}
interface appnotification_Relationships {
}
interface appnotification_Result extends appnotification_Base, appnotification_Relationships {
}
interface appnotification_FormattedResult {
}
interface appnotification_Select {
}
interface appnotification_Expand {
}
interface appnotification_Filter {
}
interface appnotification_Create extends appnotification {
}
interface appnotification_Update extends appnotification {
}
interface Appointment_Base extends WebEntity {
}
interface Appointment_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Appointment extends Appointment_Base, Appointment_Relationships {
}
interface Appointment_Relationships {
}
interface Appointment_Result extends Appointment_Base, Appointment_Relationships {
}
interface Appointment_FormattedResult {
}
interface Appointment_Select {
}
interface Appointment_Expand {
}
interface Appointment_Filter {
}
interface Appointment_Create extends Appointment {
}
interface Appointment_Update extends Appointment {
}
interface AppSetting_Base extends WebEntity {
}
interface AppSetting_Fixed extends WebEntity_Fixed {
  appsettingid: string;
}
interface AppSetting extends AppSetting_Base, AppSetting_Relationships {
}
interface AppSetting_Relationships {
}
interface AppSetting_Result extends AppSetting_Base, AppSetting_Relationships {
}
interface AppSetting_FormattedResult {
}
interface AppSetting_Select {
}
interface AppSetting_Expand {
}
interface AppSetting_Filter {
}
interface AppSetting_Create extends AppSetting {
}
interface AppSetting_Update extends AppSetting {
}
interface AppUserSetting_Base extends WebEntity {
}
interface AppUserSetting_Fixed extends WebEntity_Fixed {
  appusersettingid: string;
}
interface AppUserSetting extends AppUserSetting_Base, AppUserSetting_Relationships {
}
interface AppUserSetting_Relationships {
}
interface AppUserSetting_Result extends AppUserSetting_Base, AppUserSetting_Relationships {
}
interface AppUserSetting_FormattedResult {
}
interface AppUserSetting_Select {
}
interface AppUserSetting_Expand {
}
interface AppUserSetting_Filter {
}
interface AppUserSetting_Create extends AppUserSetting {
}
interface AppUserSetting_Update extends AppUserSetting {
}
interface AsyncOperation_Base extends WebEntity {
}
interface AsyncOperation_Fixed extends WebEntity_Fixed {
  asyncoperationid: string;
}
interface AsyncOperation extends AsyncOperation_Base, AsyncOperation_Relationships {
}
interface AsyncOperation_Relationships {
}
interface AsyncOperation_Result extends AsyncOperation_Base, AsyncOperation_Relationships {
}
interface AsyncOperation_FormattedResult {
}
interface AsyncOperation_Select {
}
interface AsyncOperation_Expand {
}
interface AsyncOperation_Filter {
}
interface AsyncOperation_Create extends AsyncOperation {
}
interface AsyncOperation_Update extends AsyncOperation {
}
interface Attachment_Base extends WebEntity {
}
interface Attachment_Fixed extends WebEntity_Fixed {
  attachmentid: string;
}
interface Attachment extends Attachment_Base, Attachment_Relationships {
}
interface Attachment_Relationships {
}
interface Attachment_Result extends Attachment_Base, Attachment_Relationships {
}
interface Attachment_FormattedResult {
}
interface Attachment_Select {
}
interface Attachment_Expand {
}
interface Attachment_Filter {
}
interface Attachment_Create extends Attachment {
}
interface Attachment_Update extends Attachment {
}
interface Attribute_Base extends WebEntity {
}
interface Attribute_Fixed extends WebEntity_Fixed {
  attributeid: string;
}
interface Attribute extends Attribute_Base, Attribute_Relationships {
}
interface Attribute_Relationships {
}
interface Attribute_Result extends Attribute_Base, Attribute_Relationships {
}
interface Attribute_FormattedResult {
}
interface Attribute_Select {
}
interface Attribute_Expand {
}
interface Attribute_Filter {
}
interface Attribute_Create extends Attribute {
}
interface Attribute_Update extends Attribute {
}
interface AttributeImageConfig_Base extends WebEntity {
}
interface AttributeImageConfig_Fixed extends WebEntity_Fixed {
  attributeimageconfigid: string;
}
interface AttributeImageConfig extends AttributeImageConfig_Base, AttributeImageConfig_Relationships {
}
interface AttributeImageConfig_Relationships {
}
interface AttributeImageConfig_Result extends AttributeImageConfig_Base, AttributeImageConfig_Relationships {
}
interface AttributeImageConfig_FormattedResult {
}
interface AttributeImageConfig_Select {
}
interface AttributeImageConfig_Expand {
}
interface AttributeImageConfig_Filter {
}
interface AttributeImageConfig_Create extends AttributeImageConfig {
}
interface AttributeImageConfig_Update extends AttributeImageConfig {
}
interface AttributeMap_Base extends WebEntity {
}
interface AttributeMap_Fixed extends WebEntity_Fixed {
  attributemapid: string;
}
interface AttributeMap extends AttributeMap_Base, AttributeMap_Relationships {
}
interface AttributeMap_Relationships {
}
interface AttributeMap_Result extends AttributeMap_Base, AttributeMap_Relationships {
}
interface AttributeMap_FormattedResult {
}
interface AttributeMap_Select {
}
interface AttributeMap_Expand {
}
interface AttributeMap_Filter {
}
interface AttributeMap_Create extends AttributeMap {
}
interface AttributeMap_Update extends AttributeMap {
}
interface Audit_Base extends WebEntity {
}
interface Audit_Fixed extends WebEntity_Fixed {
  auditid: string;
}
interface Audit extends Audit_Base, Audit_Relationships {
}
interface Audit_Relationships {
}
interface Audit_Result extends Audit_Base, Audit_Relationships {
}
interface Audit_FormattedResult {
}
interface Audit_Select {
}
interface Audit_Expand {
}
interface Audit_Filter {
}
interface Audit_Create extends Audit {
}
interface Audit_Update extends Audit {
}
interface AuthorizationServer_Base extends WebEntity {
}
interface AuthorizationServer_Fixed extends WebEntity_Fixed {
  authorizationserverid: string;
}
interface AuthorizationServer extends AuthorizationServer_Base, AuthorizationServer_Relationships {
}
interface AuthorizationServer_Relationships {
}
interface AuthorizationServer_Result extends AuthorizationServer_Base, AuthorizationServer_Relationships {
}
interface AuthorizationServer_FormattedResult {
}
interface AuthorizationServer_Select {
}
interface AuthorizationServer_Expand {
}
interface AuthorizationServer_Filter {
}
interface AuthorizationServer_Create extends AuthorizationServer {
}
interface AuthorizationServer_Update extends AuthorizationServer {
}
interface availabletimes_Base extends WebEntity {
}
interface availabletimes_Fixed extends WebEntity_Fixed {
  availabletimesid: string;
}
interface availabletimes extends availabletimes_Base, availabletimes_Relationships {
}
interface availabletimes_Relationships {
}
interface availabletimes_Result extends availabletimes_Base, availabletimes_Relationships {
}
interface availabletimes_FormattedResult {
}
interface availabletimes_Select {
}
interface availabletimes_Expand {
}
interface availabletimes_Filter {
}
interface availabletimes_Create extends availabletimes {
}
interface availabletimes_Update extends availabletimes {
}
interface availabletimesdatasource_Base extends WebEntity {
}
interface availabletimesdatasource_Fixed extends WebEntity_Fixed {
  availabletimesdatasourceid: string;
}
interface availabletimesdatasource extends availabletimesdatasource_Base, availabletimesdatasource_Relationships {
}
interface availabletimesdatasource_Relationships {
}
interface availabletimesdatasource_Result extends availabletimesdatasource_Base, availabletimesdatasource_Relationships {
}
interface availabletimesdatasource_FormattedResult {
}
interface availabletimesdatasource_Select {
}
interface availabletimesdatasource_Expand {
}
interface availabletimesdatasource_Filter {
}
interface availabletimesdatasource_Create extends availabletimesdatasource {
}
interface availabletimesdatasource_Update extends availabletimesdatasource {
}
interface AzureServiceConnection_Base extends WebEntity {
}
interface AzureServiceConnection_Fixed extends WebEntity_Fixed {
  azureserviceconnectionid: string;
}
interface AzureServiceConnection extends AzureServiceConnection_Base, AzureServiceConnection_Relationships {
}
interface AzureServiceConnection_Relationships {
}
interface AzureServiceConnection_Result extends AzureServiceConnection_Base, AzureServiceConnection_Relationships {
}
interface AzureServiceConnection_FormattedResult {
}
interface AzureServiceConnection_Select {
}
interface AzureServiceConnection_Expand {
}
interface AzureServiceConnection_Filter {
}
interface AzureServiceConnection_Create extends AzureServiceConnection {
}
interface AzureServiceConnection_Update extends AzureServiceConnection {
}
interface BookableResource_Base extends WebEntity {
}
interface BookableResource_Fixed extends WebEntity_Fixed {
  bookableresourceid: string;
}
interface BookableResource extends BookableResource_Base, BookableResource_Relationships {
}
interface BookableResource_Relationships {
}
interface BookableResource_Result extends BookableResource_Base, BookableResource_Relationships {
}
interface BookableResource_FormattedResult {
}
interface BookableResource_Select {
}
interface BookableResource_Expand {
}
interface BookableResource_Filter {
}
interface BookableResource_Create extends BookableResource {
}
interface BookableResource_Update extends BookableResource {
}
interface BookableResourceBooking_Base extends WebEntity {
}
interface BookableResourceBooking_Fixed extends WebEntity_Fixed {
  bookableresourcebookingid: string;
}
interface BookableResourceBooking extends BookableResourceBooking_Base, BookableResourceBooking_Relationships {
}
interface BookableResourceBooking_Relationships {
}
interface BookableResourceBooking_Result extends BookableResourceBooking_Base, BookableResourceBooking_Relationships {
}
interface BookableResourceBooking_FormattedResult {
}
interface BookableResourceBooking_Select {
}
interface BookableResourceBooking_Expand {
}
interface BookableResourceBooking_Filter {
}
interface BookableResourceBooking_Create extends BookableResourceBooking {
}
interface BookableResourceBooking_Update extends BookableResourceBooking {
}
interface BookableResourceBookingExchangeSyncIdMapping_Base extends WebEntity {
}
interface BookableResourceBookingExchangeSyncIdMapping_Fixed extends WebEntity_Fixed {
  bookableresourcebookingexchangesyncidmappingid: string;
}
interface BookableResourceBookingExchangeSyncIdMapping extends BookableResourceBookingExchangeSyncIdMapping_Base, BookableResourceBookingExchangeSyncIdMapping_Relationships {
}
interface BookableResourceBookingExchangeSyncIdMapping_Relationships {
}
interface BookableResourceBookingExchangeSyncIdMapping_Result extends BookableResourceBookingExchangeSyncIdMapping_Base, BookableResourceBookingExchangeSyncIdMapping_Relationships {
}
interface BookableResourceBookingExchangeSyncIdMapping_FormattedResult {
}
interface BookableResourceBookingExchangeSyncIdMapping_Select {
}
interface BookableResourceBookingExchangeSyncIdMapping_Expand {
}
interface BookableResourceBookingExchangeSyncIdMapping_Filter {
}
interface BookableResourceBookingExchangeSyncIdMapping_Create extends BookableResourceBookingExchangeSyncIdMapping {
}
interface BookableResourceBookingExchangeSyncIdMapping_Update extends BookableResourceBookingExchangeSyncIdMapping {
}
interface BookableResourceBookingHeader_Base extends WebEntity {
}
interface BookableResourceBookingHeader_Fixed extends WebEntity_Fixed {
  bookableresourcebookingheaderid: string;
}
interface BookableResourceBookingHeader extends BookableResourceBookingHeader_Base, BookableResourceBookingHeader_Relationships {
}
interface BookableResourceBookingHeader_Relationships {
}
interface BookableResourceBookingHeader_Result extends BookableResourceBookingHeader_Base, BookableResourceBookingHeader_Relationships {
}
interface BookableResourceBookingHeader_FormattedResult {
}
interface BookableResourceBookingHeader_Select {
}
interface BookableResourceBookingHeader_Expand {
}
interface BookableResourceBookingHeader_Filter {
}
interface BookableResourceBookingHeader_Create extends BookableResourceBookingHeader {
}
interface BookableResourceBookingHeader_Update extends BookableResourceBookingHeader {
}
interface BookableResourceCategory_Base extends WebEntity {
}
interface BookableResourceCategory_Fixed extends WebEntity_Fixed {
  bookableresourcecategoryid: string;
}
interface BookableResourceCategory extends BookableResourceCategory_Base, BookableResourceCategory_Relationships {
}
interface BookableResourceCategory_Relationships {
}
interface BookableResourceCategory_Result extends BookableResourceCategory_Base, BookableResourceCategory_Relationships {
}
interface BookableResourceCategory_FormattedResult {
}
interface BookableResourceCategory_Select {
}
interface BookableResourceCategory_Expand {
}
interface BookableResourceCategory_Filter {
}
interface BookableResourceCategory_Create extends BookableResourceCategory {
}
interface BookableResourceCategory_Update extends BookableResourceCategory {
}
interface BookableResourceCategoryAssn_Base extends WebEntity {
}
interface BookableResourceCategoryAssn_Fixed extends WebEntity_Fixed {
  bookableresourcecategoryassnid: string;
}
interface BookableResourceCategoryAssn extends BookableResourceCategoryAssn_Base, BookableResourceCategoryAssn_Relationships {
}
interface BookableResourceCategoryAssn_Relationships {
}
interface BookableResourceCategoryAssn_Result extends BookableResourceCategoryAssn_Base, BookableResourceCategoryAssn_Relationships {
}
interface BookableResourceCategoryAssn_FormattedResult {
}
interface BookableResourceCategoryAssn_Select {
}
interface BookableResourceCategoryAssn_Expand {
}
interface BookableResourceCategoryAssn_Filter {
}
interface BookableResourceCategoryAssn_Create extends BookableResourceCategoryAssn {
}
interface BookableResourceCategoryAssn_Update extends BookableResourceCategoryAssn {
}
interface BookableResourceCharacteristic_Base extends WebEntity {
}
interface BookableResourceCharacteristic_Fixed extends WebEntity_Fixed {
  bookableresourcecharacteristicid: string;
}
interface BookableResourceCharacteristic extends BookableResourceCharacteristic_Base, BookableResourceCharacteristic_Relationships {
}
interface BookableResourceCharacteristic_Relationships {
}
interface BookableResourceCharacteristic_Result extends BookableResourceCharacteristic_Base, BookableResourceCharacteristic_Relationships {
}
interface BookableResourceCharacteristic_FormattedResult {
}
interface BookableResourceCharacteristic_Select {
}
interface BookableResourceCharacteristic_Expand {
}
interface BookableResourceCharacteristic_Filter {
}
interface BookableResourceCharacteristic_Create extends BookableResourceCharacteristic {
}
interface BookableResourceCharacteristic_Update extends BookableResourceCharacteristic {
}
interface BookableResourceGroup_Base extends WebEntity {
}
interface BookableResourceGroup_Fixed extends WebEntity_Fixed {
  bookableresourcegroupid: string;
}
interface BookableResourceGroup extends BookableResourceGroup_Base, BookableResourceGroup_Relationships {
}
interface BookableResourceGroup_Relationships {
}
interface BookableResourceGroup_Result extends BookableResourceGroup_Base, BookableResourceGroup_Relationships {
}
interface BookableResourceGroup_FormattedResult {
}
interface BookableResourceGroup_Select {
}
interface BookableResourceGroup_Expand {
}
interface BookableResourceGroup_Filter {
}
interface BookableResourceGroup_Create extends BookableResourceGroup {
}
interface BookableResourceGroup_Update extends BookableResourceGroup {
}
interface BookingStatus_Base extends WebEntity {
}
interface BookingStatus_Fixed extends WebEntity_Fixed {
  bookingstatusid: string;
}
interface BookingStatus extends BookingStatus_Base, BookingStatus_Relationships {
}
interface BookingStatus_Relationships {
}
interface BookingStatus_Result extends BookingStatus_Base, BookingStatus_Relationships {
}
interface BookingStatus_FormattedResult {
}
interface BookingStatus_Select {
}
interface BookingStatus_Expand {
}
interface BookingStatus_Filter {
}
interface BookingStatus_Create extends BookingStatus {
}
interface BookingStatus_Update extends BookingStatus {
}
interface bot_Base extends WebEntity {
}
interface bot_Fixed extends WebEntity_Fixed {
  botid: string;
}
interface bot extends bot_Base, bot_Relationships {
}
interface bot_Relationships {
}
interface bot_Result extends bot_Base, bot_Relationships {
}
interface bot_FormattedResult {
}
interface bot_Select {
}
interface bot_Expand {
}
interface bot_Filter {
}
interface bot_Create extends bot {
}
interface bot_Update extends bot {
}
interface bot_botcomponent_Base extends WebEntity {
}
interface bot_botcomponent_Fixed extends WebEntity_Fixed {
  bot_botcomponentid: string;
}
interface bot_botcomponent extends bot_botcomponent_Base, bot_botcomponent_Relationships {
}
interface bot_botcomponent_Relationships {
}
interface bot_botcomponent_Result extends bot_botcomponent_Base, bot_botcomponent_Relationships {
}
interface bot_botcomponent_FormattedResult {
}
interface bot_botcomponent_Select {
}
interface bot_botcomponent_Expand {
}
interface bot_botcomponent_Filter {
}
interface bot_botcomponent_Create extends bot_botcomponent {
}
interface bot_botcomponent_Update extends bot_botcomponent {
}
interface bot_environmentvariabledefinition_Base extends WebEntity {
}
interface bot_environmentvariabledefinition_Fixed extends WebEntity_Fixed {
  bot_environmentvariabledefinitionid: string;
}
interface bot_environmentvariabledefinition extends bot_environmentvariabledefinition_Base, bot_environmentvariabledefinition_Relationships {
}
interface bot_environmentvariabledefinition_Relationships {
}
interface bot_environmentvariabledefinition_Result extends bot_environmentvariabledefinition_Base, bot_environmentvariabledefinition_Relationships {
}
interface bot_environmentvariabledefinition_FormattedResult {
}
interface bot_environmentvariabledefinition_Select {
}
interface bot_environmentvariabledefinition_Expand {
}
interface bot_environmentvariabledefinition_Filter {
}
interface bot_environmentvariabledefinition_Create extends bot_environmentvariabledefinition {
}
interface bot_environmentvariabledefinition_Update extends bot_environmentvariabledefinition {
}
interface botcomponent_Base extends WebEntity {
}
interface botcomponent_Fixed extends WebEntity_Fixed {
  botcomponentid: string;
}
interface botcomponent extends botcomponent_Base, botcomponent_Relationships {
}
interface botcomponent_Relationships {
}
interface botcomponent_Result extends botcomponent_Base, botcomponent_Relationships {
}
interface botcomponent_FormattedResult {
}
interface botcomponent_Select {
}
interface botcomponent_Expand {
}
interface botcomponent_Filter {
}
interface botcomponent_Create extends botcomponent {
}
interface botcomponent_Update extends botcomponent {
}
interface botcomponent_botcomponent_Base extends WebEntity {
}
interface botcomponent_botcomponent_Fixed extends WebEntity_Fixed {
  botcomponent_botcomponentid: string;
}
interface botcomponent_botcomponent extends botcomponent_botcomponent_Base, botcomponent_botcomponent_Relationships {
}
interface botcomponent_botcomponent_Relationships {
}
interface botcomponent_botcomponent_Result extends botcomponent_botcomponent_Base, botcomponent_botcomponent_Relationships {
}
interface botcomponent_botcomponent_FormattedResult {
}
interface botcomponent_botcomponent_Select {
}
interface botcomponent_botcomponent_Expand {
}
interface botcomponent_botcomponent_Filter {
}
interface botcomponent_botcomponent_Create extends botcomponent_botcomponent {
}
interface botcomponent_botcomponent_Update extends botcomponent_botcomponent {
}
interface botcomponent_environmentvariabledefinition_Base extends WebEntity {
}
interface botcomponent_environmentvariabledefinition_Fixed extends WebEntity_Fixed {
  botcomponent_environmentvariabledefinitionid: string;
}
interface botcomponent_environmentvariabledefinition extends botcomponent_environmentvariabledefinition_Base, botcomponent_environmentvariabledefinition_Relationships {
}
interface botcomponent_environmentvariabledefinition_Relationships {
}
interface botcomponent_environmentvariabledefinition_Result extends botcomponent_environmentvariabledefinition_Base, botcomponent_environmentvariabledefinition_Relationships {
}
interface botcomponent_environmentvariabledefinition_FormattedResult {
}
interface botcomponent_environmentvariabledefinition_Select {
}
interface botcomponent_environmentvariabledefinition_Expand {
}
interface botcomponent_environmentvariabledefinition_Filter {
}
interface botcomponent_environmentvariabledefinition_Create extends botcomponent_environmentvariabledefinition {
}
interface botcomponent_environmentvariabledefinition_Update extends botcomponent_environmentvariabledefinition {
}
interface botcomponent_workflow_Base extends WebEntity {
}
interface botcomponent_workflow_Fixed extends WebEntity_Fixed {
  botcomponent_workflowid: string;
}
interface botcomponent_workflow extends botcomponent_workflow_Base, botcomponent_workflow_Relationships {
}
interface botcomponent_workflow_Relationships {
}
interface botcomponent_workflow_Result extends botcomponent_workflow_Base, botcomponent_workflow_Relationships {
}
interface botcomponent_workflow_FormattedResult {
}
interface botcomponent_workflow_Select {
}
interface botcomponent_workflow_Expand {
}
interface botcomponent_workflow_Filter {
}
interface botcomponent_workflow_Create extends botcomponent_workflow {
}
interface botcomponent_workflow_Update extends botcomponent_workflow {
}
interface BulkDeleteFailure_Base extends WebEntity {
}
interface BulkDeleteFailure_Fixed extends WebEntity_Fixed {
  bulkdeletefailureid: string;
}
interface BulkDeleteFailure extends BulkDeleteFailure_Base, BulkDeleteFailure_Relationships {
}
interface BulkDeleteFailure_Relationships {
}
interface BulkDeleteFailure_Result extends BulkDeleteFailure_Base, BulkDeleteFailure_Relationships {
}
interface BulkDeleteFailure_FormattedResult {
}
interface BulkDeleteFailure_Select {
}
interface BulkDeleteFailure_Expand {
}
interface BulkDeleteFailure_Filter {
}
interface BulkDeleteFailure_Create extends BulkDeleteFailure {
}
interface BulkDeleteFailure_Update extends BulkDeleteFailure {
}
interface BulkDeleteOperation_Base extends WebEntity {
}
interface BulkDeleteOperation_Fixed extends WebEntity_Fixed {
  bulkdeleteoperationid: string;
}
interface BulkDeleteOperation extends BulkDeleteOperation_Base, BulkDeleteOperation_Relationships {
}
interface BulkDeleteOperation_Relationships {
}
interface BulkDeleteOperation_Result extends BulkDeleteOperation_Base, BulkDeleteOperation_Relationships {
}
interface BulkDeleteOperation_FormattedResult {
}
interface BulkDeleteOperation_Select {
}
interface BulkDeleteOperation_Expand {
}
interface BulkDeleteOperation_Filter {
}
interface BulkDeleteOperation_Create extends BulkDeleteOperation {
}
interface BulkDeleteOperation_Update extends BulkDeleteOperation {
}
interface BulkOperation_Base extends WebEntity {
}
interface BulkOperation_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface BulkOperation extends BulkOperation_Base, BulkOperation_Relationships {
}
interface BulkOperation_Relationships {
}
interface BulkOperation_Result extends BulkOperation_Base, BulkOperation_Relationships {
}
interface BulkOperation_FormattedResult {
}
interface BulkOperation_Select {
}
interface BulkOperation_Expand {
}
interface BulkOperation_Filter {
}
interface BulkOperation_Create extends BulkOperation {
}
interface BulkOperation_Update extends BulkOperation {
}
interface BulkOperationLog_Base extends WebEntity {
}
interface BulkOperationLog_Fixed extends WebEntity_Fixed {
  bulkoperationlogid: string;
}
interface BulkOperationLog extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_Relationships {
}
interface BulkOperationLog_Result extends BulkOperationLog_Base, BulkOperationLog_Relationships {
}
interface BulkOperationLog_FormattedResult {
}
interface BulkOperationLog_Select {
}
interface BulkOperationLog_Expand {
}
interface BulkOperationLog_Filter {
}
interface BulkOperationLog_Create extends BulkOperationLog {
}
interface BulkOperationLog_Update extends BulkOperationLog {
}
interface BusinessDataLocalizedLabel_Base extends WebEntity {
}
interface BusinessDataLocalizedLabel_Fixed extends WebEntity_Fixed {
  businessdatalocalizedlabelid: string;
}
interface BusinessDataLocalizedLabel extends BusinessDataLocalizedLabel_Base, BusinessDataLocalizedLabel_Relationships {
}
interface BusinessDataLocalizedLabel_Relationships {
}
interface BusinessDataLocalizedLabel_Result extends BusinessDataLocalizedLabel_Base, BusinessDataLocalizedLabel_Relationships {
}
interface BusinessDataLocalizedLabel_FormattedResult {
}
interface BusinessDataLocalizedLabel_Select {
}
interface BusinessDataLocalizedLabel_Expand {
}
interface BusinessDataLocalizedLabel_Filter {
}
interface BusinessDataLocalizedLabel_Create extends BusinessDataLocalizedLabel {
}
interface BusinessDataLocalizedLabel_Update extends BusinessDataLocalizedLabel {
}
interface BusinessProcessFlowInstance_Base extends WebEntity {
}
interface BusinessProcessFlowInstance_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface BusinessProcessFlowInstance extends BusinessProcessFlowInstance_Base, BusinessProcessFlowInstance_Relationships {
}
interface BusinessProcessFlowInstance_Relationships {
}
interface BusinessProcessFlowInstance_Result extends BusinessProcessFlowInstance_Base, BusinessProcessFlowInstance_Relationships {
}
interface BusinessProcessFlowInstance_FormattedResult {
}
interface BusinessProcessFlowInstance_Select {
}
interface BusinessProcessFlowInstance_Expand {
}
interface BusinessProcessFlowInstance_Filter {
}
interface BusinessProcessFlowInstance_Create extends BusinessProcessFlowInstance {
}
interface BusinessProcessFlowInstance_Update extends BusinessProcessFlowInstance {
}
interface BusinessUnit_Base extends WebEntity {
}
interface BusinessUnit_Fixed extends WebEntity_Fixed {
  businessunitid: string;
}
interface BusinessUnit extends BusinessUnit_Base, BusinessUnit_Relationships {
}
interface BusinessUnit_Relationships {
}
interface BusinessUnit_Result extends BusinessUnit_Base, BusinessUnit_Relationships {
}
interface BusinessUnit_FormattedResult {
}
interface BusinessUnit_Select {
}
interface BusinessUnit_Expand {
}
interface BusinessUnit_Filter {
}
interface BusinessUnit_Create extends BusinessUnit {
}
interface BusinessUnit_Update extends BusinessUnit {
}
interface BusinessUnitMap_Base extends WebEntity {
}
interface BusinessUnitMap_Fixed extends WebEntity_Fixed {
  businessunitmapid: string;
}
interface BusinessUnitMap extends BusinessUnitMap_Base, BusinessUnitMap_Relationships {
}
interface BusinessUnitMap_Relationships {
}
interface BusinessUnitMap_Result extends BusinessUnitMap_Base, BusinessUnitMap_Relationships {
}
interface BusinessUnitMap_FormattedResult {
}
interface BusinessUnitMap_Select {
}
interface BusinessUnitMap_Expand {
}
interface BusinessUnitMap_Filter {
}
interface BusinessUnitMap_Create extends BusinessUnitMap {
}
interface BusinessUnitMap_Update extends BusinessUnitMap {
}
interface BusinessUnitNewsArticle_Base extends WebEntity {
}
interface BusinessUnitNewsArticle_Fixed extends WebEntity_Fixed {
  businessunitnewsarticleid: string;
}
interface BusinessUnitNewsArticle extends BusinessUnitNewsArticle_Base, BusinessUnitNewsArticle_Relationships {
}
interface BusinessUnitNewsArticle_Relationships {
}
interface BusinessUnitNewsArticle_Result extends BusinessUnitNewsArticle_Base, BusinessUnitNewsArticle_Relationships {
}
interface BusinessUnitNewsArticle_FormattedResult {
}
interface BusinessUnitNewsArticle_Select {
}
interface BusinessUnitNewsArticle_Expand {
}
interface BusinessUnitNewsArticle_Filter {
}
interface BusinessUnitNewsArticle_Create extends BusinessUnitNewsArticle {
}
interface BusinessUnitNewsArticle_Update extends BusinessUnitNewsArticle {
}
interface Calendar_Base extends WebEntity {
}
interface Calendar_Fixed extends WebEntity_Fixed {
  calendarid: string;
}
interface Calendar extends Calendar_Base, Calendar_Relationships {
}
interface Calendar_Relationships {
}
interface Calendar_Result extends Calendar_Base, Calendar_Relationships {
}
interface Calendar_FormattedResult {
}
interface Calendar_Select {
}
interface Calendar_Expand {
}
interface Calendar_Filter {
}
interface Calendar_Create extends Calendar {
}
interface Calendar_Update extends Calendar {
}
interface CalendarRule_Base extends WebEntity {
}
interface CalendarRule_Fixed extends WebEntity_Fixed {
  calendarruleid: string;
}
interface CalendarRule extends CalendarRule_Base, CalendarRule_Relationships {
}
interface CalendarRule_Relationships {
}
interface CalendarRule_Result extends CalendarRule_Base, CalendarRule_Relationships {
}
interface CalendarRule_FormattedResult {
}
interface CalendarRule_Select {
}
interface CalendarRule_Expand {
}
interface CalendarRule_Filter {
}
interface CalendarRule_Create extends CalendarRule {
}
interface CalendarRule_Update extends CalendarRule {
}
interface CallbackRegistration_Base extends WebEntity {
}
interface CallbackRegistration_Fixed extends WebEntity_Fixed {
  callbackregistrationid: string;
}
interface CallbackRegistration extends CallbackRegistration_Base, CallbackRegistration_Relationships {
}
interface CallbackRegistration_Relationships {
}
interface CallbackRegistration_Result extends CallbackRegistration_Base, CallbackRegistration_Relationships {
}
interface CallbackRegistration_FormattedResult {
}
interface CallbackRegistration_Select {
}
interface CallbackRegistration_Expand {
}
interface CallbackRegistration_Filter {
}
interface CallbackRegistration_Create extends CallbackRegistration {
}
interface CallbackRegistration_Update extends CallbackRegistration {
}
interface Campaign_Base extends WebEntity {
}
interface Campaign_Fixed extends WebEntity_Fixed {
  campaignid: string;
}
interface Campaign extends Campaign_Base, Campaign_Relationships {
}
interface Campaign_Relationships {
}
interface Campaign_Result extends Campaign_Base, Campaign_Relationships {
}
interface Campaign_FormattedResult {
}
interface Campaign_Select {
}
interface Campaign_Expand {
}
interface Campaign_Filter {
}
interface Campaign_Create extends Campaign {
}
interface Campaign_Update extends Campaign {
}
interface CampaignActivity_Base extends WebEntity {
}
interface CampaignActivity_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface CampaignActivity extends CampaignActivity_Base, CampaignActivity_Relationships {
}
interface CampaignActivity_Relationships {
}
interface CampaignActivity_Result extends CampaignActivity_Base, CampaignActivity_Relationships {
}
interface CampaignActivity_FormattedResult {
}
interface CampaignActivity_Select {
}
interface CampaignActivity_Expand {
}
interface CampaignActivity_Filter {
}
interface CampaignActivity_Create extends CampaignActivity {
}
interface CampaignActivity_Update extends CampaignActivity {
}
interface CampaignActivityItem_Base extends WebEntity {
}
interface CampaignActivityItem_Fixed extends WebEntity_Fixed {
  campaignactivityitemid: string;
}
interface CampaignActivityItem extends CampaignActivityItem_Base, CampaignActivityItem_Relationships {
}
interface CampaignActivityItem_Relationships {
}
interface CampaignActivityItem_Result extends CampaignActivityItem_Base, CampaignActivityItem_Relationships {
}
interface CampaignActivityItem_FormattedResult {
}
interface CampaignActivityItem_Select {
}
interface CampaignActivityItem_Expand {
}
interface CampaignActivityItem_Filter {
}
interface CampaignActivityItem_Create extends CampaignActivityItem {
}
interface CampaignActivityItem_Update extends CampaignActivityItem {
}
interface CampaignItem_Base extends WebEntity {
}
interface CampaignItem_Fixed extends WebEntity_Fixed {
  campaignitemid: string;
}
interface CampaignItem extends CampaignItem_Base, CampaignItem_Relationships {
}
interface CampaignItem_Relationships {
}
interface CampaignItem_Result extends CampaignItem_Base, CampaignItem_Relationships {
}
interface CampaignItem_FormattedResult {
}
interface CampaignItem_Select {
}
interface CampaignItem_Expand {
}
interface CampaignItem_Filter {
}
interface CampaignItem_Create extends CampaignItem {
}
interface CampaignItem_Update extends CampaignItem {
}
interface CampaignResponse_Base extends WebEntity {
}
interface CampaignResponse_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface CampaignResponse extends CampaignResponse_Base, CampaignResponse_Relationships {
}
interface CampaignResponse_Relationships {
}
interface CampaignResponse_Result extends CampaignResponse_Base, CampaignResponse_Relationships {
}
interface CampaignResponse_FormattedResult {
}
interface CampaignResponse_Select {
}
interface CampaignResponse_Expand {
}
interface CampaignResponse_Filter {
}
interface CampaignResponse_Create extends CampaignResponse {
}
interface CampaignResponse_Update extends CampaignResponse {
}
interface CanvasApp_Base extends WebEntity {
}
interface CanvasApp_Fixed extends WebEntity_Fixed {
  canvasappid: string;
}
interface CanvasApp extends CanvasApp_Base, CanvasApp_Relationships {
}
interface CanvasApp_Relationships {
}
interface CanvasApp_Result extends CanvasApp_Base, CanvasApp_Relationships {
}
interface CanvasApp_FormattedResult {
}
interface CanvasApp_Select {
}
interface CanvasApp_Expand {
}
interface CanvasApp_Filter {
}
interface CanvasApp_Create extends CanvasApp {
}
interface CanvasApp_Update extends CanvasApp {
}
interface CanvasAppExtendedMetadata_Base extends WebEntity {
}
interface CanvasAppExtendedMetadata_Fixed extends WebEntity_Fixed {
  canvasappextendedmetadataid: string;
}
interface CanvasAppExtendedMetadata extends CanvasAppExtendedMetadata_Base, CanvasAppExtendedMetadata_Relationships {
}
interface CanvasAppExtendedMetadata_Relationships {
}
interface CanvasAppExtendedMetadata_Result extends CanvasAppExtendedMetadata_Base, CanvasAppExtendedMetadata_Relationships {
}
interface CanvasAppExtendedMetadata_FormattedResult {
}
interface CanvasAppExtendedMetadata_Select {
}
interface CanvasAppExtendedMetadata_Expand {
}
interface CanvasAppExtendedMetadata_Filter {
}
interface CanvasAppExtendedMetadata_Create extends CanvasAppExtendedMetadata {
}
interface CanvasAppExtendedMetadata_Update extends CanvasAppExtendedMetadata {
}
interface CardType_Base extends WebEntity {
}
interface CardType_Fixed extends WebEntity_Fixed {
  cardtypeid: string;
}
interface CardType extends CardType_Base, CardType_Relationships {
}
interface CardType_Relationships {
}
interface CardType_Result extends CardType_Base, CardType_Relationships {
}
interface CardType_FormattedResult {
}
interface CardType_Select {
}
interface CardType_Expand {
}
interface CardType_Filter {
}
interface CardType_Create extends CardType {
}
interface CardType_Update extends CardType {
}
interface cascadegrantrevokeaccessrecordstracker_Base extends WebEntity {
}
interface cascadegrantrevokeaccessrecordstracker_Fixed extends WebEntity_Fixed {
  cascadegrantrevokeaccessrecordstrackerid: string;
}
interface cascadegrantrevokeaccessrecordstracker extends cascadegrantrevokeaccessrecordstracker_Base, cascadegrantrevokeaccessrecordstracker_Relationships {
}
interface cascadegrantrevokeaccessrecordstracker_Relationships {
}
interface cascadegrantrevokeaccessrecordstracker_Result extends cascadegrantrevokeaccessrecordstracker_Base, cascadegrantrevokeaccessrecordstracker_Relationships {
}
interface cascadegrantrevokeaccessrecordstracker_FormattedResult {
}
interface cascadegrantrevokeaccessrecordstracker_Select {
}
interface cascadegrantrevokeaccessrecordstracker_Expand {
}
interface cascadegrantrevokeaccessrecordstracker_Filter {
}
interface cascadegrantrevokeaccessrecordstracker_Create extends cascadegrantrevokeaccessrecordstracker {
}
interface cascadegrantrevokeaccessrecordstracker_Update extends cascadegrantrevokeaccessrecordstracker {
}
interface cascadegrantrevokeaccessversiontracker_Base extends WebEntity {
}
interface cascadegrantrevokeaccessversiontracker_Fixed extends WebEntity_Fixed {
  cascadegrantrevokeaccessversiontrackerid: string;
}
interface cascadegrantrevokeaccessversiontracker extends cascadegrantrevokeaccessversiontracker_Base, cascadegrantrevokeaccessversiontracker_Relationships {
}
interface cascadegrantrevokeaccessversiontracker_Relationships {
}
interface cascadegrantrevokeaccessversiontracker_Result extends cascadegrantrevokeaccessversiontracker_Base, cascadegrantrevokeaccessversiontracker_Relationships {
}
interface cascadegrantrevokeaccessversiontracker_FormattedResult {
}
interface cascadegrantrevokeaccessversiontracker_Select {
}
interface cascadegrantrevokeaccessversiontracker_Expand {
}
interface cascadegrantrevokeaccessversiontracker_Filter {
}
interface cascadegrantrevokeaccessversiontracker_Create extends cascadegrantrevokeaccessversiontracker {
}
interface cascadegrantrevokeaccessversiontracker_Update extends cascadegrantrevokeaccessversiontracker {
}
interface Catalog_Base extends WebEntity {
}
interface Catalog_Fixed extends WebEntity_Fixed {
  catalogid: string;
}
interface Catalog extends Catalog_Base, Catalog_Relationships {
}
interface Catalog_Relationships {
}
interface Catalog_Result extends Catalog_Base, Catalog_Relationships {
}
interface Catalog_FormattedResult {
}
interface Catalog_Select {
}
interface Catalog_Expand {
}
interface Catalog_Filter {
}
interface Catalog_Create extends Catalog {
}
interface Catalog_Update extends Catalog {
}
interface CatalogAssignment_Base extends WebEntity {
}
interface CatalogAssignment_Fixed extends WebEntity_Fixed {
  catalogassignmentid: string;
}
interface CatalogAssignment extends CatalogAssignment_Base, CatalogAssignment_Relationships {
}
interface CatalogAssignment_Relationships {
}
interface CatalogAssignment_Result extends CatalogAssignment_Base, CatalogAssignment_Relationships {
}
interface CatalogAssignment_FormattedResult {
}
interface CatalogAssignment_Select {
}
interface CatalogAssignment_Expand {
}
interface CatalogAssignment_Filter {
}
interface CatalogAssignment_Create extends CatalogAssignment {
}
interface CatalogAssignment_Update extends CatalogAssignment {
}
interface Category_Base extends WebEntity {
}
interface Category_Fixed extends WebEntity_Fixed {
  categoryid: string;
}
interface Category extends Category_Base, Category_Relationships {
}
interface Category_Relationships {
}
interface Category_Result extends Category_Base, Category_Relationships {
}
interface Category_FormattedResult {
}
interface Category_Select {
}
interface Category_Expand {
}
interface Category_Filter {
}
interface Category_Create extends Category {
}
interface Category_Update extends Category {
}
interface ChannelAccessProfile_Base extends WebEntity {
}
interface ChannelAccessProfile_Fixed extends WebEntity_Fixed {
  channelaccessprofileid: string;
}
interface ChannelAccessProfile extends ChannelAccessProfile_Base, ChannelAccessProfile_Relationships {
}
interface ChannelAccessProfile_Relationships {
}
interface ChannelAccessProfile_Result extends ChannelAccessProfile_Base, ChannelAccessProfile_Relationships {
}
interface ChannelAccessProfile_FormattedResult {
}
interface ChannelAccessProfile_Select {
}
interface ChannelAccessProfile_Expand {
}
interface ChannelAccessProfile_Filter {
}
interface ChannelAccessProfile_Create extends ChannelAccessProfile {
}
interface ChannelAccessProfile_Update extends ChannelAccessProfile {
}
interface ChannelAccessProfileEntityAccessLevel_Base extends WebEntity {
}
interface ChannelAccessProfileEntityAccessLevel_Fixed extends WebEntity_Fixed {
  channelaccessprofileentityaccesslevelid: string;
}
interface ChannelAccessProfileEntityAccessLevel extends ChannelAccessProfileEntityAccessLevel_Base, ChannelAccessProfileEntityAccessLevel_Relationships {
}
interface ChannelAccessProfileEntityAccessLevel_Relationships {
}
interface ChannelAccessProfileEntityAccessLevel_Result extends ChannelAccessProfileEntityAccessLevel_Base, ChannelAccessProfileEntityAccessLevel_Relationships {
}
interface ChannelAccessProfileEntityAccessLevel_FormattedResult {
}
interface ChannelAccessProfileEntityAccessLevel_Select {
}
interface ChannelAccessProfileEntityAccessLevel_Expand {
}
interface ChannelAccessProfileEntityAccessLevel_Filter {
}
interface ChannelAccessProfileEntityAccessLevel_Create extends ChannelAccessProfileEntityAccessLevel {
}
interface ChannelAccessProfileEntityAccessLevel_Update extends ChannelAccessProfileEntityAccessLevel {
}
interface ChannelAccessProfileRule_Base extends WebEntity {
}
interface ChannelAccessProfileRule_Fixed extends WebEntity_Fixed {
  channelaccessprofileruleid: string;
}
interface ChannelAccessProfileRule extends ChannelAccessProfileRule_Base, ChannelAccessProfileRule_Relationships {
}
interface ChannelAccessProfileRule_Relationships {
}
interface ChannelAccessProfileRule_Result extends ChannelAccessProfileRule_Base, ChannelAccessProfileRule_Relationships {
}
interface ChannelAccessProfileRule_FormattedResult {
}
interface ChannelAccessProfileRule_Select {
}
interface ChannelAccessProfileRule_Expand {
}
interface ChannelAccessProfileRule_Filter {
}
interface ChannelAccessProfileRule_Create extends ChannelAccessProfileRule {
}
interface ChannelAccessProfileRule_Update extends ChannelAccessProfileRule {
}
interface ChannelAccessProfileRuleItem_Base extends WebEntity {
}
interface ChannelAccessProfileRuleItem_Fixed extends WebEntity_Fixed {
  channelaccessprofileruleitemid: string;
}
interface ChannelAccessProfileRuleItem extends ChannelAccessProfileRuleItem_Base, ChannelAccessProfileRuleItem_Relationships {
}
interface ChannelAccessProfileRuleItem_Relationships {
}
interface ChannelAccessProfileRuleItem_Result extends ChannelAccessProfileRuleItem_Base, ChannelAccessProfileRuleItem_Relationships {
}
interface ChannelAccessProfileRuleItem_FormattedResult {
}
interface ChannelAccessProfileRuleItem_Select {
}
interface ChannelAccessProfileRuleItem_Expand {
}
interface ChannelAccessProfileRuleItem_Filter {
}
interface ChannelAccessProfileRuleItem_Create extends ChannelAccessProfileRuleItem {
}
interface ChannelAccessProfileRuleItem_Update extends ChannelAccessProfileRuleItem {
}
interface ChannelProperty_Base extends WebEntity {
}
interface ChannelProperty_Fixed extends WebEntity_Fixed {
  channelpropertyid: string;
}
interface ChannelProperty extends ChannelProperty_Base, ChannelProperty_Relationships {
}
interface ChannelProperty_Relationships {
}
interface ChannelProperty_Result extends ChannelProperty_Base, ChannelProperty_Relationships {
}
interface ChannelProperty_FormattedResult {
}
interface ChannelProperty_Select {
}
interface ChannelProperty_Expand {
}
interface ChannelProperty_Filter {
}
interface ChannelProperty_Create extends ChannelProperty {
}
interface ChannelProperty_Update extends ChannelProperty {
}
interface ChannelPropertyGroup_Base extends WebEntity {
}
interface ChannelPropertyGroup_Fixed extends WebEntity_Fixed {
  channelpropertygroupid: string;
}
interface ChannelPropertyGroup extends ChannelPropertyGroup_Base, ChannelPropertyGroup_Relationships {
}
interface ChannelPropertyGroup_Relationships {
}
interface ChannelPropertyGroup_Result extends ChannelPropertyGroup_Base, ChannelPropertyGroup_Relationships {
}
interface ChannelPropertyGroup_FormattedResult {
}
interface ChannelPropertyGroup_Select {
}
interface ChannelPropertyGroup_Expand {
}
interface ChannelPropertyGroup_Filter {
}
interface ChannelPropertyGroup_Create extends ChannelPropertyGroup {
}
interface ChannelPropertyGroup_Update extends ChannelPropertyGroup {
}
interface Characteristic_Base extends WebEntity {
}
interface Characteristic_Fixed extends WebEntity_Fixed {
  characteristicid: string;
}
interface Characteristic extends Characteristic_Base, Characteristic_Relationships {
}
interface Characteristic_Relationships {
}
interface Characteristic_Result extends Characteristic_Base, Characteristic_Relationships {
}
interface Characteristic_FormattedResult {
}
interface Characteristic_Select {
}
interface Characteristic_Expand {
}
interface Characteristic_Filter {
}
interface Characteristic_Create extends Characteristic {
}
interface Characteristic_Update extends Characteristic {
}
interface ChildIncidentCount_Base extends WebEntity {
}
interface ChildIncidentCount_Fixed extends WebEntity_Fixed {
  childincidentcountid: string;
}
interface ChildIncidentCount extends ChildIncidentCount_Base, ChildIncidentCount_Relationships {
}
interface ChildIncidentCount_Relationships {
}
interface ChildIncidentCount_Result extends ChildIncidentCount_Base, ChildIncidentCount_Relationships {
}
interface ChildIncidentCount_FormattedResult {
}
interface ChildIncidentCount_Select {
}
interface ChildIncidentCount_Expand {
}
interface ChildIncidentCount_Filter {
}
interface ChildIncidentCount_Create extends ChildIncidentCount {
}
interface ChildIncidentCount_Update extends ChildIncidentCount {
}
interface ClientUpdate_Base extends WebEntity {
}
interface ClientUpdate_Fixed extends WebEntity_Fixed {
  clientupdateid: string;
}
interface ClientUpdate extends ClientUpdate_Base, ClientUpdate_Relationships {
}
interface ClientUpdate_Relationships {
}
interface ClientUpdate_Result extends ClientUpdate_Base, ClientUpdate_Relationships {
}
interface ClientUpdate_FormattedResult {
}
interface ClientUpdate_Select {
}
interface ClientUpdate_Expand {
}
interface ClientUpdate_Filter {
}
interface ClientUpdate_Create extends ClientUpdate {
}
interface ClientUpdate_Update extends ClientUpdate {
}
interface ColumnMapping_Base extends WebEntity {
}
interface ColumnMapping_Fixed extends WebEntity_Fixed {
  columnmappingid: string;
}
interface ColumnMapping extends ColumnMapping_Base, ColumnMapping_Relationships {
}
interface ColumnMapping_Relationships {
}
interface ColumnMapping_Result extends ColumnMapping_Base, ColumnMapping_Relationships {
}
interface ColumnMapping_FormattedResult {
}
interface ColumnMapping_Select {
}
interface ColumnMapping_Expand {
}
interface ColumnMapping_Filter {
}
interface ColumnMapping_Create extends ColumnMapping {
}
interface ColumnMapping_Update extends ColumnMapping {
}
interface Comment_Base extends WebEntity {
}
interface Comment_Fixed extends WebEntity_Fixed {
  commentid: string;
}
interface Comment extends Comment_Base, Comment_Relationships {
}
interface Comment_Relationships {
}
interface Comment_Result extends Comment_Base, Comment_Relationships {
}
interface Comment_FormattedResult {
}
interface Comment_Select {
}
interface Comment_Expand {
}
interface Comment_Filter {
}
interface Comment_Create extends Comment {
}
interface Comment_Update extends Comment {
}
interface Commitment_Base extends WebEntity {
}
interface Commitment_Fixed extends WebEntity_Fixed {
  commitmentid: string;
}
interface Commitment extends Commitment_Base, Commitment_Relationships {
}
interface Commitment_Relationships {
}
interface Commitment_Result extends Commitment_Base, Commitment_Relationships {
}
interface Commitment_FormattedResult {
}
interface Commitment_Select {
}
interface Commitment_Expand {
}
interface Commitment_Filter {
}
interface Commitment_Create extends Commitment {
}
interface Commitment_Update extends Commitment {
}
interface Competitor_Base extends WebEntity {
}
interface Competitor_Fixed extends WebEntity_Fixed {
  competitorid: string;
}
interface Competitor extends Competitor_Base, Competitor_Relationships {
}
interface Competitor_Relationships {
}
interface Competitor_Result extends Competitor_Base, Competitor_Relationships {
}
interface Competitor_FormattedResult {
}
interface Competitor_Select {
}
interface Competitor_Expand {
}
interface Competitor_Filter {
}
interface Competitor_Create extends Competitor {
}
interface Competitor_Update extends Competitor {
}
interface CompetitorAddress_Base extends WebEntity {
}
interface CompetitorAddress_Fixed extends WebEntity_Fixed {
  competitoraddressid: string;
}
interface CompetitorAddress extends CompetitorAddress_Base, CompetitorAddress_Relationships {
}
interface CompetitorAddress_Relationships {
}
interface CompetitorAddress_Result extends CompetitorAddress_Base, CompetitorAddress_Relationships {
}
interface CompetitorAddress_FormattedResult {
}
interface CompetitorAddress_Select {
}
interface CompetitorAddress_Expand {
}
interface CompetitorAddress_Filter {
}
interface CompetitorAddress_Create extends CompetitorAddress {
}
interface CompetitorAddress_Update extends CompetitorAddress {
}
interface CompetitorProduct_Base extends WebEntity {
}
interface CompetitorProduct_Fixed extends WebEntity_Fixed {
  competitorproductid: string;
}
interface CompetitorProduct extends CompetitorProduct_Base, CompetitorProduct_Relationships {
}
interface CompetitorProduct_Relationships {
}
interface CompetitorProduct_Result extends CompetitorProduct_Base, CompetitorProduct_Relationships {
}
interface CompetitorProduct_FormattedResult {
}
interface CompetitorProduct_Select {
}
interface CompetitorProduct_Expand {
}
interface CompetitorProduct_Filter {
}
interface CompetitorProduct_Create extends CompetitorProduct {
}
interface CompetitorProduct_Update extends CompetitorProduct {
}
interface CompetitorSalesLiterature_Base extends WebEntity {
}
interface CompetitorSalesLiterature_Fixed extends WebEntity_Fixed {
  competitorsalesliteratureid: string;
}
interface CompetitorSalesLiterature extends CompetitorSalesLiterature_Base, CompetitorSalesLiterature_Relationships {
}
interface CompetitorSalesLiterature_Relationships {
}
interface CompetitorSalesLiterature_Result extends CompetitorSalesLiterature_Base, CompetitorSalesLiterature_Relationships {
}
interface CompetitorSalesLiterature_FormattedResult {
}
interface CompetitorSalesLiterature_Select {
}
interface CompetitorSalesLiterature_Expand {
}
interface CompetitorSalesLiterature_Filter {
}
interface CompetitorSalesLiterature_Create extends CompetitorSalesLiterature {
}
interface CompetitorSalesLiterature_Update extends CompetitorSalesLiterature {
}
interface ComplexControl_Base extends WebEntity {
}
interface ComplexControl_Fixed extends WebEntity_Fixed {
  complexcontrolid: string;
}
interface ComplexControl extends ComplexControl_Base, ComplexControl_Relationships {
}
interface ComplexControl_Relationships {
}
interface ComplexControl_Result extends ComplexControl_Base, ComplexControl_Relationships {
}
interface ComplexControl_FormattedResult {
}
interface ComplexControl_Select {
}
interface ComplexControl_Expand {
}
interface ComplexControl_Filter {
}
interface ComplexControl_Create extends ComplexControl {
}
interface ComplexControl_Update extends ComplexControl {
}
interface Connection_Base extends WebEntity {
}
interface Connection_Fixed extends WebEntity_Fixed {
  connectionid: string;
}
interface Connection extends Connection_Base, Connection_Relationships {
}
interface Connection_Relationships {
}
interface Connection_Result extends Connection_Base, Connection_Relationships {
}
interface Connection_FormattedResult {
}
interface Connection_Select {
}
interface Connection_Expand {
}
interface Connection_Filter {
}
interface Connection_Create extends Connection {
}
interface Connection_Update extends Connection {
}
interface connectionreference_Base extends WebEntity {
}
interface connectionreference_Fixed extends WebEntity_Fixed {
  connectionreferenceid: string;
}
interface connectionreference extends connectionreference_Base, connectionreference_Relationships {
}
interface connectionreference_Relationships {
}
interface connectionreference_Result extends connectionreference_Base, connectionreference_Relationships {
}
interface connectionreference_FormattedResult {
}
interface connectionreference_Select {
}
interface connectionreference_Expand {
}
interface connectionreference_Filter {
}
interface connectionreference_Create extends connectionreference {
}
interface connectionreference_Update extends connectionreference {
}
interface ConnectionRole_Base extends WebEntity {
}
interface ConnectionRole_Fixed extends WebEntity_Fixed {
  connectionroleid: string;
}
interface ConnectionRole extends ConnectionRole_Base, ConnectionRole_Relationships {
}
interface ConnectionRole_Relationships {
}
interface ConnectionRole_Result extends ConnectionRole_Base, ConnectionRole_Relationships {
}
interface ConnectionRole_FormattedResult {
}
interface ConnectionRole_Select {
}
interface ConnectionRole_Expand {
}
interface ConnectionRole_Filter {
}
interface ConnectionRole_Create extends ConnectionRole {
}
interface ConnectionRole_Update extends ConnectionRole {
}
interface ConnectionRoleAssociation_Base extends WebEntity {
}
interface ConnectionRoleAssociation_Fixed extends WebEntity_Fixed {
  connectionroleassociationid: string;
}
interface ConnectionRoleAssociation extends ConnectionRoleAssociation_Base, ConnectionRoleAssociation_Relationships {
}
interface ConnectionRoleAssociation_Relationships {
}
interface ConnectionRoleAssociation_Result extends ConnectionRoleAssociation_Base, ConnectionRoleAssociation_Relationships {
}
interface ConnectionRoleAssociation_FormattedResult {
}
interface ConnectionRoleAssociation_Select {
}
interface ConnectionRoleAssociation_Expand {
}
interface ConnectionRoleAssociation_Filter {
}
interface ConnectionRoleAssociation_Create extends ConnectionRoleAssociation {
}
interface ConnectionRoleAssociation_Update extends ConnectionRoleAssociation {
}
interface ConnectionRoleObjectTypeCode_Base extends WebEntity {
}
interface ConnectionRoleObjectTypeCode_Fixed extends WebEntity_Fixed {
  connectionroleobjecttypecodeid: string;
}
interface ConnectionRoleObjectTypeCode extends ConnectionRoleObjectTypeCode_Base, ConnectionRoleObjectTypeCode_Relationships {
}
interface ConnectionRoleObjectTypeCode_Relationships {
}
interface ConnectionRoleObjectTypeCode_Result extends ConnectionRoleObjectTypeCode_Base, ConnectionRoleObjectTypeCode_Relationships {
}
interface ConnectionRoleObjectTypeCode_FormattedResult {
}
interface ConnectionRoleObjectTypeCode_Select {
}
interface ConnectionRoleObjectTypeCode_Expand {
}
interface ConnectionRoleObjectTypeCode_Filter {
}
interface ConnectionRoleObjectTypeCode_Create extends ConnectionRoleObjectTypeCode {
}
interface ConnectionRoleObjectTypeCode_Update extends ConnectionRoleObjectTypeCode {
}
interface connector_Base extends WebEntity {
}
interface connector_Fixed extends WebEntity_Fixed {
  connectorid: string;
}
interface connector extends connector_Base, connector_Relationships {
}
interface connector_Relationships {
}
interface connector_Result extends connector_Base, connector_Relationships {
}
interface connector_FormattedResult {
}
interface connector_Select {
}
interface connector_Expand {
}
interface connector_Filter {
}
interface connector_Create extends connector {
}
interface connector_Update extends connector {
}
interface ConstraintBasedGroup_Base extends WebEntity {
}
interface ConstraintBasedGroup_Fixed extends WebEntity_Fixed {
  constraintbasedgroupid: string;
}
interface ConstraintBasedGroup extends ConstraintBasedGroup_Base, ConstraintBasedGroup_Relationships {
}
interface ConstraintBasedGroup_Relationships {
}
interface ConstraintBasedGroup_Result extends ConstraintBasedGroup_Base, ConstraintBasedGroup_Relationships {
}
interface ConstraintBasedGroup_FormattedResult {
}
interface ConstraintBasedGroup_Select {
}
interface ConstraintBasedGroup_Expand {
}
interface ConstraintBasedGroup_Filter {
}
interface ConstraintBasedGroup_Create extends ConstraintBasedGroup {
}
interface ConstraintBasedGroup_Update extends ConstraintBasedGroup {
}
interface Contact_Base extends WebEntity {
}
interface Contact_Fixed extends WebEntity_Fixed {
  contactid: string;
}
interface Contact extends Contact_Base, Contact_Relationships {
}
interface Contact_Relationships {
}
interface Contact_Result extends Contact_Base, Contact_Relationships {
}
interface Contact_FormattedResult {
}
interface Contact_Select {
}
interface Contact_Expand {
}
interface Contact_Filter {
}
interface Contact_Create extends Contact {
}
interface Contact_Update extends Contact {
}
interface ContactInvoices_Base extends WebEntity {
}
interface ContactInvoices_Fixed extends WebEntity_Fixed {
  contactinvoiceid: string;
}
interface ContactInvoices extends ContactInvoices_Base, ContactInvoices_Relationships {
}
interface ContactInvoices_Relationships {
}
interface ContactInvoices_Result extends ContactInvoices_Base, ContactInvoices_Relationships {
}
interface ContactInvoices_FormattedResult {
}
interface ContactInvoices_Select {
}
interface ContactInvoices_Expand {
}
interface ContactInvoices_Filter {
}
interface ContactInvoices_Create extends ContactInvoices {
}
interface ContactInvoices_Update extends ContactInvoices {
}
interface ContactLeads_Base extends WebEntity {
}
interface ContactLeads_Fixed extends WebEntity_Fixed {
  contactleadid: string;
}
interface ContactLeads extends ContactLeads_Base, ContactLeads_Relationships {
}
interface ContactLeads_Relationships {
}
interface ContactLeads_Result extends ContactLeads_Base, ContactLeads_Relationships {
}
interface ContactLeads_FormattedResult {
}
interface ContactLeads_Select {
}
interface ContactLeads_Expand {
}
interface ContactLeads_Filter {
}
interface ContactLeads_Create extends ContactLeads {
}
interface ContactLeads_Update extends ContactLeads {
}
interface ContactOrders_Base extends WebEntity {
}
interface ContactOrders_Fixed extends WebEntity_Fixed {
  contactorderid: string;
}
interface ContactOrders extends ContactOrders_Base, ContactOrders_Relationships {
}
interface ContactOrders_Relationships {
}
interface ContactOrders_Result extends ContactOrders_Base, ContactOrders_Relationships {
}
interface ContactOrders_FormattedResult {
}
interface ContactOrders_Select {
}
interface ContactOrders_Expand {
}
interface ContactOrders_Filter {
}
interface ContactOrders_Create extends ContactOrders {
}
interface ContactOrders_Update extends ContactOrders {
}
interface ContactQuotes_Base extends WebEntity {
}
interface ContactQuotes_Fixed extends WebEntity_Fixed {
  contactquoteid: string;
}
interface ContactQuotes extends ContactQuotes_Base, ContactQuotes_Relationships {
}
interface ContactQuotes_Relationships {
}
interface ContactQuotes_Result extends ContactQuotes_Base, ContactQuotes_Relationships {
}
interface ContactQuotes_FormattedResult {
}
interface ContactQuotes_Select {
}
interface ContactQuotes_Expand {
}
interface ContactQuotes_Filter {
}
interface ContactQuotes_Create extends ContactQuotes {
}
interface ContactQuotes_Update extends ContactQuotes {
}
interface Contract_Base extends WebEntity {
}
interface Contract_Fixed extends WebEntity_Fixed {
  contractid: string;
}
interface Contract extends Contract_Base, Contract_Relationships {
}
interface Contract_Relationships {
}
interface Contract_Result extends Contract_Base, Contract_Relationships {
}
interface Contract_FormattedResult {
}
interface Contract_Select {
}
interface Contract_Expand {
}
interface Contract_Filter {
}
interface Contract_Create extends Contract {
}
interface Contract_Update extends Contract {
}
interface ContractDetail_Base extends WebEntity {
}
interface ContractDetail_Fixed extends WebEntity_Fixed {
  contractdetailid: string;
}
interface ContractDetail extends ContractDetail_Base, ContractDetail_Relationships {
}
interface ContractDetail_Relationships {
}
interface ContractDetail_Result extends ContractDetail_Base, ContractDetail_Relationships {
}
interface ContractDetail_FormattedResult {
}
interface ContractDetail_Select {
}
interface ContractDetail_Expand {
}
interface ContractDetail_Filter {
}
interface ContractDetail_Create extends ContractDetail {
}
interface ContractDetail_Update extends ContractDetail {
}
interface ContractTemplate_Base extends WebEntity {
}
interface ContractTemplate_Fixed extends WebEntity_Fixed {
  contracttemplateid: string;
}
interface ContractTemplate extends ContractTemplate_Base, ContractTemplate_Relationships {
}
interface ContractTemplate_Relationships {
}
interface ContractTemplate_Result extends ContractTemplate_Base, ContractTemplate_Relationships {
}
interface ContractTemplate_FormattedResult {
}
interface ContractTemplate_Select {
}
interface ContractTemplate_Expand {
}
interface ContractTemplate_Filter {
}
interface ContractTemplate_Create extends ContractTemplate {
}
interface ContractTemplate_Update extends ContractTemplate {
}
interface conversationtranscript_Base extends WebEntity {
}
interface conversationtranscript_Fixed extends WebEntity_Fixed {
  conversationtranscriptid: string;
}
interface conversationtranscript extends conversationtranscript_Base, conversationtranscript_Relationships {
}
interface conversationtranscript_Relationships {
}
interface conversationtranscript_Result extends conversationtranscript_Base, conversationtranscript_Relationships {
}
interface conversationtranscript_FormattedResult {
}
interface conversationtranscript_Select {
}
interface conversationtranscript_Expand {
}
interface conversationtranscript_Filter {
}
interface conversationtranscript_Create extends conversationtranscript {
}
interface conversationtranscript_Update extends conversationtranscript {
}
interface ConvertRule_Base extends WebEntity {
}
interface ConvertRule_Fixed extends WebEntity_Fixed {
  convertruleid: string;
}
interface ConvertRule extends ConvertRule_Base, ConvertRule_Relationships {
}
interface ConvertRule_Relationships {
}
interface ConvertRule_Result extends ConvertRule_Base, ConvertRule_Relationships {
}
interface ConvertRule_FormattedResult {
}
interface ConvertRule_Select {
}
interface ConvertRule_Expand {
}
interface ConvertRule_Filter {
}
interface ConvertRule_Create extends ConvertRule {
}
interface ConvertRule_Update extends ConvertRule {
}
interface ConvertRuleItem_Base extends WebEntity {
}
interface ConvertRuleItem_Fixed extends WebEntity_Fixed {
  convertruleitemid: string;
}
interface ConvertRuleItem extends ConvertRuleItem_Base, ConvertRuleItem_Relationships {
}
interface ConvertRuleItem_Relationships {
}
interface ConvertRuleItem_Result extends ConvertRuleItem_Base, ConvertRuleItem_Relationships {
}
interface ConvertRuleItem_FormattedResult {
}
interface ConvertRuleItem_Select {
}
interface ConvertRuleItem_Expand {
}
interface ConvertRuleItem_Filter {
}
interface ConvertRuleItem_Create extends ConvertRuleItem {
}
interface ConvertRuleItem_Update extends ConvertRuleItem {
}
interface CustomAPI_Base extends WebEntity {
}
interface CustomAPI_Fixed extends WebEntity_Fixed {
  customapiid: string;
}
interface CustomAPI extends CustomAPI_Base, CustomAPI_Relationships {
}
interface CustomAPI_Relationships {
}
interface CustomAPI_Result extends CustomAPI_Base, CustomAPI_Relationships {
}
interface CustomAPI_FormattedResult {
}
interface CustomAPI_Select {
}
interface CustomAPI_Expand {
}
interface CustomAPI_Filter {
}
interface CustomAPI_Create extends CustomAPI {
}
interface CustomAPI_Update extends CustomAPI {
}
interface CustomAPIRequestParameter_Base extends WebEntity {
}
interface CustomAPIRequestParameter_Fixed extends WebEntity_Fixed {
  customapirequestparameterid: string;
}
interface CustomAPIRequestParameter extends CustomAPIRequestParameter_Base, CustomAPIRequestParameter_Relationships {
}
interface CustomAPIRequestParameter_Relationships {
}
interface CustomAPIRequestParameter_Result extends CustomAPIRequestParameter_Base, CustomAPIRequestParameter_Relationships {
}
interface CustomAPIRequestParameter_FormattedResult {
}
interface CustomAPIRequestParameter_Select {
}
interface CustomAPIRequestParameter_Expand {
}
interface CustomAPIRequestParameter_Filter {
}
interface CustomAPIRequestParameter_Create extends CustomAPIRequestParameter {
}
interface CustomAPIRequestParameter_Update extends CustomAPIRequestParameter {
}
interface CustomAPIResponseProperty_Base extends WebEntity {
}
interface CustomAPIResponseProperty_Fixed extends WebEntity_Fixed {
  customapiresponsepropertyid: string;
}
interface CustomAPIResponseProperty extends CustomAPIResponseProperty_Base, CustomAPIResponseProperty_Relationships {
}
interface CustomAPIResponseProperty_Relationships {
}
interface CustomAPIResponseProperty_Result extends CustomAPIResponseProperty_Base, CustomAPIResponseProperty_Relationships {
}
interface CustomAPIResponseProperty_FormattedResult {
}
interface CustomAPIResponseProperty_Select {
}
interface CustomAPIResponseProperty_Expand {
}
interface CustomAPIResponseProperty_Filter {
}
interface CustomAPIResponseProperty_Create extends CustomAPIResponseProperty {
}
interface CustomAPIResponseProperty_Update extends CustomAPIResponseProperty {
}
interface CustomControl_Base extends WebEntity {
}
interface CustomControl_Fixed extends WebEntity_Fixed {
  customcontrolid: string;
}
interface CustomControl extends CustomControl_Base, CustomControl_Relationships {
}
interface CustomControl_Relationships {
}
interface CustomControl_Result extends CustomControl_Base, CustomControl_Relationships {
}
interface CustomControl_FormattedResult {
}
interface CustomControl_Select {
}
interface CustomControl_Expand {
}
interface CustomControl_Filter {
}
interface CustomControl_Create extends CustomControl {
}
interface CustomControl_Update extends CustomControl {
}
interface CustomControlDefaultConfig_Base extends WebEntity {
}
interface CustomControlDefaultConfig_Fixed extends WebEntity_Fixed {
  customcontroldefaultconfigid: string;
}
interface CustomControlDefaultConfig extends CustomControlDefaultConfig_Base, CustomControlDefaultConfig_Relationships {
}
interface CustomControlDefaultConfig_Relationships {
}
interface CustomControlDefaultConfig_Result extends CustomControlDefaultConfig_Base, CustomControlDefaultConfig_Relationships {
}
interface CustomControlDefaultConfig_FormattedResult {
}
interface CustomControlDefaultConfig_Select {
}
interface CustomControlDefaultConfig_Expand {
}
interface CustomControlDefaultConfig_Filter {
}
interface CustomControlDefaultConfig_Create extends CustomControlDefaultConfig {
}
interface CustomControlDefaultConfig_Update extends CustomControlDefaultConfig {
}
interface CustomControlResource_Base extends WebEntity {
}
interface CustomControlResource_Fixed extends WebEntity_Fixed {
  customcontrolresourceid: string;
}
interface CustomControlResource extends CustomControlResource_Base, CustomControlResource_Relationships {
}
interface CustomControlResource_Relationships {
}
interface CustomControlResource_Result extends CustomControlResource_Base, CustomControlResource_Relationships {
}
interface CustomControlResource_FormattedResult {
}
interface CustomControlResource_Select {
}
interface CustomControlResource_Expand {
}
interface CustomControlResource_Filter {
}
interface CustomControlResource_Create extends CustomControlResource {
}
interface CustomControlResource_Update extends CustomControlResource {
}
interface CustomerAddress_Base extends WebEntity {
}
interface CustomerAddress_Fixed extends WebEntity_Fixed {
  customeraddressid: string;
}
interface CustomerAddress extends CustomerAddress_Base, CustomerAddress_Relationships {
}
interface CustomerAddress_Relationships {
}
interface CustomerAddress_Result extends CustomerAddress_Base, CustomerAddress_Relationships {
}
interface CustomerAddress_FormattedResult {
}
interface CustomerAddress_Select {
}
interface CustomerAddress_Expand {
}
interface CustomerAddress_Filter {
}
interface CustomerAddress_Create extends CustomerAddress {
}
interface CustomerAddress_Update extends CustomerAddress {
}
interface CustomerOpportunityRole_Base extends WebEntity {
}
interface CustomerOpportunityRole_Fixed extends WebEntity_Fixed {
  customeropportunityroleid: string;
}
interface CustomerOpportunityRole extends CustomerOpportunityRole_Base, CustomerOpportunityRole_Relationships {
}
interface CustomerOpportunityRole_Relationships {
}
interface CustomerOpportunityRole_Result extends CustomerOpportunityRole_Base, CustomerOpportunityRole_Relationships {
}
interface CustomerOpportunityRole_FormattedResult {
}
interface CustomerOpportunityRole_Select {
}
interface CustomerOpportunityRole_Expand {
}
interface CustomerOpportunityRole_Filter {
}
interface CustomerOpportunityRole_Create extends CustomerOpportunityRole {
}
interface CustomerOpportunityRole_Update extends CustomerOpportunityRole {
}
interface CustomerRelationship_Base extends WebEntity {
}
interface CustomerRelationship_Fixed extends WebEntity_Fixed {
  customerrelationshipid: string;
}
interface CustomerRelationship extends CustomerRelationship_Base, CustomerRelationship_Relationships {
}
interface CustomerRelationship_Relationships {
}
interface CustomerRelationship_Result extends CustomerRelationship_Base, CustomerRelationship_Relationships {
}
interface CustomerRelationship_FormattedResult {
}
interface CustomerRelationship_Select {
}
interface CustomerRelationship_Expand {
}
interface CustomerRelationship_Filter {
}
interface CustomerRelationship_Create extends CustomerRelationship {
}
interface CustomerRelationship_Update extends CustomerRelationship {
}
interface datalakefolder_Base extends WebEntity {
}
interface datalakefolder_Fixed extends WebEntity_Fixed {
  datalakefolderid: string;
}
interface datalakefolder extends datalakefolder_Base, datalakefolder_Relationships {
}
interface datalakefolder_Relationships {
}
interface datalakefolder_Result extends datalakefolder_Base, datalakefolder_Relationships {
}
interface datalakefolder_FormattedResult {
}
interface datalakefolder_Select {
}
interface datalakefolder_Expand {
}
interface datalakefolder_Filter {
}
interface datalakefolder_Create extends datalakefolder {
}
interface datalakefolder_Update extends datalakefolder {
}
interface datalakefolderpermission_Base extends WebEntity {
}
interface datalakefolderpermission_Fixed extends WebEntity_Fixed {
  datalakefolderpermissionid: string;
}
interface datalakefolderpermission extends datalakefolderpermission_Base, datalakefolderpermission_Relationships {
}
interface datalakefolderpermission_Relationships {
}
interface datalakefolderpermission_Result extends datalakefolderpermission_Base, datalakefolderpermission_Relationships {
}
interface datalakefolderpermission_FormattedResult {
}
interface datalakefolderpermission_Select {
}
interface datalakefolderpermission_Expand {
}
interface datalakefolderpermission_Filter {
}
interface datalakefolderpermission_Create extends datalakefolderpermission {
}
interface datalakefolderpermission_Update extends datalakefolderpermission {
}
interface datalakeworkspace_Base extends WebEntity {
}
interface datalakeworkspace_Fixed extends WebEntity_Fixed {
  datalakeworkspaceid: string;
}
interface datalakeworkspace extends datalakeworkspace_Base, datalakeworkspace_Relationships {
}
interface datalakeworkspace_Relationships {
}
interface datalakeworkspace_Result extends datalakeworkspace_Base, datalakeworkspace_Relationships {
}
interface datalakeworkspace_FormattedResult {
}
interface datalakeworkspace_Select {
}
interface datalakeworkspace_Expand {
}
interface datalakeworkspace_Filter {
}
interface datalakeworkspace_Create extends datalakeworkspace {
}
interface datalakeworkspace_Update extends datalakeworkspace {
}
interface datalakeworkspacepermission_Base extends WebEntity {
}
interface datalakeworkspacepermission_Fixed extends WebEntity_Fixed {
  datalakeworkspacepermissionid: string;
}
interface datalakeworkspacepermission extends datalakeworkspacepermission_Base, datalakeworkspacepermission_Relationships {
}
interface datalakeworkspacepermission_Relationships {
}
interface datalakeworkspacepermission_Result extends datalakeworkspacepermission_Base, datalakeworkspacepermission_Relationships {
}
interface datalakeworkspacepermission_FormattedResult {
}
interface datalakeworkspacepermission_Select {
}
interface datalakeworkspacepermission_Expand {
}
interface datalakeworkspacepermission_Filter {
}
interface datalakeworkspacepermission_Create extends datalakeworkspacepermission {
}
interface datalakeworkspacepermission_Update extends datalakeworkspacepermission {
}
interface DataPerformance_Base extends WebEntity {
}
interface DataPerformance_Fixed extends WebEntity_Fixed {
  dataperformanceid: string;
}
interface DataPerformance extends DataPerformance_Base, DataPerformance_Relationships {
}
interface DataPerformance_Relationships {
}
interface DataPerformance_Result extends DataPerformance_Base, DataPerformance_Relationships {
}
interface DataPerformance_FormattedResult {
}
interface DataPerformance_Select {
}
interface DataPerformance_Expand {
}
interface DataPerformance_Filter {
}
interface DataPerformance_Create extends DataPerformance {
}
interface DataPerformance_Update extends DataPerformance {
}
interface DelveActionHub_Base extends WebEntity {
}
interface DelveActionHub_Fixed extends WebEntity_Fixed {
  delveactionhubid: string;
}
interface DelveActionHub extends DelveActionHub_Base, DelveActionHub_Relationships {
}
interface DelveActionHub_Relationships {
}
interface DelveActionHub_Result extends DelveActionHub_Base, DelveActionHub_Relationships {
}
interface DelveActionHub_FormattedResult {
}
interface DelveActionHub_Select {
}
interface DelveActionHub_Expand {
}
interface DelveActionHub_Filter {
}
interface DelveActionHub_Create extends DelveActionHub {
}
interface DelveActionHub_Update extends DelveActionHub {
}
interface Dependency_Base extends WebEntity {
}
interface Dependency_Fixed extends WebEntity_Fixed {
  dependencyid: string;
}
interface Dependency extends Dependency_Base, Dependency_Relationships {
}
interface Dependency_Relationships {
}
interface Dependency_Result extends Dependency_Base, Dependency_Relationships {
}
interface Dependency_FormattedResult {
}
interface Dependency_Select {
}
interface Dependency_Expand {
}
interface Dependency_Filter {
}
interface Dependency_Create extends Dependency {
}
interface Dependency_Update extends Dependency {
}
interface DependencyFeature_Base extends WebEntity {
}
interface DependencyFeature_Fixed extends WebEntity_Fixed {
  dependencyfeatureid: string;
}
interface DependencyFeature extends DependencyFeature_Base, DependencyFeature_Relationships {
}
interface DependencyFeature_Relationships {
}
interface DependencyFeature_Result extends DependencyFeature_Base, DependencyFeature_Relationships {
}
interface DependencyFeature_FormattedResult {
}
interface DependencyFeature_Select {
}
interface DependencyFeature_Expand {
}
interface DependencyFeature_Filter {
}
interface DependencyFeature_Create extends DependencyFeature {
}
interface DependencyFeature_Update extends DependencyFeature {
}
interface DependencyNode_Base extends WebEntity {
}
interface DependencyNode_Fixed extends WebEntity_Fixed {
  dependencynodeid: string;
}
interface DependencyNode extends DependencyNode_Base, DependencyNode_Relationships {
}
interface DependencyNode_Relationships {
}
interface DependencyNode_Result extends DependencyNode_Base, DependencyNode_Relationships {
}
interface DependencyNode_FormattedResult {
}
interface DependencyNode_Select {
}
interface DependencyNode_Expand {
}
interface DependencyNode_Filter {
}
interface DependencyNode_Create extends DependencyNode {
}
interface DependencyNode_Update extends DependencyNode {
}
interface Discount_Base extends WebEntity {
}
interface Discount_Fixed extends WebEntity_Fixed {
  discountid: string;
}
interface Discount extends Discount_Base, Discount_Relationships {
}
interface Discount_Relationships {
}
interface Discount_Result extends Discount_Base, Discount_Relationships {
}
interface Discount_FormattedResult {
}
interface Discount_Select {
}
interface Discount_Expand {
}
interface Discount_Filter {
}
interface Discount_Create extends Discount {
}
interface Discount_Update extends Discount {
}
interface DiscountType_Base extends WebEntity {
}
interface DiscountType_Fixed extends WebEntity_Fixed {
  discounttypeid: string;
}
interface DiscountType extends DiscountType_Base, DiscountType_Relationships {
}
interface DiscountType_Relationships {
}
interface DiscountType_Result extends DiscountType_Base, DiscountType_Relationships {
}
interface DiscountType_FormattedResult {
}
interface DiscountType_Select {
}
interface DiscountType_Expand {
}
interface DiscountType_Filter {
}
interface DiscountType_Create extends DiscountType {
}
interface DiscountType_Update extends DiscountType {
}
interface DisplayString_Base extends WebEntity {
}
interface DisplayString_Fixed extends WebEntity_Fixed {
  displaystringid: string;
}
interface DisplayString extends DisplayString_Base, DisplayString_Relationships {
}
interface DisplayString_Relationships {
}
interface DisplayString_Result extends DisplayString_Base, DisplayString_Relationships {
}
interface DisplayString_FormattedResult {
}
interface DisplayString_Select {
}
interface DisplayString_Expand {
}
interface DisplayString_Filter {
}
interface DisplayString_Create extends DisplayString {
}
interface DisplayString_Update extends DisplayString {
}
interface DisplayStringMap_Base extends WebEntity {
}
interface DisplayStringMap_Fixed extends WebEntity_Fixed {
  displaystringmapid: string;
}
interface DisplayStringMap extends DisplayStringMap_Base, DisplayStringMap_Relationships {
}
interface DisplayStringMap_Relationships {
}
interface DisplayStringMap_Result extends DisplayStringMap_Base, DisplayStringMap_Relationships {
}
interface DisplayStringMap_FormattedResult {
}
interface DisplayStringMap_Select {
}
interface DisplayStringMap_Expand {
}
interface DisplayStringMap_Filter {
}
interface DisplayStringMap_Create extends DisplayStringMap {
}
interface DisplayStringMap_Update extends DisplayStringMap {
}
interface DocumentIndex_Base extends WebEntity {
}
interface DocumentIndex_Fixed extends WebEntity_Fixed {
  documentindexid: string;
}
interface DocumentIndex extends DocumentIndex_Base, DocumentIndex_Relationships {
}
interface DocumentIndex_Relationships {
}
interface DocumentIndex_Result extends DocumentIndex_Base, DocumentIndex_Relationships {
}
interface DocumentIndex_FormattedResult {
}
interface DocumentIndex_Select {
}
interface DocumentIndex_Expand {
}
interface DocumentIndex_Filter {
}
interface DocumentIndex_Create extends DocumentIndex {
}
interface DocumentIndex_Update extends DocumentIndex {
}
interface DocumentTemplate_Base extends WebEntity {
}
interface DocumentTemplate_Fixed extends WebEntity_Fixed {
  documenttemplateid: string;
}
interface DocumentTemplate extends DocumentTemplate_Base, DocumentTemplate_Relationships {
}
interface DocumentTemplate_Relationships {
}
interface DocumentTemplate_Result extends DocumentTemplate_Base, DocumentTemplate_Relationships {
}
interface DocumentTemplate_FormattedResult {
}
interface DocumentTemplate_Select {
}
interface DocumentTemplate_Expand {
}
interface DocumentTemplate_Filter {
}
interface DocumentTemplate_Create extends DocumentTemplate {
}
interface DocumentTemplate_Update extends DocumentTemplate {
}
interface DuplicateRecord_Base extends WebEntity {
}
interface DuplicateRecord_Fixed extends WebEntity_Fixed {
  duplicateid: string;
}
interface DuplicateRecord extends DuplicateRecord_Base, DuplicateRecord_Relationships {
}
interface DuplicateRecord_Relationships {
}
interface DuplicateRecord_Result extends DuplicateRecord_Base, DuplicateRecord_Relationships {
}
interface DuplicateRecord_FormattedResult {
}
interface DuplicateRecord_Select {
}
interface DuplicateRecord_Expand {
}
interface DuplicateRecord_Filter {
}
interface DuplicateRecord_Create extends DuplicateRecord {
}
interface DuplicateRecord_Update extends DuplicateRecord {
}
interface DuplicateRule_Base extends WebEntity {
}
interface DuplicateRule_Fixed extends WebEntity_Fixed {
  duplicateruleid: string;
}
interface DuplicateRule extends DuplicateRule_Base, DuplicateRule_Relationships {
}
interface DuplicateRule_Relationships {
}
interface DuplicateRule_Result extends DuplicateRule_Base, DuplicateRule_Relationships {
}
interface DuplicateRule_FormattedResult {
}
interface DuplicateRule_Select {
}
interface DuplicateRule_Expand {
}
interface DuplicateRule_Filter {
}
interface DuplicateRule_Create extends DuplicateRule {
}
interface DuplicateRule_Update extends DuplicateRule {
}
interface DuplicateRuleCondition_Base extends WebEntity {
}
interface DuplicateRuleCondition_Fixed extends WebEntity_Fixed {
  duplicateruleconditionid: string;
}
interface DuplicateRuleCondition extends DuplicateRuleCondition_Base, DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_Result extends DuplicateRuleCondition_Base, DuplicateRuleCondition_Relationships {
}
interface DuplicateRuleCondition_FormattedResult {
}
interface DuplicateRuleCondition_Select {
}
interface DuplicateRuleCondition_Expand {
}
interface DuplicateRuleCondition_Filter {
}
interface DuplicateRuleCondition_Create extends DuplicateRuleCondition {
}
interface DuplicateRuleCondition_Update extends DuplicateRuleCondition {
}
interface DynamicProperty_Base extends WebEntity {
}
interface DynamicProperty_Fixed extends WebEntity_Fixed {
  dynamicpropertyid: string;
}
interface DynamicProperty extends DynamicProperty_Base, DynamicProperty_Relationships {
}
interface DynamicProperty_Relationships {
}
interface DynamicProperty_Result extends DynamicProperty_Base, DynamicProperty_Relationships {
}
interface DynamicProperty_FormattedResult {
}
interface DynamicProperty_Select {
}
interface DynamicProperty_Expand {
}
interface DynamicProperty_Filter {
}
interface DynamicProperty_Create extends DynamicProperty {
}
interface DynamicProperty_Update extends DynamicProperty {
}
interface DynamicPropertyAssociation_Base extends WebEntity {
}
interface DynamicPropertyAssociation_Fixed extends WebEntity_Fixed {
  dynamicpropertyassociationid: string;
}
interface DynamicPropertyAssociation extends DynamicPropertyAssociation_Base, DynamicPropertyAssociation_Relationships {
}
interface DynamicPropertyAssociation_Relationships {
}
interface DynamicPropertyAssociation_Result extends DynamicPropertyAssociation_Base, DynamicPropertyAssociation_Relationships {
}
interface DynamicPropertyAssociation_FormattedResult {
}
interface DynamicPropertyAssociation_Select {
}
interface DynamicPropertyAssociation_Expand {
}
interface DynamicPropertyAssociation_Filter {
}
interface DynamicPropertyAssociation_Create extends DynamicPropertyAssociation {
}
interface DynamicPropertyAssociation_Update extends DynamicPropertyAssociation {
}
interface DynamicPropertyInstance_Base extends WebEntity {
}
interface DynamicPropertyInstance_Fixed extends WebEntity_Fixed {
  dynamicpropertyinstanceid: string;
}
interface DynamicPropertyInstance extends DynamicPropertyInstance_Base, DynamicPropertyInstance_Relationships {
}
interface DynamicPropertyInstance_Relationships {
}
interface DynamicPropertyInstance_Result extends DynamicPropertyInstance_Base, DynamicPropertyInstance_Relationships {
}
interface DynamicPropertyInstance_FormattedResult {
}
interface DynamicPropertyInstance_Select {
}
interface DynamicPropertyInstance_Expand {
}
interface DynamicPropertyInstance_Filter {
}
interface DynamicPropertyInstance_Create extends DynamicPropertyInstance {
}
interface DynamicPropertyInstance_Update extends DynamicPropertyInstance {
}
interface DynamicPropertyOptionSetItem_Base extends WebEntity {
}
interface DynamicPropertyOptionSetItem_Fixed extends WebEntity_Fixed {
  dynamicpropertyoptionsetvalueid: string;
}
interface DynamicPropertyOptionSetItem extends DynamicPropertyOptionSetItem_Base, DynamicPropertyOptionSetItem_Relationships {
}
interface DynamicPropertyOptionSetItem_Relationships {
}
interface DynamicPropertyOptionSetItem_Result extends DynamicPropertyOptionSetItem_Base, DynamicPropertyOptionSetItem_Relationships {
}
interface DynamicPropertyOptionSetItem_FormattedResult {
}
interface DynamicPropertyOptionSetItem_Select {
}
interface DynamicPropertyOptionSetItem_Expand {
}
interface DynamicPropertyOptionSetItem_Filter {
}
interface DynamicPropertyOptionSetItem_Create extends DynamicPropertyOptionSetItem {
}
interface DynamicPropertyOptionSetItem_Update extends DynamicPropertyOptionSetItem {
}
interface Email_Base extends WebEntity {
}
interface Email_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Email extends Email_Base, Email_Relationships {
}
interface Email_Relationships {
}
interface Email_Result extends Email_Base, Email_Relationships {
}
interface Email_FormattedResult {
}
interface Email_Select {
}
interface Email_Expand {
}
interface Email_Filter {
}
interface Email_Create extends Email {
}
interface Email_Update extends Email {
}
interface EmailHash_Base extends WebEntity {
}
interface EmailHash_Fixed extends WebEntity_Fixed {
  emailhashid: string;
}
interface EmailHash extends EmailHash_Base, EmailHash_Relationships {
}
interface EmailHash_Relationships {
}
interface EmailHash_Result extends EmailHash_Base, EmailHash_Relationships {
}
interface EmailHash_FormattedResult {
}
interface EmailHash_Select {
}
interface EmailHash_Expand {
}
interface EmailHash_Filter {
}
interface EmailHash_Create extends EmailHash {
}
interface EmailHash_Update extends EmailHash {
}
interface EmailSearch_Base extends WebEntity {
}
interface EmailSearch_Fixed extends WebEntity_Fixed {
  emailsearchid: string;
}
interface EmailSearch extends EmailSearch_Base, EmailSearch_Relationships {
}
interface EmailSearch_Relationships {
}
interface EmailSearch_Result extends EmailSearch_Base, EmailSearch_Relationships {
}
interface EmailSearch_FormattedResult {
}
interface EmailSearch_Select {
}
interface EmailSearch_Expand {
}
interface EmailSearch_Filter {
}
interface EmailSearch_Create extends EmailSearch {
}
interface EmailSearch_Update extends EmailSearch {
}
interface EmailServerProfile_Base extends WebEntity {
}
interface EmailServerProfile_Fixed extends WebEntity_Fixed {
  emailserverprofileid: string;
}
interface EmailServerProfile extends EmailServerProfile_Base, EmailServerProfile_Relationships {
}
interface EmailServerProfile_Relationships {
}
interface EmailServerProfile_Result extends EmailServerProfile_Base, EmailServerProfile_Relationships {
}
interface EmailServerProfile_FormattedResult {
}
interface EmailServerProfile_Select {
}
interface EmailServerProfile_Expand {
}
interface EmailServerProfile_Filter {
}
interface EmailServerProfile_Create extends EmailServerProfile {
}
interface EmailServerProfile_Update extends EmailServerProfile {
}
interface EmailSignature_Base extends WebEntity {
}
interface EmailSignature_Fixed extends WebEntity_Fixed {
  emailsignatureid: string;
}
interface EmailSignature extends EmailSignature_Base, EmailSignature_Relationships {
}
interface EmailSignature_Relationships {
}
interface EmailSignature_Result extends EmailSignature_Base, EmailSignature_Relationships {
}
interface EmailSignature_FormattedResult {
}
interface EmailSignature_Select {
}
interface EmailSignature_Expand {
}
interface EmailSignature_Filter {
}
interface EmailSignature_Create extends EmailSignature {
}
interface EmailSignature_Update extends EmailSignature {
}
interface Entitlement_Base extends WebEntity {
}
interface Entitlement_Fixed extends WebEntity_Fixed {
  entitlementid: string;
}
interface Entitlement extends Entitlement_Base, Entitlement_Relationships {
}
interface Entitlement_Relationships {
}
interface Entitlement_Result extends Entitlement_Base, Entitlement_Relationships {
}
interface Entitlement_FormattedResult {
}
interface Entitlement_Select {
}
interface Entitlement_Expand {
}
interface Entitlement_Filter {
}
interface Entitlement_Create extends Entitlement {
}
interface Entitlement_Update extends Entitlement {
}
interface EntitlementChannel_Base extends WebEntity {
}
interface EntitlementChannel_Fixed extends WebEntity_Fixed {
  entitlementchannelid: string;
}
interface EntitlementChannel extends EntitlementChannel_Base, EntitlementChannel_Relationships {
}
interface EntitlementChannel_Relationships {
}
interface EntitlementChannel_Result extends EntitlementChannel_Base, EntitlementChannel_Relationships {
}
interface EntitlementChannel_FormattedResult {
}
interface EntitlementChannel_Select {
}
interface EntitlementChannel_Expand {
}
interface EntitlementChannel_Filter {
}
interface EntitlementChannel_Create extends EntitlementChannel {
}
interface EntitlementChannel_Update extends EntitlementChannel {
}
interface EntitlementContacts_Base extends WebEntity {
}
interface EntitlementContacts_Fixed extends WebEntity_Fixed {
  entitlementcontactid: string;
}
interface EntitlementContacts extends EntitlementContacts_Base, EntitlementContacts_Relationships {
}
interface EntitlementContacts_Relationships {
}
interface EntitlementContacts_Result extends EntitlementContacts_Base, EntitlementContacts_Relationships {
}
interface EntitlementContacts_FormattedResult {
}
interface EntitlementContacts_Select {
}
interface EntitlementContacts_Expand {
}
interface EntitlementContacts_Filter {
}
interface EntitlementContacts_Create extends EntitlementContacts {
}
interface EntitlementContacts_Update extends EntitlementContacts {
}
interface EntitlementEntityAllocationTypeMapping_Base extends WebEntity {
}
interface EntitlementEntityAllocationTypeMapping_Fixed extends WebEntity_Fixed {
  entitlemententityallocationtypemappingid: string;
}
interface EntitlementEntityAllocationTypeMapping extends EntitlementEntityAllocationTypeMapping_Base, EntitlementEntityAllocationTypeMapping_Relationships {
}
interface EntitlementEntityAllocationTypeMapping_Relationships {
}
interface EntitlementEntityAllocationTypeMapping_Result extends EntitlementEntityAllocationTypeMapping_Base, EntitlementEntityAllocationTypeMapping_Relationships {
}
interface EntitlementEntityAllocationTypeMapping_FormattedResult {
}
interface EntitlementEntityAllocationTypeMapping_Select {
}
interface EntitlementEntityAllocationTypeMapping_Expand {
}
interface EntitlementEntityAllocationTypeMapping_Filter {
}
interface EntitlementEntityAllocationTypeMapping_Create extends EntitlementEntityAllocationTypeMapping {
}
interface EntitlementEntityAllocationTypeMapping_Update extends EntitlementEntityAllocationTypeMapping {
}
interface EntitlementProducts_Base extends WebEntity {
}
interface EntitlementProducts_Fixed extends WebEntity_Fixed {
  entitlementproductid: string;
}
interface EntitlementProducts extends EntitlementProducts_Base, EntitlementProducts_Relationships {
}
interface EntitlementProducts_Relationships {
}
interface EntitlementProducts_Result extends EntitlementProducts_Base, EntitlementProducts_Relationships {
}
interface EntitlementProducts_FormattedResult {
}
interface EntitlementProducts_Select {
}
interface EntitlementProducts_Expand {
}
interface EntitlementProducts_Filter {
}
interface EntitlementProducts_Create extends EntitlementProducts {
}
interface EntitlementProducts_Update extends EntitlementProducts {
}
interface EntitlementTemplate_Base extends WebEntity {
}
interface EntitlementTemplate_Fixed extends WebEntity_Fixed {
  entitlementtemplateid: string;
}
interface EntitlementTemplate extends EntitlementTemplate_Base, EntitlementTemplate_Relationships {
}
interface EntitlementTemplate_Relationships {
}
interface EntitlementTemplate_Result extends EntitlementTemplate_Base, EntitlementTemplate_Relationships {
}
interface EntitlementTemplate_FormattedResult {
}
interface EntitlementTemplate_Select {
}
interface EntitlementTemplate_Expand {
}
interface EntitlementTemplate_Filter {
}
interface EntitlementTemplate_Create extends EntitlementTemplate {
}
interface EntitlementTemplate_Update extends EntitlementTemplate {
}
interface EntitlementTemplateChannel_Base extends WebEntity {
}
interface EntitlementTemplateChannel_Fixed extends WebEntity_Fixed {
  entitlementtemplatechannelid: string;
}
interface EntitlementTemplateChannel extends EntitlementTemplateChannel_Base, EntitlementTemplateChannel_Relationships {
}
interface EntitlementTemplateChannel_Relationships {
}
interface EntitlementTemplateChannel_Result extends EntitlementTemplateChannel_Base, EntitlementTemplateChannel_Relationships {
}
interface EntitlementTemplateChannel_FormattedResult {
}
interface EntitlementTemplateChannel_Select {
}
interface EntitlementTemplateChannel_Expand {
}
interface EntitlementTemplateChannel_Filter {
}
interface EntitlementTemplateChannel_Create extends EntitlementTemplateChannel {
}
interface EntitlementTemplateChannel_Update extends EntitlementTemplateChannel {
}
interface EntitlementTemplateProducts_Base extends WebEntity {
}
interface EntitlementTemplateProducts_Fixed extends WebEntity_Fixed {
  entitlementtemplateproductid: string;
}
interface EntitlementTemplateProducts extends EntitlementTemplateProducts_Base, EntitlementTemplateProducts_Relationships {
}
interface EntitlementTemplateProducts_Relationships {
}
interface EntitlementTemplateProducts_Result extends EntitlementTemplateProducts_Base, EntitlementTemplateProducts_Relationships {
}
interface EntitlementTemplateProducts_FormattedResult {
}
interface EntitlementTemplateProducts_Select {
}
interface EntitlementTemplateProducts_Expand {
}
interface EntitlementTemplateProducts_Filter {
}
interface EntitlementTemplateProducts_Create extends EntitlementTemplateProducts {
}
interface EntitlementTemplateProducts_Update extends EntitlementTemplateProducts {
}
interface Entity_Base extends WebEntity {
}
interface Entity_Fixed extends WebEntity_Fixed {
  entityid: string;
}
interface Entity extends Entity_Base, Entity_Relationships {
}
interface Entity_Relationships {
}
interface Entity_Result extends Entity_Base, Entity_Relationships {
}
interface Entity_FormattedResult {
}
interface Entity_Select {
}
interface Entity_Expand {
}
interface Entity_Filter {
}
interface Entity_Create extends Entity {
}
interface Entity_Update extends Entity {
}
interface EntityAnalyticsConfig_Base extends WebEntity {
}
interface EntityAnalyticsConfig_Fixed extends WebEntity_Fixed {
  entityanalyticsconfigid: string;
}
interface EntityAnalyticsConfig extends EntityAnalyticsConfig_Base, EntityAnalyticsConfig_Relationships {
}
interface EntityAnalyticsConfig_Relationships {
}
interface EntityAnalyticsConfig_Result extends EntityAnalyticsConfig_Base, EntityAnalyticsConfig_Relationships {
}
interface EntityAnalyticsConfig_FormattedResult {
}
interface EntityAnalyticsConfig_Select {
}
interface EntityAnalyticsConfig_Expand {
}
interface EntityAnalyticsConfig_Filter {
}
interface EntityAnalyticsConfig_Create extends EntityAnalyticsConfig {
}
interface EntityAnalyticsConfig_Update extends EntityAnalyticsConfig {
}
interface EntityDataProvider_Base extends WebEntity {
}
interface EntityDataProvider_Fixed extends WebEntity_Fixed {
  entitydataproviderid: string;
}
interface EntityDataProvider extends EntityDataProvider_Base, EntityDataProvider_Relationships {
}
interface EntityDataProvider_Relationships {
}
interface EntityDataProvider_Result extends EntityDataProvider_Base, EntityDataProvider_Relationships {
}
interface EntityDataProvider_FormattedResult {
}
interface EntityDataProvider_Select {
}
interface EntityDataProvider_Expand {
}
interface EntityDataProvider_Filter {
}
interface EntityDataProvider_Create extends EntityDataProvider {
}
interface EntityDataProvider_Update extends EntityDataProvider {
}
interface EntityDataSource_Base extends WebEntity {
}
interface EntityDataSource_Fixed extends WebEntity_Fixed {
  entitydatasourceid: string;
}
interface EntityDataSource extends EntityDataSource_Base, EntityDataSource_Relationships {
}
interface EntityDataSource_Relationships {
}
interface EntityDataSource_Result extends EntityDataSource_Base, EntityDataSource_Relationships {
}
interface EntityDataSource_FormattedResult {
}
interface EntityDataSource_Select {
}
interface EntityDataSource_Expand {
}
interface EntityDataSource_Filter {
}
interface EntityDataSource_Create extends EntityDataSource {
}
interface EntityDataSource_Update extends EntityDataSource {
}
interface EntityImageConfig_Base extends WebEntity {
}
interface EntityImageConfig_Fixed extends WebEntity_Fixed {
  entityimageconfigid: string;
}
interface EntityImageConfig extends EntityImageConfig_Base, EntityImageConfig_Relationships {
}
interface EntityImageConfig_Relationships {
}
interface EntityImageConfig_Result extends EntityImageConfig_Base, EntityImageConfig_Relationships {
}
interface EntityImageConfig_FormattedResult {
}
interface EntityImageConfig_Select {
}
interface EntityImageConfig_Expand {
}
interface EntityImageConfig_Filter {
}
interface EntityImageConfig_Create extends EntityImageConfig {
}
interface EntityImageConfig_Update extends EntityImageConfig {
}
interface EntityIndex_Base extends WebEntity {
}
interface EntityIndex_Fixed extends WebEntity_Fixed {
  indexid: string;
}
interface EntityIndex extends EntityIndex_Base, EntityIndex_Relationships {
}
interface EntityIndex_Relationships {
}
interface EntityIndex_Result extends EntityIndex_Base, EntityIndex_Relationships {
}
interface EntityIndex_FormattedResult {
}
interface EntityIndex_Select {
}
interface EntityIndex_Expand {
}
interface EntityIndex_Filter {
}
interface EntityIndex_Create extends EntityIndex {
}
interface EntityIndex_Update extends EntityIndex {
}
interface EntityKey_Base extends WebEntity {
}
interface EntityKey_Fixed extends WebEntity_Fixed {
  entitykeyid: string;
}
interface EntityKey extends EntityKey_Base, EntityKey_Relationships {
}
interface EntityKey_Relationships {
}
interface EntityKey_Result extends EntityKey_Base, EntityKey_Relationships {
}
interface EntityKey_FormattedResult {
}
interface EntityKey_Select {
}
interface EntityKey_Expand {
}
interface EntityKey_Filter {
}
interface EntityKey_Create extends EntityKey {
}
interface EntityKey_Update extends EntityKey {
}
interface EntityMap_Base extends WebEntity {
}
interface EntityMap_Fixed extends WebEntity_Fixed {
  entitymapid: string;
}
interface EntityMap extends EntityMap_Base, EntityMap_Relationships {
}
interface EntityMap_Relationships {
}
interface EntityMap_Result extends EntityMap_Base, EntityMap_Relationships {
}
interface EntityMap_FormattedResult {
}
interface EntityMap_Select {
}
interface EntityMap_Expand {
}
interface EntityMap_Filter {
}
interface EntityMap_Create extends EntityMap {
}
interface EntityMap_Update extends EntityMap {
}
interface EntityRelationship_Base extends WebEntity {
}
interface EntityRelationship_Fixed extends WebEntity_Fixed {
  entityrelationshipid: string;
}
interface EntityRelationship extends EntityRelationship_Base, EntityRelationship_Relationships {
}
interface EntityRelationship_Relationships {
}
interface EntityRelationship_Result extends EntityRelationship_Base, EntityRelationship_Relationships {
}
interface EntityRelationship_FormattedResult {
}
interface EntityRelationship_Select {
}
interface EntityRelationship_Expand {
}
interface EntityRelationship_Filter {
}
interface EntityRelationship_Create extends EntityRelationship {
}
interface EntityRelationship_Update extends EntityRelationship {
}
interface EnvironmentVariableDefinition_Base extends WebEntity {
}
interface EnvironmentVariableDefinition_Fixed extends WebEntity_Fixed {
  environmentvariabledefinitionid: string;
}
interface EnvironmentVariableDefinition extends EnvironmentVariableDefinition_Base, EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_Result extends EnvironmentVariableDefinition_Base, EnvironmentVariableDefinition_Relationships {
}
interface EnvironmentVariableDefinition_FormattedResult {
}
interface EnvironmentVariableDefinition_Select {
}
interface EnvironmentVariableDefinition_Expand {
}
interface EnvironmentVariableDefinition_Filter {
}
interface EnvironmentVariableDefinition_Create extends EnvironmentVariableDefinition {
}
interface EnvironmentVariableDefinition_Update extends EnvironmentVariableDefinition {
}
interface EnvironmentVariableValue_Base extends WebEntity {
}
interface EnvironmentVariableValue_Fixed extends WebEntity_Fixed {
  environmentvariablevalueid: string;
}
interface EnvironmentVariableValue extends EnvironmentVariableValue_Base, EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_Result extends EnvironmentVariableValue_Base, EnvironmentVariableValue_Relationships {
}
interface EnvironmentVariableValue_FormattedResult {
}
interface EnvironmentVariableValue_Select {
}
interface EnvironmentVariableValue_Expand {
}
interface EnvironmentVariableValue_Filter {
}
interface EnvironmentVariableValue_Create extends EnvironmentVariableValue {
}
interface EnvironmentVariableValue_Update extends EnvironmentVariableValue {
}
interface Equipment_Base extends WebEntity {
}
interface Equipment_Fixed extends WebEntity_Fixed {
  equipmentid: string;
}
interface Equipment extends Equipment_Base, Equipment_Relationships {
}
interface Equipment_Relationships {
}
interface Equipment_Result extends Equipment_Base, Equipment_Relationships {
}
interface Equipment_FormattedResult {
}
interface Equipment_Select {
}
interface Equipment_Expand {
}
interface Equipment_Filter {
}
interface Equipment_Create extends Equipment {
}
interface Equipment_Update extends Equipment {
}
interface ExchangeSyncIdMapping_Base extends WebEntity {
}
interface ExchangeSyncIdMapping_Fixed extends WebEntity_Fixed {
  exchangesyncidmappingid: string;
}
interface ExchangeSyncIdMapping extends ExchangeSyncIdMapping_Base, ExchangeSyncIdMapping_Relationships {
}
interface ExchangeSyncIdMapping_Relationships {
}
interface ExchangeSyncIdMapping_Result extends ExchangeSyncIdMapping_Base, ExchangeSyncIdMapping_Relationships {
}
interface ExchangeSyncIdMapping_FormattedResult {
}
interface ExchangeSyncIdMapping_Select {
}
interface ExchangeSyncIdMapping_Expand {
}
interface ExchangeSyncIdMapping_Filter {
}
interface ExchangeSyncIdMapping_Create extends ExchangeSyncIdMapping {
}
interface ExchangeSyncIdMapping_Update extends ExchangeSyncIdMapping {
}
interface ExpanderEvent_Base extends WebEntity {
}
interface ExpanderEvent_Fixed extends WebEntity_Fixed {
  expandereventid: string;
}
interface ExpanderEvent extends ExpanderEvent_Base, ExpanderEvent_Relationships {
}
interface ExpanderEvent_Relationships {
}
interface ExpanderEvent_Result extends ExpanderEvent_Base, ExpanderEvent_Relationships {
}
interface ExpanderEvent_FormattedResult {
}
interface ExpanderEvent_Select {
}
interface ExpanderEvent_Expand {
}
interface ExpanderEvent_Filter {
}
interface ExpanderEvent_Create extends ExpanderEvent {
}
interface ExpanderEvent_Update extends ExpanderEvent {
}
interface ExpiredProcess_Base extends WebEntity {
}
interface ExpiredProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface ExpiredProcess extends ExpiredProcess_Base, ExpiredProcess_Relationships {
}
interface ExpiredProcess_Relationships {
}
interface ExpiredProcess_Result extends ExpiredProcess_Base, ExpiredProcess_Relationships {
}
interface ExpiredProcess_FormattedResult {
}
interface ExpiredProcess_Select {
}
interface ExpiredProcess_Expand {
}
interface ExpiredProcess_Filter {
}
interface ExpiredProcess_Create extends ExpiredProcess {
}
interface ExpiredProcess_Update extends ExpiredProcess {
}
interface ExportSolutionUpload_Base extends WebEntity {
}
interface ExportSolutionUpload_Fixed extends WebEntity_Fixed {
  exportsolutionuploadid: string;
}
interface ExportSolutionUpload extends ExportSolutionUpload_Base, ExportSolutionUpload_Relationships {
}
interface ExportSolutionUpload_Relationships {
}
interface ExportSolutionUpload_Result extends ExportSolutionUpload_Base, ExportSolutionUpload_Relationships {
}
interface ExportSolutionUpload_FormattedResult {
}
interface ExportSolutionUpload_Select {
}
interface ExportSolutionUpload_Expand {
}
interface ExportSolutionUpload_Filter {
}
interface ExportSolutionUpload_Create extends ExportSolutionUpload {
}
interface ExportSolutionUpload_Update extends ExportSolutionUpload {
}
interface ExternalParty_Base extends WebEntity {
}
interface ExternalParty_Fixed extends WebEntity_Fixed {
  externalpartyid: string;
}
interface ExternalParty extends ExternalParty_Base, ExternalParty_Relationships {
}
interface ExternalParty_Relationships {
}
interface ExternalParty_Result extends ExternalParty_Base, ExternalParty_Relationships {
}
interface ExternalParty_FormattedResult {
}
interface ExternalParty_Select {
}
interface ExternalParty_Expand {
}
interface ExternalParty_Filter {
}
interface ExternalParty_Create extends ExternalParty {
}
interface ExternalParty_Update extends ExternalParty {
}
interface ExternalPartyItem_Base extends WebEntity {
}
interface ExternalPartyItem_Fixed extends WebEntity_Fixed {
  externalpartyitemid: string;
}
interface ExternalPartyItem extends ExternalPartyItem_Base, ExternalPartyItem_Relationships {
}
interface ExternalPartyItem_Relationships {
}
interface ExternalPartyItem_Result extends ExternalPartyItem_Base, ExternalPartyItem_Relationships {
}
interface ExternalPartyItem_FormattedResult {
}
interface ExternalPartyItem_Select {
}
interface ExternalPartyItem_Expand {
}
interface ExternalPartyItem_Filter {
}
interface ExternalPartyItem_Create extends ExternalPartyItem {
}
interface ExternalPartyItem_Update extends ExternalPartyItem {
}
interface Fax_Base extends WebEntity {
}
interface Fax_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Fax extends Fax_Base, Fax_Relationships {
}
interface Fax_Relationships {
}
interface Fax_Result extends Fax_Base, Fax_Relationships {
}
interface Fax_FormattedResult {
}
interface Fax_Select {
}
interface Fax_Expand {
}
interface Fax_Filter {
}
interface Fax_Create extends Fax {
}
interface Fax_Update extends Fax {
}
interface featurecontrolsetting_Base extends WebEntity {
}
interface featurecontrolsetting_Fixed extends WebEntity_Fixed {
  featurecontrolsettingid: string;
}
interface featurecontrolsetting extends featurecontrolsetting_Base, featurecontrolsetting_Relationships {
}
interface featurecontrolsetting_Relationships {
}
interface featurecontrolsetting_Result extends featurecontrolsetting_Base, featurecontrolsetting_Relationships {
}
interface featurecontrolsetting_FormattedResult {
}
interface featurecontrolsetting_Select {
}
interface featurecontrolsetting_Expand {
}
interface featurecontrolsetting_Filter {
}
interface featurecontrolsetting_Create extends featurecontrolsetting {
}
interface featurecontrolsetting_Update extends featurecontrolsetting {
}
interface Feedback_Base extends WebEntity {
}
interface Feedback_Fixed extends WebEntity_Fixed {
  feedbackid: string;
}
interface Feedback extends Feedback_Base, Feedback_Relationships {
}
interface Feedback_Relationships {
}
interface Feedback_Result extends Feedback_Base, Feedback_Relationships {
}
interface Feedback_FormattedResult {
}
interface Feedback_Select {
}
interface Feedback_Expand {
}
interface Feedback_Filter {
}
interface Feedback_Create extends Feedback {
}
interface Feedback_Update extends Feedback {
}
interface FieldPermission_Base extends WebEntity {
}
interface FieldPermission_Fixed extends WebEntity_Fixed {
  fieldpermissionid: string;
}
interface FieldPermission extends FieldPermission_Base, FieldPermission_Relationships {
}
interface FieldPermission_Relationships {
}
interface FieldPermission_Result extends FieldPermission_Base, FieldPermission_Relationships {
}
interface FieldPermission_FormattedResult {
}
interface FieldPermission_Select {
}
interface FieldPermission_Expand {
}
interface FieldPermission_Filter {
}
interface FieldPermission_Create extends FieldPermission {
}
interface FieldPermission_Update extends FieldPermission {
}
interface FieldSecurityProfile_Base extends WebEntity {
}
interface FieldSecurityProfile_Fixed extends WebEntity_Fixed {
  fieldsecurityprofileid: string;
}
interface FieldSecurityProfile extends FieldSecurityProfile_Base, FieldSecurityProfile_Relationships {
}
interface FieldSecurityProfile_Relationships {
}
interface FieldSecurityProfile_Result extends FieldSecurityProfile_Base, FieldSecurityProfile_Relationships {
}
interface FieldSecurityProfile_FormattedResult {
}
interface FieldSecurityProfile_Select {
}
interface FieldSecurityProfile_Expand {
}
interface FieldSecurityProfile_Filter {
}
interface FieldSecurityProfile_Create extends FieldSecurityProfile {
}
interface FieldSecurityProfile_Update extends FieldSecurityProfile {
}
interface FileAttachment_Base extends WebEntity {
}
interface FileAttachment_Fixed extends WebEntity_Fixed {
  fileattachmentid: string;
}
interface FileAttachment extends FileAttachment_Base, FileAttachment_Relationships {
}
interface FileAttachment_Relationships {
}
interface FileAttachment_Result extends FileAttachment_Base, FileAttachment_Relationships {
}
interface FileAttachment_FormattedResult {
}
interface FileAttachment_Select {
}
interface FileAttachment_Expand {
}
interface FileAttachment_Filter {
}
interface FileAttachment_Create extends FileAttachment {
}
interface FileAttachment_Update extends FileAttachment {
}
interface FilterTemplate_Base extends WebEntity {
}
interface FilterTemplate_Fixed extends WebEntity_Fixed {
  filtertemplateid: string;
}
interface FilterTemplate extends FilterTemplate_Base, FilterTemplate_Relationships {
}
interface FilterTemplate_Relationships {
}
interface FilterTemplate_Result extends FilterTemplate_Base, FilterTemplate_Relationships {
}
interface FilterTemplate_FormattedResult {
}
interface FilterTemplate_Select {
}
interface FilterTemplate_Expand {
}
interface FilterTemplate_Filter {
}
interface FilterTemplate_Create extends FilterTemplate {
}
interface FilterTemplate_Update extends FilterTemplate {
}
interface FixedMonthlyFiscalCalendar_Base extends WebEntity {
}
interface FixedMonthlyFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface FixedMonthlyFiscalCalendar extends FixedMonthlyFiscalCalendar_Base, FixedMonthlyFiscalCalendar_Relationships {
}
interface FixedMonthlyFiscalCalendar_Relationships {
}
interface FixedMonthlyFiscalCalendar_Result extends FixedMonthlyFiscalCalendar_Base, FixedMonthlyFiscalCalendar_Relationships {
}
interface FixedMonthlyFiscalCalendar_FormattedResult {
}
interface FixedMonthlyFiscalCalendar_Select {
}
interface FixedMonthlyFiscalCalendar_Expand {
}
interface FixedMonthlyFiscalCalendar_Filter {
}
interface FixedMonthlyFiscalCalendar_Create extends FixedMonthlyFiscalCalendar {
}
interface FixedMonthlyFiscalCalendar_Update extends FixedMonthlyFiscalCalendar {
}
interface flowmachine_Base extends WebEntity {
}
interface flowmachine_Fixed extends WebEntity_Fixed {
  flowmachineid: string;
}
interface flowmachine extends flowmachine_Base, flowmachine_Relationships {
}
interface flowmachine_Relationships {
}
interface flowmachine_Result extends flowmachine_Base, flowmachine_Relationships {
}
interface flowmachine_FormattedResult {
}
interface flowmachine_Select {
}
interface flowmachine_Expand {
}
interface flowmachine_Filter {
}
interface flowmachine_Create extends flowmachine {
}
interface flowmachine_Update extends flowmachine {
}
interface flowmachinegroup_Base extends WebEntity {
}
interface flowmachinegroup_Fixed extends WebEntity_Fixed {
  flowmachinegroupid: string;
}
interface flowmachinegroup extends flowmachinegroup_Base, flowmachinegroup_Relationships {
}
interface flowmachinegroup_Relationships {
}
interface flowmachinegroup_Result extends flowmachinegroup_Base, flowmachinegroup_Relationships {
}
interface flowmachinegroup_FormattedResult {
}
interface flowmachinegroup_Select {
}
interface flowmachinegroup_Expand {
}
interface flowmachinegroup_Filter {
}
interface flowmachinegroup_Create extends flowmachinegroup {
}
interface flowmachinegroup_Update extends flowmachinegroup {
}
interface flowsession_Base extends WebEntity {
}
interface flowsession_Fixed extends WebEntity_Fixed {
  flowsessionid: string;
}
interface flowsession extends flowsession_Base, flowsession_Relationships {
}
interface flowsession_Relationships {
}
interface flowsession_Result extends flowsession_Base, flowsession_Relationships {
}
interface flowsession_FormattedResult {
}
interface flowsession_Select {
}
interface flowsession_Expand {
}
interface flowsession_Filter {
}
interface flowsession_Create extends flowsession {
}
interface flowsession_Update extends flowsession {
}
interface GlobalSearchConfiguration_Base extends WebEntity {
}
interface GlobalSearchConfiguration_Fixed extends WebEntity_Fixed {
  globalsearchconfigurationid: string;
}
interface GlobalSearchConfiguration extends GlobalSearchConfiguration_Base, GlobalSearchConfiguration_Relationships {
}
interface GlobalSearchConfiguration_Relationships {
}
interface GlobalSearchConfiguration_Result extends GlobalSearchConfiguration_Base, GlobalSearchConfiguration_Relationships {
}
interface GlobalSearchConfiguration_FormattedResult {
}
interface GlobalSearchConfiguration_Select {
}
interface GlobalSearchConfiguration_Expand {
}
interface GlobalSearchConfiguration_Filter {
}
interface GlobalSearchConfiguration_Create extends GlobalSearchConfiguration {
}
interface GlobalSearchConfiguration_Update extends GlobalSearchConfiguration {
}
interface Goal_Base extends WebEntity {
}
interface Goal_Fixed extends WebEntity_Fixed {
  goalid: string;
}
interface Goal extends Goal_Base, Goal_Relationships {
}
interface Goal_Relationships {
}
interface Goal_Result extends Goal_Base, Goal_Relationships {
}
interface Goal_FormattedResult {
}
interface Goal_Select {
}
interface Goal_Expand {
}
interface Goal_Filter {
}
interface Goal_Create extends Goal {
}
interface Goal_Update extends Goal {
}
interface GoalRollupQuery_Base extends WebEntity {
}
interface GoalRollupQuery_Fixed extends WebEntity_Fixed {
  goalrollupqueryid: string;
}
interface GoalRollupQuery extends GoalRollupQuery_Base, GoalRollupQuery_Relationships {
}
interface GoalRollupQuery_Relationships {
}
interface GoalRollupQuery_Result extends GoalRollupQuery_Base, GoalRollupQuery_Relationships {
}
interface GoalRollupQuery_FormattedResult {
}
interface GoalRollupQuery_Select {
}
interface GoalRollupQuery_Expand {
}
interface GoalRollupQuery_Filter {
}
interface GoalRollupQuery_Create extends GoalRollupQuery {
}
interface GoalRollupQuery_Update extends GoalRollupQuery {
}
interface HierarchyRule_Base extends WebEntity {
}
interface HierarchyRule_Fixed extends WebEntity_Fixed {
  hierarchyruleid: string;
}
interface HierarchyRule extends HierarchyRule_Base, HierarchyRule_Relationships {
}
interface HierarchyRule_Relationships {
}
interface HierarchyRule_Result extends HierarchyRule_Base, HierarchyRule_Relationships {
}
interface HierarchyRule_FormattedResult {
}
interface HierarchyRule_Select {
}
interface HierarchyRule_Expand {
}
interface HierarchyRule_Filter {
}
interface HierarchyRule_Create extends HierarchyRule {
}
interface HierarchyRule_Update extends HierarchyRule {
}
interface HierarchySecurityConfiguration_Base extends WebEntity {
}
interface HierarchySecurityConfiguration_Fixed extends WebEntity_Fixed {
  hierarchysecuritymodelingsettingid: string;
}
interface HierarchySecurityConfiguration extends HierarchySecurityConfiguration_Base, HierarchySecurityConfiguration_Relationships {
}
interface HierarchySecurityConfiguration_Relationships {
}
interface HierarchySecurityConfiguration_Result extends HierarchySecurityConfiguration_Base, HierarchySecurityConfiguration_Relationships {
}
interface HierarchySecurityConfiguration_FormattedResult {
}
interface HierarchySecurityConfiguration_Select {
}
interface HierarchySecurityConfiguration_Expand {
}
interface HierarchySecurityConfiguration_Filter {
}
interface HierarchySecurityConfiguration_Create extends HierarchySecurityConfiguration {
}
interface HierarchySecurityConfiguration_Update extends HierarchySecurityConfiguration {
}
interface holidaywrapper_Base extends WebEntity {
}
interface holidaywrapper_Fixed extends WebEntity_Fixed {
  holidaywrapperid: string;
}
interface holidaywrapper extends holidaywrapper_Base, holidaywrapper_Relationships {
}
interface holidaywrapper_Relationships {
}
interface holidaywrapper_Result extends holidaywrapper_Base, holidaywrapper_Relationships {
}
interface holidaywrapper_FormattedResult {
}
interface holidaywrapper_Select {
}
interface holidaywrapper_Expand {
}
interface holidaywrapper_Filter {
}
interface holidaywrapper_Create extends holidaywrapper {
}
interface holidaywrapper_Update extends holidaywrapper {
}
interface ImageDescriptor_Base extends WebEntity {
}
interface ImageDescriptor_Fixed extends WebEntity_Fixed {
  imagedescriptorid: string;
}
interface ImageDescriptor extends ImageDescriptor_Base, ImageDescriptor_Relationships {
}
interface ImageDescriptor_Relationships {
}
interface ImageDescriptor_Result extends ImageDescriptor_Base, ImageDescriptor_Relationships {
}
interface ImageDescriptor_FormattedResult {
}
interface ImageDescriptor_Select {
}
interface ImageDescriptor_Expand {
}
interface ImageDescriptor_Filter {
}
interface ImageDescriptor_Create extends ImageDescriptor {
}
interface ImageDescriptor_Update extends ImageDescriptor {
}
interface Import_Base extends WebEntity {
}
interface Import_Fixed extends WebEntity_Fixed {
  importid: string;
}
interface Import extends Import_Base, Import_Relationships {
}
interface Import_Relationships {
}
interface Import_Result extends Import_Base, Import_Relationships {
}
interface Import_FormattedResult {
}
interface Import_Select {
}
interface Import_Expand {
}
interface Import_Filter {
}
interface Import_Create extends Import {
}
interface Import_Update extends Import {
}
interface ImportData_Base extends WebEntity {
}
interface ImportData_Fixed extends WebEntity_Fixed {
  importdataid: string;
}
interface ImportData extends ImportData_Base, ImportData_Relationships {
}
interface ImportData_Relationships {
}
interface ImportData_Result extends ImportData_Base, ImportData_Relationships {
}
interface ImportData_FormattedResult {
}
interface ImportData_Select {
}
interface ImportData_Expand {
}
interface ImportData_Filter {
}
interface ImportData_Create extends ImportData {
}
interface ImportData_Update extends ImportData {
}
interface ImportEntityMapping_Base extends WebEntity {
}
interface ImportEntityMapping_Fixed extends WebEntity_Fixed {
  importentitymappingid: string;
}
interface ImportEntityMapping extends ImportEntityMapping_Base, ImportEntityMapping_Relationships {
}
interface ImportEntityMapping_Relationships {
}
interface ImportEntityMapping_Result extends ImportEntityMapping_Base, ImportEntityMapping_Relationships {
}
interface ImportEntityMapping_FormattedResult {
}
interface ImportEntityMapping_Select {
}
interface ImportEntityMapping_Expand {
}
interface ImportEntityMapping_Filter {
}
interface ImportEntityMapping_Create extends ImportEntityMapping {
}
interface ImportEntityMapping_Update extends ImportEntityMapping {
}
interface ImportFile_Base extends WebEntity {
}
interface ImportFile_Fixed extends WebEntity_Fixed {
  importfileid: string;
}
interface ImportFile extends ImportFile_Base, ImportFile_Relationships {
}
interface ImportFile_Relationships {
}
interface ImportFile_Result extends ImportFile_Base, ImportFile_Relationships {
}
interface ImportFile_FormattedResult {
}
interface ImportFile_Select {
}
interface ImportFile_Expand {
}
interface ImportFile_Filter {
}
interface ImportFile_Create extends ImportFile {
}
interface ImportFile_Update extends ImportFile {
}
interface ImportJob_Base extends WebEntity {
}
interface ImportJob_Fixed extends WebEntity_Fixed {
  importjobid: string;
}
interface ImportJob extends ImportJob_Base, ImportJob_Relationships {
}
interface ImportJob_Relationships {
}
interface ImportJob_Result extends ImportJob_Base, ImportJob_Relationships {
}
interface ImportJob_FormattedResult {
}
interface ImportJob_Select {
}
interface ImportJob_Expand {
}
interface ImportJob_Filter {
}
interface ImportJob_Create extends ImportJob {
}
interface ImportJob_Update extends ImportJob {
}
interface ImportLog_Base extends WebEntity {
}
interface ImportLog_Fixed extends WebEntity_Fixed {
  importlogid: string;
}
interface ImportLog extends ImportLog_Base, ImportLog_Relationships {
}
interface ImportLog_Relationships {
}
interface ImportLog_Result extends ImportLog_Base, ImportLog_Relationships {
}
interface ImportLog_FormattedResult {
}
interface ImportLog_Select {
}
interface ImportLog_Expand {
}
interface ImportLog_Filter {
}
interface ImportLog_Create extends ImportLog {
}
interface ImportLog_Update extends ImportLog {
}
interface ImportMap_Base extends WebEntity {
}
interface ImportMap_Fixed extends WebEntity_Fixed {
  importmapid: string;
}
interface ImportMap extends ImportMap_Base, ImportMap_Relationships {
}
interface ImportMap_Relationships {
}
interface ImportMap_Result extends ImportMap_Base, ImportMap_Relationships {
}
interface ImportMap_FormattedResult {
}
interface ImportMap_Select {
}
interface ImportMap_Expand {
}
interface ImportMap_Filter {
}
interface ImportMap_Create extends ImportMap {
}
interface ImportMap_Update extends ImportMap {
}
interface Incident_Base extends WebEntity {
}
interface Incident_Fixed extends WebEntity_Fixed {
  incidentid: string;
}
interface Incident extends Incident_Base, Incident_Relationships {
}
interface Incident_Relationships {
}
interface Incident_Result extends Incident_Base, Incident_Relationships {
}
interface Incident_FormattedResult {
}
interface Incident_Select {
}
interface Incident_Expand {
}
interface Incident_Filter {
}
interface Incident_Create extends Incident {
}
interface Incident_Update extends Incident {
}
interface IncidentKnowledgeBaseRecord_Base extends WebEntity {
}
interface IncidentKnowledgeBaseRecord_Fixed extends WebEntity_Fixed {
  incidentknowledgebaserecordid: string;
}
interface IncidentKnowledgeBaseRecord extends IncidentKnowledgeBaseRecord_Base, IncidentKnowledgeBaseRecord_Relationships {
}
interface IncidentKnowledgeBaseRecord_Relationships {
}
interface IncidentKnowledgeBaseRecord_Result extends IncidentKnowledgeBaseRecord_Base, IncidentKnowledgeBaseRecord_Relationships {
}
interface IncidentKnowledgeBaseRecord_FormattedResult {
}
interface IncidentKnowledgeBaseRecord_Select {
}
interface IncidentKnowledgeBaseRecord_Expand {
}
interface IncidentKnowledgeBaseRecord_Filter {
}
interface IncidentKnowledgeBaseRecord_Create extends IncidentKnowledgeBaseRecord {
}
interface IncidentKnowledgeBaseRecord_Update extends IncidentKnowledgeBaseRecord {
}
interface IncidentResolution_Base extends WebEntity {
}
interface IncidentResolution_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface IncidentResolution extends IncidentResolution_Base, IncidentResolution_Relationships {
}
interface IncidentResolution_Relationships {
}
interface IncidentResolution_Result extends IncidentResolution_Base, IncidentResolution_Relationships {
}
interface IncidentResolution_FormattedResult {
}
interface IncidentResolution_Select {
}
interface IncidentResolution_Expand {
}
interface IncidentResolution_Filter {
}
interface IncidentResolution_Create extends IncidentResolution {
}
interface IncidentResolution_Update extends IncidentResolution {
}
interface IndexAttributes_Base extends WebEntity {
}
interface IndexAttributes_Fixed extends WebEntity_Fixed {
  indexattributeid: string;
}
interface IndexAttributes extends IndexAttributes_Base, IndexAttributes_Relationships {
}
interface IndexAttributes_Relationships {
}
interface IndexAttributes_Result extends IndexAttributes_Base, IndexAttributes_Relationships {
}
interface IndexAttributes_FormattedResult {
}
interface IndexAttributes_Select {
}
interface IndexAttributes_Expand {
}
interface IndexAttributes_Filter {
}
interface IndexAttributes_Create extends IndexAttributes {
}
interface IndexAttributes_Update extends IndexAttributes {
}
interface IntegrationStatus_Base extends WebEntity {
}
interface IntegrationStatus_Fixed extends WebEntity_Fixed {
  integrationentryid: string;
}
interface IntegrationStatus extends IntegrationStatus_Base, IntegrationStatus_Relationships {
}
interface IntegrationStatus_Relationships {
}
interface IntegrationStatus_Result extends IntegrationStatus_Base, IntegrationStatus_Relationships {
}
interface IntegrationStatus_FormattedResult {
}
interface IntegrationStatus_Select {
}
interface IntegrationStatus_Expand {
}
interface IntegrationStatus_Filter {
}
interface IntegrationStatus_Create extends IntegrationStatus {
}
interface IntegrationStatus_Update extends IntegrationStatus {
}
interface InteractionForEmail_Base extends WebEntity {
}
interface InteractionForEmail_Fixed extends WebEntity_Fixed {
  interactionforemailid: string;
}
interface InteractionForEmail extends InteractionForEmail_Base, InteractionForEmail_Relationships {
}
interface InteractionForEmail_Relationships {
}
interface InteractionForEmail_Result extends InteractionForEmail_Base, InteractionForEmail_Relationships {
}
interface InteractionForEmail_FormattedResult {
}
interface InteractionForEmail_Select {
}
interface InteractionForEmail_Expand {
}
interface InteractionForEmail_Filter {
}
interface InteractionForEmail_Create extends InteractionForEmail {
}
interface InteractionForEmail_Update extends InteractionForEmail {
}
interface InternalAddress_Base extends WebEntity {
}
interface InternalAddress_Fixed extends WebEntity_Fixed {
  internaladdressid: string;
}
interface InternalAddress extends InternalAddress_Base, InternalAddress_Relationships {
}
interface InternalAddress_Relationships {
}
interface InternalAddress_Result extends InternalAddress_Base, InternalAddress_Relationships {
}
interface InternalAddress_FormattedResult {
}
interface InternalAddress_Select {
}
interface InternalAddress_Expand {
}
interface InternalAddress_Filter {
}
interface InternalAddress_Create extends InternalAddress {
}
interface InternalAddress_Update extends InternalAddress {
}
interface InternalCatalogAssignment_Base extends WebEntity {
}
interface InternalCatalogAssignment_Fixed extends WebEntity_Fixed {
  internalcatalogassignmentid: string;
}
interface InternalCatalogAssignment extends InternalCatalogAssignment_Base, InternalCatalogAssignment_Relationships {
}
interface InternalCatalogAssignment_Relationships {
}
interface InternalCatalogAssignment_Result extends InternalCatalogAssignment_Base, InternalCatalogAssignment_Relationships {
}
interface InternalCatalogAssignment_FormattedResult {
}
interface InternalCatalogAssignment_Select {
}
interface InternalCatalogAssignment_Expand {
}
interface InternalCatalogAssignment_Filter {
}
interface InternalCatalogAssignment_Create extends InternalCatalogAssignment {
}
interface InternalCatalogAssignment_Update extends InternalCatalogAssignment {
}
interface InterProcessLock_Base extends WebEntity {
}
interface InterProcessLock_Fixed extends WebEntity_Fixed {
  interprocesslockid: string;
}
interface InterProcessLock extends InterProcessLock_Base, InterProcessLock_Relationships {
}
interface InterProcessLock_Relationships {
}
interface InterProcessLock_Result extends InterProcessLock_Base, InterProcessLock_Relationships {
}
interface InterProcessLock_FormattedResult {
}
interface InterProcessLock_Select {
}
interface InterProcessLock_Expand {
}
interface InterProcessLock_Filter {
}
interface InterProcessLock_Create extends InterProcessLock {
}
interface InterProcessLock_Update extends InterProcessLock {
}
interface InvalidDependency_Base extends WebEntity {
}
interface InvalidDependency_Fixed extends WebEntity_Fixed {
  invaliddependencyid: string;
}
interface InvalidDependency extends InvalidDependency_Base, InvalidDependency_Relationships {
}
interface InvalidDependency_Relationships {
}
interface InvalidDependency_Result extends InvalidDependency_Base, InvalidDependency_Relationships {
}
interface InvalidDependency_FormattedResult {
}
interface InvalidDependency_Select {
}
interface InvalidDependency_Expand {
}
interface InvalidDependency_Filter {
}
interface InvalidDependency_Create extends InvalidDependency {
}
interface InvalidDependency_Update extends InvalidDependency {
}
interface Invoice_Base extends WebEntity {
}
interface Invoice_Fixed extends WebEntity_Fixed {
  invoiceid: string;
}
interface Invoice extends Invoice_Base, Invoice_Relationships {
}
interface Invoice_Relationships {
}
interface Invoice_Result extends Invoice_Base, Invoice_Relationships {
}
interface Invoice_FormattedResult {
}
interface Invoice_Select {
}
interface Invoice_Expand {
}
interface Invoice_Filter {
}
interface Invoice_Create extends Invoice {
}
interface Invoice_Update extends Invoice {
}
interface InvoiceDetail_Base extends WebEntity {
}
interface InvoiceDetail_Fixed extends WebEntity_Fixed {
  invoicedetailid: string;
}
interface InvoiceDetail extends InvoiceDetail_Base, InvoiceDetail_Relationships {
}
interface InvoiceDetail_Relationships {
}
interface InvoiceDetail_Result extends InvoiceDetail_Base, InvoiceDetail_Relationships {
}
interface InvoiceDetail_FormattedResult {
}
interface InvoiceDetail_Select {
}
interface InvoiceDetail_Expand {
}
interface InvoiceDetail_Filter {
}
interface InvoiceDetail_Create extends InvoiceDetail {
}
interface InvoiceDetail_Update extends InvoiceDetail {
}
interface IsvConfig_Base extends WebEntity {
}
interface IsvConfig_Fixed extends WebEntity_Fixed {
  isvconfigid: string;
}
interface IsvConfig extends IsvConfig_Base, IsvConfig_Relationships {
}
interface IsvConfig_Relationships {
}
interface IsvConfig_Result extends IsvConfig_Base, IsvConfig_Relationships {
}
interface IsvConfig_FormattedResult {
}
interface IsvConfig_Select {
}
interface IsvConfig_Expand {
}
interface IsvConfig_Filter {
}
interface IsvConfig_Create extends IsvConfig {
}
interface IsvConfig_Update extends IsvConfig {
}
interface KbArticle_Base extends WebEntity {
}
interface KbArticle_Fixed extends WebEntity_Fixed {
  kbarticleid: string;
}
interface KbArticle extends KbArticle_Base, KbArticle_Relationships {
}
interface KbArticle_Relationships {
}
interface KbArticle_Result extends KbArticle_Base, KbArticle_Relationships {
}
interface KbArticle_FormattedResult {
}
interface KbArticle_Select {
}
interface KbArticle_Expand {
}
interface KbArticle_Filter {
}
interface KbArticle_Create extends KbArticle {
}
interface KbArticle_Update extends KbArticle {
}
interface KbArticleComment_Base extends WebEntity {
}
interface KbArticleComment_Fixed extends WebEntity_Fixed {
  kbarticlecommentid: string;
}
interface KbArticleComment extends KbArticleComment_Base, KbArticleComment_Relationships {
}
interface KbArticleComment_Relationships {
}
interface KbArticleComment_Result extends KbArticleComment_Base, KbArticleComment_Relationships {
}
interface KbArticleComment_FormattedResult {
}
interface KbArticleComment_Select {
}
interface KbArticleComment_Expand {
}
interface KbArticleComment_Filter {
}
interface KbArticleComment_Create extends KbArticleComment {
}
interface KbArticleComment_Update extends KbArticleComment {
}
interface KbArticleTemplate_Base extends WebEntity {
}
interface KbArticleTemplate_Fixed extends WebEntity_Fixed {
  kbarticletemplateid: string;
}
interface KbArticleTemplate extends KbArticleTemplate_Base, KbArticleTemplate_Relationships {
}
interface KbArticleTemplate_Relationships {
}
interface KbArticleTemplate_Result extends KbArticleTemplate_Base, KbArticleTemplate_Relationships {
}
interface KbArticleTemplate_FormattedResult {
}
interface KbArticleTemplate_Select {
}
interface KbArticleTemplate_Expand {
}
interface KbArticleTemplate_Filter {
}
interface KbArticleTemplate_Create extends KbArticleTemplate {
}
interface KbArticleTemplate_Update extends KbArticleTemplate {
}
interface KeyVaultReference_Base extends WebEntity {
}
interface KeyVaultReference_Fixed extends WebEntity_Fixed {
  keyvaultreferenceid: string;
}
interface KeyVaultReference extends KeyVaultReference_Base, KeyVaultReference_Relationships {
}
interface KeyVaultReference_Relationships {
}
interface KeyVaultReference_Result extends KeyVaultReference_Base, KeyVaultReference_Relationships {
}
interface KeyVaultReference_FormattedResult {
}
interface KeyVaultReference_Select {
}
interface KeyVaultReference_Expand {
}
interface KeyVaultReference_Filter {
}
interface KeyVaultReference_Create extends KeyVaultReference {
}
interface KeyVaultReference_Update extends KeyVaultReference {
}
interface KnowledgeArticle_Base extends WebEntity {
}
interface KnowledgeArticle_Fixed extends WebEntity_Fixed {
  knowledgearticleid: string;
}
interface KnowledgeArticle extends KnowledgeArticle_Base, KnowledgeArticle_Relationships {
}
interface KnowledgeArticle_Relationships {
}
interface KnowledgeArticle_Result extends KnowledgeArticle_Base, KnowledgeArticle_Relationships {
}
interface KnowledgeArticle_FormattedResult {
}
interface KnowledgeArticle_Select {
}
interface KnowledgeArticle_Expand {
}
interface KnowledgeArticle_Filter {
}
interface KnowledgeArticle_Create extends KnowledgeArticle {
}
interface KnowledgeArticle_Update extends KnowledgeArticle {
}
interface KnowledgeArticleIncident_Base extends WebEntity {
}
interface KnowledgeArticleIncident_Fixed extends WebEntity_Fixed {
  knowledgearticleincidentid: string;
}
interface KnowledgeArticleIncident extends KnowledgeArticleIncident_Base, KnowledgeArticleIncident_Relationships {
}
interface KnowledgeArticleIncident_Relationships {
}
interface KnowledgeArticleIncident_Result extends KnowledgeArticleIncident_Base, KnowledgeArticleIncident_Relationships {
}
interface KnowledgeArticleIncident_FormattedResult {
}
interface KnowledgeArticleIncident_Select {
}
interface KnowledgeArticleIncident_Expand {
}
interface KnowledgeArticleIncident_Filter {
}
interface KnowledgeArticleIncident_Create extends KnowledgeArticleIncident {
}
interface KnowledgeArticleIncident_Update extends KnowledgeArticleIncident {
}
interface KnowledgeArticlesCategories_Base extends WebEntity {
}
interface KnowledgeArticlesCategories_Fixed extends WebEntity_Fixed {
  knowledgearticlecategoryid: string;
}
interface KnowledgeArticlesCategories extends KnowledgeArticlesCategories_Base, KnowledgeArticlesCategories_Relationships {
}
interface KnowledgeArticlesCategories_Relationships {
}
interface KnowledgeArticlesCategories_Result extends KnowledgeArticlesCategories_Base, KnowledgeArticlesCategories_Relationships {
}
interface KnowledgeArticlesCategories_FormattedResult {
}
interface KnowledgeArticlesCategories_Select {
}
interface KnowledgeArticlesCategories_Expand {
}
interface KnowledgeArticlesCategories_Filter {
}
interface KnowledgeArticlesCategories_Create extends KnowledgeArticlesCategories {
}
interface KnowledgeArticlesCategories_Update extends KnowledgeArticlesCategories {
}
interface KnowledgeArticleViews_Base extends WebEntity {
}
interface KnowledgeArticleViews_Fixed extends WebEntity_Fixed {
  knowledgearticleviewsid: string;
}
interface KnowledgeArticleViews extends KnowledgeArticleViews_Base, KnowledgeArticleViews_Relationships {
}
interface KnowledgeArticleViews_Relationships {
}
interface KnowledgeArticleViews_Result extends KnowledgeArticleViews_Base, KnowledgeArticleViews_Relationships {
}
interface KnowledgeArticleViews_FormattedResult {
}
interface KnowledgeArticleViews_Select {
}
interface KnowledgeArticleViews_Expand {
}
interface KnowledgeArticleViews_Filter {
}
interface KnowledgeArticleViews_Create extends KnowledgeArticleViews {
}
interface KnowledgeArticleViews_Update extends KnowledgeArticleViews {
}
interface KnowledgeBaseRecord_Base extends WebEntity {
}
interface KnowledgeBaseRecord_Fixed extends WebEntity_Fixed {
  knowledgebaserecordid: string;
}
interface KnowledgeBaseRecord extends KnowledgeBaseRecord_Base, KnowledgeBaseRecord_Relationships {
}
interface KnowledgeBaseRecord_Relationships {
}
interface KnowledgeBaseRecord_Result extends KnowledgeBaseRecord_Base, KnowledgeBaseRecord_Relationships {
}
interface KnowledgeBaseRecord_FormattedResult {
}
interface KnowledgeBaseRecord_Select {
}
interface KnowledgeBaseRecord_Expand {
}
interface KnowledgeBaseRecord_Filter {
}
interface KnowledgeBaseRecord_Create extends KnowledgeBaseRecord {
}
interface KnowledgeBaseRecord_Update extends KnowledgeBaseRecord {
}
interface KnowledgeSearchModel_Base extends WebEntity {
}
interface KnowledgeSearchModel_Fixed extends WebEntity_Fixed {
  knowledgesearchmodelid: string;
}
interface KnowledgeSearchModel extends KnowledgeSearchModel_Base, KnowledgeSearchModel_Relationships {
}
interface KnowledgeSearchModel_Relationships {
}
interface KnowledgeSearchModel_Result extends KnowledgeSearchModel_Base, KnowledgeSearchModel_Relationships {
}
interface KnowledgeSearchModel_FormattedResult {
}
interface KnowledgeSearchModel_Select {
}
interface KnowledgeSearchModel_Expand {
}
interface KnowledgeSearchModel_Filter {
}
interface KnowledgeSearchModel_Create extends KnowledgeSearchModel {
}
interface KnowledgeSearchModel_Update extends KnowledgeSearchModel {
}
interface LanguageLocale_Base extends WebEntity {
}
interface LanguageLocale_Fixed extends WebEntity_Fixed {
  languagelocaleid: string;
}
interface LanguageLocale extends LanguageLocale_Base, LanguageLocale_Relationships {
}
interface LanguageLocale_Relationships {
}
interface LanguageLocale_Result extends LanguageLocale_Base, LanguageLocale_Relationships {
}
interface LanguageLocale_FormattedResult {
}
interface LanguageLocale_Select {
}
interface LanguageLocale_Expand {
}
interface LanguageLocale_Filter {
}
interface LanguageLocale_Create extends LanguageLocale {
}
interface LanguageLocale_Update extends LanguageLocale {
}
interface LanguageProvisioningState_Base extends WebEntity {
}
interface LanguageProvisioningState_Fixed extends WebEntity_Fixed {
  languageprovisioningstateid: string;
}
interface LanguageProvisioningState extends LanguageProvisioningState_Base, LanguageProvisioningState_Relationships {
}
interface LanguageProvisioningState_Relationships {
}
interface LanguageProvisioningState_Result extends LanguageProvisioningState_Base, LanguageProvisioningState_Relationships {
}
interface LanguageProvisioningState_FormattedResult {
}
interface LanguageProvisioningState_Select {
}
interface LanguageProvisioningState_Expand {
}
interface LanguageProvisioningState_Filter {
}
interface LanguageProvisioningState_Create extends LanguageProvisioningState {
}
interface LanguageProvisioningState_Update extends LanguageProvisioningState {
}
interface Lead_Base extends WebEntity {
}
interface Lead_Fixed extends WebEntity_Fixed {
  leadid: string;
}
interface Lead extends Lead_Base, Lead_Relationships {
}
interface Lead_Relationships {
}
interface Lead_Result extends Lead_Base, Lead_Relationships {
}
interface Lead_FormattedResult {
}
interface Lead_Select {
}
interface Lead_Expand {
}
interface Lead_Filter {
}
interface Lead_Create extends Lead {
}
interface Lead_Update extends Lead {
}
interface LeadAddress_Base extends WebEntity {
}
interface LeadAddress_Fixed extends WebEntity_Fixed {
  leadaddressid: string;
}
interface LeadAddress extends LeadAddress_Base, LeadAddress_Relationships {
}
interface LeadAddress_Relationships {
}
interface LeadAddress_Result extends LeadAddress_Base, LeadAddress_Relationships {
}
interface LeadAddress_FormattedResult {
}
interface LeadAddress_Select {
}
interface LeadAddress_Expand {
}
interface LeadAddress_Filter {
}
interface LeadAddress_Create extends LeadAddress {
}
interface LeadAddress_Update extends LeadAddress {
}
interface LeadCompetitors_Base extends WebEntity {
}
interface LeadCompetitors_Fixed extends WebEntity_Fixed {
  leadcompetitorid: string;
}
interface LeadCompetitors extends LeadCompetitors_Base, LeadCompetitors_Relationships {
}
interface LeadCompetitors_Relationships {
}
interface LeadCompetitors_Result extends LeadCompetitors_Base, LeadCompetitors_Relationships {
}
interface LeadCompetitors_FormattedResult {
}
interface LeadCompetitors_Select {
}
interface LeadCompetitors_Expand {
}
interface LeadCompetitors_Filter {
}
interface LeadCompetitors_Create extends LeadCompetitors {
}
interface LeadCompetitors_Update extends LeadCompetitors {
}
interface LeadProduct_Base extends WebEntity {
}
interface LeadProduct_Fixed extends WebEntity_Fixed {
  leadproductid: string;
}
interface LeadProduct extends LeadProduct_Base, LeadProduct_Relationships {
}
interface LeadProduct_Relationships {
}
interface LeadProduct_Result extends LeadProduct_Base, LeadProduct_Relationships {
}
interface LeadProduct_FormattedResult {
}
interface LeadProduct_Select {
}
interface LeadProduct_Expand {
}
interface LeadProduct_Filter {
}
interface LeadProduct_Create extends LeadProduct {
}
interface LeadProduct_Update extends LeadProduct {
}
interface LeadToOpportunitySalesProcess_Base extends WebEntity {
}
interface LeadToOpportunitySalesProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface LeadToOpportunitySalesProcess extends LeadToOpportunitySalesProcess_Base, LeadToOpportunitySalesProcess_Relationships {
}
interface LeadToOpportunitySalesProcess_Relationships {
}
interface LeadToOpportunitySalesProcess_Result extends LeadToOpportunitySalesProcess_Base, LeadToOpportunitySalesProcess_Relationships {
}
interface LeadToOpportunitySalesProcess_FormattedResult {
}
interface LeadToOpportunitySalesProcess_Select {
}
interface LeadToOpportunitySalesProcess_Expand {
}
interface LeadToOpportunitySalesProcess_Filter {
}
interface LeadToOpportunitySalesProcess_Create extends LeadToOpportunitySalesProcess {
}
interface LeadToOpportunitySalesProcess_Update extends LeadToOpportunitySalesProcess {
}
interface Letter_Base extends WebEntity {
}
interface Letter_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Letter extends Letter_Base, Letter_Relationships {
}
interface Letter_Relationships {
}
interface Letter_Result extends Letter_Base, Letter_Relationships {
}
interface Letter_FormattedResult {
}
interface Letter_Select {
}
interface Letter_Expand {
}
interface Letter_Filter {
}
interface Letter_Create extends Letter {
}
interface Letter_Update extends Letter {
}
interface License_Base extends WebEntity {
}
interface License_Fixed extends WebEntity_Fixed {
  licenseid: string;
}
interface License extends License_Base, License_Relationships {
}
interface License_Relationships {
}
interface License_Result extends License_Base, License_Relationships {
}
interface License_FormattedResult {
}
interface License_Select {
}
interface License_Expand {
}
interface License_Filter {
}
interface License_Create extends License {
}
interface License_Update extends License {
}
interface List_Base extends WebEntity {
}
interface List_Fixed extends WebEntity_Fixed {
  listid: string;
}
interface List extends List_Base, List_Relationships {
}
interface List_Relationships {
}
interface List_Result extends List_Base, List_Relationships {
}
interface List_FormattedResult {
}
interface List_Select {
}
interface List_Expand {
}
interface List_Filter {
}
interface List_Create extends List {
}
interface List_Update extends List {
}
interface ListMember_Base extends WebEntity {
}
interface ListMember_Fixed extends WebEntity_Fixed {
  listmemberid: string;
}
interface ListMember extends ListMember_Base, ListMember_Relationships {
}
interface ListMember_Relationships {
}
interface ListMember_Result extends ListMember_Base, ListMember_Relationships {
}
interface ListMember_FormattedResult {
}
interface ListMember_Select {
}
interface ListMember_Expand {
}
interface ListMember_Filter {
}
interface ListMember_Create extends ListMember {
}
interface ListMember_Update extends ListMember {
}
interface listoperation_Base extends WebEntity {
}
interface listoperation_Fixed extends WebEntity_Fixed {
  listoperationid: string;
}
interface listoperation extends listoperation_Base, listoperation_Relationships {
}
interface listoperation_Relationships {
}
interface listoperation_Result extends listoperation_Base, listoperation_Relationships {
}
interface listoperation_FormattedResult {
}
interface listoperation_Select {
}
interface listoperation_Expand {
}
interface listoperation_Filter {
}
interface listoperation_Create extends listoperation {
}
interface listoperation_Update extends listoperation {
}
interface LocalConfigStore_Base extends WebEntity {
}
interface LocalConfigStore_Fixed extends WebEntity_Fixed {
  id: string;
}
interface LocalConfigStore extends LocalConfigStore_Base, LocalConfigStore_Relationships {
}
interface LocalConfigStore_Relationships {
}
interface LocalConfigStore_Result extends LocalConfigStore_Base, LocalConfigStore_Relationships {
}
interface LocalConfigStore_FormattedResult {
}
interface LocalConfigStore_Select {
}
interface LocalConfigStore_Expand {
}
interface LocalConfigStore_Filter {
}
interface LocalConfigStore_Create extends LocalConfigStore {
}
interface LocalConfigStore_Update extends LocalConfigStore {
}
interface LookUpMapping_Base extends WebEntity {
}
interface LookUpMapping_Fixed extends WebEntity_Fixed {
  lookupmappingid: string;
}
interface LookUpMapping extends LookUpMapping_Base, LookUpMapping_Relationships {
}
interface LookUpMapping_Relationships {
}
interface LookUpMapping_Result extends LookUpMapping_Base, LookUpMapping_Relationships {
}
interface LookUpMapping_FormattedResult {
}
interface LookUpMapping_Select {
}
interface LookUpMapping_Expand {
}
interface LookUpMapping_Filter {
}
interface LookUpMapping_Create extends LookUpMapping {
}
interface LookUpMapping_Update extends LookUpMapping {
}
interface Mailbox_Base extends WebEntity {
}
interface Mailbox_Fixed extends WebEntity_Fixed {
  mailboxid: string;
}
interface Mailbox extends Mailbox_Base, Mailbox_Relationships {
}
interface Mailbox_Relationships {
}
interface Mailbox_Result extends Mailbox_Base, Mailbox_Relationships {
}
interface Mailbox_FormattedResult {
}
interface Mailbox_Select {
}
interface Mailbox_Expand {
}
interface Mailbox_Filter {
}
interface Mailbox_Create extends Mailbox {
}
interface Mailbox_Update extends Mailbox {
}
interface MailboxStatistics_Base extends WebEntity {
}
interface MailboxStatistics_Fixed extends WebEntity_Fixed {
  mailboxstatisticsid: string;
}
interface MailboxStatistics extends MailboxStatistics_Base, MailboxStatistics_Relationships {
}
interface MailboxStatistics_Relationships {
}
interface MailboxStatistics_Result extends MailboxStatistics_Base, MailboxStatistics_Relationships {
}
interface MailboxStatistics_FormattedResult {
}
interface MailboxStatistics_Select {
}
interface MailboxStatistics_Expand {
}
interface MailboxStatistics_Filter {
}
interface MailboxStatistics_Create extends MailboxStatistics {
}
interface MailboxStatistics_Update extends MailboxStatistics {
}
interface MailboxTrackingCategory_Base extends WebEntity {
}
interface MailboxTrackingCategory_Fixed extends WebEntity_Fixed {
  mailboxtrackingcategoryid: string;
}
interface MailboxTrackingCategory extends MailboxTrackingCategory_Base, MailboxTrackingCategory_Relationships {
}
interface MailboxTrackingCategory_Relationships {
}
interface MailboxTrackingCategory_Result extends MailboxTrackingCategory_Base, MailboxTrackingCategory_Relationships {
}
interface MailboxTrackingCategory_FormattedResult {
}
interface MailboxTrackingCategory_Select {
}
interface MailboxTrackingCategory_Expand {
}
interface MailboxTrackingCategory_Filter {
}
interface MailboxTrackingCategory_Create extends MailboxTrackingCategory {
}
interface MailboxTrackingCategory_Update extends MailboxTrackingCategory {
}
interface MailboxTrackingFolder_Base extends WebEntity {
}
interface MailboxTrackingFolder_Fixed extends WebEntity_Fixed {
  mailboxtrackingfolderid: string;
}
interface MailboxTrackingFolder extends MailboxTrackingFolder_Base, MailboxTrackingFolder_Relationships {
}
interface MailboxTrackingFolder_Relationships {
}
interface MailboxTrackingFolder_Result extends MailboxTrackingFolder_Base, MailboxTrackingFolder_Relationships {
}
interface MailboxTrackingFolder_FormattedResult {
}
interface MailboxTrackingFolder_Select {
}
interface MailboxTrackingFolder_Expand {
}
interface MailboxTrackingFolder_Filter {
}
interface MailboxTrackingFolder_Create extends MailboxTrackingFolder {
}
interface MailboxTrackingFolder_Update extends MailboxTrackingFolder {
}
interface MailMergeTemplate_Base extends WebEntity {
}
interface MailMergeTemplate_Fixed extends WebEntity_Fixed {
  mailmergetemplateid: string;
}
interface MailMergeTemplate extends MailMergeTemplate_Base, MailMergeTemplate_Relationships {
}
interface MailMergeTemplate_Relationships {
}
interface MailMergeTemplate_Result extends MailMergeTemplate_Base, MailMergeTemplate_Relationships {
}
interface MailMergeTemplate_FormattedResult {
}
interface MailMergeTemplate_Select {
}
interface MailMergeTemplate_Expand {
}
interface MailMergeTemplate_Filter {
}
interface MailMergeTemplate_Create extends MailMergeTemplate {
}
interface MailMergeTemplate_Update extends MailMergeTemplate {
}
interface ManagedIdentity_Base extends WebEntity {
}
interface ManagedIdentity_Fixed extends WebEntity_Fixed {
  managedidentityid: string;
}
interface ManagedIdentity extends ManagedIdentity_Base, ManagedIdentity_Relationships {
}
interface ManagedIdentity_Relationships {
}
interface ManagedIdentity_Result extends ManagedIdentity_Base, ManagedIdentity_Relationships {
}
interface ManagedIdentity_FormattedResult {
}
interface ManagedIdentity_Select {
}
interface ManagedIdentity_Expand {
}
interface ManagedIdentity_Filter {
}
interface ManagedIdentity_Create extends ManagedIdentity {
}
interface ManagedIdentity_Update extends ManagedIdentity {
}
interface ManagedProperty_Base extends WebEntity {
}
interface ManagedProperty_Fixed extends WebEntity_Fixed {
  managedpropertyid: string;
}
interface ManagedProperty extends ManagedProperty_Base, ManagedProperty_Relationships {
}
interface ManagedProperty_Relationships {
}
interface ManagedProperty_Result extends ManagedProperty_Base, ManagedProperty_Relationships {
}
interface ManagedProperty_FormattedResult {
}
interface ManagedProperty_Select {
}
interface ManagedProperty_Expand {
}
interface ManagedProperty_Filter {
}
interface ManagedProperty_Create extends ManagedProperty {
}
interface ManagedProperty_Update extends ManagedProperty {
}
interface marketingformdisplayattributes_Base extends WebEntity {
}
interface marketingformdisplayattributes_Fixed extends WebEntity_Fixed {
  marketingformdisplayattributesid: string;
}
interface marketingformdisplayattributes extends marketingformdisplayattributes_Base, marketingformdisplayattributes_Relationships {
}
interface marketingformdisplayattributes_Relationships {
}
interface marketingformdisplayattributes_Result extends marketingformdisplayattributes_Base, marketingformdisplayattributes_Relationships {
}
interface marketingformdisplayattributes_FormattedResult {
}
interface marketingformdisplayattributes_Select {
}
interface marketingformdisplayattributes_Expand {
}
interface marketingformdisplayattributes_Filter {
}
interface marketingformdisplayattributes_Create extends marketingformdisplayattributes {
}
interface marketingformdisplayattributes_Update extends marketingformdisplayattributes {
}
interface MetadataDifference_Base extends WebEntity {
}
interface MetadataDifference_Fixed extends WebEntity_Fixed {
  metadatadifferenceid: string;
}
interface MetadataDifference extends MetadataDifference_Base, MetadataDifference_Relationships {
}
interface MetadataDifference_Relationships {
}
interface MetadataDifference_Result extends MetadataDifference_Base, MetadataDifference_Relationships {
}
interface MetadataDifference_FormattedResult {
}
interface MetadataDifference_Select {
}
interface MetadataDifference_Expand {
}
interface MetadataDifference_Filter {
}
interface MetadataDifference_Create extends MetadataDifference {
}
interface MetadataDifference_Update extends MetadataDifference {
}
interface Metric_Base extends WebEntity {
}
interface Metric_Fixed extends WebEntity_Fixed {
  metricid: string;
}
interface Metric extends Metric_Base, Metric_Relationships {
}
interface Metric_Relationships {
}
interface Metric_Result extends Metric_Base, Metric_Relationships {
}
interface Metric_FormattedResult {
}
interface Metric_Select {
}
interface Metric_Expand {
}
interface Metric_Filter {
}
interface Metric_Create extends Metric {
}
interface Metric_Update extends Metric {
}
interface MobileOfflineProfile_Base extends WebEntity {
}
interface MobileOfflineProfile_Fixed extends WebEntity_Fixed {
  mobileofflineprofileid: string;
}
interface MobileOfflineProfile extends MobileOfflineProfile_Base, MobileOfflineProfile_Relationships {
}
interface MobileOfflineProfile_Relationships {
}
interface MobileOfflineProfile_Result extends MobileOfflineProfile_Base, MobileOfflineProfile_Relationships {
}
interface MobileOfflineProfile_FormattedResult {
}
interface MobileOfflineProfile_Select {
}
interface MobileOfflineProfile_Expand {
}
interface MobileOfflineProfile_Filter {
}
interface MobileOfflineProfile_Create extends MobileOfflineProfile {
}
interface MobileOfflineProfile_Update extends MobileOfflineProfile {
}
interface MobileOfflineProfileItem_Base extends WebEntity {
}
interface MobileOfflineProfileItem_Fixed extends WebEntity_Fixed {
  mobileofflineprofileitemid: string;
}
interface MobileOfflineProfileItem extends MobileOfflineProfileItem_Base, MobileOfflineProfileItem_Relationships {
}
interface MobileOfflineProfileItem_Relationships {
}
interface MobileOfflineProfileItem_Result extends MobileOfflineProfileItem_Base, MobileOfflineProfileItem_Relationships {
}
interface MobileOfflineProfileItem_FormattedResult {
}
interface MobileOfflineProfileItem_Select {
}
interface MobileOfflineProfileItem_Expand {
}
interface MobileOfflineProfileItem_Filter {
}
interface MobileOfflineProfileItem_Create extends MobileOfflineProfileItem {
}
interface MobileOfflineProfileItem_Update extends MobileOfflineProfileItem {
}
interface MobileOfflineProfileItemAssociation_Base extends WebEntity {
}
interface MobileOfflineProfileItemAssociation_Fixed extends WebEntity_Fixed {
  mobileofflineprofileitemassociationid: string;
}
interface MobileOfflineProfileItemAssociation extends MobileOfflineProfileItemAssociation_Base, MobileOfflineProfileItemAssociation_Relationships {
}
interface MobileOfflineProfileItemAssociation_Relationships {
}
interface MobileOfflineProfileItemAssociation_Result extends MobileOfflineProfileItemAssociation_Base, MobileOfflineProfileItemAssociation_Relationships {
}
interface MobileOfflineProfileItemAssociation_FormattedResult {
}
interface MobileOfflineProfileItemAssociation_Select {
}
interface MobileOfflineProfileItemAssociation_Expand {
}
interface MobileOfflineProfileItemAssociation_Filter {
}
interface MobileOfflineProfileItemAssociation_Create extends MobileOfflineProfileItemAssociation {
}
interface MobileOfflineProfileItemAssociation_Update extends MobileOfflineProfileItemAssociation {
}
interface MonthlyFiscalCalendar_Base extends WebEntity {
}
interface MonthlyFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface MonthlyFiscalCalendar extends MonthlyFiscalCalendar_Base, MonthlyFiscalCalendar_Relationships {
}
interface MonthlyFiscalCalendar_Relationships {
}
interface MonthlyFiscalCalendar_Result extends MonthlyFiscalCalendar_Base, MonthlyFiscalCalendar_Relationships {
}
interface MonthlyFiscalCalendar_FormattedResult {
}
interface MonthlyFiscalCalendar_Select {
}
interface MonthlyFiscalCalendar_Expand {
}
interface MonthlyFiscalCalendar_Filter {
}
interface MonthlyFiscalCalendar_Create extends MonthlyFiscalCalendar {
}
interface MonthlyFiscalCalendar_Update extends MonthlyFiscalCalendar {
}
interface msdyn_3dmodel_Base extends WebEntity {
}
interface msdyn_3dmodel_Fixed extends WebEntity_Fixed {
  msdyn_3dmodelid: string;
}
interface msdyn_3dmodel extends msdyn_3dmodel_Base, msdyn_3dmodel_Relationships {
}
interface msdyn_3dmodel_Relationships {
}
interface msdyn_3dmodel_Result extends msdyn_3dmodel_Base, msdyn_3dmodel_Relationships {
}
interface msdyn_3dmodel_FormattedResult {
}
interface msdyn_3dmodel_Select {
}
interface msdyn_3dmodel_Expand {
}
interface msdyn_3dmodel_Filter {
}
interface msdyn_3dmodel_Create extends msdyn_3dmodel {
}
interface msdyn_3dmodel_Update extends msdyn_3dmodel {
}
interface msdyn_accountpricelist_Base extends WebEntity {
}
interface msdyn_accountpricelist_Fixed extends WebEntity_Fixed {
  msdyn_accountpricelistid: string;
}
interface msdyn_accountpricelist extends msdyn_accountpricelist_Base, msdyn_accountpricelist_Relationships {
}
interface msdyn_accountpricelist_Relationships {
}
interface msdyn_accountpricelist_Result extends msdyn_accountpricelist_Base, msdyn_accountpricelist_Relationships {
}
interface msdyn_accountpricelist_FormattedResult {
}
interface msdyn_accountpricelist_Select {
}
interface msdyn_accountpricelist_Expand {
}
interface msdyn_accountpricelist_Filter {
}
interface msdyn_accountpricelist_Create extends msdyn_accountpricelist {
}
interface msdyn_accountpricelist_Update extends msdyn_accountpricelist {
}
interface msdyn_actioncardregarding_Base extends WebEntity {
}
interface msdyn_actioncardregarding_Fixed extends WebEntity_Fixed {
  msdyn_actioncardregardingid: string;
}
interface msdyn_actioncardregarding extends msdyn_actioncardregarding_Base, msdyn_actioncardregarding_Relationships {
}
interface msdyn_actioncardregarding_Relationships {
}
interface msdyn_actioncardregarding_Result extends msdyn_actioncardregarding_Base, msdyn_actioncardregarding_Relationships {
}
interface msdyn_actioncardregarding_FormattedResult {
}
interface msdyn_actioncardregarding_Select {
}
interface msdyn_actioncardregarding_Expand {
}
interface msdyn_actioncardregarding_Filter {
}
interface msdyn_actioncardregarding_Create extends msdyn_actioncardregarding {
}
interface msdyn_actioncardregarding_Update extends msdyn_actioncardregarding {
}
interface msdyn_actioncardrolesetting_Base extends WebEntity {
}
interface msdyn_actioncardrolesetting_Fixed extends WebEntity_Fixed {
  msdyn_actioncardrolesettingid: string;
}
interface msdyn_actioncardrolesetting extends msdyn_actioncardrolesetting_Base, msdyn_actioncardrolesetting_Relationships {
}
interface msdyn_actioncardrolesetting_Relationships {
}
interface msdyn_actioncardrolesetting_Result extends msdyn_actioncardrolesetting_Base, msdyn_actioncardrolesetting_Relationships {
}
interface msdyn_actioncardrolesetting_FormattedResult {
}
interface msdyn_actioncardrolesetting_Select {
}
interface msdyn_actioncardrolesetting_Expand {
}
interface msdyn_actioncardrolesetting_Filter {
}
interface msdyn_actioncardrolesetting_Create extends msdyn_actioncardrolesetting {
}
interface msdyn_actioncardrolesetting_Update extends msdyn_actioncardrolesetting {
}
interface msdyn_actual_Base extends WebEntity {
}
interface msdyn_actual_Fixed extends WebEntity_Fixed {
  msdyn_actualid: string;
}
interface msdyn_actual extends msdyn_actual_Base, msdyn_actual_Relationships {
}
interface msdyn_actual_Relationships {
}
interface msdyn_actual_Result extends msdyn_actual_Base, msdyn_actual_Relationships {
}
interface msdyn_actual_FormattedResult {
}
interface msdyn_actual_Select {
}
interface msdyn_actual_Expand {
}
interface msdyn_actual_Filter {
}
interface msdyn_actual_Create extends msdyn_actual {
}
interface msdyn_actual_Update extends msdyn_actual {
}
interface msdyn_adaptivecardconfiguration_Base extends WebEntity {
}
interface msdyn_adaptivecardconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_adaptivecardconfigurationid: string;
}
interface msdyn_adaptivecardconfiguration extends msdyn_adaptivecardconfiguration_Base, msdyn_adaptivecardconfiguration_Relationships {
}
interface msdyn_adaptivecardconfiguration_Relationships {
}
interface msdyn_adaptivecardconfiguration_Result extends msdyn_adaptivecardconfiguration_Base, msdyn_adaptivecardconfiguration_Relationships {
}
interface msdyn_adaptivecardconfiguration_FormattedResult {
}
interface msdyn_adaptivecardconfiguration_Select {
}
interface msdyn_adaptivecardconfiguration_Expand {
}
interface msdyn_adaptivecardconfiguration_Filter {
}
interface msdyn_adaptivecardconfiguration_Create extends msdyn_adaptivecardconfiguration {
}
interface msdyn_adaptivecardconfiguration_Update extends msdyn_adaptivecardconfiguration {
}
interface msdyn_adminappstate_Base extends WebEntity {
}
interface msdyn_adminappstate_Fixed extends WebEntity_Fixed {
  msdyn_adminappstateid: string;
}
interface msdyn_adminappstate extends msdyn_adminappstate_Base, msdyn_adminappstate_Relationships {
}
interface msdyn_adminappstate_Relationships {
}
interface msdyn_adminappstate_Result extends msdyn_adminappstate_Base, msdyn_adminappstate_Relationships {
}
interface msdyn_adminappstate_FormattedResult {
}
interface msdyn_adminappstate_Select {
}
interface msdyn_adminappstate_Expand {
}
interface msdyn_adminappstate_Filter {
}
interface msdyn_adminappstate_Create extends msdyn_adminappstate {
}
interface msdyn_adminappstate_Update extends msdyn_adminappstate {
}
interface msdyn_agentstatushistory_Base extends WebEntity {
}
interface msdyn_agentstatushistory_Fixed extends WebEntity_Fixed {
  msdyn_agentstatushistoryid: string;
}
interface msdyn_agentstatushistory extends msdyn_agentstatushistory_Base, msdyn_agentstatushistory_Relationships {
}
interface msdyn_agentstatushistory_Relationships {
}
interface msdyn_agentstatushistory_Result extends msdyn_agentstatushistory_Base, msdyn_agentstatushistory_Relationships {
}
interface msdyn_agentstatushistory_FormattedResult {
}
interface msdyn_agentstatushistory_Select {
}
interface msdyn_agentstatushistory_Expand {
}
interface msdyn_agentstatushistory_Filter {
}
interface msdyn_agentstatushistory_Create extends msdyn_agentstatushistory {
}
interface msdyn_agentstatushistory_Update extends msdyn_agentstatushistory {
}
interface msdyn_agreement_Base extends WebEntity {
}
interface msdyn_agreement_Fixed extends WebEntity_Fixed {
  msdyn_agreementid: string;
}
interface msdyn_agreement extends msdyn_agreement_Base, msdyn_agreement_Relationships {
}
interface msdyn_agreement_Relationships {
}
interface msdyn_agreement_Result extends msdyn_agreement_Base, msdyn_agreement_Relationships {
}
interface msdyn_agreement_FormattedResult {
}
interface msdyn_agreement_Select {
}
interface msdyn_agreement_Expand {
}
interface msdyn_agreement_Filter {
}
interface msdyn_agreement_Create extends msdyn_agreement {
}
interface msdyn_agreement_Update extends msdyn_agreement {
}
interface msdyn_agreementbookingdate_Base extends WebEntity {
}
interface msdyn_agreementbookingdate_Fixed extends WebEntity_Fixed {
  msdyn_agreementbookingdateid: string;
}
interface msdyn_agreementbookingdate extends msdyn_agreementbookingdate_Base, msdyn_agreementbookingdate_Relationships {
}
interface msdyn_agreementbookingdate_Relationships {
}
interface msdyn_agreementbookingdate_Result extends msdyn_agreementbookingdate_Base, msdyn_agreementbookingdate_Relationships {
}
interface msdyn_agreementbookingdate_FormattedResult {
}
interface msdyn_agreementbookingdate_Select {
}
interface msdyn_agreementbookingdate_Expand {
}
interface msdyn_agreementbookingdate_Filter {
}
interface msdyn_agreementbookingdate_Create extends msdyn_agreementbookingdate {
}
interface msdyn_agreementbookingdate_Update extends msdyn_agreementbookingdate {
}
interface msdyn_agreementbookingincident_Base extends WebEntity {
}
interface msdyn_agreementbookingincident_Fixed extends WebEntity_Fixed {
  msdyn_agreementbookingincidentid: string;
}
interface msdyn_agreementbookingincident extends msdyn_agreementbookingincident_Base, msdyn_agreementbookingincident_Relationships {
}
interface msdyn_agreementbookingincident_Relationships {
}
interface msdyn_agreementbookingincident_Result extends msdyn_agreementbookingincident_Base, msdyn_agreementbookingincident_Relationships {
}
interface msdyn_agreementbookingincident_FormattedResult {
}
interface msdyn_agreementbookingincident_Select {
}
interface msdyn_agreementbookingincident_Expand {
}
interface msdyn_agreementbookingincident_Filter {
}
interface msdyn_agreementbookingincident_Create extends msdyn_agreementbookingincident {
}
interface msdyn_agreementbookingincident_Update extends msdyn_agreementbookingincident {
}
interface msdyn_agreementbookingproduct_Base extends WebEntity {
}
interface msdyn_agreementbookingproduct_Fixed extends WebEntity_Fixed {
  msdyn_agreementbookingproductid: string;
}
interface msdyn_agreementbookingproduct extends msdyn_agreementbookingproduct_Base, msdyn_agreementbookingproduct_Relationships {
}
interface msdyn_agreementbookingproduct_Relationships {
}
interface msdyn_agreementbookingproduct_Result extends msdyn_agreementbookingproduct_Base, msdyn_agreementbookingproduct_Relationships {
}
interface msdyn_agreementbookingproduct_FormattedResult {
}
interface msdyn_agreementbookingproduct_Select {
}
interface msdyn_agreementbookingproduct_Expand {
}
interface msdyn_agreementbookingproduct_Filter {
}
interface msdyn_agreementbookingproduct_Create extends msdyn_agreementbookingproduct {
}
interface msdyn_agreementbookingproduct_Update extends msdyn_agreementbookingproduct {
}
interface msdyn_agreementbookingservice_Base extends WebEntity {
}
interface msdyn_agreementbookingservice_Fixed extends WebEntity_Fixed {
  msdyn_agreementbookingserviceid: string;
}
interface msdyn_agreementbookingservice extends msdyn_agreementbookingservice_Base, msdyn_agreementbookingservice_Relationships {
}
interface msdyn_agreementbookingservice_Relationships {
}
interface msdyn_agreementbookingservice_Result extends msdyn_agreementbookingservice_Base, msdyn_agreementbookingservice_Relationships {
}
interface msdyn_agreementbookingservice_FormattedResult {
}
interface msdyn_agreementbookingservice_Select {
}
interface msdyn_agreementbookingservice_Expand {
}
interface msdyn_agreementbookingservice_Filter {
}
interface msdyn_agreementbookingservice_Create extends msdyn_agreementbookingservice {
}
interface msdyn_agreementbookingservice_Update extends msdyn_agreementbookingservice {
}
interface msdyn_agreementbookingservicetask_Base extends WebEntity {
}
interface msdyn_agreementbookingservicetask_Fixed extends WebEntity_Fixed {
  msdyn_agreementbookingservicetaskid: string;
}
interface msdyn_agreementbookingservicetask extends msdyn_agreementbookingservicetask_Base, msdyn_agreementbookingservicetask_Relationships {
}
interface msdyn_agreementbookingservicetask_Relationships {
}
interface msdyn_agreementbookingservicetask_Result extends msdyn_agreementbookingservicetask_Base, msdyn_agreementbookingservicetask_Relationships {
}
interface msdyn_agreementbookingservicetask_FormattedResult {
}
interface msdyn_agreementbookingservicetask_Select {
}
interface msdyn_agreementbookingservicetask_Expand {
}
interface msdyn_agreementbookingservicetask_Filter {
}
interface msdyn_agreementbookingservicetask_Create extends msdyn_agreementbookingservicetask {
}
interface msdyn_agreementbookingservicetask_Update extends msdyn_agreementbookingservicetask {
}
interface msdyn_agreementbookingsetup_Base extends WebEntity {
}
interface msdyn_agreementbookingsetup_Fixed extends WebEntity_Fixed {
  msdyn_agreementbookingsetupid: string;
}
interface msdyn_agreementbookingsetup extends msdyn_agreementbookingsetup_Base, msdyn_agreementbookingsetup_Relationships {
}
interface msdyn_agreementbookingsetup_Relationships {
}
interface msdyn_agreementbookingsetup_Result extends msdyn_agreementbookingsetup_Base, msdyn_agreementbookingsetup_Relationships {
}
interface msdyn_agreementbookingsetup_FormattedResult {
}
interface msdyn_agreementbookingsetup_Select {
}
interface msdyn_agreementbookingsetup_Expand {
}
interface msdyn_agreementbookingsetup_Filter {
}
interface msdyn_agreementbookingsetup_Create extends msdyn_agreementbookingsetup {
}
interface msdyn_agreementbookingsetup_Update extends msdyn_agreementbookingsetup {
}
interface msdyn_agreementinvoicedate_Base extends WebEntity {
}
interface msdyn_agreementinvoicedate_Fixed extends WebEntity_Fixed {
  msdyn_agreementinvoicedateid: string;
}
interface msdyn_agreementinvoicedate extends msdyn_agreementinvoicedate_Base, msdyn_agreementinvoicedate_Relationships {
}
interface msdyn_agreementinvoicedate_Relationships {
}
interface msdyn_agreementinvoicedate_Result extends msdyn_agreementinvoicedate_Base, msdyn_agreementinvoicedate_Relationships {
}
interface msdyn_agreementinvoicedate_FormattedResult {
}
interface msdyn_agreementinvoicedate_Select {
}
interface msdyn_agreementinvoicedate_Expand {
}
interface msdyn_agreementinvoicedate_Filter {
}
interface msdyn_agreementinvoicedate_Create extends msdyn_agreementinvoicedate {
}
interface msdyn_agreementinvoicedate_Update extends msdyn_agreementinvoicedate {
}
interface msdyn_agreementinvoiceproduct_Base extends WebEntity {
}
interface msdyn_agreementinvoiceproduct_Fixed extends WebEntity_Fixed {
  msdyn_agreementinvoiceproductid: string;
}
interface msdyn_agreementinvoiceproduct extends msdyn_agreementinvoiceproduct_Base, msdyn_agreementinvoiceproduct_Relationships {
}
interface msdyn_agreementinvoiceproduct_Relationships {
}
interface msdyn_agreementinvoiceproduct_Result extends msdyn_agreementinvoiceproduct_Base, msdyn_agreementinvoiceproduct_Relationships {
}
interface msdyn_agreementinvoiceproduct_FormattedResult {
}
interface msdyn_agreementinvoiceproduct_Select {
}
interface msdyn_agreementinvoiceproduct_Expand {
}
interface msdyn_agreementinvoiceproduct_Filter {
}
interface msdyn_agreementinvoiceproduct_Create extends msdyn_agreementinvoiceproduct {
}
interface msdyn_agreementinvoiceproduct_Update extends msdyn_agreementinvoiceproduct {
}
interface msdyn_agreementinvoicesetup_Base extends WebEntity {
}
interface msdyn_agreementinvoicesetup_Fixed extends WebEntity_Fixed {
  msdyn_agreementinvoicesetupid: string;
}
interface msdyn_agreementinvoicesetup extends msdyn_agreementinvoicesetup_Base, msdyn_agreementinvoicesetup_Relationships {
}
interface msdyn_agreementinvoicesetup_Relationships {
}
interface msdyn_agreementinvoicesetup_Result extends msdyn_agreementinvoicesetup_Base, msdyn_agreementinvoicesetup_Relationships {
}
interface msdyn_agreementinvoicesetup_FormattedResult {
}
interface msdyn_agreementinvoicesetup_Select {
}
interface msdyn_agreementinvoicesetup_Expand {
}
interface msdyn_agreementinvoicesetup_Filter {
}
interface msdyn_agreementinvoicesetup_Create extends msdyn_agreementinvoicesetup {
}
interface msdyn_agreementinvoicesetup_Update extends msdyn_agreementinvoicesetup {
}
interface msdyn_agreementsubstatus_Base extends WebEntity {
}
interface msdyn_agreementsubstatus_Fixed extends WebEntity_Fixed {
  msdyn_agreementsubstatusid: string;
}
interface msdyn_agreementsubstatus extends msdyn_agreementsubstatus_Base, msdyn_agreementsubstatus_Relationships {
}
interface msdyn_agreementsubstatus_Relationships {
}
interface msdyn_agreementsubstatus_Result extends msdyn_agreementsubstatus_Base, msdyn_agreementsubstatus_Relationships {
}
interface msdyn_agreementsubstatus_FormattedResult {
}
interface msdyn_agreementsubstatus_Select {
}
interface msdyn_agreementsubstatus_Expand {
}
interface msdyn_agreementsubstatus_Filter {
}
interface msdyn_agreementsubstatus_Create extends msdyn_agreementsubstatus {
}
interface msdyn_agreementsubstatus_Update extends msdyn_agreementsubstatus {
}
interface msdyn_AIBDataset_Base extends WebEntity {
}
interface msdyn_AIBDataset_Fixed extends WebEntity_Fixed {
  msdyn_aibdatasetid: string;
}
interface msdyn_AIBDataset extends msdyn_AIBDataset_Base, msdyn_AIBDataset_Relationships {
}
interface msdyn_AIBDataset_Relationships {
}
interface msdyn_AIBDataset_Result extends msdyn_AIBDataset_Base, msdyn_AIBDataset_Relationships {
}
interface msdyn_AIBDataset_FormattedResult {
}
interface msdyn_AIBDataset_Select {
}
interface msdyn_AIBDataset_Expand {
}
interface msdyn_AIBDataset_Filter {
}
interface msdyn_AIBDataset_Create extends msdyn_AIBDataset {
}
interface msdyn_AIBDataset_Update extends msdyn_AIBDataset {
}
interface msdyn_AIBDatasetFile_Base extends WebEntity {
}
interface msdyn_AIBDatasetFile_Fixed extends WebEntity_Fixed {
  msdyn_aibdatasetfileid: string;
}
interface msdyn_AIBDatasetFile extends msdyn_AIBDatasetFile_Base, msdyn_AIBDatasetFile_Relationships {
}
interface msdyn_AIBDatasetFile_Relationships {
}
interface msdyn_AIBDatasetFile_Result extends msdyn_AIBDatasetFile_Base, msdyn_AIBDatasetFile_Relationships {
}
interface msdyn_AIBDatasetFile_FormattedResult {
}
interface msdyn_AIBDatasetFile_Select {
}
interface msdyn_AIBDatasetFile_Expand {
}
interface msdyn_AIBDatasetFile_Filter {
}
interface msdyn_AIBDatasetFile_Create extends msdyn_AIBDatasetFile {
}
interface msdyn_AIBDatasetFile_Update extends msdyn_AIBDatasetFile {
}
interface msdyn_AIBDatasetRecord_Base extends WebEntity {
}
interface msdyn_AIBDatasetRecord_Fixed extends WebEntity_Fixed {
  msdyn_aibdatasetrecordid: string;
}
interface msdyn_AIBDatasetRecord extends msdyn_AIBDatasetRecord_Base, msdyn_AIBDatasetRecord_Relationships {
}
interface msdyn_AIBDatasetRecord_Relationships {
}
interface msdyn_AIBDatasetRecord_Result extends msdyn_AIBDatasetRecord_Base, msdyn_AIBDatasetRecord_Relationships {
}
interface msdyn_AIBDatasetRecord_FormattedResult {
}
interface msdyn_AIBDatasetRecord_Select {
}
interface msdyn_AIBDatasetRecord_Expand {
}
interface msdyn_AIBDatasetRecord_Filter {
}
interface msdyn_AIBDatasetRecord_Create extends msdyn_AIBDatasetRecord {
}
interface msdyn_AIBDatasetRecord_Update extends msdyn_AIBDatasetRecord {
}
interface msdyn_AIBDatasetsContainer_Base extends WebEntity {
}
interface msdyn_AIBDatasetsContainer_Fixed extends WebEntity_Fixed {
  msdyn_aibdatasetscontainerid: string;
}
interface msdyn_AIBDatasetsContainer extends msdyn_AIBDatasetsContainer_Base, msdyn_AIBDatasetsContainer_Relationships {
}
interface msdyn_AIBDatasetsContainer_Relationships {
}
interface msdyn_AIBDatasetsContainer_Result extends msdyn_AIBDatasetsContainer_Base, msdyn_AIBDatasetsContainer_Relationships {
}
interface msdyn_AIBDatasetsContainer_FormattedResult {
}
interface msdyn_AIBDatasetsContainer_Select {
}
interface msdyn_AIBDatasetsContainer_Expand {
}
interface msdyn_AIBDatasetsContainer_Filter {
}
interface msdyn_AIBDatasetsContainer_Create extends msdyn_AIBDatasetsContainer {
}
interface msdyn_AIBDatasetsContainer_Update extends msdyn_AIBDatasetsContainer {
}
interface msdyn_AIBFile_Base extends WebEntity {
}
interface msdyn_AIBFile_Fixed extends WebEntity_Fixed {
  msdyn_aibfileid: string;
}
interface msdyn_AIBFile extends msdyn_AIBFile_Base, msdyn_AIBFile_Relationships {
}
interface msdyn_AIBFile_Relationships {
}
interface msdyn_AIBFile_Result extends msdyn_AIBFile_Base, msdyn_AIBFile_Relationships {
}
interface msdyn_AIBFile_FormattedResult {
}
interface msdyn_AIBFile_Select {
}
interface msdyn_AIBFile_Expand {
}
interface msdyn_AIBFile_Filter {
}
interface msdyn_AIBFile_Create extends msdyn_AIBFile {
}
interface msdyn_AIBFile_Update extends msdyn_AIBFile {
}
interface msdyn_AIBFileAttachedData_Base extends WebEntity {
}
interface msdyn_AIBFileAttachedData_Fixed extends WebEntity_Fixed {
  msdyn_aibfileattacheddataid: string;
}
interface msdyn_AIBFileAttachedData extends msdyn_AIBFileAttachedData_Base, msdyn_AIBFileAttachedData_Relationships {
}
interface msdyn_AIBFileAttachedData_Relationships {
}
interface msdyn_AIBFileAttachedData_Result extends msdyn_AIBFileAttachedData_Base, msdyn_AIBFileAttachedData_Relationships {
}
interface msdyn_AIBFileAttachedData_FormattedResult {
}
interface msdyn_AIBFileAttachedData_Select {
}
interface msdyn_AIBFileAttachedData_Expand {
}
interface msdyn_AIBFileAttachedData_Filter {
}
interface msdyn_AIBFileAttachedData_Create extends msdyn_AIBFileAttachedData {
}
interface msdyn_AIBFileAttachedData_Update extends msdyn_AIBFileAttachedData {
}
interface msdyn_AIConfiguration_Base extends WebEntity {
}
interface msdyn_AIConfiguration_Fixed extends WebEntity_Fixed {
  msdyn_aiconfigurationid: string;
}
interface msdyn_AIConfiguration extends msdyn_AIConfiguration_Base, msdyn_AIConfiguration_Relationships {
}
interface msdyn_AIConfiguration_Relationships {
}
interface msdyn_AIConfiguration_Result extends msdyn_AIConfiguration_Base, msdyn_AIConfiguration_Relationships {
}
interface msdyn_AIConfiguration_FormattedResult {
}
interface msdyn_AIConfiguration_Select {
}
interface msdyn_AIConfiguration_Expand {
}
interface msdyn_AIConfiguration_Filter {
}
interface msdyn_AIConfiguration_Create extends msdyn_AIConfiguration {
}
interface msdyn_AIConfiguration_Update extends msdyn_AIConfiguration {
}
interface msdyn_aicontactsuggestion_Base extends WebEntity {
}
interface msdyn_aicontactsuggestion_Fixed extends WebEntity_Fixed {
  msdyn_aicontactsuggestionid: string;
}
interface msdyn_aicontactsuggestion extends msdyn_aicontactsuggestion_Base, msdyn_aicontactsuggestion_Relationships {
}
interface msdyn_aicontactsuggestion_Relationships {
}
interface msdyn_aicontactsuggestion_Result extends msdyn_aicontactsuggestion_Base, msdyn_aicontactsuggestion_Relationships {
}
interface msdyn_aicontactsuggestion_FormattedResult {
}
interface msdyn_aicontactsuggestion_Select {
}
interface msdyn_aicontactsuggestion_Expand {
}
interface msdyn_aicontactsuggestion_Filter {
}
interface msdyn_aicontactsuggestion_Create extends msdyn_aicontactsuggestion {
}
interface msdyn_aicontactsuggestion_Update extends msdyn_aicontactsuggestion {
}
interface msdyn_AIFpTrainingDocument_Base extends WebEntity {
}
interface msdyn_AIFpTrainingDocument_Fixed extends WebEntity_Fixed {
  msdyn_aifptrainingdocumentid: string;
}
interface msdyn_AIFpTrainingDocument extends msdyn_AIFpTrainingDocument_Base, msdyn_AIFpTrainingDocument_Relationships {
}
interface msdyn_AIFpTrainingDocument_Relationships {
}
interface msdyn_AIFpTrainingDocument_Result extends msdyn_AIFpTrainingDocument_Base, msdyn_AIFpTrainingDocument_Relationships {
}
interface msdyn_AIFpTrainingDocument_FormattedResult {
}
interface msdyn_AIFpTrainingDocument_Select {
}
interface msdyn_AIFpTrainingDocument_Expand {
}
interface msdyn_AIFpTrainingDocument_Filter {
}
interface msdyn_AIFpTrainingDocument_Create extends msdyn_AIFpTrainingDocument {
}
interface msdyn_AIFpTrainingDocument_Update extends msdyn_AIFpTrainingDocument {
}
interface msdyn_AIModel_Base extends WebEntity {
}
interface msdyn_AIModel_Fixed extends WebEntity_Fixed {
  msdyn_aimodelid: string;
}
interface msdyn_AIModel extends msdyn_AIModel_Base, msdyn_AIModel_Relationships {
}
interface msdyn_AIModel_Relationships {
}
interface msdyn_AIModel_Result extends msdyn_AIModel_Base, msdyn_AIModel_Relationships {
}
interface msdyn_AIModel_FormattedResult {
}
interface msdyn_AIModel_Select {
}
interface msdyn_AIModel_Expand {
}
interface msdyn_AIModel_Filter {
}
interface msdyn_AIModel_Create extends msdyn_AIModel {
}
interface msdyn_AIModel_Update extends msdyn_AIModel {
}
interface msdyn_AIOdImage_Base extends WebEntity {
}
interface msdyn_AIOdImage_Fixed extends WebEntity_Fixed {
  msdyn_aiodimageid: string;
}
interface msdyn_AIOdImage extends msdyn_AIOdImage_Base, msdyn_AIOdImage_Relationships {
}
interface msdyn_AIOdImage_Relationships {
}
interface msdyn_AIOdImage_Result extends msdyn_AIOdImage_Base, msdyn_AIOdImage_Relationships {
}
interface msdyn_AIOdImage_FormattedResult {
}
interface msdyn_AIOdImage_Select {
}
interface msdyn_AIOdImage_Expand {
}
interface msdyn_AIOdImage_Filter {
}
interface msdyn_AIOdImage_Create extends msdyn_AIOdImage {
}
interface msdyn_AIOdImage_Update extends msdyn_AIOdImage {
}
interface msdyn_AIOdLabel_Base extends WebEntity {
}
interface msdyn_AIOdLabel_Fixed extends WebEntity_Fixed {
  msdyn_aiodlabelid: string;
}
interface msdyn_AIOdLabel extends msdyn_AIOdLabel_Base, msdyn_AIOdLabel_Relationships {
}
interface msdyn_AIOdLabel_Relationships {
}
interface msdyn_AIOdLabel_Result extends msdyn_AIOdLabel_Base, msdyn_AIOdLabel_Relationships {
}
interface msdyn_AIOdLabel_FormattedResult {
}
interface msdyn_AIOdLabel_Select {
}
interface msdyn_AIOdLabel_Expand {
}
interface msdyn_AIOdLabel_Filter {
}
interface msdyn_AIOdLabel_Create extends msdyn_AIOdLabel {
}
interface msdyn_AIOdLabel_Update extends msdyn_AIOdLabel {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Base extends WebEntity {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_aiodlabel_msdyn_aiconfigurationid: string;
}
interface msdyn_aiodlabel_msdyn_aiconfiguration extends msdyn_aiodlabel_msdyn_aiconfiguration_Base, msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Result extends msdyn_aiodlabel_msdyn_aiconfiguration_Base, msdyn_aiodlabel_msdyn_aiconfiguration_Relationships {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_FormattedResult {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Select {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Expand {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Filter {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Create extends msdyn_aiodlabel_msdyn_aiconfiguration {
}
interface msdyn_aiodlabel_msdyn_aiconfiguration_Update extends msdyn_aiodlabel_msdyn_aiconfiguration {
}
interface msdyn_AIOdTrainingBoundingBox_Base extends WebEntity {
}
interface msdyn_AIOdTrainingBoundingBox_Fixed extends WebEntity_Fixed {
  msdyn_aiodtrainingboundingboxid: string;
}
interface msdyn_AIOdTrainingBoundingBox extends msdyn_AIOdTrainingBoundingBox_Base, msdyn_AIOdTrainingBoundingBox_Relationships {
}
interface msdyn_AIOdTrainingBoundingBox_Relationships {
}
interface msdyn_AIOdTrainingBoundingBox_Result extends msdyn_AIOdTrainingBoundingBox_Base, msdyn_AIOdTrainingBoundingBox_Relationships {
}
interface msdyn_AIOdTrainingBoundingBox_FormattedResult {
}
interface msdyn_AIOdTrainingBoundingBox_Select {
}
interface msdyn_AIOdTrainingBoundingBox_Expand {
}
interface msdyn_AIOdTrainingBoundingBox_Filter {
}
interface msdyn_AIOdTrainingBoundingBox_Create extends msdyn_AIOdTrainingBoundingBox {
}
interface msdyn_AIOdTrainingBoundingBox_Update extends msdyn_AIOdTrainingBoundingBox {
}
interface msdyn_AIOdTrainingImage_Base extends WebEntity {
}
interface msdyn_AIOdTrainingImage_Fixed extends WebEntity_Fixed {
  msdyn_aiodtrainingimageid: string;
}
interface msdyn_AIOdTrainingImage extends msdyn_AIOdTrainingImage_Base, msdyn_AIOdTrainingImage_Relationships {
}
interface msdyn_AIOdTrainingImage_Relationships {
}
interface msdyn_AIOdTrainingImage_Result extends msdyn_AIOdTrainingImage_Base, msdyn_AIOdTrainingImage_Relationships {
}
interface msdyn_AIOdTrainingImage_FormattedResult {
}
interface msdyn_AIOdTrainingImage_Select {
}
interface msdyn_AIOdTrainingImage_Expand {
}
interface msdyn_AIOdTrainingImage_Filter {
}
interface msdyn_AIOdTrainingImage_Create extends msdyn_AIOdTrainingImage {
}
interface msdyn_AIOdTrainingImage_Update extends msdyn_AIOdTrainingImage {
}
interface msdyn_AITemplate_Base extends WebEntity {
}
interface msdyn_AITemplate_Fixed extends WebEntity_Fixed {
  msdyn_aitemplateid: string;
}
interface msdyn_AITemplate extends msdyn_AITemplate_Base, msdyn_AITemplate_Relationships {
}
interface msdyn_AITemplate_Relationships {
}
interface msdyn_AITemplate_Result extends msdyn_AITemplate_Base, msdyn_AITemplate_Relationships {
}
interface msdyn_AITemplate_FormattedResult {
}
interface msdyn_AITemplate_Select {
}
interface msdyn_AITemplate_Expand {
}
interface msdyn_AITemplate_Filter {
}
interface msdyn_AITemplate_Create extends msdyn_AITemplate {
}
interface msdyn_AITemplate_Update extends msdyn_AITemplate {
}
interface msdyn_analysiscomponent_Base extends WebEntity {
}
interface msdyn_analysiscomponent_Fixed extends WebEntity_Fixed {
  msdyn_analysiscomponentid: string;
}
interface msdyn_analysiscomponent extends msdyn_analysiscomponent_Base, msdyn_analysiscomponent_Relationships {
}
interface msdyn_analysiscomponent_Relationships {
}
interface msdyn_analysiscomponent_Result extends msdyn_analysiscomponent_Base, msdyn_analysiscomponent_Relationships {
}
interface msdyn_analysiscomponent_FormattedResult {
}
interface msdyn_analysiscomponent_Select {
}
interface msdyn_analysiscomponent_Expand {
}
interface msdyn_analysiscomponent_Filter {
}
interface msdyn_analysiscomponent_Create extends msdyn_analysiscomponent {
}
interface msdyn_analysiscomponent_Update extends msdyn_analysiscomponent {
}
interface msdyn_analysisjob_Base extends WebEntity {
}
interface msdyn_analysisjob_Fixed extends WebEntity_Fixed {
  msdyn_analysisjobid: string;
}
interface msdyn_analysisjob extends msdyn_analysisjob_Base, msdyn_analysisjob_Relationships {
}
interface msdyn_analysisjob_Relationships {
}
interface msdyn_analysisjob_Result extends msdyn_analysisjob_Base, msdyn_analysisjob_Relationships {
}
interface msdyn_analysisjob_FormattedResult {
}
interface msdyn_analysisjob_Select {
}
interface msdyn_analysisjob_Expand {
}
interface msdyn_analysisjob_Filter {
}
interface msdyn_analysisjob_Create extends msdyn_analysisjob {
}
interface msdyn_analysisjob_Update extends msdyn_analysisjob {
}
interface msdyn_analysisresult_Base extends WebEntity {
}
interface msdyn_analysisresult_Fixed extends WebEntity_Fixed {
  msdyn_analysisresultid: string;
}
interface msdyn_analysisresult extends msdyn_analysisresult_Base, msdyn_analysisresult_Relationships {
}
interface msdyn_analysisresult_Relationships {
}
interface msdyn_analysisresult_Result extends msdyn_analysisresult_Base, msdyn_analysisresult_Relationships {
}
interface msdyn_analysisresult_FormattedResult {
}
interface msdyn_analysisresult_Select {
}
interface msdyn_analysisresult_Expand {
}
interface msdyn_analysisresult_Filter {
}
interface msdyn_analysisresult_Create extends msdyn_analysisresult {
}
interface msdyn_analysisresult_Update extends msdyn_analysisresult {
}
interface msdyn_analysisresultdetail_Base extends WebEntity {
}
interface msdyn_analysisresultdetail_Fixed extends WebEntity_Fixed {
  msdyn_analysisresultdetailid: string;
}
interface msdyn_analysisresultdetail extends msdyn_analysisresultdetail_Base, msdyn_analysisresultdetail_Relationships {
}
interface msdyn_analysisresultdetail_Relationships {
}
interface msdyn_analysisresultdetail_Result extends msdyn_analysisresultdetail_Base, msdyn_analysisresultdetail_Relationships {
}
interface msdyn_analysisresultdetail_FormattedResult {
}
interface msdyn_analysisresultdetail_Select {
}
interface msdyn_analysisresultdetail_Expand {
}
interface msdyn_analysisresultdetail_Filter {
}
interface msdyn_analysisresultdetail_Create extends msdyn_analysisresultdetail {
}
interface msdyn_analysisresultdetail_Update extends msdyn_analysisresultdetail {
}
interface msdyn_analytics_Base extends WebEntity {
}
interface msdyn_analytics_Fixed extends WebEntity_Fixed {
  msdyn_analyticsid: string;
}
interface msdyn_analytics extends msdyn_analytics_Base, msdyn_analytics_Relationships {
}
interface msdyn_analytics_Relationships {
}
interface msdyn_analytics_Result extends msdyn_analytics_Base, msdyn_analytics_Relationships {
}
interface msdyn_analytics_FormattedResult {
}
interface msdyn_analytics_Select {
}
interface msdyn_analytics_Expand {
}
interface msdyn_analytics_Filter {
}
interface msdyn_analytics_Create extends msdyn_analytics {
}
interface msdyn_analytics_Update extends msdyn_analytics {
}
interface msdyn_analyticsadminsettings_Base extends WebEntity {
}
interface msdyn_analyticsadminsettings_Fixed extends WebEntity_Fixed {
  msdyn_analyticsadminsettingsid: string;
}
interface msdyn_analyticsadminsettings extends msdyn_analyticsadminsettings_Base, msdyn_analyticsadminsettings_Relationships {
}
interface msdyn_analyticsadminsettings_Relationships {
}
interface msdyn_analyticsadminsettings_Result extends msdyn_analyticsadminsettings_Base, msdyn_analyticsadminsettings_Relationships {
}
interface msdyn_analyticsadminsettings_FormattedResult {
}
interface msdyn_analyticsadminsettings_Select {
}
interface msdyn_analyticsadminsettings_Expand {
}
interface msdyn_analyticsadminsettings_Filter {
}
interface msdyn_analyticsadminsettings_Create extends msdyn_analyticsadminsettings {
}
interface msdyn_analyticsadminsettings_Update extends msdyn_analyticsadminsettings {
}
interface msdyn_analyticsforcs_Base extends WebEntity {
}
interface msdyn_analyticsforcs_Fixed extends WebEntity_Fixed {
  msdyn_analyticsforcsid: string;
}
interface msdyn_analyticsforcs extends msdyn_analyticsforcs_Base, msdyn_analyticsforcs_Relationships {
}
interface msdyn_analyticsforcs_Relationships {
}
interface msdyn_analyticsforcs_Result extends msdyn_analyticsforcs_Base, msdyn_analyticsforcs_Relationships {
}
interface msdyn_analyticsforcs_FormattedResult {
}
interface msdyn_analyticsforcs_Select {
}
interface msdyn_analyticsforcs_Expand {
}
interface msdyn_analyticsforcs_Filter {
}
interface msdyn_analyticsforcs_Create extends msdyn_analyticsforcs {
}
interface msdyn_analyticsforcs_Update extends msdyn_analyticsforcs {
}
interface msdyn_appconfig_msdyn_channelprovider_Base extends WebEntity {
}
interface msdyn_appconfig_msdyn_channelprovider_Fixed extends WebEntity_Fixed {
  msdyn_appconfig_msdyn_channelproviderid: string;
}
interface msdyn_appconfig_msdyn_channelprovider extends msdyn_appconfig_msdyn_channelprovider_Base, msdyn_appconfig_msdyn_channelprovider_Relationships {
}
interface msdyn_appconfig_msdyn_channelprovider_Relationships {
}
interface msdyn_appconfig_msdyn_channelprovider_Result extends msdyn_appconfig_msdyn_channelprovider_Base, msdyn_appconfig_msdyn_channelprovider_Relationships {
}
interface msdyn_appconfig_msdyn_channelprovider_FormattedResult {
}
interface msdyn_appconfig_msdyn_channelprovider_Select {
}
interface msdyn_appconfig_msdyn_channelprovider_Expand {
}
interface msdyn_appconfig_msdyn_channelprovider_Filter {
}
interface msdyn_appconfig_msdyn_channelprovider_Create extends msdyn_appconfig_msdyn_channelprovider {
}
interface msdyn_appconfig_msdyn_channelprovider_Update extends msdyn_appconfig_msdyn_channelprovider {
}
interface msdyn_appconfiguration_Base extends WebEntity {
}
interface msdyn_appconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_appconfigurationid: string;
}
interface msdyn_appconfiguration extends msdyn_appconfiguration_Base, msdyn_appconfiguration_Relationships {
}
interface msdyn_appconfiguration_Relationships {
}
interface msdyn_appconfiguration_Result extends msdyn_appconfiguration_Base, msdyn_appconfiguration_Relationships {
}
interface msdyn_appconfiguration_FormattedResult {
}
interface msdyn_appconfiguration_Select {
}
interface msdyn_appconfiguration_Expand {
}
interface msdyn_appconfiguration_Filter {
}
interface msdyn_appconfiguration_Create extends msdyn_appconfiguration {
}
interface msdyn_appconfiguration_Update extends msdyn_appconfiguration {
}
interface msdyn_appconfiguration_applicationextension_Base extends WebEntity {
}
interface msdyn_appconfiguration_applicationextension_Fixed extends WebEntity_Fixed {
  msdyn_appconfiguration_applicationextensionid: string;
}
interface msdyn_appconfiguration_applicationextension extends msdyn_appconfiguration_applicationextension_Base, msdyn_appconfiguration_applicationextension_Relationships {
}
interface msdyn_appconfiguration_applicationextension_Relationships {
}
interface msdyn_appconfiguration_applicationextension_Result extends msdyn_appconfiguration_applicationextension_Base, msdyn_appconfiguration_applicationextension_Relationships {
}
interface msdyn_appconfiguration_applicationextension_FormattedResult {
}
interface msdyn_appconfiguration_applicationextension_Select {
}
interface msdyn_appconfiguration_applicationextension_Expand {
}
interface msdyn_appconfiguration_applicationextension_Filter {
}
interface msdyn_appconfiguration_applicationextension_Create extends msdyn_appconfiguration_applicationextension {
}
interface msdyn_appconfiguration_applicationextension_Update extends msdyn_appconfiguration_applicationextension {
}
interface msdyn_appconfiguration_sessiontemplate_Base extends WebEntity {
}
interface msdyn_appconfiguration_sessiontemplate_Fixed extends WebEntity_Fixed {
  msdyn_appconfiguration_sessiontemplateid: string;
}
interface msdyn_appconfiguration_sessiontemplate extends msdyn_appconfiguration_sessiontemplate_Base, msdyn_appconfiguration_sessiontemplate_Relationships {
}
interface msdyn_appconfiguration_sessiontemplate_Relationships {
}
interface msdyn_appconfiguration_sessiontemplate_Result extends msdyn_appconfiguration_sessiontemplate_Base, msdyn_appconfiguration_sessiontemplate_Relationships {
}
interface msdyn_appconfiguration_sessiontemplate_FormattedResult {
}
interface msdyn_appconfiguration_sessiontemplate_Select {
}
interface msdyn_appconfiguration_sessiontemplate_Expand {
}
interface msdyn_appconfiguration_sessiontemplate_Filter {
}
interface msdyn_appconfiguration_sessiontemplate_Create extends msdyn_appconfiguration_sessiontemplate {
}
interface msdyn_appconfiguration_sessiontemplate_Update extends msdyn_appconfiguration_sessiontemplate {
}
interface msdyn_appconfiguration_systemuser_Base extends WebEntity {
}
interface msdyn_appconfiguration_systemuser_Fixed extends WebEntity_Fixed {
  msdyn_appconfiguration_systemuserid: string;
}
interface msdyn_appconfiguration_systemuser extends msdyn_appconfiguration_systemuser_Base, msdyn_appconfiguration_systemuser_Relationships {
}
interface msdyn_appconfiguration_systemuser_Relationships {
}
interface msdyn_appconfiguration_systemuser_Result extends msdyn_appconfiguration_systemuser_Base, msdyn_appconfiguration_systemuser_Relationships {
}
interface msdyn_appconfiguration_systemuser_FormattedResult {
}
interface msdyn_appconfiguration_systemuser_Select {
}
interface msdyn_appconfiguration_systemuser_Expand {
}
interface msdyn_appconfiguration_systemuser_Filter {
}
interface msdyn_appconfiguration_systemuser_Create extends msdyn_appconfiguration_systemuser {
}
interface msdyn_appconfiguration_systemuser_Update extends msdyn_appconfiguration_systemuser {
}
interface msdyn_applicationextension_Base extends WebEntity {
}
interface msdyn_applicationextension_Fixed extends WebEntity_Fixed {
  msdyn_applicationextensionid: string;
}
interface msdyn_applicationextension extends msdyn_applicationextension_Base, msdyn_applicationextension_Relationships {
}
interface msdyn_applicationextension_Relationships {
}
interface msdyn_applicationextension_Result extends msdyn_applicationextension_Base, msdyn_applicationextension_Relationships {
}
interface msdyn_applicationextension_FormattedResult {
}
interface msdyn_applicationextension_Select {
}
interface msdyn_applicationextension_Expand {
}
interface msdyn_applicationextension_Filter {
}
interface msdyn_applicationextension_Create extends msdyn_applicationextension {
}
interface msdyn_applicationextension_Update extends msdyn_applicationextension {
}
interface msdyn_applicationtabtemplate_Base extends WebEntity {
}
interface msdyn_applicationtabtemplate_Fixed extends WebEntity_Fixed {
  msdyn_applicationtabtemplateid: string;
}
interface msdyn_applicationtabtemplate extends msdyn_applicationtabtemplate_Base, msdyn_applicationtabtemplate_Relationships {
}
interface msdyn_applicationtabtemplate_Relationships {
}
interface msdyn_applicationtabtemplate_Result extends msdyn_applicationtabtemplate_Base, msdyn_applicationtabtemplate_Relationships {
}
interface msdyn_applicationtabtemplate_FormattedResult {
}
interface msdyn_applicationtabtemplate_Select {
}
interface msdyn_applicationtabtemplate_Expand {
}
interface msdyn_applicationtabtemplate_Filter {
}
interface msdyn_applicationtabtemplate_Create extends msdyn_applicationtabtemplate {
}
interface msdyn_applicationtabtemplate_Update extends msdyn_applicationtabtemplate {
}
interface msdyn_approval_Base extends WebEntity {
}
interface msdyn_approval_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface msdyn_approval extends msdyn_approval_Base, msdyn_approval_Relationships {
}
interface msdyn_approval_Relationships {
}
interface msdyn_approval_Result extends msdyn_approval_Base, msdyn_approval_Relationships {
}
interface msdyn_approval_FormattedResult {
}
interface msdyn_approval_Select {
}
interface msdyn_approval_Expand {
}
interface msdyn_approval_Filter {
}
interface msdyn_approval_Create extends msdyn_approval {
}
interface msdyn_approval_Update extends msdyn_approval {
}
interface msdyn_approvalset_Base extends WebEntity {
}
interface msdyn_approvalset_Fixed extends WebEntity_Fixed {
  msdyn_approvalsetid: string;
}
interface msdyn_approvalset extends msdyn_approvalset_Base, msdyn_approvalset_Relationships {
}
interface msdyn_approvalset_Relationships {
}
interface msdyn_approvalset_Result extends msdyn_approvalset_Base, msdyn_approvalset_Relationships {
}
interface msdyn_approvalset_FormattedResult {
}
interface msdyn_approvalset_Select {
}
interface msdyn_approvalset_Expand {
}
interface msdyn_approvalset_Filter {
}
interface msdyn_approvalset_Create extends msdyn_approvalset {
}
interface msdyn_approvalset_Update extends msdyn_approvalset {
}
interface msdyn_assetcategorytemplateassociation_Base extends WebEntity {
}
interface msdyn_assetcategorytemplateassociation_Fixed extends WebEntity_Fixed {
  msdyn_assetcategorytemplateassociationid: string;
}
interface msdyn_assetcategorytemplateassociation extends msdyn_assetcategorytemplateassociation_Base, msdyn_assetcategorytemplateassociation_Relationships {
}
interface msdyn_assetcategorytemplateassociation_Relationships {
}
interface msdyn_assetcategorytemplateassociation_Result extends msdyn_assetcategorytemplateassociation_Base, msdyn_assetcategorytemplateassociation_Relationships {
}
interface msdyn_assetcategorytemplateassociation_FormattedResult {
}
interface msdyn_assetcategorytemplateassociation_Select {
}
interface msdyn_assetcategorytemplateassociation_Expand {
}
interface msdyn_assetcategorytemplateassociation_Filter {
}
interface msdyn_assetcategorytemplateassociation_Create extends msdyn_assetcategorytemplateassociation {
}
interface msdyn_assetcategorytemplateassociation_Update extends msdyn_assetcategorytemplateassociation {
}
interface msdyn_assetsuggestionssetting_Base extends WebEntity {
}
interface msdyn_assetsuggestionssetting_Fixed extends WebEntity_Fixed {
  msdyn_assetsuggestionssettingid: string;
}
interface msdyn_assetsuggestionssetting extends msdyn_assetsuggestionssetting_Base, msdyn_assetsuggestionssetting_Relationships {
}
interface msdyn_assetsuggestionssetting_Relationships {
}
interface msdyn_assetsuggestionssetting_Result extends msdyn_assetsuggestionssetting_Base, msdyn_assetsuggestionssetting_Relationships {
}
interface msdyn_assetsuggestionssetting_FormattedResult {
}
interface msdyn_assetsuggestionssetting_Select {
}
interface msdyn_assetsuggestionssetting_Expand {
}
interface msdyn_assetsuggestionssetting_Filter {
}
interface msdyn_assetsuggestionssetting_Create extends msdyn_assetsuggestionssetting {
}
interface msdyn_assetsuggestionssetting_Update extends msdyn_assetsuggestionssetting {
}
interface msdyn_assettemplateassociation_Base extends WebEntity {
}
interface msdyn_assettemplateassociation_Fixed extends WebEntity_Fixed {
  msdyn_assettemplateassociationid: string;
}
interface msdyn_assettemplateassociation extends msdyn_assettemplateassociation_Base, msdyn_assettemplateassociation_Relationships {
}
interface msdyn_assettemplateassociation_Relationships {
}
interface msdyn_assettemplateassociation_Result extends msdyn_assettemplateassociation_Base, msdyn_assettemplateassociation_Relationships {
}
interface msdyn_assettemplateassociation_FormattedResult {
}
interface msdyn_assettemplateassociation_Select {
}
interface msdyn_assettemplateassociation_Expand {
}
interface msdyn_assettemplateassociation_Filter {
}
interface msdyn_assettemplateassociation_Create extends msdyn_assettemplateassociation {
}
interface msdyn_assettemplateassociation_Update extends msdyn_assettemplateassociation {
}
interface msdyn_assignmentconfiguration_Base extends WebEntity {
}
interface msdyn_assignmentconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_assignmentconfigurationid: string;
}
interface msdyn_assignmentconfiguration extends msdyn_assignmentconfiguration_Base, msdyn_assignmentconfiguration_Relationships {
}
interface msdyn_assignmentconfiguration_Relationships {
}
interface msdyn_assignmentconfiguration_Result extends msdyn_assignmentconfiguration_Base, msdyn_assignmentconfiguration_Relationships {
}
interface msdyn_assignmentconfiguration_FormattedResult {
}
interface msdyn_assignmentconfiguration_Select {
}
interface msdyn_assignmentconfiguration_Expand {
}
interface msdyn_assignmentconfiguration_Filter {
}
interface msdyn_assignmentconfiguration_Create extends msdyn_assignmentconfiguration {
}
interface msdyn_assignmentconfiguration_Update extends msdyn_assignmentconfiguration {
}
interface msdyn_assignmentconfigurationstep_Base extends WebEntity {
}
interface msdyn_assignmentconfigurationstep_Fixed extends WebEntity_Fixed {
  msdyn_assignmentconfigurationstepid: string;
}
interface msdyn_assignmentconfigurationstep extends msdyn_assignmentconfigurationstep_Base, msdyn_assignmentconfigurationstep_Relationships {
}
interface msdyn_assignmentconfigurationstep_Relationships {
}
interface msdyn_assignmentconfigurationstep_Result extends msdyn_assignmentconfigurationstep_Base, msdyn_assignmentconfigurationstep_Relationships {
}
interface msdyn_assignmentconfigurationstep_FormattedResult {
}
interface msdyn_assignmentconfigurationstep_Select {
}
interface msdyn_assignmentconfigurationstep_Expand {
}
interface msdyn_assignmentconfigurationstep_Filter {
}
interface msdyn_assignmentconfigurationstep_Create extends msdyn_assignmentconfigurationstep {
}
interface msdyn_assignmentconfigurationstep_Update extends msdyn_assignmentconfigurationstep {
}
interface msdyn_assignmentmap_Base extends WebEntity {
}
interface msdyn_assignmentmap_Fixed extends WebEntity_Fixed {
  msdyn_assignmentmapid: string;
}
interface msdyn_assignmentmap extends msdyn_assignmentmap_Base, msdyn_assignmentmap_Relationships {
}
interface msdyn_assignmentmap_Relationships {
}
interface msdyn_assignmentmap_Result extends msdyn_assignmentmap_Base, msdyn_assignmentmap_Relationships {
}
interface msdyn_assignmentmap_FormattedResult {
}
interface msdyn_assignmentmap_Select {
}
interface msdyn_assignmentmap_Expand {
}
interface msdyn_assignmentmap_Filter {
}
interface msdyn_assignmentmap_Create extends msdyn_assignmentmap {
}
interface msdyn_assignmentmap_Update extends msdyn_assignmentmap {
}
interface msdyn_assignmentrule_Base extends WebEntity {
}
interface msdyn_assignmentrule_Fixed extends WebEntity_Fixed {
  msdyn_assignmentruleid: string;
}
interface msdyn_assignmentrule extends msdyn_assignmentrule_Base, msdyn_assignmentrule_Relationships {
}
interface msdyn_assignmentrule_Relationships {
}
interface msdyn_assignmentrule_Result extends msdyn_assignmentrule_Base, msdyn_assignmentrule_Relationships {
}
interface msdyn_assignmentrule_FormattedResult {
}
interface msdyn_assignmentrule_Select {
}
interface msdyn_assignmentrule_Expand {
}
interface msdyn_assignmentrule_Filter {
}
interface msdyn_assignmentrule_Create extends msdyn_assignmentrule {
}
interface msdyn_assignmentrule_Update extends msdyn_assignmentrule {
}
interface msdyn_attribute_Base extends WebEntity {
}
interface msdyn_attribute_Fixed extends WebEntity_Fixed {
  msdyn_attributeid: string;
}
interface msdyn_attribute extends msdyn_attribute_Base, msdyn_attribute_Relationships {
}
interface msdyn_attribute_Relationships {
}
interface msdyn_attribute_Result extends msdyn_attribute_Base, msdyn_attribute_Relationships {
}
interface msdyn_attribute_FormattedResult {
}
interface msdyn_attribute_Select {
}
interface msdyn_attribute_Expand {
}
interface msdyn_attribute_Filter {
}
interface msdyn_attribute_Create extends msdyn_attribute {
}
interface msdyn_attribute_Update extends msdyn_attribute {
}
interface msdyn_attributevalue_Base extends WebEntity {
}
interface msdyn_attributevalue_Fixed extends WebEntity_Fixed {
  msdyn_attributevalueid: string;
}
interface msdyn_attributevalue extends msdyn_attributevalue_Base, msdyn_attributevalue_Relationships {
}
interface msdyn_attributevalue_Relationships {
}
interface msdyn_attributevalue_Result extends msdyn_attributevalue_Base, msdyn_attributevalue_Relationships {
}
interface msdyn_attributevalue_FormattedResult {
}
interface msdyn_attributevalue_Select {
}
interface msdyn_attributevalue_Expand {
}
interface msdyn_attributevalue_Filter {
}
interface msdyn_attributevalue_Create extends msdyn_attributevalue {
}
interface msdyn_attributevalue_Update extends msdyn_attributevalue {
}
interface msdyn_authenticationsettings_Base extends WebEntity {
}
interface msdyn_authenticationsettings_Fixed extends WebEntity_Fixed {
  msdyn_authenticationsettingsid: string;
}
interface msdyn_authenticationsettings extends msdyn_authenticationsettings_Base, msdyn_authenticationsettings_Relationships {
}
interface msdyn_authenticationsettings_Relationships {
}
interface msdyn_authenticationsettings_Result extends msdyn_authenticationsettings_Base, msdyn_authenticationsettings_Relationships {
}
interface msdyn_authenticationsettings_FormattedResult {
}
interface msdyn_authenticationsettings_Select {
}
interface msdyn_authenticationsettings_Expand {
}
interface msdyn_authenticationsettings_Filter {
}
interface msdyn_authenticationsettings_Create extends msdyn_authenticationsettings {
}
interface msdyn_authenticationsettings_Update extends msdyn_authenticationsettings {
}
interface msdyn_autocapturerule_Base extends WebEntity {
}
interface msdyn_autocapturerule_Fixed extends WebEntity_Fixed {
  msdyn_autocaptureruleid: string;
}
interface msdyn_autocapturerule extends msdyn_autocapturerule_Base, msdyn_autocapturerule_Relationships {
}
interface msdyn_autocapturerule_Relationships {
}
interface msdyn_autocapturerule_Result extends msdyn_autocapturerule_Base, msdyn_autocapturerule_Relationships {
}
interface msdyn_autocapturerule_FormattedResult {
}
interface msdyn_autocapturerule_Select {
}
interface msdyn_autocapturerule_Expand {
}
interface msdyn_autocapturerule_Filter {
}
interface msdyn_autocapturerule_Create extends msdyn_autocapturerule {
}
interface msdyn_autocapturerule_Update extends msdyn_autocapturerule {
}
interface msdyn_autocapturesettings_Base extends WebEntity {
}
interface msdyn_autocapturesettings_Fixed extends WebEntity_Fixed {
  msdyn_autocapturesettingsid: string;
}
interface msdyn_autocapturesettings extends msdyn_autocapturesettings_Base, msdyn_autocapturesettings_Relationships {
}
interface msdyn_autocapturesettings_Relationships {
}
interface msdyn_autocapturesettings_Result extends msdyn_autocapturesettings_Base, msdyn_autocapturesettings_Relationships {
}
interface msdyn_autocapturesettings_FormattedResult {
}
interface msdyn_autocapturesettings_Select {
}
interface msdyn_autocapturesettings_Expand {
}
interface msdyn_autocapturesettings_Filter {
}
interface msdyn_autocapturesettings_Create extends msdyn_autocapturesettings {
}
interface msdyn_autocapturesettings_Update extends msdyn_autocapturesettings {
}
interface msdyn_batchjob_Base extends WebEntity {
}
interface msdyn_batchjob_Fixed extends WebEntity_Fixed {
  msdyn_batchjobid: string;
}
interface msdyn_batchjob extends msdyn_batchjob_Base, msdyn_batchjob_Relationships {
}
interface msdyn_batchjob_Relationships {
}
interface msdyn_batchjob_Result extends msdyn_batchjob_Base, msdyn_batchjob_Relationships {
}
interface msdyn_batchjob_FormattedResult {
}
interface msdyn_batchjob_Select {
}
interface msdyn_batchjob_Expand {
}
interface msdyn_batchjob_Filter {
}
interface msdyn_batchjob_Create extends msdyn_batchjob {
}
interface msdyn_batchjob_Update extends msdyn_batchjob {
}
interface msdyn_bookableresourceassociation_Base extends WebEntity {
}
interface msdyn_bookableresourceassociation_Fixed extends WebEntity_Fixed {
  msdyn_bookableresourceassociationid: string;
}
interface msdyn_bookableresourceassociation extends msdyn_bookableresourceassociation_Base, msdyn_bookableresourceassociation_Relationships {
}
interface msdyn_bookableresourceassociation_Relationships {
}
interface msdyn_bookableresourceassociation_Result extends msdyn_bookableresourceassociation_Base, msdyn_bookableresourceassociation_Relationships {
}
interface msdyn_bookableresourceassociation_FormattedResult {
}
interface msdyn_bookableresourceassociation_Select {
}
interface msdyn_bookableresourceassociation_Expand {
}
interface msdyn_bookableresourceassociation_Filter {
}
interface msdyn_bookableresourceassociation_Create extends msdyn_bookableresourceassociation {
}
interface msdyn_bookableresourceassociation_Update extends msdyn_bookableresourceassociation {
}
interface msdyn_bookableresourcebookingquicknote_Base extends WebEntity {
}
interface msdyn_bookableresourcebookingquicknote_Fixed extends WebEntity_Fixed {
  msdyn_bookableresourcebookingquicknoteid: string;
}
interface msdyn_bookableresourcebookingquicknote extends msdyn_bookableresourcebookingquicknote_Base, msdyn_bookableresourcebookingquicknote_Relationships {
}
interface msdyn_bookableresourcebookingquicknote_Relationships {
}
interface msdyn_bookableresourcebookingquicknote_Result extends msdyn_bookableresourcebookingquicknote_Base, msdyn_bookableresourcebookingquicknote_Relationships {
}
interface msdyn_bookableresourcebookingquicknote_FormattedResult {
}
interface msdyn_bookableresourcebookingquicknote_Select {
}
interface msdyn_bookableresourcebookingquicknote_Expand {
}
interface msdyn_bookableresourcebookingquicknote_Filter {
}
interface msdyn_bookableresourcebookingquicknote_Create extends msdyn_bookableresourcebookingquicknote {
}
interface msdyn_bookableresourcebookingquicknote_Update extends msdyn_bookableresourcebookingquicknote {
}
interface msdyn_bookableresourcecapacityprofile_Base extends WebEntity {
}
interface msdyn_bookableresourcecapacityprofile_Fixed extends WebEntity_Fixed {
  msdyn_bookableresourcecapacityprofileid: string;
}
interface msdyn_bookableresourcecapacityprofile extends msdyn_bookableresourcecapacityprofile_Base, msdyn_bookableresourcecapacityprofile_Relationships {
}
interface msdyn_bookableresourcecapacityprofile_Relationships {
}
interface msdyn_bookableresourcecapacityprofile_Result extends msdyn_bookableresourcecapacityprofile_Base, msdyn_bookableresourcecapacityprofile_Relationships {
}
interface msdyn_bookableresourcecapacityprofile_FormattedResult {
}
interface msdyn_bookableresourcecapacityprofile_Select {
}
interface msdyn_bookableresourcecapacityprofile_Expand {
}
interface msdyn_bookableresourcecapacityprofile_Filter {
}
interface msdyn_bookableresourcecapacityprofile_Create extends msdyn_bookableresourcecapacityprofile {
}
interface msdyn_bookableresourcecapacityprofile_Update extends msdyn_bookableresourcecapacityprofile {
}
interface msdyn_bookingalert_Base extends WebEntity {
}
interface msdyn_bookingalert_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface msdyn_bookingalert extends msdyn_bookingalert_Base, msdyn_bookingalert_Relationships {
}
interface msdyn_bookingalert_Relationships {
}
interface msdyn_bookingalert_Result extends msdyn_bookingalert_Base, msdyn_bookingalert_Relationships {
}
interface msdyn_bookingalert_FormattedResult {
}
interface msdyn_bookingalert_Select {
}
interface msdyn_bookingalert_Expand {
}
interface msdyn_bookingalert_Filter {
}
interface msdyn_bookingalert_Create extends msdyn_bookingalert {
}
interface msdyn_bookingalert_Update extends msdyn_bookingalert {
}
interface msdyn_bookingalertstatus_Base extends WebEntity {
}
interface msdyn_bookingalertstatus_Fixed extends WebEntity_Fixed {
  msdyn_bookingalertstatusid: string;
}
interface msdyn_bookingalertstatus extends msdyn_bookingalertstatus_Base, msdyn_bookingalertstatus_Relationships {
}
interface msdyn_bookingalertstatus_Relationships {
}
interface msdyn_bookingalertstatus_Result extends msdyn_bookingalertstatus_Base, msdyn_bookingalertstatus_Relationships {
}
interface msdyn_bookingalertstatus_FormattedResult {
}
interface msdyn_bookingalertstatus_Select {
}
interface msdyn_bookingalertstatus_Expand {
}
interface msdyn_bookingalertstatus_Filter {
}
interface msdyn_bookingalertstatus_Create extends msdyn_bookingalertstatus {
}
interface msdyn_bookingalertstatus_Update extends msdyn_bookingalertstatus {
}
interface msdyn_bookingchange_Base extends WebEntity {
}
interface msdyn_bookingchange_Fixed extends WebEntity_Fixed {
  msdyn_bookingchangeid: string;
}
interface msdyn_bookingchange extends msdyn_bookingchange_Base, msdyn_bookingchange_Relationships {
}
interface msdyn_bookingchange_Relationships {
}
interface msdyn_bookingchange_Result extends msdyn_bookingchange_Base, msdyn_bookingchange_Relationships {
}
interface msdyn_bookingchange_FormattedResult {
}
interface msdyn_bookingchange_Select {
}
interface msdyn_bookingchange_Expand {
}
interface msdyn_bookingchange_Filter {
}
interface msdyn_bookingchange_Create extends msdyn_bookingchange {
}
interface msdyn_bookingchange_Update extends msdyn_bookingchange {
}
interface msdyn_bookingjournal_Base extends WebEntity {
}
interface msdyn_bookingjournal_Fixed extends WebEntity_Fixed {
  msdyn_bookingjournalid: string;
}
interface msdyn_bookingjournal extends msdyn_bookingjournal_Base, msdyn_bookingjournal_Relationships {
}
interface msdyn_bookingjournal_Relationships {
}
interface msdyn_bookingjournal_Result extends msdyn_bookingjournal_Base, msdyn_bookingjournal_Relationships {
}
interface msdyn_bookingjournal_FormattedResult {
}
interface msdyn_bookingjournal_Select {
}
interface msdyn_bookingjournal_Expand {
}
interface msdyn_bookingjournal_Filter {
}
interface msdyn_bookingjournal_Create extends msdyn_bookingjournal {
}
interface msdyn_bookingjournal_Update extends msdyn_bookingjournal {
}
interface msdyn_bookingrule_Base extends WebEntity {
}
interface msdyn_bookingrule_Fixed extends WebEntity_Fixed {
  msdyn_bookingruleid: string;
}
interface msdyn_bookingrule extends msdyn_bookingrule_Base, msdyn_bookingrule_Relationships {
}
interface msdyn_bookingrule_Relationships {
}
interface msdyn_bookingrule_Result extends msdyn_bookingrule_Base, msdyn_bookingrule_Relationships {
}
interface msdyn_bookingrule_FormattedResult {
}
interface msdyn_bookingrule_Select {
}
interface msdyn_bookingrule_Expand {
}
interface msdyn_bookingrule_Filter {
}
interface msdyn_bookingrule_Create extends msdyn_bookingrule {
}
interface msdyn_bookingrule_Update extends msdyn_bookingrule {
}
interface msdyn_bookingsetupmetadata_Base extends WebEntity {
}
interface msdyn_bookingsetupmetadata_Fixed extends WebEntity_Fixed {
  msdyn_bookingsetupmetadataid: string;
}
interface msdyn_bookingsetupmetadata extends msdyn_bookingsetupmetadata_Base, msdyn_bookingsetupmetadata_Relationships {
}
interface msdyn_bookingsetupmetadata_Relationships {
}
interface msdyn_bookingsetupmetadata_Result extends msdyn_bookingsetupmetadata_Base, msdyn_bookingsetupmetadata_Relationships {
}
interface msdyn_bookingsetupmetadata_FormattedResult {
}
interface msdyn_bookingsetupmetadata_Select {
}
interface msdyn_bookingsetupmetadata_Expand {
}
interface msdyn_bookingsetupmetadata_Filter {
}
interface msdyn_bookingsetupmetadata_Create extends msdyn_bookingsetupmetadata {
}
interface msdyn_bookingsetupmetadata_Update extends msdyn_bookingsetupmetadata {
}
interface msdyn_bookingtimestamp_Base extends WebEntity {
}
interface msdyn_bookingtimestamp_Fixed extends WebEntity_Fixed {
  msdyn_bookingtimestampid: string;
}
interface msdyn_bookingtimestamp extends msdyn_bookingtimestamp_Base, msdyn_bookingtimestamp_Relationships {
}
interface msdyn_bookingtimestamp_Relationships {
}
interface msdyn_bookingtimestamp_Result extends msdyn_bookingtimestamp_Base, msdyn_bookingtimestamp_Relationships {
}
interface msdyn_bookingtimestamp_FormattedResult {
}
interface msdyn_bookingtimestamp_Select {
}
interface msdyn_bookingtimestamp_Expand {
}
interface msdyn_bookingtimestamp_Filter {
}
interface msdyn_bookingtimestamp_Create extends msdyn_bookingtimestamp {
}
interface msdyn_bookingtimestamp_Update extends msdyn_bookingtimestamp {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Base extends WebEntity {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 extends msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Base, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Relationships {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Relationships {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Result extends msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Base, msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Relationships {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_FormattedResult {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Select {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Expand {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Filter {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Create extends msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 {
}
interface msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_Update extends msdyn_bpf_2c5fe86acc8b414b8322ae571000c799 {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Base extends WebEntity {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b extends msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Base, msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Relationships {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Relationships {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Result extends msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Base, msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Relationships {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_FormattedResult {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Select {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Expand {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Filter {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Create extends msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b {
}
interface msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_Update extends msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Base extends WebEntity {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82 extends msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Base, msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Relationships {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Relationships {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Result extends msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Base, msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Relationships {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_FormattedResult {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Select {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Expand {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Filter {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Create extends msdyn_bpf_665e73aa18c247d886bfc50499c73b82 {
}
interface msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Update extends msdyn_bpf_665e73aa18c247d886bfc50499c73b82 {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Base extends WebEntity {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b extends msdyn_bpf_989e9b1857e24af18787d5143b67523b_Base, msdyn_bpf_989e9b1857e24af18787d5143b67523b_Relationships {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Relationships {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Result extends msdyn_bpf_989e9b1857e24af18787d5143b67523b_Base, msdyn_bpf_989e9b1857e24af18787d5143b67523b_Relationships {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_FormattedResult {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Select {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Expand {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Filter {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Create extends msdyn_bpf_989e9b1857e24af18787d5143b67523b {
}
interface msdyn_bpf_989e9b1857e24af18787d5143b67523b_Update extends msdyn_bpf_989e9b1857e24af18787d5143b67523b {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Base extends WebEntity {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 extends msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Base, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Relationships {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Relationships {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result extends msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Base, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Relationships {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_FormattedResult {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Create extends msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Update extends msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Base extends WebEntity {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 extends msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Base, msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Relationships {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Relationships {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Result extends msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Base, msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Relationships {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_FormattedResult {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Select {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Expand {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Filter {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Create extends msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 {
}
interface msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_Update extends msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39 {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Base extends WebEntity {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d extends msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Base, msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Relationships {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Relationships {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Result extends msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Base, msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Relationships {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_FormattedResult {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Select {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Expand {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Filter {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Create extends msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d {
}
interface msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_Update extends msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d {
}
interface msdyn_businessclosure_Base extends WebEntity {
}
interface msdyn_businessclosure_Fixed extends WebEntity_Fixed {
  msdyn_businessclosureid: string;
}
interface msdyn_businessclosure extends msdyn_businessclosure_Base, msdyn_businessclosure_Relationships {
}
interface msdyn_businessclosure_Relationships {
}
interface msdyn_businessclosure_Result extends msdyn_businessclosure_Base, msdyn_businessclosure_Relationships {
}
interface msdyn_businessclosure_FormattedResult {
}
interface msdyn_businessclosure_Select {
}
interface msdyn_businessclosure_Expand {
}
interface msdyn_businessclosure_Filter {
}
interface msdyn_businessclosure_Create extends msdyn_businessclosure {
}
interface msdyn_businessclosure_Update extends msdyn_businessclosure {
}
interface msdyn_callablecontext_Base extends WebEntity {
}
interface msdyn_callablecontext_Fixed extends WebEntity_Fixed {
  msdyn_callablecontextid: string;
}
interface msdyn_callablecontext extends msdyn_callablecontext_Base, msdyn_callablecontext_Relationships {
}
interface msdyn_callablecontext_Relationships {
}
interface msdyn_callablecontext_Result extends msdyn_callablecontext_Base, msdyn_callablecontext_Relationships {
}
interface msdyn_callablecontext_FormattedResult {
}
interface msdyn_callablecontext_Select {
}
interface msdyn_callablecontext_Expand {
}
interface msdyn_callablecontext_Filter {
}
interface msdyn_callablecontext_Create extends msdyn_callablecontext {
}
interface msdyn_callablecontext_Update extends msdyn_callablecontext {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Base extends WebEntity {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Fixed extends WebEntity_Fixed {
  msdyn_callablecontext_msdyn_playbooktemplateid: string;
}
interface msdyn_callablecontext_msdyn_playbooktemplate extends msdyn_callablecontext_msdyn_playbooktemplate_Base, msdyn_callablecontext_msdyn_playbooktemplate_Relationships {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Relationships {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Result extends msdyn_callablecontext_msdyn_playbooktemplate_Base, msdyn_callablecontext_msdyn_playbooktemplate_Relationships {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_FormattedResult {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Select {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Expand {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Filter {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Create extends msdyn_callablecontext_msdyn_playbooktemplate {
}
interface msdyn_callablecontext_msdyn_playbooktemplate_Update extends msdyn_callablecontext_msdyn_playbooktemplate {
}
interface msdyn_cannedmessage_Base extends WebEntity {
}
interface msdyn_cannedmessage_Fixed extends WebEntity_Fixed {
  msdyn_cannedmessageid: string;
}
interface msdyn_cannedmessage extends msdyn_cannedmessage_Base, msdyn_cannedmessage_Relationships {
}
interface msdyn_cannedmessage_Relationships {
}
interface msdyn_cannedmessage_Result extends msdyn_cannedmessage_Base, msdyn_cannedmessage_Relationships {
}
interface msdyn_cannedmessage_FormattedResult {
}
interface msdyn_cannedmessage_Select {
}
interface msdyn_cannedmessage_Expand {
}
interface msdyn_cannedmessage_Filter {
}
interface msdyn_cannedmessage_Create extends msdyn_cannedmessage {
}
interface msdyn_cannedmessage_Update extends msdyn_cannedmessage {
}
interface msdyn_capacityprofile_Base extends WebEntity {
}
interface msdyn_capacityprofile_Fixed extends WebEntity_Fixed {
  msdyn_capacityprofileid: string;
}
interface msdyn_capacityprofile extends msdyn_capacityprofile_Base, msdyn_capacityprofile_Relationships {
}
interface msdyn_capacityprofile_Relationships {
}
interface msdyn_capacityprofile_Result extends msdyn_capacityprofile_Base, msdyn_capacityprofile_Relationships {
}
interface msdyn_capacityprofile_FormattedResult {
}
interface msdyn_capacityprofile_Select {
}
interface msdyn_capacityprofile_Expand {
}
interface msdyn_capacityprofile_Filter {
}
interface msdyn_capacityprofile_Create extends msdyn_capacityprofile {
}
interface msdyn_capacityprofile_Update extends msdyn_capacityprofile {
}
interface msdyn_caseenrichment_Base extends WebEntity {
}
interface msdyn_caseenrichment_Fixed extends WebEntity_Fixed {
  msdyn_caseenrichmentid: string;
}
interface msdyn_caseenrichment extends msdyn_caseenrichment_Base, msdyn_caseenrichment_Relationships {
}
interface msdyn_caseenrichment_Relationships {
}
interface msdyn_caseenrichment_Result extends msdyn_caseenrichment_Base, msdyn_caseenrichment_Relationships {
}
interface msdyn_caseenrichment_FormattedResult {
}
interface msdyn_caseenrichment_Select {
}
interface msdyn_caseenrichment_Expand {
}
interface msdyn_caseenrichment_Filter {
}
interface msdyn_caseenrichment_Create extends msdyn_caseenrichment {
}
interface msdyn_caseenrichment_Update extends msdyn_caseenrichment {
}
interface msdyn_casesuggestion_Base extends WebEntity {
}
interface msdyn_casesuggestion_Fixed extends WebEntity_Fixed {
  msdyn_casesuggestionid: string;
}
interface msdyn_casesuggestion extends msdyn_casesuggestion_Base, msdyn_casesuggestion_Relationships {
}
interface msdyn_casesuggestion_Relationships {
}
interface msdyn_casesuggestion_Result extends msdyn_casesuggestion_Base, msdyn_casesuggestion_Relationships {
}
interface msdyn_casesuggestion_FormattedResult {
}
interface msdyn_casesuggestion_Select {
}
interface msdyn_casesuggestion_Expand {
}
interface msdyn_casesuggestion_Filter {
}
interface msdyn_casesuggestion_Create extends msdyn_casesuggestion {
}
interface msdyn_casesuggestion_Update extends msdyn_casesuggestion {
}
interface msdyn_casesuggestionrequestpayload_Base extends WebEntity {
}
interface msdyn_casesuggestionrequestpayload_Fixed extends WebEntity_Fixed {
  msdyn_casesuggestionrequestpayloadid: string;
}
interface msdyn_casesuggestionrequestpayload extends msdyn_casesuggestionrequestpayload_Base, msdyn_casesuggestionrequestpayload_Relationships {
}
interface msdyn_casesuggestionrequestpayload_Relationships {
}
interface msdyn_casesuggestionrequestpayload_Result extends msdyn_casesuggestionrequestpayload_Base, msdyn_casesuggestionrequestpayload_Relationships {
}
interface msdyn_casesuggestionrequestpayload_FormattedResult {
}
interface msdyn_casesuggestionrequestpayload_Select {
}
interface msdyn_casesuggestionrequestpayload_Expand {
}
interface msdyn_casesuggestionrequestpayload_Filter {
}
interface msdyn_casesuggestionrequestpayload_Create extends msdyn_casesuggestionrequestpayload {
}
interface msdyn_casesuggestionrequestpayload_Update extends msdyn_casesuggestionrequestpayload {
}
interface msdyn_casesuggestionsdatasource_Base extends WebEntity {
}
interface msdyn_casesuggestionsdatasource_Fixed extends WebEntity_Fixed {
  msdyn_casesuggestionsdatasourceid: string;
}
interface msdyn_casesuggestionsdatasource extends msdyn_casesuggestionsdatasource_Base, msdyn_casesuggestionsdatasource_Relationships {
}
interface msdyn_casesuggestionsdatasource_Relationships {
}
interface msdyn_casesuggestionsdatasource_Result extends msdyn_casesuggestionsdatasource_Base, msdyn_casesuggestionsdatasource_Relationships {
}
interface msdyn_casesuggestionsdatasource_FormattedResult {
}
interface msdyn_casesuggestionsdatasource_Select {
}
interface msdyn_casesuggestionsdatasource_Expand {
}
interface msdyn_casesuggestionsdatasource_Filter {
}
interface msdyn_casesuggestionsdatasource_Create extends msdyn_casesuggestionsdatasource {
}
interface msdyn_casesuggestionsdatasource_Update extends msdyn_casesuggestionsdatasource {
}
interface msdyn_casetopic_Base extends WebEntity {
}
interface msdyn_casetopic_Fixed extends WebEntity_Fixed {
  msdyn_casetopicid: string;
}
interface msdyn_casetopic extends msdyn_casetopic_Base, msdyn_casetopic_Relationships {
}
interface msdyn_casetopic_Relationships {
}
interface msdyn_casetopic_Result extends msdyn_casetopic_Base, msdyn_casetopic_Relationships {
}
interface msdyn_casetopic_FormattedResult {
}
interface msdyn_casetopic_Select {
}
interface msdyn_casetopic_Expand {
}
interface msdyn_casetopic_Filter {
}
interface msdyn_casetopic_Create extends msdyn_casetopic {
}
interface msdyn_casetopic_Update extends msdyn_casetopic {
}
interface msdyn_casetopic_incident_Base extends WebEntity {
}
interface msdyn_casetopic_incident_Fixed extends WebEntity_Fixed {
  msdyn_casetopic_incidentid: string;
}
interface msdyn_casetopic_incident extends msdyn_casetopic_incident_Base, msdyn_casetopic_incident_Relationships {
}
interface msdyn_casetopic_incident_Relationships {
}
interface msdyn_casetopic_incident_Result extends msdyn_casetopic_incident_Base, msdyn_casetopic_incident_Relationships {
}
interface msdyn_casetopic_incident_FormattedResult {
}
interface msdyn_casetopic_incident_Select {
}
interface msdyn_casetopic_incident_Expand {
}
interface msdyn_casetopic_incident_Filter {
}
interface msdyn_casetopic_incident_Create extends msdyn_casetopic_incident {
}
interface msdyn_casetopic_incident_Update extends msdyn_casetopic_incident {
}
interface msdyn_casetopicsetting_Base extends WebEntity {
}
interface msdyn_casetopicsetting_Fixed extends WebEntity_Fixed {
  msdyn_casetopicsettingid: string;
}
interface msdyn_casetopicsetting extends msdyn_casetopicsetting_Base, msdyn_casetopicsetting_Relationships {
}
interface msdyn_casetopicsetting_Relationships {
}
interface msdyn_casetopicsetting_Result extends msdyn_casetopicsetting_Base, msdyn_casetopicsetting_Relationships {
}
interface msdyn_casetopicsetting_FormattedResult {
}
interface msdyn_casetopicsetting_Select {
}
interface msdyn_casetopicsetting_Expand {
}
interface msdyn_casetopicsetting_Filter {
}
interface msdyn_casetopicsetting_Create extends msdyn_casetopicsetting {
}
interface msdyn_casetopicsetting_Update extends msdyn_casetopicsetting {
}
interface msdyn_casetopicsummary_Base extends WebEntity {
}
interface msdyn_casetopicsummary_Fixed extends WebEntity_Fixed {
  msdyn_casetopicsummaryid: string;
}
interface msdyn_casetopicsummary extends msdyn_casetopicsummary_Base, msdyn_casetopicsummary_Relationships {
}
interface msdyn_casetopicsummary_Relationships {
}
interface msdyn_casetopicsummary_Result extends msdyn_casetopicsummary_Base, msdyn_casetopicsummary_Relationships {
}
interface msdyn_casetopicsummary_FormattedResult {
}
interface msdyn_casetopicsummary_Select {
}
interface msdyn_casetopicsummary_Expand {
}
interface msdyn_casetopicsummary_Filter {
}
interface msdyn_casetopicsummary_Create extends msdyn_casetopicsummary {
}
interface msdyn_casetopicsummary_Update extends msdyn_casetopicsummary {
}
interface msdyn_cdsentityengagementctx_Base extends WebEntity {
}
interface msdyn_cdsentityengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_cdsentityengagementctxid: string;
}
interface msdyn_cdsentityengagementctx extends msdyn_cdsentityengagementctx_Base, msdyn_cdsentityengagementctx_Relationships {
}
interface msdyn_cdsentityengagementctx_Relationships {
}
interface msdyn_cdsentityengagementctx_Result extends msdyn_cdsentityengagementctx_Base, msdyn_cdsentityengagementctx_Relationships {
}
interface msdyn_cdsentityengagementctx_FormattedResult {
}
interface msdyn_cdsentityengagementctx_Select {
}
interface msdyn_cdsentityengagementctx_Expand {
}
interface msdyn_cdsentityengagementctx_Filter {
}
interface msdyn_cdsentityengagementctx_Create extends msdyn_cdsentityengagementctx {
}
interface msdyn_cdsentityengagementctx_Update extends msdyn_cdsentityengagementctx {
}
interface msdyn_channel_Base extends WebEntity {
}
interface msdyn_channel_Fixed extends WebEntity_Fixed {
  msdyn_channelid: string;
}
interface msdyn_channel extends msdyn_channel_Base, msdyn_channel_Relationships {
}
interface msdyn_channel_Relationships {
}
interface msdyn_channel_Result extends msdyn_channel_Base, msdyn_channel_Relationships {
}
interface msdyn_channel_FormattedResult {
}
interface msdyn_channel_Select {
}
interface msdyn_channel_Expand {
}
interface msdyn_channel_Filter {
}
interface msdyn_channel_Create extends msdyn_channel {
}
interface msdyn_channel_Update extends msdyn_channel {
}
interface msdyn_channelcapability_Base extends WebEntity {
}
interface msdyn_channelcapability_Fixed extends WebEntity_Fixed {
  msdyn_channelcapabilityid: string;
}
interface msdyn_channelcapability extends msdyn_channelcapability_Base, msdyn_channelcapability_Relationships {
}
interface msdyn_channelcapability_Relationships {
}
interface msdyn_channelcapability_Result extends msdyn_channelcapability_Base, msdyn_channelcapability_Relationships {
}
interface msdyn_channelcapability_FormattedResult {
}
interface msdyn_channelcapability_Select {
}
interface msdyn_channelcapability_Expand {
}
interface msdyn_channelcapability_Filter {
}
interface msdyn_channelcapability_Create extends msdyn_channelcapability {
}
interface msdyn_channelcapability_Update extends msdyn_channelcapability {
}
interface msdyn_channelprovider_Base extends WebEntity {
}
interface msdyn_channelprovider_Fixed extends WebEntity_Fixed {
  msdyn_channelproviderid: string;
}
interface msdyn_channelprovider extends msdyn_channelprovider_Base, msdyn_channelprovider_Relationships {
}
interface msdyn_channelprovider_Relationships {
}
interface msdyn_channelprovider_Result extends msdyn_channelprovider_Base, msdyn_channelprovider_Relationships {
}
interface msdyn_channelprovider_FormattedResult {
}
interface msdyn_channelprovider_Select {
}
interface msdyn_channelprovider_Expand {
}
interface msdyn_channelprovider_Filter {
}
interface msdyn_channelprovider_Create extends msdyn_channelprovider {
}
interface msdyn_channelprovider_Update extends msdyn_channelprovider {
}
interface msdyn_characteristicreqforteammember_Base extends WebEntity {
}
interface msdyn_characteristicreqforteammember_Fixed extends WebEntity_Fixed {
  msdyn_characteristicreqforteammemberid: string;
}
interface msdyn_characteristicreqforteammember extends msdyn_characteristicreqforteammember_Base, msdyn_characteristicreqforteammember_Relationships {
}
interface msdyn_characteristicreqforteammember_Relationships {
}
interface msdyn_characteristicreqforteammember_Result extends msdyn_characteristicreqforteammember_Base, msdyn_characteristicreqforteammember_Relationships {
}
interface msdyn_characteristicreqforteammember_FormattedResult {
}
interface msdyn_characteristicreqforteammember_Select {
}
interface msdyn_characteristicreqforteammember_Expand {
}
interface msdyn_characteristicreqforteammember_Filter {
}
interface msdyn_characteristicreqforteammember_Create extends msdyn_characteristicreqforteammember {
}
interface msdyn_characteristicreqforteammember_Update extends msdyn_characteristicreqforteammember {
}
interface msdyn_chatansweroption_Base extends WebEntity {
}
interface msdyn_chatansweroption_Fixed extends WebEntity_Fixed {
  msdyn_chatansweroptionid: string;
}
interface msdyn_chatansweroption extends msdyn_chatansweroption_Base, msdyn_chatansweroption_Relationships {
}
interface msdyn_chatansweroption_Relationships {
}
interface msdyn_chatansweroption_Result extends msdyn_chatansweroption_Base, msdyn_chatansweroption_Relationships {
}
interface msdyn_chatansweroption_FormattedResult {
}
interface msdyn_chatansweroption_Select {
}
interface msdyn_chatansweroption_Expand {
}
interface msdyn_chatansweroption_Filter {
}
interface msdyn_chatansweroption_Create extends msdyn_chatansweroption {
}
interface msdyn_chatansweroption_Update extends msdyn_chatansweroption {
}
interface msdyn_chatquestionnaireresponse_Base extends WebEntity {
}
interface msdyn_chatquestionnaireresponse_Fixed extends WebEntity_Fixed {
  msdyn_chatquestionnaireresponseid: string;
}
interface msdyn_chatquestionnaireresponse extends msdyn_chatquestionnaireresponse_Base, msdyn_chatquestionnaireresponse_Relationships {
}
interface msdyn_chatquestionnaireresponse_Relationships {
}
interface msdyn_chatquestionnaireresponse_Result extends msdyn_chatquestionnaireresponse_Base, msdyn_chatquestionnaireresponse_Relationships {
}
interface msdyn_chatquestionnaireresponse_FormattedResult {
}
interface msdyn_chatquestionnaireresponse_Select {
}
interface msdyn_chatquestionnaireresponse_Expand {
}
interface msdyn_chatquestionnaireresponse_Filter {
}
interface msdyn_chatquestionnaireresponse_Create extends msdyn_chatquestionnaireresponse {
}
interface msdyn_chatquestionnaireresponse_Update extends msdyn_chatquestionnaireresponse {
}
interface msdyn_chatquestionnaireresponseitem_Base extends WebEntity {
}
interface msdyn_chatquestionnaireresponseitem_Fixed extends WebEntity_Fixed {
  msdyn_chatquestionnaireresponseitemid: string;
}
interface msdyn_chatquestionnaireresponseitem extends msdyn_chatquestionnaireresponseitem_Base, msdyn_chatquestionnaireresponseitem_Relationships {
}
interface msdyn_chatquestionnaireresponseitem_Relationships {
}
interface msdyn_chatquestionnaireresponseitem_Result extends msdyn_chatquestionnaireresponseitem_Base, msdyn_chatquestionnaireresponseitem_Relationships {
}
interface msdyn_chatquestionnaireresponseitem_FormattedResult {
}
interface msdyn_chatquestionnaireresponseitem_Select {
}
interface msdyn_chatquestionnaireresponseitem_Expand {
}
interface msdyn_chatquestionnaireresponseitem_Filter {
}
interface msdyn_chatquestionnaireresponseitem_Create extends msdyn_chatquestionnaireresponseitem {
}
interface msdyn_chatquestionnaireresponseitem_Update extends msdyn_chatquestionnaireresponseitem {
}
interface msdyn_chatwidgetlanguage_Base extends WebEntity {
}
interface msdyn_chatwidgetlanguage_Fixed extends WebEntity_Fixed {
  msdyn_chatwidgetlanguageid: string;
}
interface msdyn_chatwidgetlanguage extends msdyn_chatwidgetlanguage_Base, msdyn_chatwidgetlanguage_Relationships {
}
interface msdyn_chatwidgetlanguage_Relationships {
}
interface msdyn_chatwidgetlanguage_Result extends msdyn_chatwidgetlanguage_Base, msdyn_chatwidgetlanguage_Relationships {
}
interface msdyn_chatwidgetlanguage_FormattedResult {
}
interface msdyn_chatwidgetlanguage_Select {
}
interface msdyn_chatwidgetlanguage_Expand {
}
interface msdyn_chatwidgetlanguage_Filter {
}
interface msdyn_chatwidgetlanguage_Create extends msdyn_chatwidgetlanguage {
}
interface msdyn_chatwidgetlanguage_Update extends msdyn_chatwidgetlanguage {
}
interface msdyn_ciprovider_Base extends WebEntity {
}
interface msdyn_ciprovider_Fixed extends WebEntity_Fixed {
  msdyn_ciproviderid: string;
}
interface msdyn_ciprovider extends msdyn_ciprovider_Base, msdyn_ciprovider_Relationships {
}
interface msdyn_ciprovider_Relationships {
}
interface msdyn_ciprovider_Result extends msdyn_ciprovider_Base, msdyn_ciprovider_Relationships {
}
interface msdyn_ciprovider_FormattedResult {
}
interface msdyn_ciprovider_Select {
}
interface msdyn_ciprovider_Expand {
}
interface msdyn_ciprovider_Filter {
}
interface msdyn_ciprovider_Create extends msdyn_ciprovider {
}
interface msdyn_ciprovider_Update extends msdyn_ciprovider {
}
interface msdyn_ciprovider_systemuser_Base extends WebEntity {
}
interface msdyn_ciprovider_systemuser_Fixed extends WebEntity_Fixed {
  msdyn_ciprovider_systemuserid: string;
}
interface msdyn_ciprovider_systemuser extends msdyn_ciprovider_systemuser_Base, msdyn_ciprovider_systemuser_Relationships {
}
interface msdyn_ciprovider_systemuser_Relationships {
}
interface msdyn_ciprovider_systemuser_Result extends msdyn_ciprovider_systemuser_Base, msdyn_ciprovider_systemuser_Relationships {
}
interface msdyn_ciprovider_systemuser_FormattedResult {
}
interface msdyn_ciprovider_systemuser_Select {
}
interface msdyn_ciprovider_systemuser_Expand {
}
interface msdyn_ciprovider_systemuser_Filter {
}
interface msdyn_ciprovider_systemuser_Create extends msdyn_ciprovider_systemuser {
}
interface msdyn_ciprovider_systemuser_Update extends msdyn_ciprovider_systemuser {
}
interface msdyn_clientextension_Base extends WebEntity {
}
interface msdyn_clientextension_Fixed extends WebEntity_Fixed {
  msdyn_clientextensionid: string;
}
interface msdyn_clientextension extends msdyn_clientextension_Base, msdyn_clientextension_Relationships {
}
interface msdyn_clientextension_Relationships {
}
interface msdyn_clientextension_Result extends msdyn_clientextension_Base, msdyn_clientextension_Relationships {
}
interface msdyn_clientextension_FormattedResult {
}
interface msdyn_clientextension_Select {
}
interface msdyn_clientextension_Expand {
}
interface msdyn_clientextension_Filter {
}
interface msdyn_clientextension_Create extends msdyn_clientextension {
}
interface msdyn_clientextension_Update extends msdyn_clientextension {
}
interface msdyn_CollabGraphResource_Base extends WebEntity {
}
interface msdyn_CollabGraphResource_Fixed extends WebEntity_Fixed {
  msdyn_collabgraphresourceid: string;
}
interface msdyn_CollabGraphResource extends msdyn_CollabGraphResource_Base, msdyn_CollabGraphResource_Relationships {
}
interface msdyn_CollabGraphResource_Relationships {
}
interface msdyn_CollabGraphResource_Result extends msdyn_CollabGraphResource_Base, msdyn_CollabGraphResource_Relationships {
}
interface msdyn_CollabGraphResource_FormattedResult {
}
interface msdyn_CollabGraphResource_Select {
}
interface msdyn_CollabGraphResource_Expand {
}
interface msdyn_CollabGraphResource_Filter {
}
interface msdyn_CollabGraphResource_Create extends msdyn_CollabGraphResource {
}
interface msdyn_CollabGraphResource_Update extends msdyn_CollabGraphResource {
}
interface msdyn_componentlayer_Base extends WebEntity {
}
interface msdyn_componentlayer_Fixed extends WebEntity_Fixed {
  msdyn_componentlayerid: string;
}
interface msdyn_componentlayer extends msdyn_componentlayer_Base, msdyn_componentlayer_Relationships {
}
interface msdyn_componentlayer_Relationships {
}
interface msdyn_componentlayer_Result extends msdyn_componentlayer_Base, msdyn_componentlayer_Relationships {
}
interface msdyn_componentlayer_FormattedResult {
}
interface msdyn_componentlayer_Select {
}
interface msdyn_componentlayer_Expand {
}
interface msdyn_componentlayer_Filter {
}
interface msdyn_componentlayer_Create extends msdyn_componentlayer {
}
interface msdyn_componentlayer_Update extends msdyn_componentlayer {
}
interface msdyn_componentlayerdatasource_Base extends WebEntity {
}
interface msdyn_componentlayerdatasource_Fixed extends WebEntity_Fixed {
  msdyn_componentlayerdatasourceid: string;
}
interface msdyn_componentlayerdatasource extends msdyn_componentlayerdatasource_Base, msdyn_componentlayerdatasource_Relationships {
}
interface msdyn_componentlayerdatasource_Relationships {
}
interface msdyn_componentlayerdatasource_Result extends msdyn_componentlayerdatasource_Base, msdyn_componentlayerdatasource_Relationships {
}
interface msdyn_componentlayerdatasource_FormattedResult {
}
interface msdyn_componentlayerdatasource_Select {
}
interface msdyn_componentlayerdatasource_Expand {
}
interface msdyn_componentlayerdatasource_Filter {
}
interface msdyn_componentlayerdatasource_Create extends msdyn_componentlayerdatasource {
}
interface msdyn_componentlayerdatasource_Update extends msdyn_componentlayerdatasource {
}
interface msdyn_Configuration_Base extends WebEntity {
}
interface msdyn_Configuration_Fixed extends WebEntity_Fixed {
  msdyn_configurationid: string;
}
interface msdyn_Configuration extends msdyn_Configuration_Base, msdyn_Configuration_Relationships {
}
interface msdyn_Configuration_Relationships {
}
interface msdyn_Configuration_Result extends msdyn_Configuration_Base, msdyn_Configuration_Relationships {
}
interface msdyn_Configuration_FormattedResult {
}
interface msdyn_Configuration_Select {
}
interface msdyn_Configuration_Expand {
}
interface msdyn_Configuration_Filter {
}
interface msdyn_Configuration_Create extends msdyn_Configuration {
}
interface msdyn_Configuration_Update extends msdyn_Configuration {
}
interface msdyn_consoleapplicationnotificationfield_Base extends WebEntity {
}
interface msdyn_consoleapplicationnotificationfield_Fixed extends WebEntity_Fixed {
  msdyn_consoleapplicationnotificationfieldid: string;
}
interface msdyn_consoleapplicationnotificationfield extends msdyn_consoleapplicationnotificationfield_Base, msdyn_consoleapplicationnotificationfield_Relationships {
}
interface msdyn_consoleapplicationnotificationfield_Relationships {
}
interface msdyn_consoleapplicationnotificationfield_Result extends msdyn_consoleapplicationnotificationfield_Base, msdyn_consoleapplicationnotificationfield_Relationships {
}
interface msdyn_consoleapplicationnotificationfield_FormattedResult {
}
interface msdyn_consoleapplicationnotificationfield_Select {
}
interface msdyn_consoleapplicationnotificationfield_Expand {
}
interface msdyn_consoleapplicationnotificationfield_Filter {
}
interface msdyn_consoleapplicationnotificationfield_Create extends msdyn_consoleapplicationnotificationfield {
}
interface msdyn_consoleapplicationnotificationfield_Update extends msdyn_consoleapplicationnotificationfield {
}
interface msdyn_consoleapplicationnotificationtemplate_Base extends WebEntity {
}
interface msdyn_consoleapplicationnotificationtemplate_Fixed extends WebEntity_Fixed {
  msdyn_consoleapplicationnotificationtemplateid: string;
}
interface msdyn_consoleapplicationnotificationtemplate extends msdyn_consoleapplicationnotificationtemplate_Base, msdyn_consoleapplicationnotificationtemplate_Relationships {
}
interface msdyn_consoleapplicationnotificationtemplate_Relationships {
}
interface msdyn_consoleapplicationnotificationtemplate_Result extends msdyn_consoleapplicationnotificationtemplate_Base, msdyn_consoleapplicationnotificationtemplate_Relationships {
}
interface msdyn_consoleapplicationnotificationtemplate_FormattedResult {
}
interface msdyn_consoleapplicationnotificationtemplate_Select {
}
interface msdyn_consoleapplicationnotificationtemplate_Expand {
}
interface msdyn_consoleapplicationnotificationtemplate_Filter {
}
interface msdyn_consoleapplicationnotificationtemplate_Create extends msdyn_consoleapplicationnotificationtemplate {
}
interface msdyn_consoleapplicationnotificationtemplate_Update extends msdyn_consoleapplicationnotificationtemplate {
}
interface msdyn_consoleapplicationsessiontemplate_Base extends WebEntity {
}
interface msdyn_consoleapplicationsessiontemplate_Fixed extends WebEntity_Fixed {
  msdyn_consoleapplicationsessiontemplateid: string;
}
interface msdyn_consoleapplicationsessiontemplate extends msdyn_consoleapplicationsessiontemplate_Base, msdyn_consoleapplicationsessiontemplate_Relationships {
}
interface msdyn_consoleapplicationsessiontemplate_Relationships {
}
interface msdyn_consoleapplicationsessiontemplate_Result extends msdyn_consoleapplicationsessiontemplate_Base, msdyn_consoleapplicationsessiontemplate_Relationships {
}
interface msdyn_consoleapplicationsessiontemplate_FormattedResult {
}
interface msdyn_consoleapplicationsessiontemplate_Select {
}
interface msdyn_consoleapplicationsessiontemplate_Expand {
}
interface msdyn_consoleapplicationsessiontemplate_Filter {
}
interface msdyn_consoleapplicationsessiontemplate_Create extends msdyn_consoleapplicationsessiontemplate {
}
interface msdyn_consoleapplicationsessiontemplate_Update extends msdyn_consoleapplicationsessiontemplate {
}
interface msdyn_consoleapplicationtemplate_Base extends WebEntity {
}
interface msdyn_consoleapplicationtemplate_Fixed extends WebEntity_Fixed {
  msdyn_consoleapplicationtemplateid: string;
}
interface msdyn_consoleapplicationtemplate extends msdyn_consoleapplicationtemplate_Base, msdyn_consoleapplicationtemplate_Relationships {
}
interface msdyn_consoleapplicationtemplate_Relationships {
}
interface msdyn_consoleapplicationtemplate_Result extends msdyn_consoleapplicationtemplate_Base, msdyn_consoleapplicationtemplate_Relationships {
}
interface msdyn_consoleapplicationtemplate_FormattedResult {
}
interface msdyn_consoleapplicationtemplate_Select {
}
interface msdyn_consoleapplicationtemplate_Expand {
}
interface msdyn_consoleapplicationtemplate_Filter {
}
interface msdyn_consoleapplicationtemplate_Create extends msdyn_consoleapplicationtemplate {
}
interface msdyn_consoleapplicationtemplate_Update extends msdyn_consoleapplicationtemplate {
}
interface msdyn_consoleapplicationtemplateparameter_Base extends WebEntity {
}
interface msdyn_consoleapplicationtemplateparameter_Fixed extends WebEntity_Fixed {
  msdyn_consoleapplicationtemplateparameterid: string;
}
interface msdyn_consoleapplicationtemplateparameter extends msdyn_consoleapplicationtemplateparameter_Base, msdyn_consoleapplicationtemplateparameter_Relationships {
}
interface msdyn_consoleapplicationtemplateparameter_Relationships {
}
interface msdyn_consoleapplicationtemplateparameter_Result extends msdyn_consoleapplicationtemplateparameter_Base, msdyn_consoleapplicationtemplateparameter_Relationships {
}
interface msdyn_consoleapplicationtemplateparameter_FormattedResult {
}
interface msdyn_consoleapplicationtemplateparameter_Select {
}
interface msdyn_consoleapplicationtemplateparameter_Expand {
}
interface msdyn_consoleapplicationtemplateparameter_Filter {
}
interface msdyn_consoleapplicationtemplateparameter_Create extends msdyn_consoleapplicationtemplateparameter {
}
interface msdyn_consoleapplicationtemplateparameter_Update extends msdyn_consoleapplicationtemplateparameter {
}
interface msdyn_consoleapplicationtype_Base extends WebEntity {
}
interface msdyn_consoleapplicationtype_Fixed extends WebEntity_Fixed {
  msdyn_consoleapplicationtypeid: string;
}
interface msdyn_consoleapplicationtype extends msdyn_consoleapplicationtype_Base, msdyn_consoleapplicationtype_Relationships {
}
interface msdyn_consoleapplicationtype_Relationships {
}
interface msdyn_consoleapplicationtype_Result extends msdyn_consoleapplicationtype_Base, msdyn_consoleapplicationtype_Relationships {
}
interface msdyn_consoleapplicationtype_FormattedResult {
}
interface msdyn_consoleapplicationtype_Select {
}
interface msdyn_consoleapplicationtype_Expand {
}
interface msdyn_consoleapplicationtype_Filter {
}
interface msdyn_consoleapplicationtype_Create extends msdyn_consoleapplicationtype {
}
interface msdyn_consoleapplicationtype_Update extends msdyn_consoleapplicationtype {
}
interface msdyn_consoleappparameterdefinition_Base extends WebEntity {
}
interface msdyn_consoleappparameterdefinition_Fixed extends WebEntity_Fixed {
  msdyn_consoleappparameterdefinitionid: string;
}
interface msdyn_consoleappparameterdefinition extends msdyn_consoleappparameterdefinition_Base, msdyn_consoleappparameterdefinition_Relationships {
}
interface msdyn_consoleappparameterdefinition_Relationships {
}
interface msdyn_consoleappparameterdefinition_Result extends msdyn_consoleappparameterdefinition_Base, msdyn_consoleappparameterdefinition_Relationships {
}
interface msdyn_consoleappparameterdefinition_FormattedResult {
}
interface msdyn_consoleappparameterdefinition_Select {
}
interface msdyn_consoleappparameterdefinition_Expand {
}
interface msdyn_consoleappparameterdefinition_Filter {
}
interface msdyn_consoleappparameterdefinition_Create extends msdyn_consoleappparameterdefinition {
}
interface msdyn_consoleappparameterdefinition_Update extends msdyn_consoleappparameterdefinition {
}
interface msdyn_contactpricelist_Base extends WebEntity {
}
interface msdyn_contactpricelist_Fixed extends WebEntity_Fixed {
  msdyn_contactpricelistid: string;
}
interface msdyn_contactpricelist extends msdyn_contactpricelist_Base, msdyn_contactpricelist_Relationships {
}
interface msdyn_contactpricelist_Relationships {
}
interface msdyn_contactpricelist_Result extends msdyn_contactpricelist_Base, msdyn_contactpricelist_Relationships {
}
interface msdyn_contactpricelist_FormattedResult {
}
interface msdyn_contactpricelist_Select {
}
interface msdyn_contactpricelist_Expand {
}
interface msdyn_contactpricelist_Filter {
}
interface msdyn_contactpricelist_Create extends msdyn_contactpricelist {
}
interface msdyn_contactpricelist_Update extends msdyn_contactpricelist {
}
interface msdyn_contactsuggestionrule_Base extends WebEntity {
}
interface msdyn_contactsuggestionrule_Fixed extends WebEntity_Fixed {
  msdyn_contactsuggestionruleid: string;
}
interface msdyn_contactsuggestionrule extends msdyn_contactsuggestionrule_Base, msdyn_contactsuggestionrule_Relationships {
}
interface msdyn_contactsuggestionrule_Relationships {
}
interface msdyn_contactsuggestionrule_Result extends msdyn_contactsuggestionrule_Base, msdyn_contactsuggestionrule_Relationships {
}
interface msdyn_contactsuggestionrule_FormattedResult {
}
interface msdyn_contactsuggestionrule_Select {
}
interface msdyn_contactsuggestionrule_Expand {
}
interface msdyn_contactsuggestionrule_Filter {
}
interface msdyn_contactsuggestionrule_Create extends msdyn_contactsuggestionrule {
}
interface msdyn_contactsuggestionrule_Update extends msdyn_contactsuggestionrule {
}
interface msdyn_contactsuggestionruleset_Base extends WebEntity {
}
interface msdyn_contactsuggestionruleset_Fixed extends WebEntity_Fixed {
  msdyn_contactsuggestionrulesetid: string;
}
interface msdyn_contactsuggestionruleset extends msdyn_contactsuggestionruleset_Base, msdyn_contactsuggestionruleset_Relationships {
}
interface msdyn_contactsuggestionruleset_Relationships {
}
interface msdyn_contactsuggestionruleset_Result extends msdyn_contactsuggestionruleset_Base, msdyn_contactsuggestionruleset_Relationships {
}
interface msdyn_contactsuggestionruleset_FormattedResult {
}
interface msdyn_contactsuggestionruleset_Select {
}
interface msdyn_contactsuggestionruleset_Expand {
}
interface msdyn_contactsuggestionruleset_Filter {
}
interface msdyn_contactsuggestionruleset_Create extends msdyn_contactsuggestionruleset {
}
interface msdyn_contactsuggestionruleset_Update extends msdyn_contactsuggestionruleset {
}
interface msdyn_contractlinedetailperformance_Base extends WebEntity {
}
interface msdyn_contractlinedetailperformance_Fixed extends WebEntity_Fixed {
  msdyn_contractlinedetailperformanceid: string;
}
interface msdyn_contractlinedetailperformance extends msdyn_contractlinedetailperformance_Base, msdyn_contractlinedetailperformance_Relationships {
}
interface msdyn_contractlinedetailperformance_Relationships {
}
interface msdyn_contractlinedetailperformance_Result extends msdyn_contractlinedetailperformance_Base, msdyn_contractlinedetailperformance_Relationships {
}
interface msdyn_contractlinedetailperformance_FormattedResult {
}
interface msdyn_contractlinedetailperformance_Select {
}
interface msdyn_contractlinedetailperformance_Expand {
}
interface msdyn_contractlinedetailperformance_Filter {
}
interface msdyn_contractlinedetailperformance_Create extends msdyn_contractlinedetailperformance {
}
interface msdyn_contractlinedetailperformance_Update extends msdyn_contractlinedetailperformance {
}
interface msdyn_contractlineinvoiceschedule_Base extends WebEntity {
}
interface msdyn_contractlineinvoiceschedule_Fixed extends WebEntity_Fixed {
  msdyn_contractlineinvoicescheduleid: string;
}
interface msdyn_contractlineinvoiceschedule extends msdyn_contractlineinvoiceschedule_Base, msdyn_contractlineinvoiceschedule_Relationships {
}
interface msdyn_contractlineinvoiceschedule_Relationships {
}
interface msdyn_contractlineinvoiceschedule_Result extends msdyn_contractlineinvoiceschedule_Base, msdyn_contractlineinvoiceschedule_Relationships {
}
interface msdyn_contractlineinvoiceschedule_FormattedResult {
}
interface msdyn_contractlineinvoiceschedule_Select {
}
interface msdyn_contractlineinvoiceschedule_Expand {
}
interface msdyn_contractlineinvoiceschedule_Filter {
}
interface msdyn_contractlineinvoiceschedule_Create extends msdyn_contractlineinvoiceschedule {
}
interface msdyn_contractlineinvoiceschedule_Update extends msdyn_contractlineinvoiceschedule {
}
interface msdyn_contractlinescheduleofvalue_Base extends WebEntity {
}
interface msdyn_contractlinescheduleofvalue_Fixed extends WebEntity_Fixed {
  msdyn_contractlinescheduleofvalueid: string;
}
interface msdyn_contractlinescheduleofvalue extends msdyn_contractlinescheduleofvalue_Base, msdyn_contractlinescheduleofvalue_Relationships {
}
interface msdyn_contractlinescheduleofvalue_Relationships {
}
interface msdyn_contractlinescheduleofvalue_Result extends msdyn_contractlinescheduleofvalue_Base, msdyn_contractlinescheduleofvalue_Relationships {
}
interface msdyn_contractlinescheduleofvalue_FormattedResult {
}
interface msdyn_contractlinescheduleofvalue_Select {
}
interface msdyn_contractlinescheduleofvalue_Expand {
}
interface msdyn_contractlinescheduleofvalue_Filter {
}
interface msdyn_contractlinescheduleofvalue_Create extends msdyn_contractlinescheduleofvalue {
}
interface msdyn_contractlinescheduleofvalue_Update extends msdyn_contractlinescheduleofvalue {
}
interface msdyn_contractperformance_Base extends WebEntity {
}
interface msdyn_contractperformance_Fixed extends WebEntity_Fixed {
  msdyn_contractperformanceid: string;
}
interface msdyn_contractperformance extends msdyn_contractperformance_Base, msdyn_contractperformance_Relationships {
}
interface msdyn_contractperformance_Relationships {
}
interface msdyn_contractperformance_Result extends msdyn_contractperformance_Base, msdyn_contractperformance_Relationships {
}
interface msdyn_contractperformance_FormattedResult {
}
interface msdyn_contractperformance_Select {
}
interface msdyn_contractperformance_Expand {
}
interface msdyn_contractperformance_Filter {
}
interface msdyn_contractperformance_Create extends msdyn_contractperformance {
}
interface msdyn_contractperformance_Update extends msdyn_contractperformance {
}
interface msdyn_conversationaction_Base extends WebEntity {
}
interface msdyn_conversationaction_Fixed extends WebEntity_Fixed {
  msdyn_conversationactionid: string;
}
interface msdyn_conversationaction extends msdyn_conversationaction_Base, msdyn_conversationaction_Relationships {
}
interface msdyn_conversationaction_Relationships {
}
interface msdyn_conversationaction_Result extends msdyn_conversationaction_Base, msdyn_conversationaction_Relationships {
}
interface msdyn_conversationaction_FormattedResult {
}
interface msdyn_conversationaction_Select {
}
interface msdyn_conversationaction_Expand {
}
interface msdyn_conversationaction_Filter {
}
interface msdyn_conversationaction_Create extends msdyn_conversationaction {
}
interface msdyn_conversationaction_Update extends msdyn_conversationaction {
}
interface msdyn_conversationactionlocale_Base extends WebEntity {
}
interface msdyn_conversationactionlocale_Fixed extends WebEntity_Fixed {
  msdyn_conversationactionlocaleid: string;
}
interface msdyn_conversationactionlocale extends msdyn_conversationactionlocale_Base, msdyn_conversationactionlocale_Relationships {
}
interface msdyn_conversationactionlocale_Relationships {
}
interface msdyn_conversationactionlocale_Result extends msdyn_conversationactionlocale_Base, msdyn_conversationactionlocale_Relationships {
}
interface msdyn_conversationactionlocale_FormattedResult {
}
interface msdyn_conversationactionlocale_Select {
}
interface msdyn_conversationactionlocale_Expand {
}
interface msdyn_conversationactionlocale_Filter {
}
interface msdyn_conversationactionlocale_Create extends msdyn_conversationactionlocale {
}
interface msdyn_conversationactionlocale_Update extends msdyn_conversationactionlocale {
}
interface msdyn_conversationdata_Base extends WebEntity {
}
interface msdyn_conversationdata_Fixed extends WebEntity_Fixed {
  msdyn_conversationdataid: string;
}
interface msdyn_conversationdata extends msdyn_conversationdata_Base, msdyn_conversationdata_Relationships {
}
interface msdyn_conversationdata_Relationships {
}
interface msdyn_conversationdata_Result extends msdyn_conversationdata_Base, msdyn_conversationdata_Relationships {
}
interface msdyn_conversationdata_FormattedResult {
}
interface msdyn_conversationdata_Select {
}
interface msdyn_conversationdata_Expand {
}
interface msdyn_conversationdata_Filter {
}
interface msdyn_conversationdata_Create extends msdyn_conversationdata {
}
interface msdyn_conversationdata_Update extends msdyn_conversationdata {
}
interface msdyn_conversationinsight_Base extends WebEntity {
}
interface msdyn_conversationinsight_Fixed extends WebEntity_Fixed {
  msdyn_conversationinsightid: string;
}
interface msdyn_conversationinsight extends msdyn_conversationinsight_Base, msdyn_conversationinsight_Relationships {
}
interface msdyn_conversationinsight_Relationships {
}
interface msdyn_conversationinsight_Result extends msdyn_conversationinsight_Base, msdyn_conversationinsight_Relationships {
}
interface msdyn_conversationinsight_FormattedResult {
}
interface msdyn_conversationinsight_Select {
}
interface msdyn_conversationinsight_Expand {
}
interface msdyn_conversationinsight_Filter {
}
interface msdyn_conversationinsight_Create extends msdyn_conversationinsight {
}
interface msdyn_conversationinsight_Update extends msdyn_conversationinsight {
}
interface msdyn_conversationsuggestionrequestpayload_Base extends WebEntity {
}
interface msdyn_conversationsuggestionrequestpayload_Fixed extends WebEntity_Fixed {
  msdyn_conversationsuggestionrequestpayloadid: string;
}
interface msdyn_conversationsuggestionrequestpayload extends msdyn_conversationsuggestionrequestpayload_Base, msdyn_conversationsuggestionrequestpayload_Relationships {
}
interface msdyn_conversationsuggestionrequestpayload_Relationships {
}
interface msdyn_conversationsuggestionrequestpayload_Result extends msdyn_conversationsuggestionrequestpayload_Base, msdyn_conversationsuggestionrequestpayload_Relationships {
}
interface msdyn_conversationsuggestionrequestpayload_FormattedResult {
}
interface msdyn_conversationsuggestionrequestpayload_Select {
}
interface msdyn_conversationsuggestionrequestpayload_Expand {
}
interface msdyn_conversationsuggestionrequestpayload_Filter {
}
interface msdyn_conversationsuggestionrequestpayload_Create extends msdyn_conversationsuggestionrequestpayload {
}
interface msdyn_conversationsuggestionrequestpayload_Update extends msdyn_conversationsuggestionrequestpayload {
}
interface msdyn_conversationtopic_Base extends WebEntity {
}
interface msdyn_conversationtopic_Fixed extends WebEntity_Fixed {
  msdyn_conversationtopicid: string;
}
interface msdyn_conversationtopic extends msdyn_conversationtopic_Base, msdyn_conversationtopic_Relationships {
}
interface msdyn_conversationtopic_Relationships {
}
interface msdyn_conversationtopic_Result extends msdyn_conversationtopic_Base, msdyn_conversationtopic_Relationships {
}
interface msdyn_conversationtopic_FormattedResult {
}
interface msdyn_conversationtopic_Select {
}
interface msdyn_conversationtopic_Expand {
}
interface msdyn_conversationtopic_Filter {
}
interface msdyn_conversationtopic_Create extends msdyn_conversationtopic {
}
interface msdyn_conversationtopic_Update extends msdyn_conversationtopic {
}
interface msdyn_conversationtopic_conversation_Base extends WebEntity {
}
interface msdyn_conversationtopic_conversation_Fixed extends WebEntity_Fixed {
  msdyn_conversationtopic_conversationid: string;
}
interface msdyn_conversationtopic_conversation extends msdyn_conversationtopic_conversation_Base, msdyn_conversationtopic_conversation_Relationships {
}
interface msdyn_conversationtopic_conversation_Relationships {
}
interface msdyn_conversationtopic_conversation_Result extends msdyn_conversationtopic_conversation_Base, msdyn_conversationtopic_conversation_Relationships {
}
interface msdyn_conversationtopic_conversation_FormattedResult {
}
interface msdyn_conversationtopic_conversation_Select {
}
interface msdyn_conversationtopic_conversation_Expand {
}
interface msdyn_conversationtopic_conversation_Filter {
}
interface msdyn_conversationtopic_conversation_Create extends msdyn_conversationtopic_conversation {
}
interface msdyn_conversationtopic_conversation_Update extends msdyn_conversationtopic_conversation {
}
interface msdyn_conversationtopicsetting_Base extends WebEntity {
}
interface msdyn_conversationtopicsetting_Fixed extends WebEntity_Fixed {
  msdyn_conversationtopicsettingid: string;
}
interface msdyn_conversationtopicsetting extends msdyn_conversationtopicsetting_Base, msdyn_conversationtopicsetting_Relationships {
}
interface msdyn_conversationtopicsetting_Relationships {
}
interface msdyn_conversationtopicsetting_Result extends msdyn_conversationtopicsetting_Base, msdyn_conversationtopicsetting_Relationships {
}
interface msdyn_conversationtopicsetting_FormattedResult {
}
interface msdyn_conversationtopicsetting_Select {
}
interface msdyn_conversationtopicsetting_Expand {
}
interface msdyn_conversationtopicsetting_Filter {
}
interface msdyn_conversationtopicsetting_Create extends msdyn_conversationtopicsetting {
}
interface msdyn_conversationtopicsetting_Update extends msdyn_conversationtopicsetting {
}
interface msdyn_conversationtopicsummary_Base extends WebEntity {
}
interface msdyn_conversationtopicsummary_Fixed extends WebEntity_Fixed {
  msdyn_conversationtopicsummaryid: string;
}
interface msdyn_conversationtopicsummary extends msdyn_conversationtopicsummary_Base, msdyn_conversationtopicsummary_Relationships {
}
interface msdyn_conversationtopicsummary_Relationships {
}
interface msdyn_conversationtopicsummary_Result extends msdyn_conversationtopicsummary_Base, msdyn_conversationtopicsummary_Relationships {
}
interface msdyn_conversationtopicsummary_FormattedResult {
}
interface msdyn_conversationtopicsummary_Select {
}
interface msdyn_conversationtopicsummary_Expand {
}
interface msdyn_conversationtopicsummary_Filter {
}
interface msdyn_conversationtopicsummary_Create extends msdyn_conversationtopicsummary {
}
interface msdyn_conversationtopicsummary_Update extends msdyn_conversationtopicsummary {
}
interface msdyn_customengagementctx_Base extends WebEntity {
}
interface msdyn_customengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_customengagementctxid: string;
}
interface msdyn_customengagementctx extends msdyn_customengagementctx_Base, msdyn_customengagementctx_Relationships {
}
interface msdyn_customengagementctx_Relationships {
}
interface msdyn_customengagementctx_Result extends msdyn_customengagementctx_Base, msdyn_customengagementctx_Relationships {
}
interface msdyn_customengagementctx_FormattedResult {
}
interface msdyn_customengagementctx_Select {
}
interface msdyn_customengagementctx_Expand {
}
interface msdyn_customengagementctx_Filter {
}
interface msdyn_customengagementctx_Create extends msdyn_customengagementctx {
}
interface msdyn_customengagementctx_Update extends msdyn_customengagementctx {
}
interface msdyn_customerasset_Base extends WebEntity {
}
interface msdyn_customerasset_Fixed extends WebEntity_Fixed {
  msdyn_customerassetid: string;
}
interface msdyn_customerasset extends msdyn_customerasset_Base, msdyn_customerasset_Relationships {
}
interface msdyn_customerasset_Relationships {
}
interface msdyn_customerasset_Result extends msdyn_customerasset_Base, msdyn_customerasset_Relationships {
}
interface msdyn_customerasset_FormattedResult {
}
interface msdyn_customerasset_Select {
}
interface msdyn_customerasset_Expand {
}
interface msdyn_customerasset_Filter {
}
interface msdyn_customerasset_Create extends msdyn_customerasset {
}
interface msdyn_customerasset_Update extends msdyn_customerasset {
}
interface msdyn_customerassetattachment_Base extends WebEntity {
}
interface msdyn_customerassetattachment_Fixed extends WebEntity_Fixed {
  msdyn_customerassetattachmentid: string;
}
interface msdyn_customerassetattachment extends msdyn_customerassetattachment_Base, msdyn_customerassetattachment_Relationships {
}
interface msdyn_customerassetattachment_Relationships {
}
interface msdyn_customerassetattachment_Result extends msdyn_customerassetattachment_Base, msdyn_customerassetattachment_Relationships {
}
interface msdyn_customerassetattachment_FormattedResult {
}
interface msdyn_customerassetattachment_Select {
}
interface msdyn_customerassetattachment_Expand {
}
interface msdyn_customerassetattachment_Filter {
}
interface msdyn_customerassetattachment_Create extends msdyn_customerassetattachment {
}
interface msdyn_customerassetattachment_Update extends msdyn_customerassetattachment {
}
interface msdyn_customerassetcategory_Base extends WebEntity {
}
interface msdyn_customerassetcategory_Fixed extends WebEntity_Fixed {
  msdyn_customerassetcategoryid: string;
}
interface msdyn_customerassetcategory extends msdyn_customerassetcategory_Base, msdyn_customerassetcategory_Relationships {
}
interface msdyn_customerassetcategory_Relationships {
}
interface msdyn_customerassetcategory_Result extends msdyn_customerassetcategory_Base, msdyn_customerassetcategory_Relationships {
}
interface msdyn_customerassetcategory_FormattedResult {
}
interface msdyn_customerassetcategory_Select {
}
interface msdyn_customerassetcategory_Expand {
}
interface msdyn_customerassetcategory_Filter {
}
interface msdyn_customerassetcategory_Create extends msdyn_customerassetcategory {
}
interface msdyn_customerassetcategory_Update extends msdyn_customerassetcategory {
}
interface msdyn_dataanalyticsreport_Base extends WebEntity {
}
interface msdyn_dataanalyticsreport_Fixed extends WebEntity_Fixed {
  msdyn_dataanalyticsreportid: string;
}
interface msdyn_dataanalyticsreport extends msdyn_dataanalyticsreport_Base, msdyn_dataanalyticsreport_Relationships {
}
interface msdyn_dataanalyticsreport_Relationships {
}
interface msdyn_dataanalyticsreport_Result extends msdyn_dataanalyticsreport_Base, msdyn_dataanalyticsreport_Relationships {
}
interface msdyn_dataanalyticsreport_FormattedResult {
}
interface msdyn_dataanalyticsreport_Select {
}
interface msdyn_dataanalyticsreport_Expand {
}
interface msdyn_dataanalyticsreport_Filter {
}
interface msdyn_dataanalyticsreport_Create extends msdyn_dataanalyticsreport {
}
interface msdyn_dataanalyticsreport_Update extends msdyn_dataanalyticsreport {
}
interface msdyn_dataanalyticsreport_csrmanager_Base extends WebEntity {
}
interface msdyn_dataanalyticsreport_csrmanager_Fixed extends WebEntity_Fixed {
  msdyn_dataanalyticsreport_csrmanagerid: string;
}
interface msdyn_dataanalyticsreport_csrmanager extends msdyn_dataanalyticsreport_csrmanager_Base, msdyn_dataanalyticsreport_csrmanager_Relationships {
}
interface msdyn_dataanalyticsreport_csrmanager_Relationships {
}
interface msdyn_dataanalyticsreport_csrmanager_Result extends msdyn_dataanalyticsreport_csrmanager_Base, msdyn_dataanalyticsreport_csrmanager_Relationships {
}
interface msdyn_dataanalyticsreport_csrmanager_FormattedResult {
}
interface msdyn_dataanalyticsreport_csrmanager_Select {
}
interface msdyn_dataanalyticsreport_csrmanager_Expand {
}
interface msdyn_dataanalyticsreport_csrmanager_Filter {
}
interface msdyn_dataanalyticsreport_csrmanager_Create extends msdyn_dataanalyticsreport_csrmanager {
}
interface msdyn_dataanalyticsreport_csrmanager_Update extends msdyn_dataanalyticsreport_csrmanager {
}
interface msdyn_dataanalyticsreport_fs_Base extends WebEntity {
}
interface msdyn_dataanalyticsreport_fs_Fixed extends WebEntity_Fixed {
  msdyn_dataanalyticsreport_fsid: string;
}
interface msdyn_dataanalyticsreport_fs extends msdyn_dataanalyticsreport_fs_Base, msdyn_dataanalyticsreport_fs_Relationships {
}
interface msdyn_dataanalyticsreport_fs_Relationships {
}
interface msdyn_dataanalyticsreport_fs_Result extends msdyn_dataanalyticsreport_fs_Base, msdyn_dataanalyticsreport_fs_Relationships {
}
interface msdyn_dataanalyticsreport_fs_FormattedResult {
}
interface msdyn_dataanalyticsreport_fs_Select {
}
interface msdyn_dataanalyticsreport_fs_Expand {
}
interface msdyn_dataanalyticsreport_fs_Filter {
}
interface msdyn_dataanalyticsreport_fs_Create extends msdyn_dataanalyticsreport_fs {
}
interface msdyn_dataanalyticsreport_fs_Update extends msdyn_dataanalyticsreport_fs {
}
interface msdyn_dataanalyticsreport_fspredictrs_Base extends WebEntity {
}
interface msdyn_dataanalyticsreport_fspredictrs_Fixed extends WebEntity_Fixed {
  msdyn_dataanalyticsreport_fspredictrsid: string;
}
interface msdyn_dataanalyticsreport_fspredictrs extends msdyn_dataanalyticsreport_fspredictrs_Base, msdyn_dataanalyticsreport_fspredictrs_Relationships {
}
interface msdyn_dataanalyticsreport_fspredictrs_Relationships {
}
interface msdyn_dataanalyticsreport_fspredictrs_Result extends msdyn_dataanalyticsreport_fspredictrs_Base, msdyn_dataanalyticsreport_fspredictrs_Relationships {
}
interface msdyn_dataanalyticsreport_fspredictrs_FormattedResult {
}
interface msdyn_dataanalyticsreport_fspredictrs_Select {
}
interface msdyn_dataanalyticsreport_fspredictrs_Expand {
}
interface msdyn_dataanalyticsreport_fspredictrs_Filter {
}
interface msdyn_dataanalyticsreport_fspredictrs_Create extends msdyn_dataanalyticsreport_fspredictrs {
}
interface msdyn_dataanalyticsreport_fspredictrs_Update extends msdyn_dataanalyticsreport_fspredictrs {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Base extends WebEntity {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Fixed extends WebEntity_Fixed {
  msdyn_dataanalyticsreport_fspredictwhdid: string;
}
interface msdyn_dataanalyticsreport_fspredictwhd extends msdyn_dataanalyticsreport_fspredictwhd_Base, msdyn_dataanalyticsreport_fspredictwhd_Relationships {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Relationships {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Result extends msdyn_dataanalyticsreport_fspredictwhd_Base, msdyn_dataanalyticsreport_fspredictwhd_Relationships {
}
interface msdyn_dataanalyticsreport_fspredictwhd_FormattedResult {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Select {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Expand {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Filter {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Create extends msdyn_dataanalyticsreport_fspredictwhd {
}
interface msdyn_dataanalyticsreport_fspredictwhd_Update extends msdyn_dataanalyticsreport_fspredictwhd {
}
interface msdyn_dataanalyticsreport_ksinsights_Base extends WebEntity {
}
interface msdyn_dataanalyticsreport_ksinsights_Fixed extends WebEntity_Fixed {
  msdyn_dataanalyticsreport_ksinsightsid: string;
}
interface msdyn_dataanalyticsreport_ksinsights extends msdyn_dataanalyticsreport_ksinsights_Base, msdyn_dataanalyticsreport_ksinsights_Relationships {
}
interface msdyn_dataanalyticsreport_ksinsights_Relationships {
}
interface msdyn_dataanalyticsreport_ksinsights_Result extends msdyn_dataanalyticsreport_ksinsights_Base, msdyn_dataanalyticsreport_ksinsights_Relationships {
}
interface msdyn_dataanalyticsreport_ksinsights_FormattedResult {
}
interface msdyn_dataanalyticsreport_ksinsights_Select {
}
interface msdyn_dataanalyticsreport_ksinsights_Expand {
}
interface msdyn_dataanalyticsreport_ksinsights_Filter {
}
interface msdyn_dataanalyticsreport_ksinsights_Create extends msdyn_dataanalyticsreport_ksinsights {
}
interface msdyn_dataanalyticsreport_ksinsights_Update extends msdyn_dataanalyticsreport_ksinsights {
}
interface msdyn_dataanalyticsreport_oc_Base extends WebEntity {
}
interface msdyn_dataanalyticsreport_oc_Fixed extends WebEntity_Fixed {
  msdyn_dataanalyticsreport_ocid: string;
}
interface msdyn_dataanalyticsreport_oc extends msdyn_dataanalyticsreport_oc_Base, msdyn_dataanalyticsreport_oc_Relationships {
}
interface msdyn_dataanalyticsreport_oc_Relationships {
}
interface msdyn_dataanalyticsreport_oc_Result extends msdyn_dataanalyticsreport_oc_Base, msdyn_dataanalyticsreport_oc_Relationships {
}
interface msdyn_dataanalyticsreport_oc_FormattedResult {
}
interface msdyn_dataanalyticsreport_oc_Select {
}
interface msdyn_dataanalyticsreport_oc_Expand {
}
interface msdyn_dataanalyticsreport_oc_Filter {
}
interface msdyn_dataanalyticsreport_oc_Create extends msdyn_dataanalyticsreport_oc {
}
interface msdyn_dataanalyticsreport_oc_Update extends msdyn_dataanalyticsreport_oc {
}
interface msdyn_dataanalyticsreport_ocvoice_Base extends WebEntity {
}
interface msdyn_dataanalyticsreport_ocvoice_Fixed extends WebEntity_Fixed {
  msdyn_dataanalyticsreport_ocvoiceid: string;
}
interface msdyn_dataanalyticsreport_ocvoice extends msdyn_dataanalyticsreport_ocvoice_Base, msdyn_dataanalyticsreport_ocvoice_Relationships {
}
interface msdyn_dataanalyticsreport_ocvoice_Relationships {
}
interface msdyn_dataanalyticsreport_ocvoice_Result extends msdyn_dataanalyticsreport_ocvoice_Base, msdyn_dataanalyticsreport_ocvoice_Relationships {
}
interface msdyn_dataanalyticsreport_ocvoice_FormattedResult {
}
interface msdyn_dataanalyticsreport_ocvoice_Select {
}
interface msdyn_dataanalyticsreport_ocvoice_Expand {
}
interface msdyn_dataanalyticsreport_ocvoice_Filter {
}
interface msdyn_dataanalyticsreport_ocvoice_Create extends msdyn_dataanalyticsreport_ocvoice {
}
interface msdyn_dataanalyticsreport_ocvoice_Update extends msdyn_dataanalyticsreport_ocvoice {
}
interface msdyn_databaseversion_Base extends WebEntity {
}
interface msdyn_databaseversion_Fixed extends WebEntity_Fixed {
  msdyn_databaseversionid: string;
}
interface msdyn_databaseversion extends msdyn_databaseversion_Base, msdyn_databaseversion_Relationships {
}
interface msdyn_databaseversion_Relationships {
}
interface msdyn_databaseversion_Result extends msdyn_databaseversion_Base, msdyn_databaseversion_Relationships {
}
interface msdyn_databaseversion_FormattedResult {
}
interface msdyn_databaseversion_Select {
}
interface msdyn_databaseversion_Expand {
}
interface msdyn_databaseversion_Filter {
}
interface msdyn_databaseversion_Create extends msdyn_databaseversion {
}
interface msdyn_databaseversion_Update extends msdyn_databaseversion {
}
interface msdyn_dataexport_Base extends WebEntity {
}
interface msdyn_dataexport_Fixed extends WebEntity_Fixed {
  msdyn_dataexportid: string;
}
interface msdyn_dataexport extends msdyn_dataexport_Base, msdyn_dataexport_Relationships {
}
interface msdyn_dataexport_Relationships {
}
interface msdyn_dataexport_Result extends msdyn_dataexport_Base, msdyn_dataexport_Relationships {
}
interface msdyn_dataexport_FormattedResult {
}
interface msdyn_dataexport_Select {
}
interface msdyn_dataexport_Expand {
}
interface msdyn_dataexport_Filter {
}
interface msdyn_dataexport_Create extends msdyn_dataexport {
}
interface msdyn_dataexport_Update extends msdyn_dataexport {
}
interface msdyn_dataflow_Base extends WebEntity {
}
interface msdyn_dataflow_Fixed extends WebEntity_Fixed {
  msdyn_dataflowid: string;
}
interface msdyn_dataflow extends msdyn_dataflow_Base, msdyn_dataflow_Relationships {
}
interface msdyn_dataflow_Relationships {
}
interface msdyn_dataflow_Result extends msdyn_dataflow_Base, msdyn_dataflow_Relationships {
}
interface msdyn_dataflow_FormattedResult {
}
interface msdyn_dataflow_Select {
}
interface msdyn_dataflow_Expand {
}
interface msdyn_dataflow_Filter {
}
interface msdyn_dataflow_Create extends msdyn_dataflow {
}
interface msdyn_dataflow_Update extends msdyn_dataflow {
}
interface msdyn_datainsightsandanalyticsfeature_Base extends WebEntity {
}
interface msdyn_datainsightsandanalyticsfeature_Fixed extends WebEntity_Fixed {
  msdyn_datainsightsandanalyticsfeatureid: string;
}
interface msdyn_datainsightsandanalyticsfeature extends msdyn_datainsightsandanalyticsfeature_Base, msdyn_datainsightsandanalyticsfeature_Relationships {
}
interface msdyn_datainsightsandanalyticsfeature_Relationships {
}
interface msdyn_datainsightsandanalyticsfeature_Result extends msdyn_datainsightsandanalyticsfeature_Base, msdyn_datainsightsandanalyticsfeature_Relationships {
}
interface msdyn_datainsightsandanalyticsfeature_FormattedResult {
}
interface msdyn_datainsightsandanalyticsfeature_Select {
}
interface msdyn_datainsightsandanalyticsfeature_Expand {
}
interface msdyn_datainsightsandanalyticsfeature_Filter {
}
interface msdyn_datainsightsandanalyticsfeature_Create extends msdyn_datainsightsandanalyticsfeature {
}
interface msdyn_datainsightsandanalyticsfeature_Update extends msdyn_datainsightsandanalyticsfeature {
}
interface msdyn_dealmanageraccess_Base extends WebEntity {
}
interface msdyn_dealmanageraccess_Fixed extends WebEntity_Fixed {
  msdyn_dealmanageraccessid: string;
}
interface msdyn_dealmanageraccess extends msdyn_dealmanageraccess_Base, msdyn_dealmanageraccess_Relationships {
}
interface msdyn_dealmanageraccess_Relationships {
}
interface msdyn_dealmanageraccess_Result extends msdyn_dealmanageraccess_Base, msdyn_dealmanageraccess_Relationships {
}
interface msdyn_dealmanageraccess_FormattedResult {
}
interface msdyn_dealmanageraccess_Select {
}
interface msdyn_dealmanageraccess_Expand {
}
interface msdyn_dealmanageraccess_Filter {
}
interface msdyn_dealmanageraccess_Create extends msdyn_dealmanageraccess {
}
interface msdyn_dealmanageraccess_Update extends msdyn_dealmanageraccess {
}
interface msdyn_dealmanagersettings_Base extends WebEntity {
}
interface msdyn_dealmanagersettings_Fixed extends WebEntity_Fixed {
  msdyn_dealmanagersettingsid: string;
}
interface msdyn_dealmanagersettings extends msdyn_dealmanagersettings_Base, msdyn_dealmanagersettings_Relationships {
}
interface msdyn_dealmanagersettings_Relationships {
}
interface msdyn_dealmanagersettings_Result extends msdyn_dealmanagersettings_Base, msdyn_dealmanagersettings_Relationships {
}
interface msdyn_dealmanagersettings_FormattedResult {
}
interface msdyn_dealmanagersettings_Select {
}
interface msdyn_dealmanagersettings_Expand {
}
interface msdyn_dealmanagersettings_Filter {
}
interface msdyn_dealmanagersettings_Create extends msdyn_dealmanagersettings {
}
interface msdyn_dealmanagersettings_Update extends msdyn_dealmanagersettings {
}
interface msdyn_decisioncontract_Base extends WebEntity {
}
interface msdyn_decisioncontract_Fixed extends WebEntity_Fixed {
  msdyn_decisioncontractid: string;
}
interface msdyn_decisioncontract extends msdyn_decisioncontract_Base, msdyn_decisioncontract_Relationships {
}
interface msdyn_decisioncontract_Relationships {
}
interface msdyn_decisioncontract_Result extends msdyn_decisioncontract_Base, msdyn_decisioncontract_Relationships {
}
interface msdyn_decisioncontract_FormattedResult {
}
interface msdyn_decisioncontract_Select {
}
interface msdyn_decisioncontract_Expand {
}
interface msdyn_decisioncontract_Filter {
}
interface msdyn_decisioncontract_Create extends msdyn_decisioncontract {
}
interface msdyn_decisioncontract_Update extends msdyn_decisioncontract {
}
interface msdyn_decisionruleset_Base extends WebEntity {
}
interface msdyn_decisionruleset_Fixed extends WebEntity_Fixed {
  msdyn_decisionrulesetid: string;
}
interface msdyn_decisionruleset extends msdyn_decisionruleset_Base, msdyn_decisionruleset_Relationships {
}
interface msdyn_decisionruleset_Relationships {
}
interface msdyn_decisionruleset_Result extends msdyn_decisionruleset_Base, msdyn_decisionruleset_Relationships {
}
interface msdyn_decisionruleset_FormattedResult {
}
interface msdyn_decisionruleset_Select {
}
interface msdyn_decisionruleset_Expand {
}
interface msdyn_decisionruleset_Filter {
}
interface msdyn_decisionruleset_Create extends msdyn_decisionruleset {
}
interface msdyn_decisionruleset_Update extends msdyn_decisionruleset {
}
interface msdyn_delegation_Base extends WebEntity {
}
interface msdyn_delegation_Fixed extends WebEntity_Fixed {
  msdyn_delegationid: string;
}
interface msdyn_delegation extends msdyn_delegation_Base, msdyn_delegation_Relationships {
}
interface msdyn_delegation_Relationships {
}
interface msdyn_delegation_Result extends msdyn_delegation_Base, msdyn_delegation_Relationships {
}
interface msdyn_delegation_FormattedResult {
}
interface msdyn_delegation_Select {
}
interface msdyn_delegation_Expand {
}
interface msdyn_delegation_Filter {
}
interface msdyn_delegation_Create extends msdyn_delegation {
}
interface msdyn_delegation_Update extends msdyn_delegation {
}
interface msdyn_dimension_Base extends WebEntity {
}
interface msdyn_dimension_Fixed extends WebEntity_Fixed {
  msdyn_dimensionid: string;
}
interface msdyn_dimension extends msdyn_dimension_Base, msdyn_dimension_Relationships {
}
interface msdyn_dimension_Relationships {
}
interface msdyn_dimension_Result extends msdyn_dimension_Base, msdyn_dimension_Relationships {
}
interface msdyn_dimension_FormattedResult {
}
interface msdyn_dimension_Select {
}
interface msdyn_dimension_Expand {
}
interface msdyn_dimension_Filter {
}
interface msdyn_dimension_Create extends msdyn_dimension {
}
interface msdyn_dimension_Update extends msdyn_dimension {
}
interface msdyn_dimensionfieldname_Base extends WebEntity {
}
interface msdyn_dimensionfieldname_Fixed extends WebEntity_Fixed {
  msdyn_dimensionfieldnameid: string;
}
interface msdyn_dimensionfieldname extends msdyn_dimensionfieldname_Base, msdyn_dimensionfieldname_Relationships {
}
interface msdyn_dimensionfieldname_Relationships {
}
interface msdyn_dimensionfieldname_Result extends msdyn_dimensionfieldname_Base, msdyn_dimensionfieldname_Relationships {
}
interface msdyn_dimensionfieldname_FormattedResult {
}
interface msdyn_dimensionfieldname_Select {
}
interface msdyn_dimensionfieldname_Expand {
}
interface msdyn_dimensionfieldname_Filter {
}
interface msdyn_dimensionfieldname_Create extends msdyn_dimensionfieldname {
}
interface msdyn_dimensionfieldname_Update extends msdyn_dimensionfieldname {
}
interface msdyn_effortpredictionresult_Base extends WebEntity {
}
interface msdyn_effortpredictionresult_Fixed extends WebEntity_Fixed {
  msdyn_effortpredictionresultid: string;
}
interface msdyn_effortpredictionresult extends msdyn_effortpredictionresult_Base, msdyn_effortpredictionresult_Relationships {
}
interface msdyn_effortpredictionresult_Relationships {
}
interface msdyn_effortpredictionresult_Result extends msdyn_effortpredictionresult_Base, msdyn_effortpredictionresult_Relationships {
}
interface msdyn_effortpredictionresult_FormattedResult {
}
interface msdyn_effortpredictionresult_Select {
}
interface msdyn_effortpredictionresult_Expand {
}
interface msdyn_effortpredictionresult_Filter {
}
interface msdyn_effortpredictionresult_Create extends msdyn_effortpredictionresult {
}
interface msdyn_effortpredictionresult_Update extends msdyn_effortpredictionresult {
}
interface msdyn_entitlementapplication_Base extends WebEntity {
}
interface msdyn_entitlementapplication_Fixed extends WebEntity_Fixed {
  msdyn_entitlementapplicationid: string;
}
interface msdyn_entitlementapplication extends msdyn_entitlementapplication_Base, msdyn_entitlementapplication_Relationships {
}
interface msdyn_entitlementapplication_Relationships {
}
interface msdyn_entitlementapplication_Result extends msdyn_entitlementapplication_Base, msdyn_entitlementapplication_Relationships {
}
interface msdyn_entitlementapplication_FormattedResult {
}
interface msdyn_entitlementapplication_Select {
}
interface msdyn_entitlementapplication_Expand {
}
interface msdyn_entitlementapplication_Filter {
}
interface msdyn_entitlementapplication_Create extends msdyn_entitlementapplication {
}
interface msdyn_entitlementapplication_Update extends msdyn_entitlementapplication {
}
interface msdyn_entityconfig_Base extends WebEntity {
}
interface msdyn_entityconfig_Fixed extends WebEntity_Fixed {
  msdyn_entityconfigid: string;
}
interface msdyn_entityconfig extends msdyn_entityconfig_Base, msdyn_entityconfig_Relationships {
}
interface msdyn_entityconfig_Relationships {
}
interface msdyn_entityconfig_Result extends msdyn_entityconfig_Base, msdyn_entityconfig_Relationships {
}
interface msdyn_entityconfig_FormattedResult {
}
interface msdyn_entityconfig_Select {
}
interface msdyn_entityconfig_Expand {
}
interface msdyn_entityconfig_Filter {
}
interface msdyn_entityconfig_Create extends msdyn_entityconfig {
}
interface msdyn_entityconfig_Update extends msdyn_entityconfig {
}
interface msdyn_entityconfiguration_Base extends WebEntity {
}
interface msdyn_entityconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_entityconfigurationid: string;
}
interface msdyn_entityconfiguration extends msdyn_entityconfiguration_Base, msdyn_entityconfiguration_Relationships {
}
interface msdyn_entityconfiguration_Relationships {
}
interface msdyn_entityconfiguration_Result extends msdyn_entityconfiguration_Base, msdyn_entityconfiguration_Relationships {
}
interface msdyn_entityconfiguration_FormattedResult {
}
interface msdyn_entityconfiguration_Select {
}
interface msdyn_entityconfiguration_Expand {
}
interface msdyn_entityconfiguration_Filter {
}
interface msdyn_entityconfiguration_Create extends msdyn_entityconfiguration {
}
interface msdyn_entityconfiguration_Update extends msdyn_entityconfiguration {
}
interface msdyn_entitylinkchatconfiguration_Base extends WebEntity {
}
interface msdyn_entitylinkchatconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_entitylinkchatconfigurationid: string;
}
interface msdyn_entitylinkchatconfiguration extends msdyn_entitylinkchatconfiguration_Base, msdyn_entitylinkchatconfiguration_Relationships {
}
interface msdyn_entitylinkchatconfiguration_Relationships {
}
interface msdyn_entitylinkchatconfiguration_Result extends msdyn_entitylinkchatconfiguration_Base, msdyn_entitylinkchatconfiguration_Relationships {
}
interface msdyn_entitylinkchatconfiguration_FormattedResult {
}
interface msdyn_entitylinkchatconfiguration_Select {
}
interface msdyn_entitylinkchatconfiguration_Expand {
}
interface msdyn_entitylinkchatconfiguration_Filter {
}
interface msdyn_entitylinkchatconfiguration_Create extends msdyn_entitylinkchatconfiguration {
}
interface msdyn_entitylinkchatconfiguration_Update extends msdyn_entitylinkchatconfiguration {
}
interface msdyn_entityrankingrule_Base extends WebEntity {
}
interface msdyn_entityrankingrule_Fixed extends WebEntity_Fixed {
  msdyn_entityrankingruleid: string;
}
interface msdyn_entityrankingrule extends msdyn_entityrankingrule_Base, msdyn_entityrankingrule_Relationships {
}
interface msdyn_entityrankingrule_Relationships {
}
interface msdyn_entityrankingrule_Result extends msdyn_entityrankingrule_Base, msdyn_entityrankingrule_Relationships {
}
interface msdyn_entityrankingrule_FormattedResult {
}
interface msdyn_entityrankingrule_Select {
}
interface msdyn_entityrankingrule_Expand {
}
interface msdyn_entityrankingrule_Filter {
}
interface msdyn_entityrankingrule_Create extends msdyn_entityrankingrule {
}
interface msdyn_entityrankingrule_Update extends msdyn_entityrankingrule {
}
interface msdyn_entityroutingconfiguration_Base extends WebEntity {
}
interface msdyn_entityroutingconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_entityroutingconfigurationid: string;
}
interface msdyn_entityroutingconfiguration extends msdyn_entityroutingconfiguration_Base, msdyn_entityroutingconfiguration_Relationships {
}
interface msdyn_entityroutingconfiguration_Relationships {
}
interface msdyn_entityroutingconfiguration_Result extends msdyn_entityroutingconfiguration_Base, msdyn_entityroutingconfiguration_Relationships {
}
interface msdyn_entityroutingconfiguration_FormattedResult {
}
interface msdyn_entityroutingconfiguration_Select {
}
interface msdyn_entityroutingconfiguration_Expand {
}
interface msdyn_entityroutingconfiguration_Filter {
}
interface msdyn_entityroutingconfiguration_Create extends msdyn_entityroutingconfiguration {
}
interface msdyn_entityroutingconfiguration_Update extends msdyn_entityroutingconfiguration {
}
interface msdyn_estimate_Base extends WebEntity {
}
interface msdyn_estimate_Fixed extends WebEntity_Fixed {
  msdyn_estimateid: string;
}
interface msdyn_estimate extends msdyn_estimate_Base, msdyn_estimate_Relationships {
}
interface msdyn_estimate_Relationships {
}
interface msdyn_estimate_Result extends msdyn_estimate_Base, msdyn_estimate_Relationships {
}
interface msdyn_estimate_FormattedResult {
}
interface msdyn_estimate_Select {
}
interface msdyn_estimate_Expand {
}
interface msdyn_estimate_Filter {
}
interface msdyn_estimate_Create extends msdyn_estimate {
}
interface msdyn_estimate_Update extends msdyn_estimate {
}
interface msdyn_estimateline_Base extends WebEntity {
}
interface msdyn_estimateline_Fixed extends WebEntity_Fixed {
  msdyn_estimatelineid: string;
}
interface msdyn_estimateline extends msdyn_estimateline_Base, msdyn_estimateline_Relationships {
}
interface msdyn_estimateline_Relationships {
}
interface msdyn_estimateline_Result extends msdyn_estimateline_Base, msdyn_estimateline_Relationships {
}
interface msdyn_estimateline_FormattedResult {
}
interface msdyn_estimateline_Select {
}
interface msdyn_estimateline_Expand {
}
interface msdyn_estimateline_Filter {
}
interface msdyn_estimateline_Create extends msdyn_estimateline {
}
interface msdyn_estimateline_Update extends msdyn_estimateline {
}
interface msdyn_expense_Base extends WebEntity {
}
interface msdyn_expense_Fixed extends WebEntity_Fixed {
  msdyn_expenseid: string;
}
interface msdyn_expense extends msdyn_expense_Base, msdyn_expense_Relationships {
}
interface msdyn_expense_Relationships {
}
interface msdyn_expense_Result extends msdyn_expense_Base, msdyn_expense_Relationships {
}
interface msdyn_expense_FormattedResult {
}
interface msdyn_expense_Select {
}
interface msdyn_expense_Expand {
}
interface msdyn_expense_Filter {
}
interface msdyn_expense_Create extends msdyn_expense {
}
interface msdyn_expense_Update extends msdyn_expense {
}
interface msdyn_expensecategory_Base extends WebEntity {
}
interface msdyn_expensecategory_Fixed extends WebEntity_Fixed {
  msdyn_expensecategoryid: string;
}
interface msdyn_expensecategory extends msdyn_expensecategory_Base, msdyn_expensecategory_Relationships {
}
interface msdyn_expensecategory_Relationships {
}
interface msdyn_expensecategory_Result extends msdyn_expensecategory_Base, msdyn_expensecategory_Relationships {
}
interface msdyn_expensecategory_FormattedResult {
}
interface msdyn_expensecategory_Select {
}
interface msdyn_expensecategory_Expand {
}
interface msdyn_expensecategory_Filter {
}
interface msdyn_expensecategory_Create extends msdyn_expensecategory {
}
interface msdyn_expensecategory_Update extends msdyn_expensecategory {
}
interface msdyn_expensereceipt_Base extends WebEntity {
}
interface msdyn_expensereceipt_Fixed extends WebEntity_Fixed {
  msdyn_expensereceiptid: string;
}
interface msdyn_expensereceipt extends msdyn_expensereceipt_Base, msdyn_expensereceipt_Relationships {
}
interface msdyn_expensereceipt_Relationships {
}
interface msdyn_expensereceipt_Result extends msdyn_expensereceipt_Base, msdyn_expensereceipt_Relationships {
}
interface msdyn_expensereceipt_FormattedResult {
}
interface msdyn_expensereceipt_Select {
}
interface msdyn_expensereceipt_Expand {
}
interface msdyn_expensereceipt_Filter {
}
interface msdyn_expensereceipt_Create extends msdyn_expensereceipt {
}
interface msdyn_expensereceipt_Update extends msdyn_expensereceipt {
}
interface msdyn_extendedusersetting_Base extends WebEntity {
}
interface msdyn_extendedusersetting_Fixed extends WebEntity_Fixed {
  msdyn_extendedusersettingid: string;
}
interface msdyn_extendedusersetting extends msdyn_extendedusersetting_Base, msdyn_extendedusersetting_Relationships {
}
interface msdyn_extendedusersetting_Relationships {
}
interface msdyn_extendedusersetting_Result extends msdyn_extendedusersetting_Base, msdyn_extendedusersetting_Relationships {
}
interface msdyn_extendedusersetting_FormattedResult {
}
interface msdyn_extendedusersetting_Select {
}
interface msdyn_extendedusersetting_Expand {
}
interface msdyn_extendedusersetting_Filter {
}
interface msdyn_extendedusersetting_Create extends msdyn_extendedusersetting {
}
interface msdyn_extendedusersetting_Update extends msdyn_extendedusersetting {
}
interface msdyn_facebookengagementctx_Base extends WebEntity {
}
interface msdyn_facebookengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_facebookengagementctxid: string;
}
interface msdyn_facebookengagementctx extends msdyn_facebookengagementctx_Base, msdyn_facebookengagementctx_Relationships {
}
interface msdyn_facebookengagementctx_Relationships {
}
interface msdyn_facebookengagementctx_Result extends msdyn_facebookengagementctx_Base, msdyn_facebookengagementctx_Relationships {
}
interface msdyn_facebookengagementctx_FormattedResult {
}
interface msdyn_facebookengagementctx_Select {
}
interface msdyn_facebookengagementctx_Expand {
}
interface msdyn_facebookengagementctx_Filter {
}
interface msdyn_facebookengagementctx_Create extends msdyn_facebookengagementctx {
}
interface msdyn_facebookengagementctx_Update extends msdyn_facebookengagementctx {
}
interface msdyn_fact_Base extends WebEntity {
}
interface msdyn_fact_Fixed extends WebEntity_Fixed {
  msdyn_factid: string;
}
interface msdyn_fact extends msdyn_fact_Base, msdyn_fact_Relationships {
}
interface msdyn_fact_Relationships {
}
interface msdyn_fact_Result extends msdyn_fact_Base, msdyn_fact_Relationships {
}
interface msdyn_fact_FormattedResult {
}
interface msdyn_fact_Select {
}
interface msdyn_fact_Expand {
}
interface msdyn_fact_Filter {
}
interface msdyn_fact_Create extends msdyn_fact {
}
interface msdyn_fact_Update extends msdyn_fact {
}
interface msdyn_federatedarticle_Base extends WebEntity {
}
interface msdyn_federatedarticle_Fixed extends WebEntity_Fixed {
  msdyn_federatedarticleid: string;
}
interface msdyn_federatedarticle extends msdyn_federatedarticle_Base, msdyn_federatedarticle_Relationships {
}
interface msdyn_federatedarticle_Relationships {
}
interface msdyn_federatedarticle_Result extends msdyn_federatedarticle_Base, msdyn_federatedarticle_Relationships {
}
interface msdyn_federatedarticle_FormattedResult {
}
interface msdyn_federatedarticle_Select {
}
interface msdyn_federatedarticle_Expand {
}
interface msdyn_federatedarticle_Filter {
}
interface msdyn_federatedarticle_Create extends msdyn_federatedarticle {
}
interface msdyn_federatedarticle_Update extends msdyn_federatedarticle {
}
interface msdyn_federatedarticleincident_Base extends WebEntity {
}
interface msdyn_federatedarticleincident_Fixed extends WebEntity_Fixed {
  msdyn_federatedarticleincidentid: string;
}
interface msdyn_federatedarticleincident extends msdyn_federatedarticleincident_Base, msdyn_federatedarticleincident_Relationships {
}
interface msdyn_federatedarticleincident_Relationships {
}
interface msdyn_federatedarticleincident_Result extends msdyn_federatedarticleincident_Base, msdyn_federatedarticleincident_Relationships {
}
interface msdyn_federatedarticleincident_FormattedResult {
}
interface msdyn_federatedarticleincident_Select {
}
interface msdyn_federatedarticleincident_Expand {
}
interface msdyn_federatedarticleincident_Filter {
}
interface msdyn_federatedarticleincident_Create extends msdyn_federatedarticleincident {
}
interface msdyn_federatedarticleincident_Update extends msdyn_federatedarticleincident {
}
interface msdyn_fieldcomputation_Base extends WebEntity {
}
interface msdyn_fieldcomputation_Fixed extends WebEntity_Fixed {
  msdyn_fieldcomputationid: string;
}
interface msdyn_fieldcomputation extends msdyn_fieldcomputation_Base, msdyn_fieldcomputation_Relationships {
}
interface msdyn_fieldcomputation_Relationships {
}
interface msdyn_fieldcomputation_Result extends msdyn_fieldcomputation_Base, msdyn_fieldcomputation_Relationships {
}
interface msdyn_fieldcomputation_FormattedResult {
}
interface msdyn_fieldcomputation_Select {
}
interface msdyn_fieldcomputation_Expand {
}
interface msdyn_fieldcomputation_Filter {
}
interface msdyn_fieldcomputation_Create extends msdyn_fieldcomputation {
}
interface msdyn_fieldcomputation_Update extends msdyn_fieldcomputation {
}
interface msdyn_fieldservicepricelistitem_Base extends WebEntity {
}
interface msdyn_fieldservicepricelistitem_Fixed extends WebEntity_Fixed {
  msdyn_fieldservicepricelistitemid: string;
}
interface msdyn_fieldservicepricelistitem extends msdyn_fieldservicepricelistitem_Base, msdyn_fieldservicepricelistitem_Relationships {
}
interface msdyn_fieldservicepricelistitem_Relationships {
}
interface msdyn_fieldservicepricelistitem_Result extends msdyn_fieldservicepricelistitem_Base, msdyn_fieldservicepricelistitem_Relationships {
}
interface msdyn_fieldservicepricelistitem_FormattedResult {
}
interface msdyn_fieldservicepricelistitem_Select {
}
interface msdyn_fieldservicepricelistitem_Expand {
}
interface msdyn_fieldservicepricelistitem_Filter {
}
interface msdyn_fieldservicepricelistitem_Create extends msdyn_fieldservicepricelistitem {
}
interface msdyn_fieldservicepricelistitem_Update extends msdyn_fieldservicepricelistitem {
}
interface msdyn_fieldservicesetting_Base extends WebEntity {
}
interface msdyn_fieldservicesetting_Fixed extends WebEntity_Fixed {
  msdyn_fieldservicesettingid: string;
}
interface msdyn_fieldservicesetting extends msdyn_fieldservicesetting_Base, msdyn_fieldservicesetting_Relationships {
}
interface msdyn_fieldservicesetting_Relationships {
}
interface msdyn_fieldservicesetting_Result extends msdyn_fieldservicesetting_Base, msdyn_fieldservicesetting_Relationships {
}
interface msdyn_fieldservicesetting_FormattedResult {
}
interface msdyn_fieldservicesetting_Select {
}
interface msdyn_fieldservicesetting_Expand {
}
interface msdyn_fieldservicesetting_Filter {
}
interface msdyn_fieldservicesetting_Create extends msdyn_fieldservicesetting {
}
interface msdyn_fieldservicesetting_Update extends msdyn_fieldservicesetting {
}
interface msdyn_fieldserviceslaconfiguration_Base extends WebEntity {
}
interface msdyn_fieldserviceslaconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_fieldserviceslaconfigurationid: string;
}
interface msdyn_fieldserviceslaconfiguration extends msdyn_fieldserviceslaconfiguration_Base, msdyn_fieldserviceslaconfiguration_Relationships {
}
interface msdyn_fieldserviceslaconfiguration_Relationships {
}
interface msdyn_fieldserviceslaconfiguration_Result extends msdyn_fieldserviceslaconfiguration_Base, msdyn_fieldserviceslaconfiguration_Relationships {
}
interface msdyn_fieldserviceslaconfiguration_FormattedResult {
}
interface msdyn_fieldserviceslaconfiguration_Select {
}
interface msdyn_fieldserviceslaconfiguration_Expand {
}
interface msdyn_fieldserviceslaconfiguration_Filter {
}
interface msdyn_fieldserviceslaconfiguration_Create extends msdyn_fieldserviceslaconfiguration {
}
interface msdyn_fieldserviceslaconfiguration_Update extends msdyn_fieldserviceslaconfiguration {
}
interface msdyn_fieldservicesystemjob_Base extends WebEntity {
}
interface msdyn_fieldservicesystemjob_Fixed extends WebEntity_Fixed {
  msdyn_fieldservicesystemjobid: string;
}
interface msdyn_fieldservicesystemjob extends msdyn_fieldservicesystemjob_Base, msdyn_fieldservicesystemjob_Relationships {
}
interface msdyn_fieldservicesystemjob_Relationships {
}
interface msdyn_fieldservicesystemjob_Result extends msdyn_fieldservicesystemjob_Base, msdyn_fieldservicesystemjob_Relationships {
}
interface msdyn_fieldservicesystemjob_FormattedResult {
}
interface msdyn_fieldservicesystemjob_Select {
}
interface msdyn_fieldservicesystemjob_Expand {
}
interface msdyn_fieldservicesystemjob_Filter {
}
interface msdyn_fieldservicesystemjob_Create extends msdyn_fieldservicesystemjob {
}
interface msdyn_fieldservicesystemjob_Update extends msdyn_fieldservicesystemjob {
}
interface msdyn_findworkevent_Base extends WebEntity {
}
interface msdyn_findworkevent_Fixed extends WebEntity_Fixed {
  msdyn_findworkeventid: string;
}
interface msdyn_findworkevent extends msdyn_findworkevent_Base, msdyn_findworkevent_Relationships {
}
interface msdyn_findworkevent_Relationships {
}
interface msdyn_findworkevent_Result extends msdyn_findworkevent_Base, msdyn_findworkevent_Relationships {
}
interface msdyn_findworkevent_FormattedResult {
}
interface msdyn_findworkevent_Select {
}
interface msdyn_findworkevent_Expand {
}
interface msdyn_findworkevent_Filter {
}
interface msdyn_findworkevent_Create extends msdyn_findworkevent {
}
interface msdyn_findworkevent_Update extends msdyn_findworkevent {
}
interface msdyn_flowcardtype_Base extends WebEntity {
}
interface msdyn_flowcardtype_Fixed extends WebEntity_Fixed {
  msdyn_flowcardtypeid: string;
}
interface msdyn_flowcardtype extends msdyn_flowcardtype_Base, msdyn_flowcardtype_Relationships {
}
interface msdyn_flowcardtype_Relationships {
}
interface msdyn_flowcardtype_Result extends msdyn_flowcardtype_Base, msdyn_flowcardtype_Relationships {
}
interface msdyn_flowcardtype_FormattedResult {
}
interface msdyn_flowcardtype_Select {
}
interface msdyn_flowcardtype_Expand {
}
interface msdyn_flowcardtype_Filter {
}
interface msdyn_flowcardtype_Create extends msdyn_flowcardtype {
}
interface msdyn_flowcardtype_Update extends msdyn_flowcardtype {
}
interface msdyn_forecastconfiguration_Base extends WebEntity {
}
interface msdyn_forecastconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_forecastconfigurationid: string;
}
interface msdyn_forecastconfiguration extends msdyn_forecastconfiguration_Base, msdyn_forecastconfiguration_Relationships {
}
interface msdyn_forecastconfiguration_Relationships {
}
interface msdyn_forecastconfiguration_Result extends msdyn_forecastconfiguration_Base, msdyn_forecastconfiguration_Relationships {
}
interface msdyn_forecastconfiguration_FormattedResult {
}
interface msdyn_forecastconfiguration_Select {
}
interface msdyn_forecastconfiguration_Expand {
}
interface msdyn_forecastconfiguration_Filter {
}
interface msdyn_forecastconfiguration_Create extends msdyn_forecastconfiguration {
}
interface msdyn_forecastconfiguration_Update extends msdyn_forecastconfiguration {
}
interface msdyn_forecastdefinition_Base extends WebEntity {
}
interface msdyn_forecastdefinition_Fixed extends WebEntity_Fixed {
  msdyn_forecastdefinitionid: string;
}
interface msdyn_forecastdefinition extends msdyn_forecastdefinition_Base, msdyn_forecastdefinition_Relationships {
}
interface msdyn_forecastdefinition_Relationships {
}
interface msdyn_forecastdefinition_Result extends msdyn_forecastdefinition_Base, msdyn_forecastdefinition_Relationships {
}
interface msdyn_forecastdefinition_FormattedResult {
}
interface msdyn_forecastdefinition_Select {
}
interface msdyn_forecastdefinition_Expand {
}
interface msdyn_forecastdefinition_Filter {
}
interface msdyn_forecastdefinition_Create extends msdyn_forecastdefinition {
}
interface msdyn_forecastdefinition_Update extends msdyn_forecastdefinition {
}
interface msdyn_forecastinstance_Base extends WebEntity {
}
interface msdyn_forecastinstance_Fixed extends WebEntity_Fixed {
  msdyn_forecastinstanceid: string;
}
interface msdyn_forecastinstance extends msdyn_forecastinstance_Base, msdyn_forecastinstance_Relationships {
}
interface msdyn_forecastinstance_Relationships {
}
interface msdyn_forecastinstance_Result extends msdyn_forecastinstance_Base, msdyn_forecastinstance_Relationships {
}
interface msdyn_forecastinstance_FormattedResult {
}
interface msdyn_forecastinstance_Select {
}
interface msdyn_forecastinstance_Expand {
}
interface msdyn_forecastinstance_Filter {
}
interface msdyn_forecastinstance_Create extends msdyn_forecastinstance {
}
interface msdyn_forecastinstance_Update extends msdyn_forecastinstance {
}
interface msdyn_forecastrecurrence_Base extends WebEntity {
}
interface msdyn_forecastrecurrence_Fixed extends WebEntity_Fixed {
  msdyn_forecastrecurrenceid: string;
}
interface msdyn_forecastrecurrence extends msdyn_forecastrecurrence_Base, msdyn_forecastrecurrence_Relationships {
}
interface msdyn_forecastrecurrence_Relationships {
}
interface msdyn_forecastrecurrence_Result extends msdyn_forecastrecurrence_Base, msdyn_forecastrecurrence_Relationships {
}
interface msdyn_forecastrecurrence_FormattedResult {
}
interface msdyn_forecastrecurrence_Select {
}
interface msdyn_forecastrecurrence_Expand {
}
interface msdyn_forecastrecurrence_Filter {
}
interface msdyn_forecastrecurrence_Create extends msdyn_forecastrecurrence {
}
interface msdyn_forecastrecurrence_Update extends msdyn_forecastrecurrence {
}
interface msdyn_FunctionalLocation_Base extends WebEntity {
}
interface msdyn_FunctionalLocation_Fixed extends WebEntity_Fixed {
  msdyn_functionallocationid: string;
}
interface msdyn_FunctionalLocation extends msdyn_FunctionalLocation_Base, msdyn_FunctionalLocation_Relationships {
}
interface msdyn_FunctionalLocation_Relationships {
}
interface msdyn_FunctionalLocation_Result extends msdyn_FunctionalLocation_Base, msdyn_FunctionalLocation_Relationships {
}
interface msdyn_FunctionalLocation_FormattedResult {
}
interface msdyn_FunctionalLocation_Select {
}
interface msdyn_FunctionalLocation_Expand {
}
interface msdyn_FunctionalLocation_Filter {
}
interface msdyn_FunctionalLocation_Create extends msdyn_FunctionalLocation {
}
interface msdyn_FunctionalLocation_Update extends msdyn_FunctionalLocation {
}
interface msdyn_gdprdata_Base extends WebEntity {
}
interface msdyn_gdprdata_Fixed extends WebEntity_Fixed {
  msdyn_gdprdataid: string;
}
interface msdyn_gdprdata extends msdyn_gdprdata_Base, msdyn_gdprdata_Relationships {
}
interface msdyn_gdprdata_Relationships {
}
interface msdyn_gdprdata_Result extends msdyn_gdprdata_Base, msdyn_gdprdata_Relationships {
}
interface msdyn_gdprdata_FormattedResult {
}
interface msdyn_gdprdata_Select {
}
interface msdyn_gdprdata_Expand {
}
interface msdyn_gdprdata_Filter {
}
interface msdyn_gdprdata_Create extends msdyn_gdprdata {
}
interface msdyn_gdprdata_Update extends msdyn_gdprdata {
}
interface msdyn_geofence_Base extends WebEntity {
}
interface msdyn_geofence_Fixed extends WebEntity_Fixed {
  msdyn_geofenceid: string;
}
interface msdyn_geofence extends msdyn_geofence_Base, msdyn_geofence_Relationships {
}
interface msdyn_geofence_Relationships {
}
interface msdyn_geofence_Result extends msdyn_geofence_Base, msdyn_geofence_Relationships {
}
interface msdyn_geofence_FormattedResult {
}
interface msdyn_geofence_Select {
}
interface msdyn_geofence_Expand {
}
interface msdyn_geofence_Filter {
}
interface msdyn_geofence_Create extends msdyn_geofence {
}
interface msdyn_geofence_Update extends msdyn_geofence {
}
interface msdyn_geofenceevent_Base extends WebEntity {
}
interface msdyn_geofenceevent_Fixed extends WebEntity_Fixed {
  msdyn_geofenceeventid: string;
}
interface msdyn_geofenceevent extends msdyn_geofenceevent_Base, msdyn_geofenceevent_Relationships {
}
interface msdyn_geofenceevent_Relationships {
}
interface msdyn_geofenceevent_Result extends msdyn_geofenceevent_Base, msdyn_geofenceevent_Relationships {
}
interface msdyn_geofenceevent_FormattedResult {
}
interface msdyn_geofenceevent_Select {
}
interface msdyn_geofenceevent_Expand {
}
interface msdyn_geofenceevent_Filter {
}
interface msdyn_geofenceevent_Create extends msdyn_geofenceevent {
}
interface msdyn_geofenceevent_Update extends msdyn_geofenceevent {
}
interface msdyn_geofencingsettings_Base extends WebEntity {
}
interface msdyn_geofencingsettings_Fixed extends WebEntity_Fixed {
  msdyn_geofencingsettingsid: string;
}
interface msdyn_geofencingsettings extends msdyn_geofencingsettings_Base, msdyn_geofencingsettings_Relationships {
}
interface msdyn_geofencingsettings_Relationships {
}
interface msdyn_geofencingsettings_Result extends msdyn_geofencingsettings_Base, msdyn_geofencingsettings_Relationships {
}
interface msdyn_geofencingsettings_FormattedResult {
}
interface msdyn_geofencingsettings_Select {
}
interface msdyn_geofencingsettings_Expand {
}
interface msdyn_geofencingsettings_Filter {
}
interface msdyn_geofencingsettings_Create extends msdyn_geofencingsettings {
}
interface msdyn_geofencingsettings_Update extends msdyn_geofencingsettings {
}
interface msdyn_geolocationsettings_Base extends WebEntity {
}
interface msdyn_geolocationsettings_Fixed extends WebEntity_Fixed {
  msdyn_geolocationsettingsid: string;
}
interface msdyn_geolocationsettings extends msdyn_geolocationsettings_Base, msdyn_geolocationsettings_Relationships {
}
interface msdyn_geolocationsettings_Relationships {
}
interface msdyn_geolocationsettings_Result extends msdyn_geolocationsettings_Base, msdyn_geolocationsettings_Relationships {
}
interface msdyn_geolocationsettings_FormattedResult {
}
interface msdyn_geolocationsettings_Select {
}
interface msdyn_geolocationsettings_Expand {
}
interface msdyn_geolocationsettings_Filter {
}
interface msdyn_geolocationsettings_Create extends msdyn_geolocationsettings {
}
interface msdyn_geolocationsettings_Update extends msdyn_geolocationsettings {
}
interface msdyn_geolocationtracking_Base extends WebEntity {
}
interface msdyn_geolocationtracking_Fixed extends WebEntity_Fixed {
  msdyn_geolocationtrackingid: string;
}
interface msdyn_geolocationtracking extends msdyn_geolocationtracking_Base, msdyn_geolocationtracking_Relationships {
}
interface msdyn_geolocationtracking_Relationships {
}
interface msdyn_geolocationtracking_Result extends msdyn_geolocationtracking_Base, msdyn_geolocationtracking_Relationships {
}
interface msdyn_geolocationtracking_FormattedResult {
}
interface msdyn_geolocationtracking_Select {
}
interface msdyn_geolocationtracking_Expand {
}
interface msdyn_geolocationtracking_Filter {
}
interface msdyn_geolocationtracking_Create extends msdyn_geolocationtracking {
}
interface msdyn_geolocationtracking_Update extends msdyn_geolocationtracking {
}
interface msdyn_helppage_Base extends WebEntity {
}
interface msdyn_helppage_Fixed extends WebEntity_Fixed {
  msdyn_helppageid: string;
}
interface msdyn_helppage extends msdyn_helppage_Base, msdyn_helppage_Relationships {
}
interface msdyn_helppage_Relationships {
}
interface msdyn_helppage_Result extends msdyn_helppage_Base, msdyn_helppage_Relationships {
}
interface msdyn_helppage_FormattedResult {
}
interface msdyn_helppage_Select {
}
interface msdyn_helppage_Expand {
}
interface msdyn_helppage_Filter {
}
interface msdyn_helppage_Create extends msdyn_helppage {
}
interface msdyn_helppage_Update extends msdyn_helppage {
}
interface msdyn_icebreakersconfig_Base extends WebEntity {
}
interface msdyn_icebreakersconfig_Fixed extends WebEntity_Fixed {
  msdyn_icebreakersconfigid: string;
}
interface msdyn_icebreakersconfig extends msdyn_icebreakersconfig_Base, msdyn_icebreakersconfig_Relationships {
}
interface msdyn_icebreakersconfig_Relationships {
}
interface msdyn_icebreakersconfig_Result extends msdyn_icebreakersconfig_Base, msdyn_icebreakersconfig_Relationships {
}
interface msdyn_icebreakersconfig_FormattedResult {
}
interface msdyn_icebreakersconfig_Select {
}
interface msdyn_icebreakersconfig_Expand {
}
interface msdyn_icebreakersconfig_Filter {
}
interface msdyn_icebreakersconfig_Create extends msdyn_icebreakersconfig {
}
interface msdyn_icebreakersconfig_Update extends msdyn_icebreakersconfig {
}
interface msdyn_iermlmodel_Base extends WebEntity {
}
interface msdyn_iermlmodel_Fixed extends WebEntity_Fixed {
  msdyn_iermlmodelid: string;
}
interface msdyn_iermlmodel extends msdyn_iermlmodel_Base, msdyn_iermlmodel_Relationships {
}
interface msdyn_iermlmodel_Relationships {
}
interface msdyn_iermlmodel_Result extends msdyn_iermlmodel_Base, msdyn_iermlmodel_Relationships {
}
interface msdyn_iermlmodel_FormattedResult {
}
interface msdyn_iermlmodel_Select {
}
interface msdyn_iermlmodel_Expand {
}
interface msdyn_iermlmodel_Filter {
}
interface msdyn_iermlmodel_Create extends msdyn_iermlmodel {
}
interface msdyn_iermlmodel_Update extends msdyn_iermlmodel {
}
interface msdyn_iermltraining_Base extends WebEntity {
}
interface msdyn_iermltraining_Fixed extends WebEntity_Fixed {
  msdyn_iermltrainingid: string;
}
interface msdyn_iermltraining extends msdyn_iermltraining_Base, msdyn_iermltraining_Relationships {
}
interface msdyn_iermltraining_Relationships {
}
interface msdyn_iermltraining_Result extends msdyn_iermltraining_Base, msdyn_iermltraining_Relationships {
}
interface msdyn_iermltraining_FormattedResult {
}
interface msdyn_iermltraining_Select {
}
interface msdyn_iermltraining_Expand {
}
interface msdyn_iermltraining_Filter {
}
interface msdyn_iermltraining_Create extends msdyn_iermltraining {
}
interface msdyn_iermltraining_Update extends msdyn_iermltraining {
}
interface msdyn_incident_msdyn_customerasset_Base extends WebEntity {
}
interface msdyn_incident_msdyn_customerasset_Fixed extends WebEntity_Fixed {
  msdyn_incident_msdyn_customerassetid: string;
}
interface msdyn_incident_msdyn_customerasset extends msdyn_incident_msdyn_customerasset_Base, msdyn_incident_msdyn_customerasset_Relationships {
}
interface msdyn_incident_msdyn_customerasset_Relationships {
}
interface msdyn_incident_msdyn_customerasset_Result extends msdyn_incident_msdyn_customerasset_Base, msdyn_incident_msdyn_customerasset_Relationships {
}
interface msdyn_incident_msdyn_customerasset_FormattedResult {
}
interface msdyn_incident_msdyn_customerasset_Select {
}
interface msdyn_incident_msdyn_customerasset_Expand {
}
interface msdyn_incident_msdyn_customerasset_Filter {
}
interface msdyn_incident_msdyn_customerasset_Create extends msdyn_incident_msdyn_customerasset {
}
interface msdyn_incident_msdyn_customerasset_Update extends msdyn_incident_msdyn_customerasset {
}
interface msdyn_incidenttype_Base extends WebEntity {
}
interface msdyn_incidenttype_Fixed extends WebEntity_Fixed {
  msdyn_incidenttypeid: string;
}
interface msdyn_incidenttype extends msdyn_incidenttype_Base, msdyn_incidenttype_Relationships {
}
interface msdyn_incidenttype_Relationships {
}
interface msdyn_incidenttype_Result extends msdyn_incidenttype_Base, msdyn_incidenttype_Relationships {
}
interface msdyn_incidenttype_FormattedResult {
}
interface msdyn_incidenttype_Select {
}
interface msdyn_incidenttype_Expand {
}
interface msdyn_incidenttype_Filter {
}
interface msdyn_incidenttype_Create extends msdyn_incidenttype {
}
interface msdyn_incidenttype_Update extends msdyn_incidenttype {
}
interface msdyn_incidenttype_requirementgroup_Base extends WebEntity {
}
interface msdyn_incidenttype_requirementgroup_Fixed extends WebEntity_Fixed {
  msdyn_incidenttype_requirementgroupid: string;
}
interface msdyn_incidenttype_requirementgroup extends msdyn_incidenttype_requirementgroup_Base, msdyn_incidenttype_requirementgroup_Relationships {
}
interface msdyn_incidenttype_requirementgroup_Relationships {
}
interface msdyn_incidenttype_requirementgroup_Result extends msdyn_incidenttype_requirementgroup_Base, msdyn_incidenttype_requirementgroup_Relationships {
}
interface msdyn_incidenttype_requirementgroup_FormattedResult {
}
interface msdyn_incidenttype_requirementgroup_Select {
}
interface msdyn_incidenttype_requirementgroup_Expand {
}
interface msdyn_incidenttype_requirementgroup_Filter {
}
interface msdyn_incidenttype_requirementgroup_Create extends msdyn_incidenttype_requirementgroup {
}
interface msdyn_incidenttype_requirementgroup_Update extends msdyn_incidenttype_requirementgroup {
}
interface msdyn_incidenttypecharacteristic_Base extends WebEntity {
}
interface msdyn_incidenttypecharacteristic_Fixed extends WebEntity_Fixed {
  msdyn_incidenttypecharacteristicid: string;
}
interface msdyn_incidenttypecharacteristic extends msdyn_incidenttypecharacteristic_Base, msdyn_incidenttypecharacteristic_Relationships {
}
interface msdyn_incidenttypecharacteristic_Relationships {
}
interface msdyn_incidenttypecharacteristic_Result extends msdyn_incidenttypecharacteristic_Base, msdyn_incidenttypecharacteristic_Relationships {
}
interface msdyn_incidenttypecharacteristic_FormattedResult {
}
interface msdyn_incidenttypecharacteristic_Select {
}
interface msdyn_incidenttypecharacteristic_Expand {
}
interface msdyn_incidenttypecharacteristic_Filter {
}
interface msdyn_incidenttypecharacteristic_Create extends msdyn_incidenttypecharacteristic {
}
interface msdyn_incidenttypecharacteristic_Update extends msdyn_incidenttypecharacteristic {
}
interface msdyn_incidenttypeproduct_Base extends WebEntity {
}
interface msdyn_incidenttypeproduct_Fixed extends WebEntity_Fixed {
  msdyn_incidenttypeproductid: string;
}
interface msdyn_incidenttypeproduct extends msdyn_incidenttypeproduct_Base, msdyn_incidenttypeproduct_Relationships {
}
interface msdyn_incidenttypeproduct_Relationships {
}
interface msdyn_incidenttypeproduct_Result extends msdyn_incidenttypeproduct_Base, msdyn_incidenttypeproduct_Relationships {
}
interface msdyn_incidenttypeproduct_FormattedResult {
}
interface msdyn_incidenttypeproduct_Select {
}
interface msdyn_incidenttypeproduct_Expand {
}
interface msdyn_incidenttypeproduct_Filter {
}
interface msdyn_incidenttypeproduct_Create extends msdyn_incidenttypeproduct {
}
interface msdyn_incidenttypeproduct_Update extends msdyn_incidenttypeproduct {
}
interface msdyn_incidenttyperecommendationresult_Base extends WebEntity {
}
interface msdyn_incidenttyperecommendationresult_Fixed extends WebEntity_Fixed {
  msdyn_incidenttyperecommendationresultid: string;
}
interface msdyn_incidenttyperecommendationresult extends msdyn_incidenttyperecommendationresult_Base, msdyn_incidenttyperecommendationresult_Relationships {
}
interface msdyn_incidenttyperecommendationresult_Relationships {
}
interface msdyn_incidenttyperecommendationresult_Result extends msdyn_incidenttyperecommendationresult_Base, msdyn_incidenttyperecommendationresult_Relationships {
}
interface msdyn_incidenttyperecommendationresult_FormattedResult {
}
interface msdyn_incidenttyperecommendationresult_Select {
}
interface msdyn_incidenttyperecommendationresult_Expand {
}
interface msdyn_incidenttyperecommendationresult_Filter {
}
interface msdyn_incidenttyperecommendationresult_Create extends msdyn_incidenttyperecommendationresult {
}
interface msdyn_incidenttyperecommendationresult_Update extends msdyn_incidenttyperecommendationresult {
}
interface msdyn_incidenttyperecommendationrunhistory_Base extends WebEntity {
}
interface msdyn_incidenttyperecommendationrunhistory_Fixed extends WebEntity_Fixed {
  msdyn_incidenttyperecommendationrunhistoryid: string;
}
interface msdyn_incidenttyperecommendationrunhistory extends msdyn_incidenttyperecommendationrunhistory_Base, msdyn_incidenttyperecommendationrunhistory_Relationships {
}
interface msdyn_incidenttyperecommendationrunhistory_Relationships {
}
interface msdyn_incidenttyperecommendationrunhistory_Result extends msdyn_incidenttyperecommendationrunhistory_Base, msdyn_incidenttyperecommendationrunhistory_Relationships {
}
interface msdyn_incidenttyperecommendationrunhistory_FormattedResult {
}
interface msdyn_incidenttyperecommendationrunhistory_Select {
}
interface msdyn_incidenttyperecommendationrunhistory_Expand {
}
interface msdyn_incidenttyperecommendationrunhistory_Filter {
}
interface msdyn_incidenttyperecommendationrunhistory_Create extends msdyn_incidenttyperecommendationrunhistory {
}
interface msdyn_incidenttyperecommendationrunhistory_Update extends msdyn_incidenttyperecommendationrunhistory {
}
interface msdyn_incidenttyperesolution_Base extends WebEntity {
}
interface msdyn_incidenttyperesolution_Fixed extends WebEntity_Fixed {
  msdyn_incidenttyperesolutionid: string;
}
interface msdyn_incidenttyperesolution extends msdyn_incidenttyperesolution_Base, msdyn_incidenttyperesolution_Relationships {
}
interface msdyn_incidenttyperesolution_Relationships {
}
interface msdyn_incidenttyperesolution_Result extends msdyn_incidenttyperesolution_Base, msdyn_incidenttyperesolution_Relationships {
}
interface msdyn_incidenttyperesolution_FormattedResult {
}
interface msdyn_incidenttyperesolution_Select {
}
interface msdyn_incidenttyperesolution_Expand {
}
interface msdyn_incidenttyperesolution_Filter {
}
interface msdyn_incidenttyperesolution_Create extends msdyn_incidenttyperesolution {
}
interface msdyn_incidenttyperesolution_Update extends msdyn_incidenttyperesolution {
}
interface msdyn_incidenttypeservice_Base extends WebEntity {
}
interface msdyn_incidenttypeservice_Fixed extends WebEntity_Fixed {
  msdyn_incidenttypeserviceid: string;
}
interface msdyn_incidenttypeservice extends msdyn_incidenttypeservice_Base, msdyn_incidenttypeservice_Relationships {
}
interface msdyn_incidenttypeservice_Relationships {
}
interface msdyn_incidenttypeservice_Result extends msdyn_incidenttypeservice_Base, msdyn_incidenttypeservice_Relationships {
}
interface msdyn_incidenttypeservice_FormattedResult {
}
interface msdyn_incidenttypeservice_Select {
}
interface msdyn_incidenttypeservice_Expand {
}
interface msdyn_incidenttypeservice_Filter {
}
interface msdyn_incidenttypeservice_Create extends msdyn_incidenttypeservice {
}
interface msdyn_incidenttypeservice_Update extends msdyn_incidenttypeservice {
}
interface msdyn_incidenttypeservicetask_Base extends WebEntity {
}
interface msdyn_incidenttypeservicetask_Fixed extends WebEntity_Fixed {
  msdyn_incidenttypeservicetaskid: string;
}
interface msdyn_incidenttypeservicetask extends msdyn_incidenttypeservicetask_Base, msdyn_incidenttypeservicetask_Relationships {
}
interface msdyn_incidenttypeservicetask_Relationships {
}
interface msdyn_incidenttypeservicetask_Result extends msdyn_incidenttypeservicetask_Base, msdyn_incidenttypeservicetask_Relationships {
}
interface msdyn_incidenttypeservicetask_FormattedResult {
}
interface msdyn_incidenttypeservicetask_Select {
}
interface msdyn_incidenttypeservicetask_Expand {
}
interface msdyn_incidenttypeservicetask_Filter {
}
interface msdyn_incidenttypeservicetask_Create extends msdyn_incidenttypeservicetask {
}
interface msdyn_incidenttypeservicetask_Update extends msdyn_incidenttypeservicetask {
}
interface msdyn_incidenttypessetup_Base extends WebEntity {
}
interface msdyn_incidenttypessetup_Fixed extends WebEntity_Fixed {
  msdyn_incidenttypessetupid: string;
}
interface msdyn_incidenttypessetup extends msdyn_incidenttypessetup_Base, msdyn_incidenttypessetup_Relationships {
}
interface msdyn_incidenttypessetup_Relationships {
}
interface msdyn_incidenttypessetup_Result extends msdyn_incidenttypessetup_Base, msdyn_incidenttypessetup_Relationships {
}
interface msdyn_incidenttypessetup_FormattedResult {
}
interface msdyn_incidenttypessetup_Select {
}
interface msdyn_incidenttypessetup_Expand {
}
interface msdyn_incidenttypessetup_Filter {
}
interface msdyn_incidenttypessetup_Create extends msdyn_incidenttypessetup {
}
interface msdyn_incidenttypessetup_Update extends msdyn_incidenttypessetup {
}
interface msdyn_inspection_Base extends WebEntity {
}
interface msdyn_inspection_Fixed extends WebEntity_Fixed {
  msdyn_inspectionid: string;
}
interface msdyn_inspection extends msdyn_inspection_Base, msdyn_inspection_Relationships {
}
interface msdyn_inspection_Relationships {
}
interface msdyn_inspection_Result extends msdyn_inspection_Base, msdyn_inspection_Relationships {
}
interface msdyn_inspection_FormattedResult {
}
interface msdyn_inspection_Select {
}
interface msdyn_inspection_Expand {
}
interface msdyn_inspection_Filter {
}
interface msdyn_inspection_Create extends msdyn_inspection {
}
interface msdyn_inspection_Update extends msdyn_inspection {
}
interface msdyn_inspectionattachment_Base extends WebEntity {
}
interface msdyn_inspectionattachment_Fixed extends WebEntity_Fixed {
  msdyn_inspectionattachmentid: string;
}
interface msdyn_inspectionattachment extends msdyn_inspectionattachment_Base, msdyn_inspectionattachment_Relationships {
}
interface msdyn_inspectionattachment_Relationships {
}
interface msdyn_inspectionattachment_Result extends msdyn_inspectionattachment_Base, msdyn_inspectionattachment_Relationships {
}
interface msdyn_inspectionattachment_FormattedResult {
}
interface msdyn_inspectionattachment_Select {
}
interface msdyn_inspectionattachment_Expand {
}
interface msdyn_inspectionattachment_Filter {
}
interface msdyn_inspectionattachment_Create extends msdyn_inspectionattachment {
}
interface msdyn_inspectionattachment_Update extends msdyn_inspectionattachment {
}
interface msdyn_inspectiondefinition_Base extends WebEntity {
}
interface msdyn_inspectiondefinition_Fixed extends WebEntity_Fixed {
  msdyn_inspectiondefinitionid: string;
}
interface msdyn_inspectiondefinition extends msdyn_inspectiondefinition_Base, msdyn_inspectiondefinition_Relationships {
}
interface msdyn_inspectiondefinition_Relationships {
}
interface msdyn_inspectiondefinition_Result extends msdyn_inspectiondefinition_Base, msdyn_inspectiondefinition_Relationships {
}
interface msdyn_inspectiondefinition_FormattedResult {
}
interface msdyn_inspectiondefinition_Select {
}
interface msdyn_inspectiondefinition_Expand {
}
interface msdyn_inspectiondefinition_Filter {
}
interface msdyn_inspectiondefinition_Create extends msdyn_inspectiondefinition {
}
interface msdyn_inspectiondefinition_Update extends msdyn_inspectiondefinition {
}
interface msdyn_inspectioninstance_Base extends WebEntity {
}
interface msdyn_inspectioninstance_Fixed extends WebEntity_Fixed {
  msdyn_inspectioninstanceid: string;
}
interface msdyn_inspectioninstance extends msdyn_inspectioninstance_Base, msdyn_inspectioninstance_Relationships {
}
interface msdyn_inspectioninstance_Relationships {
}
interface msdyn_inspectioninstance_Result extends msdyn_inspectioninstance_Base, msdyn_inspectioninstance_Relationships {
}
interface msdyn_inspectioninstance_FormattedResult {
}
interface msdyn_inspectioninstance_Select {
}
interface msdyn_inspectioninstance_Expand {
}
interface msdyn_inspectioninstance_Filter {
}
interface msdyn_inspectioninstance_Create extends msdyn_inspectioninstance {
}
interface msdyn_inspectioninstance_Update extends msdyn_inspectioninstance {
}
interface msdyn_inspectionresponse_Base extends WebEntity {
}
interface msdyn_inspectionresponse_Fixed extends WebEntity_Fixed {
  msdyn_inspectionresponseid: string;
}
interface msdyn_inspectionresponse extends msdyn_inspectionresponse_Base, msdyn_inspectionresponse_Relationships {
}
interface msdyn_inspectionresponse_Relationships {
}
interface msdyn_inspectionresponse_Result extends msdyn_inspectionresponse_Base, msdyn_inspectionresponse_Relationships {
}
interface msdyn_inspectionresponse_FormattedResult {
}
interface msdyn_inspectionresponse_Select {
}
interface msdyn_inspectionresponse_Expand {
}
interface msdyn_inspectionresponse_Filter {
}
interface msdyn_inspectionresponse_Create extends msdyn_inspectionresponse {
}
interface msdyn_inspectionresponse_Update extends msdyn_inspectionresponse {
}
interface msdyn_integrationjob_Base extends WebEntity {
}
interface msdyn_integrationjob_Fixed extends WebEntity_Fixed {
  msdyn_integrationjobid: string;
}
interface msdyn_integrationjob extends msdyn_integrationjob_Base, msdyn_integrationjob_Relationships {
}
interface msdyn_integrationjob_Relationships {
}
interface msdyn_integrationjob_Result extends msdyn_integrationjob_Base, msdyn_integrationjob_Relationships {
}
interface msdyn_integrationjob_FormattedResult {
}
interface msdyn_integrationjob_Select {
}
interface msdyn_integrationjob_Expand {
}
interface msdyn_integrationjob_Filter {
}
interface msdyn_integrationjob_Create extends msdyn_integrationjob {
}
interface msdyn_integrationjob_Update extends msdyn_integrationjob {
}
interface msdyn_integrationjobdetail_Base extends WebEntity {
}
interface msdyn_integrationjobdetail_Fixed extends WebEntity_Fixed {
  msdyn_integrationjobdetailid: string;
}
interface msdyn_integrationjobdetail extends msdyn_integrationjobdetail_Base, msdyn_integrationjobdetail_Relationships {
}
interface msdyn_integrationjobdetail_Relationships {
}
interface msdyn_integrationjobdetail_Result extends msdyn_integrationjobdetail_Base, msdyn_integrationjobdetail_Relationships {
}
interface msdyn_integrationjobdetail_FormattedResult {
}
interface msdyn_integrationjobdetail_Select {
}
interface msdyn_integrationjobdetail_Expand {
}
interface msdyn_integrationjobdetail_Filter {
}
interface msdyn_integrationjobdetail_Create extends msdyn_integrationjobdetail {
}
interface msdyn_integrationjobdetail_Update extends msdyn_integrationjobdetail {
}
interface msdyn_inventoryadjustment_Base extends WebEntity {
}
interface msdyn_inventoryadjustment_Fixed extends WebEntity_Fixed {
  msdyn_inventoryadjustmentid: string;
}
interface msdyn_inventoryadjustment extends msdyn_inventoryadjustment_Base, msdyn_inventoryadjustment_Relationships {
}
interface msdyn_inventoryadjustment_Relationships {
}
interface msdyn_inventoryadjustment_Result extends msdyn_inventoryadjustment_Base, msdyn_inventoryadjustment_Relationships {
}
interface msdyn_inventoryadjustment_FormattedResult {
}
interface msdyn_inventoryadjustment_Select {
}
interface msdyn_inventoryadjustment_Expand {
}
interface msdyn_inventoryadjustment_Filter {
}
interface msdyn_inventoryadjustment_Create extends msdyn_inventoryadjustment {
}
interface msdyn_inventoryadjustment_Update extends msdyn_inventoryadjustment {
}
interface msdyn_inventoryadjustmentproduct_Base extends WebEntity {
}
interface msdyn_inventoryadjustmentproduct_Fixed extends WebEntity_Fixed {
  msdyn_inventoryadjustmentproductid: string;
}
interface msdyn_inventoryadjustmentproduct extends msdyn_inventoryadjustmentproduct_Base, msdyn_inventoryadjustmentproduct_Relationships {
}
interface msdyn_inventoryadjustmentproduct_Relationships {
}
interface msdyn_inventoryadjustmentproduct_Result extends msdyn_inventoryadjustmentproduct_Base, msdyn_inventoryadjustmentproduct_Relationships {
}
interface msdyn_inventoryadjustmentproduct_FormattedResult {
}
interface msdyn_inventoryadjustmentproduct_Select {
}
interface msdyn_inventoryadjustmentproduct_Expand {
}
interface msdyn_inventoryadjustmentproduct_Filter {
}
interface msdyn_inventoryadjustmentproduct_Create extends msdyn_inventoryadjustmentproduct {
}
interface msdyn_inventoryadjustmentproduct_Update extends msdyn_inventoryadjustmentproduct {
}
interface msdyn_inventoryjournal_Base extends WebEntity {
}
interface msdyn_inventoryjournal_Fixed extends WebEntity_Fixed {
  msdyn_inventoryjournalid: string;
}
interface msdyn_inventoryjournal extends msdyn_inventoryjournal_Base, msdyn_inventoryjournal_Relationships {
}
interface msdyn_inventoryjournal_Relationships {
}
interface msdyn_inventoryjournal_Result extends msdyn_inventoryjournal_Base, msdyn_inventoryjournal_Relationships {
}
interface msdyn_inventoryjournal_FormattedResult {
}
interface msdyn_inventoryjournal_Select {
}
interface msdyn_inventoryjournal_Expand {
}
interface msdyn_inventoryjournal_Filter {
}
interface msdyn_inventoryjournal_Create extends msdyn_inventoryjournal {
}
interface msdyn_inventoryjournal_Update extends msdyn_inventoryjournal {
}
interface msdyn_inventorytransfer_Base extends WebEntity {
}
interface msdyn_inventorytransfer_Fixed extends WebEntity_Fixed {
  msdyn_inventorytransferid: string;
}
interface msdyn_inventorytransfer extends msdyn_inventorytransfer_Base, msdyn_inventorytransfer_Relationships {
}
interface msdyn_inventorytransfer_Relationships {
}
interface msdyn_inventorytransfer_Result extends msdyn_inventorytransfer_Base, msdyn_inventorytransfer_Relationships {
}
interface msdyn_inventorytransfer_FormattedResult {
}
interface msdyn_inventorytransfer_Select {
}
interface msdyn_inventorytransfer_Expand {
}
interface msdyn_inventorytransfer_Filter {
}
interface msdyn_inventorytransfer_Create extends msdyn_inventorytransfer {
}
interface msdyn_inventorytransfer_Update extends msdyn_inventorytransfer {
}
interface msdyn_invoicefrequency_Base extends WebEntity {
}
interface msdyn_invoicefrequency_Fixed extends WebEntity_Fixed {
  msdyn_invoicefrequencyid: string;
}
interface msdyn_invoicefrequency extends msdyn_invoicefrequency_Base, msdyn_invoicefrequency_Relationships {
}
interface msdyn_invoicefrequency_Relationships {
}
interface msdyn_invoicefrequency_Result extends msdyn_invoicefrequency_Base, msdyn_invoicefrequency_Relationships {
}
interface msdyn_invoicefrequency_FormattedResult {
}
interface msdyn_invoicefrequency_Select {
}
interface msdyn_invoicefrequency_Expand {
}
interface msdyn_invoicefrequency_Filter {
}
interface msdyn_invoicefrequency_Create extends msdyn_invoicefrequency {
}
interface msdyn_invoicefrequency_Update extends msdyn_invoicefrequency {
}
interface msdyn_invoicefrequencydetail_Base extends WebEntity {
}
interface msdyn_invoicefrequencydetail_Fixed extends WebEntity_Fixed {
  msdyn_invoicefrequencydetailid: string;
}
interface msdyn_invoicefrequencydetail extends msdyn_invoicefrequencydetail_Base, msdyn_invoicefrequencydetail_Relationships {
}
interface msdyn_invoicefrequencydetail_Relationships {
}
interface msdyn_invoicefrequencydetail_Result extends msdyn_invoicefrequencydetail_Base, msdyn_invoicefrequencydetail_Relationships {
}
interface msdyn_invoicefrequencydetail_FormattedResult {
}
interface msdyn_invoicefrequencydetail_Select {
}
interface msdyn_invoicefrequencydetail_Expand {
}
interface msdyn_invoicefrequencydetail_Filter {
}
interface msdyn_invoicefrequencydetail_Create extends msdyn_invoicefrequencydetail {
}
interface msdyn_invoicefrequencydetail_Update extends msdyn_invoicefrequencydetail {
}
interface msdyn_invoicelinetransaction_Base extends WebEntity {
}
interface msdyn_invoicelinetransaction_Fixed extends WebEntity_Fixed {
  msdyn_invoicelinetransactionid: string;
}
interface msdyn_invoicelinetransaction extends msdyn_invoicelinetransaction_Base, msdyn_invoicelinetransaction_Relationships {
}
interface msdyn_invoicelinetransaction_Relationships {
}
interface msdyn_invoicelinetransaction_Result extends msdyn_invoicelinetransaction_Base, msdyn_invoicelinetransaction_Relationships {
}
interface msdyn_invoicelinetransaction_FormattedResult {
}
interface msdyn_invoicelinetransaction_Select {
}
interface msdyn_invoicelinetransaction_Expand {
}
interface msdyn_invoicelinetransaction_Filter {
}
interface msdyn_invoicelinetransaction_Create extends msdyn_invoicelinetransaction {
}
interface msdyn_invoicelinetransaction_Update extends msdyn_invoicelinetransaction {
}
interface msdyn_iotalert_Base extends WebEntity {
}
interface msdyn_iotalert_Fixed extends WebEntity_Fixed {
  msdyn_iotalertid: string;
}
interface msdyn_iotalert extends msdyn_iotalert_Base, msdyn_iotalert_Relationships {
}
interface msdyn_iotalert_Relationships {
}
interface msdyn_iotalert_Result extends msdyn_iotalert_Base, msdyn_iotalert_Relationships {
}
interface msdyn_iotalert_FormattedResult {
}
interface msdyn_iotalert_Select {
}
interface msdyn_iotalert_Expand {
}
interface msdyn_iotalert_Filter {
}
interface msdyn_iotalert_Create extends msdyn_iotalert {
}
interface msdyn_iotalert_Update extends msdyn_iotalert {
}
interface msdyn_iotdevice_Base extends WebEntity {
}
interface msdyn_iotdevice_Fixed extends WebEntity_Fixed {
  msdyn_iotdeviceid: string;
}
interface msdyn_iotdevice extends msdyn_iotdevice_Base, msdyn_iotdevice_Relationships {
}
interface msdyn_iotdevice_Relationships {
}
interface msdyn_iotdevice_Result extends msdyn_iotdevice_Base, msdyn_iotdevice_Relationships {
}
interface msdyn_iotdevice_FormattedResult {
}
interface msdyn_iotdevice_Select {
}
interface msdyn_iotdevice_Expand {
}
interface msdyn_iotdevice_Filter {
}
interface msdyn_iotdevice_Create extends msdyn_iotdevice {
}
interface msdyn_iotdevice_Update extends msdyn_iotdevice {
}
interface msdyn_iotdevicecategory_Base extends WebEntity {
}
interface msdyn_iotdevicecategory_Fixed extends WebEntity_Fixed {
  msdyn_iotdevicecategoryid: string;
}
interface msdyn_iotdevicecategory extends msdyn_iotdevicecategory_Base, msdyn_iotdevicecategory_Relationships {
}
interface msdyn_iotdevicecategory_Relationships {
}
interface msdyn_iotdevicecategory_Result extends msdyn_iotdevicecategory_Base, msdyn_iotdevicecategory_Relationships {
}
interface msdyn_iotdevicecategory_FormattedResult {
}
interface msdyn_iotdevicecategory_Select {
}
interface msdyn_iotdevicecategory_Expand {
}
interface msdyn_iotdevicecategory_Filter {
}
interface msdyn_iotdevicecategory_Create extends msdyn_iotdevicecategory {
}
interface msdyn_iotdevicecategory_Update extends msdyn_iotdevicecategory {
}
interface msdyn_iotdevicecategorycommands_Base extends WebEntity {
}
interface msdyn_iotdevicecategorycommands_Fixed extends WebEntity_Fixed {
  msdyn_iotdevicecategorycommandsid: string;
}
interface msdyn_iotdevicecategorycommands extends msdyn_iotdevicecategorycommands_Base, msdyn_iotdevicecategorycommands_Relationships {
}
interface msdyn_iotdevicecategorycommands_Relationships {
}
interface msdyn_iotdevicecategorycommands_Result extends msdyn_iotdevicecategorycommands_Base, msdyn_iotdevicecategorycommands_Relationships {
}
interface msdyn_iotdevicecategorycommands_FormattedResult {
}
interface msdyn_iotdevicecategorycommands_Select {
}
interface msdyn_iotdevicecategorycommands_Expand {
}
interface msdyn_iotdevicecategorycommands_Filter {
}
interface msdyn_iotdevicecategorycommands_Create extends msdyn_iotdevicecategorycommands {
}
interface msdyn_iotdevicecategorycommands_Update extends msdyn_iotdevicecategorycommands {
}
interface msdyn_iotdevicecommand_Base extends WebEntity {
}
interface msdyn_iotdevicecommand_Fixed extends WebEntity_Fixed {
  msdyn_iotdevicecommandid: string;
}
interface msdyn_iotdevicecommand extends msdyn_iotdevicecommand_Base, msdyn_iotdevicecommand_Relationships {
}
interface msdyn_iotdevicecommand_Relationships {
}
interface msdyn_iotdevicecommand_Result extends msdyn_iotdevicecommand_Base, msdyn_iotdevicecommand_Relationships {
}
interface msdyn_iotdevicecommand_FormattedResult {
}
interface msdyn_iotdevicecommand_Select {
}
interface msdyn_iotdevicecommand_Expand {
}
interface msdyn_iotdevicecommand_Filter {
}
interface msdyn_iotdevicecommand_Create extends msdyn_iotdevicecommand {
}
interface msdyn_iotdevicecommand_Update extends msdyn_iotdevicecommand {
}
interface msdyn_iotdevicecommanddefinition_Base extends WebEntity {
}
interface msdyn_iotdevicecommanddefinition_Fixed extends WebEntity_Fixed {
  msdyn_iotdevicecommanddefinitionid: string;
}
interface msdyn_iotdevicecommanddefinition extends msdyn_iotdevicecommanddefinition_Base, msdyn_iotdevicecommanddefinition_Relationships {
}
interface msdyn_iotdevicecommanddefinition_Relationships {
}
interface msdyn_iotdevicecommanddefinition_Result extends msdyn_iotdevicecommanddefinition_Base, msdyn_iotdevicecommanddefinition_Relationships {
}
interface msdyn_iotdevicecommanddefinition_FormattedResult {
}
interface msdyn_iotdevicecommanddefinition_Select {
}
interface msdyn_iotdevicecommanddefinition_Expand {
}
interface msdyn_iotdevicecommanddefinition_Filter {
}
interface msdyn_iotdevicecommanddefinition_Create extends msdyn_iotdevicecommanddefinition {
}
interface msdyn_iotdevicecommanddefinition_Update extends msdyn_iotdevicecommanddefinition {
}
interface msdyn_iotdevicecommandparameters_Base extends WebEntity {
}
interface msdyn_iotdevicecommandparameters_Fixed extends WebEntity_Fixed {
  msdyn_iotdevicecommandparametersid: string;
}
interface msdyn_iotdevicecommandparameters extends msdyn_iotdevicecommandparameters_Base, msdyn_iotdevicecommandparameters_Relationships {
}
interface msdyn_iotdevicecommandparameters_Relationships {
}
interface msdyn_iotdevicecommandparameters_Result extends msdyn_iotdevicecommandparameters_Base, msdyn_iotdevicecommandparameters_Relationships {
}
interface msdyn_iotdevicecommandparameters_FormattedResult {
}
interface msdyn_iotdevicecommandparameters_Select {
}
interface msdyn_iotdevicecommandparameters_Expand {
}
interface msdyn_iotdevicecommandparameters_Filter {
}
interface msdyn_iotdevicecommandparameters_Create extends msdyn_iotdevicecommandparameters {
}
interface msdyn_iotdevicecommandparameters_Update extends msdyn_iotdevicecommandparameters {
}
interface msdyn_iotdevicedatahistory_Base extends WebEntity {
}
interface msdyn_iotdevicedatahistory_Fixed extends WebEntity_Fixed {
  msdyn_iotdevicedatahistoryid: string;
}
interface msdyn_iotdevicedatahistory extends msdyn_iotdevicedatahistory_Base, msdyn_iotdevicedatahistory_Relationships {
}
interface msdyn_iotdevicedatahistory_Relationships {
}
interface msdyn_iotdevicedatahistory_Result extends msdyn_iotdevicedatahistory_Base, msdyn_iotdevicedatahistory_Relationships {
}
interface msdyn_iotdevicedatahistory_FormattedResult {
}
interface msdyn_iotdevicedatahistory_Select {
}
interface msdyn_iotdevicedatahistory_Expand {
}
interface msdyn_iotdevicedatahistory_Filter {
}
interface msdyn_iotdevicedatahistory_Create extends msdyn_iotdevicedatahistory {
}
interface msdyn_iotdevicedatahistory_Update extends msdyn_iotdevicedatahistory {
}
interface msdyn_iotdeviceproperty_Base extends WebEntity {
}
interface msdyn_iotdeviceproperty_Fixed extends WebEntity_Fixed {
  msdyn_iotdevicepropertyid: string;
}
interface msdyn_iotdeviceproperty extends msdyn_iotdeviceproperty_Base, msdyn_iotdeviceproperty_Relationships {
}
interface msdyn_iotdeviceproperty_Relationships {
}
interface msdyn_iotdeviceproperty_Result extends msdyn_iotdeviceproperty_Base, msdyn_iotdeviceproperty_Relationships {
}
interface msdyn_iotdeviceproperty_FormattedResult {
}
interface msdyn_iotdeviceproperty_Select {
}
interface msdyn_iotdeviceproperty_Expand {
}
interface msdyn_iotdeviceproperty_Filter {
}
interface msdyn_iotdeviceproperty_Create extends msdyn_iotdeviceproperty {
}
interface msdyn_iotdeviceproperty_Update extends msdyn_iotdeviceproperty {
}
interface msdyn_iotdeviceregistrationhistory_Base extends WebEntity {
}
interface msdyn_iotdeviceregistrationhistory_Fixed extends WebEntity_Fixed {
  msdyn_iotdeviceregistrationhistoryid: string;
}
interface msdyn_iotdeviceregistrationhistory extends msdyn_iotdeviceregistrationhistory_Base, msdyn_iotdeviceregistrationhistory_Relationships {
}
interface msdyn_iotdeviceregistrationhistory_Relationships {
}
interface msdyn_iotdeviceregistrationhistory_Result extends msdyn_iotdeviceregistrationhistory_Base, msdyn_iotdeviceregistrationhistory_Relationships {
}
interface msdyn_iotdeviceregistrationhistory_FormattedResult {
}
interface msdyn_iotdeviceregistrationhistory_Select {
}
interface msdyn_iotdeviceregistrationhistory_Expand {
}
interface msdyn_iotdeviceregistrationhistory_Filter {
}
interface msdyn_iotdeviceregistrationhistory_Create extends msdyn_iotdeviceregistrationhistory {
}
interface msdyn_iotdeviceregistrationhistory_Update extends msdyn_iotdeviceregistrationhistory {
}
interface msdyn_iotdevicevisualizationconfiguration_Base extends WebEntity {
}
interface msdyn_iotdevicevisualizationconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_iotdevicevisualizationconfigurationid: string;
}
interface msdyn_iotdevicevisualizationconfiguration extends msdyn_iotdevicevisualizationconfiguration_Base, msdyn_iotdevicevisualizationconfiguration_Relationships {
}
interface msdyn_iotdevicevisualizationconfiguration_Relationships {
}
interface msdyn_iotdevicevisualizationconfiguration_Result extends msdyn_iotdevicevisualizationconfiguration_Base, msdyn_iotdevicevisualizationconfiguration_Relationships {
}
interface msdyn_iotdevicevisualizationconfiguration_FormattedResult {
}
interface msdyn_iotdevicevisualizationconfiguration_Select {
}
interface msdyn_iotdevicevisualizationconfiguration_Expand {
}
interface msdyn_iotdevicevisualizationconfiguration_Filter {
}
interface msdyn_iotdevicevisualizationconfiguration_Create extends msdyn_iotdevicevisualizationconfiguration {
}
interface msdyn_iotdevicevisualizationconfiguration_Update extends msdyn_iotdevicevisualizationconfiguration {
}
interface msdyn_iotfieldmapping_Base extends WebEntity {
}
interface msdyn_iotfieldmapping_Fixed extends WebEntity_Fixed {
  msdyn_iotfieldmappingid: string;
}
interface msdyn_iotfieldmapping extends msdyn_iotfieldmapping_Base, msdyn_iotfieldmapping_Relationships {
}
interface msdyn_iotfieldmapping_Relationships {
}
interface msdyn_iotfieldmapping_Result extends msdyn_iotfieldmapping_Base, msdyn_iotfieldmapping_Relationships {
}
interface msdyn_iotfieldmapping_FormattedResult {
}
interface msdyn_iotfieldmapping_Select {
}
interface msdyn_iotfieldmapping_Expand {
}
interface msdyn_iotfieldmapping_Filter {
}
interface msdyn_iotfieldmapping_Create extends msdyn_iotfieldmapping {
}
interface msdyn_iotfieldmapping_Update extends msdyn_iotfieldmapping {
}
interface msdyn_iotpropertydefinition_Base extends WebEntity {
}
interface msdyn_iotpropertydefinition_Fixed extends WebEntity_Fixed {
  msdyn_iotpropertydefinitionid: string;
}
interface msdyn_iotpropertydefinition extends msdyn_iotpropertydefinition_Base, msdyn_iotpropertydefinition_Relationships {
}
interface msdyn_iotpropertydefinition_Relationships {
}
interface msdyn_iotpropertydefinition_Result extends msdyn_iotpropertydefinition_Base, msdyn_iotpropertydefinition_Relationships {
}
interface msdyn_iotpropertydefinition_FormattedResult {
}
interface msdyn_iotpropertydefinition_Select {
}
interface msdyn_iotpropertydefinition_Expand {
}
interface msdyn_iotpropertydefinition_Filter {
}
interface msdyn_iotpropertydefinition_Create extends msdyn_iotpropertydefinition {
}
interface msdyn_iotpropertydefinition_Update extends msdyn_iotpropertydefinition {
}
interface msdyn_iotprovider_Base extends WebEntity {
}
interface msdyn_iotprovider_Fixed extends WebEntity_Fixed {
  msdyn_iotproviderid: string;
}
interface msdyn_iotprovider extends msdyn_iotprovider_Base, msdyn_iotprovider_Relationships {
}
interface msdyn_iotprovider_Relationships {
}
interface msdyn_iotprovider_Result extends msdyn_iotprovider_Base, msdyn_iotprovider_Relationships {
}
interface msdyn_iotprovider_FormattedResult {
}
interface msdyn_iotprovider_Select {
}
interface msdyn_iotprovider_Expand {
}
interface msdyn_iotprovider_Filter {
}
interface msdyn_iotprovider_Create extends msdyn_iotprovider {
}
interface msdyn_iotprovider_Update extends msdyn_iotprovider {
}
interface msdyn_iotproviderinstance_Base extends WebEntity {
}
interface msdyn_iotproviderinstance_Fixed extends WebEntity_Fixed {
  msdyn_iotproviderinstanceid: string;
}
interface msdyn_iotproviderinstance extends msdyn_iotproviderinstance_Base, msdyn_iotproviderinstance_Relationships {
}
interface msdyn_iotproviderinstance_Relationships {
}
interface msdyn_iotproviderinstance_Result extends msdyn_iotproviderinstance_Base, msdyn_iotproviderinstance_Relationships {
}
interface msdyn_iotproviderinstance_FormattedResult {
}
interface msdyn_iotproviderinstance_Select {
}
interface msdyn_iotproviderinstance_Expand {
}
interface msdyn_iotproviderinstance_Filter {
}
interface msdyn_iotproviderinstance_Create extends msdyn_iotproviderinstance {
}
interface msdyn_iotproviderinstance_Update extends msdyn_iotproviderinstance {
}
interface msdyn_iotsettings_Base extends WebEntity {
}
interface msdyn_iotsettings_Fixed extends WebEntity_Fixed {
  msdyn_iotsettingsid: string;
}
interface msdyn_iotsettings extends msdyn_iotsettings_Base, msdyn_iotsettings_Relationships {
}
interface msdyn_iotsettings_Relationships {
}
interface msdyn_iotsettings_Result extends msdyn_iotsettings_Base, msdyn_iotsettings_Relationships {
}
interface msdyn_iotsettings_FormattedResult {
}
interface msdyn_iotsettings_Select {
}
interface msdyn_iotsettings_Expand {
}
interface msdyn_iotsettings_Filter {
}
interface msdyn_iotsettings_Create extends msdyn_iotsettings {
}
interface msdyn_iotsettings_Update extends msdyn_iotsettings {
}
interface msdyn_iottocaseprocess_Base extends WebEntity {
}
interface msdyn_iottocaseprocess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface msdyn_iottocaseprocess extends msdyn_iottocaseprocess_Base, msdyn_iottocaseprocess_Relationships {
}
interface msdyn_iottocaseprocess_Relationships {
}
interface msdyn_iottocaseprocess_Result extends msdyn_iottocaseprocess_Base, msdyn_iottocaseprocess_Relationships {
}
interface msdyn_iottocaseprocess_FormattedResult {
}
interface msdyn_iottocaseprocess_Select {
}
interface msdyn_iottocaseprocess_Expand {
}
interface msdyn_iottocaseprocess_Filter {
}
interface msdyn_iottocaseprocess_Create extends msdyn_iottocaseprocess {
}
interface msdyn_iottocaseprocess_Update extends msdyn_iottocaseprocess {
}
interface msdyn_journal_Base extends WebEntity {
}
interface msdyn_journal_Fixed extends WebEntity_Fixed {
  msdyn_journalid: string;
}
interface msdyn_journal extends msdyn_journal_Base, msdyn_journal_Relationships {
}
interface msdyn_journal_Relationships {
}
interface msdyn_journal_Result extends msdyn_journal_Base, msdyn_journal_Relationships {
}
interface msdyn_journal_FormattedResult {
}
interface msdyn_journal_Select {
}
interface msdyn_journal_Expand {
}
interface msdyn_journal_Filter {
}
interface msdyn_journal_Create extends msdyn_journal {
}
interface msdyn_journal_Update extends msdyn_journal {
}
interface msdyn_journalline_Base extends WebEntity {
}
interface msdyn_journalline_Fixed extends WebEntity_Fixed {
  msdyn_journallineid: string;
}
interface msdyn_journalline extends msdyn_journalline_Base, msdyn_journalline_Relationships {
}
interface msdyn_journalline_Relationships {
}
interface msdyn_journalline_Result extends msdyn_journalline_Base, msdyn_journalline_Relationships {
}
interface msdyn_journalline_FormattedResult {
}
interface msdyn_journalline_Select {
}
interface msdyn_journalline_Expand {
}
interface msdyn_journalline_Filter {
}
interface msdyn_journalline_Create extends msdyn_journalline {
}
interface msdyn_journalline_Update extends msdyn_journalline {
}
interface msdyn_kalanguagesetting_Base extends WebEntity {
}
interface msdyn_kalanguagesetting_Fixed extends WebEntity_Fixed {
  msdyn_kalanguagesettingid: string;
}
interface msdyn_kalanguagesetting extends msdyn_kalanguagesetting_Base, msdyn_kalanguagesetting_Relationships {
}
interface msdyn_kalanguagesetting_Relationships {
}
interface msdyn_kalanguagesetting_Result extends msdyn_kalanguagesetting_Base, msdyn_kalanguagesetting_Relationships {
}
interface msdyn_kalanguagesetting_FormattedResult {
}
interface msdyn_kalanguagesetting_Select {
}
interface msdyn_kalanguagesetting_Expand {
}
interface msdyn_kalanguagesetting_Filter {
}
interface msdyn_kalanguagesetting_Create extends msdyn_kalanguagesetting {
}
interface msdyn_kalanguagesetting_Update extends msdyn_kalanguagesetting {
}
interface msdyn_kbattachment_Base extends WebEntity {
}
interface msdyn_kbattachment_Fixed extends WebEntity_Fixed {
  msdyn_kbattachmentid: string;
}
interface msdyn_kbattachment extends msdyn_kbattachment_Base, msdyn_kbattachment_Relationships {
}
interface msdyn_kbattachment_Relationships {
}
interface msdyn_kbattachment_Result extends msdyn_kbattachment_Base, msdyn_kbattachment_Relationships {
}
interface msdyn_kbattachment_FormattedResult {
}
interface msdyn_kbattachment_Select {
}
interface msdyn_kbattachment_Expand {
}
interface msdyn_kbattachment_Filter {
}
interface msdyn_kbattachment_Create extends msdyn_kbattachment {
}
interface msdyn_kbattachment_Update extends msdyn_kbattachment {
}
interface msdyn_kbenrichment_Base extends WebEntity {
}
interface msdyn_kbenrichment_Fixed extends WebEntity_Fixed {
  msdyn_kbenrichmentid: string;
}
interface msdyn_kbenrichment extends msdyn_kbenrichment_Base, msdyn_kbenrichment_Relationships {
}
interface msdyn_kbenrichment_Relationships {
}
interface msdyn_kbenrichment_Result extends msdyn_kbenrichment_Base, msdyn_kbenrichment_Relationships {
}
interface msdyn_kbenrichment_FormattedResult {
}
interface msdyn_kbenrichment_Select {
}
interface msdyn_kbenrichment_Expand {
}
interface msdyn_kbenrichment_Filter {
}
interface msdyn_kbenrichment_Create extends msdyn_kbenrichment {
}
interface msdyn_kbenrichment_Update extends msdyn_kbenrichment {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Base extends WebEntity {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Fixed extends WebEntity_Fixed {
  msdyn_kbkeywordsdescsuggestionsettingid: string;
}
interface msdyn_kbkeywordsdescsuggestionsetting extends msdyn_kbkeywordsdescsuggestionsetting_Base, msdyn_kbkeywordsdescsuggestionsetting_Relationships {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Relationships {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Result extends msdyn_kbkeywordsdescsuggestionsetting_Base, msdyn_kbkeywordsdescsuggestionsetting_Relationships {
}
interface msdyn_kbkeywordsdescsuggestionsetting_FormattedResult {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Select {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Expand {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Filter {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Create extends msdyn_kbkeywordsdescsuggestionsetting {
}
interface msdyn_kbkeywordsdescsuggestionsetting_Update extends msdyn_kbkeywordsdescsuggestionsetting {
}
interface msdyn_kmfederatedsearchconfig_Base extends WebEntity {
}
interface msdyn_kmfederatedsearchconfig_Fixed extends WebEntity_Fixed {
  msdyn_kmfederatedsearchconfigid: string;
}
interface msdyn_kmfederatedsearchconfig extends msdyn_kmfederatedsearchconfig_Base, msdyn_kmfederatedsearchconfig_Relationships {
}
interface msdyn_kmfederatedsearchconfig_Relationships {
}
interface msdyn_kmfederatedsearchconfig_Result extends msdyn_kmfederatedsearchconfig_Base, msdyn_kmfederatedsearchconfig_Relationships {
}
interface msdyn_kmfederatedsearchconfig_FormattedResult {
}
interface msdyn_kmfederatedsearchconfig_Select {
}
interface msdyn_kmfederatedsearchconfig_Expand {
}
interface msdyn_kmfederatedsearchconfig_Filter {
}
interface msdyn_kmfederatedsearchconfig_Create extends msdyn_kmfederatedsearchconfig {
}
interface msdyn_kmfederatedsearchconfig_Update extends msdyn_kmfederatedsearchconfig {
}
interface msdyn_kmpersonalizationsetting_Base extends WebEntity {
}
interface msdyn_kmpersonalizationsetting_Fixed extends WebEntity_Fixed {
  msdyn_kmpersonalizationsettingid: string;
}
interface msdyn_kmpersonalizationsetting extends msdyn_kmpersonalizationsetting_Base, msdyn_kmpersonalizationsetting_Relationships {
}
interface msdyn_kmpersonalizationsetting_Relationships {
}
interface msdyn_kmpersonalizationsetting_Result extends msdyn_kmpersonalizationsetting_Base, msdyn_kmpersonalizationsetting_Relationships {
}
interface msdyn_kmpersonalizationsetting_FormattedResult {
}
interface msdyn_kmpersonalizationsetting_Select {
}
interface msdyn_kmpersonalizationsetting_Expand {
}
interface msdyn_kmpersonalizationsetting_Filter {
}
interface msdyn_kmpersonalizationsetting_Create extends msdyn_kmpersonalizationsetting {
}
interface msdyn_kmpersonalizationsetting_Update extends msdyn_kmpersonalizationsetting {
}
interface msdyn_knowledgearticleimage_Base extends WebEntity {
}
interface msdyn_knowledgearticleimage_Fixed extends WebEntity_Fixed {
  msdyn_knowledgearticleimageid: string;
}
interface msdyn_knowledgearticleimage extends msdyn_knowledgearticleimage_Base, msdyn_knowledgearticleimage_Relationships {
}
interface msdyn_knowledgearticleimage_Relationships {
}
interface msdyn_knowledgearticleimage_Result extends msdyn_knowledgearticleimage_Base, msdyn_knowledgearticleimage_Relationships {
}
interface msdyn_knowledgearticleimage_FormattedResult {
}
interface msdyn_knowledgearticleimage_Select {
}
interface msdyn_knowledgearticleimage_Expand {
}
interface msdyn_knowledgearticleimage_Filter {
}
interface msdyn_knowledgearticleimage_Create extends msdyn_knowledgearticleimage {
}
interface msdyn_knowledgearticleimage_Update extends msdyn_knowledgearticleimage {
}
interface msdyn_knowledgearticlesuggestion_Base extends WebEntity {
}
interface msdyn_knowledgearticlesuggestion_Fixed extends WebEntity_Fixed {
  msdyn_knowledgearticlesuggestionid: string;
}
interface msdyn_knowledgearticlesuggestion extends msdyn_knowledgearticlesuggestion_Base, msdyn_knowledgearticlesuggestion_Relationships {
}
interface msdyn_knowledgearticlesuggestion_Relationships {
}
interface msdyn_knowledgearticlesuggestion_Result extends msdyn_knowledgearticlesuggestion_Base, msdyn_knowledgearticlesuggestion_Relationships {
}
interface msdyn_knowledgearticlesuggestion_FormattedResult {
}
interface msdyn_knowledgearticlesuggestion_Select {
}
interface msdyn_knowledgearticlesuggestion_Expand {
}
interface msdyn_knowledgearticlesuggestion_Filter {
}
interface msdyn_knowledgearticlesuggestion_Create extends msdyn_knowledgearticlesuggestion {
}
interface msdyn_knowledgearticlesuggestion_Update extends msdyn_knowledgearticlesuggestion {
}
interface msdyn_knowledgearticlesuggestiondatasource_Base extends WebEntity {
}
interface msdyn_knowledgearticlesuggestiondatasource_Fixed extends WebEntity_Fixed {
  msdyn_knowledgearticlesuggestiondatasourceid: string;
}
interface msdyn_knowledgearticlesuggestiondatasource extends msdyn_knowledgearticlesuggestiondatasource_Base, msdyn_knowledgearticlesuggestiondatasource_Relationships {
}
interface msdyn_knowledgearticlesuggestiondatasource_Relationships {
}
interface msdyn_knowledgearticlesuggestiondatasource_Result extends msdyn_knowledgearticlesuggestiondatasource_Base, msdyn_knowledgearticlesuggestiondatasource_Relationships {
}
interface msdyn_knowledgearticlesuggestiondatasource_FormattedResult {
}
interface msdyn_knowledgearticlesuggestiondatasource_Select {
}
interface msdyn_knowledgearticlesuggestiondatasource_Expand {
}
interface msdyn_knowledgearticlesuggestiondatasource_Filter {
}
interface msdyn_knowledgearticlesuggestiondatasource_Create extends msdyn_knowledgearticlesuggestiondatasource {
}
interface msdyn_knowledgearticlesuggestiondatasource_Update extends msdyn_knowledgearticlesuggestiondatasource {
}
interface msdyn_knowledgearticletemplate_Base extends WebEntity {
}
interface msdyn_knowledgearticletemplate_Fixed extends WebEntity_Fixed {
  msdyn_knowledgearticletemplateid: string;
}
interface msdyn_knowledgearticletemplate extends msdyn_knowledgearticletemplate_Base, msdyn_knowledgearticletemplate_Relationships {
}
interface msdyn_knowledgearticletemplate_Relationships {
}
interface msdyn_knowledgearticletemplate_Result extends msdyn_knowledgearticletemplate_Base, msdyn_knowledgearticletemplate_Relationships {
}
interface msdyn_knowledgearticletemplate_FormattedResult {
}
interface msdyn_knowledgearticletemplate_Select {
}
interface msdyn_knowledgearticletemplate_Expand {
}
interface msdyn_knowledgearticletemplate_Filter {
}
interface msdyn_knowledgearticletemplate_Create extends msdyn_knowledgearticletemplate {
}
interface msdyn_knowledgearticletemplate_Update extends msdyn_knowledgearticletemplate {
}
interface msdyn_knowledgeinteractioninsight_Base extends WebEntity {
}
interface msdyn_knowledgeinteractioninsight_Fixed extends WebEntity_Fixed {
  msdyn_knowledgeinteractioninsightid: string;
}
interface msdyn_knowledgeinteractioninsight extends msdyn_knowledgeinteractioninsight_Base, msdyn_knowledgeinteractioninsight_Relationships {
}
interface msdyn_knowledgeinteractioninsight_Relationships {
}
interface msdyn_knowledgeinteractioninsight_Result extends msdyn_knowledgeinteractioninsight_Base, msdyn_knowledgeinteractioninsight_Relationships {
}
interface msdyn_knowledgeinteractioninsight_FormattedResult {
}
interface msdyn_knowledgeinteractioninsight_Select {
}
interface msdyn_knowledgeinteractioninsight_Expand {
}
interface msdyn_knowledgeinteractioninsight_Filter {
}
interface msdyn_knowledgeinteractioninsight_Create extends msdyn_knowledgeinteractioninsight {
}
interface msdyn_knowledgeinteractioninsight_Update extends msdyn_knowledgeinteractioninsight {
}
interface msdyn_knowledgepersonalfilter_Base extends WebEntity {
}
interface msdyn_knowledgepersonalfilter_Fixed extends WebEntity_Fixed {
  msdyn_knowledgepersonalfilterid: string;
}
interface msdyn_knowledgepersonalfilter extends msdyn_knowledgepersonalfilter_Base, msdyn_knowledgepersonalfilter_Relationships {
}
interface msdyn_knowledgepersonalfilter_Relationships {
}
interface msdyn_knowledgepersonalfilter_Result extends msdyn_knowledgepersonalfilter_Base, msdyn_knowledgepersonalfilter_Relationships {
}
interface msdyn_knowledgepersonalfilter_FormattedResult {
}
interface msdyn_knowledgepersonalfilter_Select {
}
interface msdyn_knowledgepersonalfilter_Expand {
}
interface msdyn_knowledgepersonalfilter_Filter {
}
interface msdyn_knowledgepersonalfilter_Create extends msdyn_knowledgepersonalfilter {
}
interface msdyn_knowledgepersonalfilter_Update extends msdyn_knowledgepersonalfilter {
}
interface msdyn_knowledgesearchfilter_Base extends WebEntity {
}
interface msdyn_knowledgesearchfilter_Fixed extends WebEntity_Fixed {
  msdyn_knowledgesearchfilterid: string;
}
interface msdyn_knowledgesearchfilter extends msdyn_knowledgesearchfilter_Base, msdyn_knowledgesearchfilter_Relationships {
}
interface msdyn_knowledgesearchfilter_Relationships {
}
interface msdyn_knowledgesearchfilter_Result extends msdyn_knowledgesearchfilter_Base, msdyn_knowledgesearchfilter_Relationships {
}
interface msdyn_knowledgesearchfilter_FormattedResult {
}
interface msdyn_knowledgesearchfilter_Select {
}
interface msdyn_knowledgesearchfilter_Expand {
}
interface msdyn_knowledgesearchfilter_Filter {
}
interface msdyn_knowledgesearchfilter_Create extends msdyn_knowledgesearchfilter {
}
interface msdyn_knowledgesearchfilter_Update extends msdyn_knowledgesearchfilter {
}
interface msdyn_knowledgesearchinsight_Base extends WebEntity {
}
interface msdyn_knowledgesearchinsight_Fixed extends WebEntity_Fixed {
  msdyn_knowledgesearchinsightid: string;
}
interface msdyn_knowledgesearchinsight extends msdyn_knowledgesearchinsight_Base, msdyn_knowledgesearchinsight_Relationships {
}
interface msdyn_knowledgesearchinsight_Relationships {
}
interface msdyn_knowledgesearchinsight_Result extends msdyn_knowledgesearchinsight_Base, msdyn_knowledgesearchinsight_Relationships {
}
interface msdyn_knowledgesearchinsight_FormattedResult {
}
interface msdyn_knowledgesearchinsight_Select {
}
interface msdyn_knowledgesearchinsight_Expand {
}
interface msdyn_knowledgesearchinsight_Filter {
}
interface msdyn_knowledgesearchinsight_Create extends msdyn_knowledgesearchinsight {
}
interface msdyn_knowledgesearchinsight_Update extends msdyn_knowledgesearchinsight {
}
interface msdyn_KPIEventData_Base extends WebEntity {
}
interface msdyn_KPIEventData_Fixed extends WebEntity_Fixed {
  msdyn_kpieventdataid: string;
}
interface msdyn_KPIEventData extends msdyn_KPIEventData_Base, msdyn_KPIEventData_Relationships {
}
interface msdyn_KPIEventData_Relationships {
}
interface msdyn_KPIEventData_Result extends msdyn_KPIEventData_Base, msdyn_KPIEventData_Relationships {
}
interface msdyn_KPIEventData_FormattedResult {
}
interface msdyn_KPIEventData_Select {
}
interface msdyn_KPIEventData_Expand {
}
interface msdyn_KPIEventData_Filter {
}
interface msdyn_KPIEventData_Create extends msdyn_KPIEventData {
}
interface msdyn_KPIEventData_Update extends msdyn_KPIEventData {
}
interface msdyn_KPIEventDefinition_Base extends WebEntity {
}
interface msdyn_KPIEventDefinition_Fixed extends WebEntity_Fixed {
  msdyn_kpieventdefinitionid: string;
}
interface msdyn_KPIEventDefinition extends msdyn_KPIEventDefinition_Base, msdyn_KPIEventDefinition_Relationships {
}
interface msdyn_KPIEventDefinition_Relationships {
}
interface msdyn_KPIEventDefinition_Result extends msdyn_KPIEventDefinition_Base, msdyn_KPIEventDefinition_Relationships {
}
interface msdyn_KPIEventDefinition_FormattedResult {
}
interface msdyn_KPIEventDefinition_Select {
}
interface msdyn_KPIEventDefinition_Expand {
}
interface msdyn_KPIEventDefinition_Filter {
}
interface msdyn_KPIEventDefinition_Create extends msdyn_KPIEventDefinition {
}
interface msdyn_KPIEventDefinition_Update extends msdyn_KPIEventDefinition {
}
interface msdyn_lineengagementctx_Base extends WebEntity {
}
interface msdyn_lineengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_lineengagementctxid: string;
}
interface msdyn_lineengagementctx extends msdyn_lineengagementctx_Base, msdyn_lineengagementctx_Relationships {
}
interface msdyn_lineengagementctx_Relationships {
}
interface msdyn_lineengagementctx_Result extends msdyn_lineengagementctx_Base, msdyn_lineengagementctx_Relationships {
}
interface msdyn_lineengagementctx_FormattedResult {
}
interface msdyn_lineengagementctx_Select {
}
interface msdyn_lineengagementctx_Expand {
}
interface msdyn_lineengagementctx_Filter {
}
interface msdyn_lineengagementctx_Create extends msdyn_lineengagementctx {
}
interface msdyn_lineengagementctx_Update extends msdyn_lineengagementctx {
}
interface msdyn_livechatconfig_Base extends WebEntity {
}
interface msdyn_livechatconfig_Fixed extends WebEntity_Fixed {
  msdyn_livechatconfigid: string;
}
interface msdyn_livechatconfig extends msdyn_livechatconfig_Base, msdyn_livechatconfig_Relationships {
}
interface msdyn_livechatconfig_Relationships {
}
interface msdyn_livechatconfig_Result extends msdyn_livechatconfig_Base, msdyn_livechatconfig_Relationships {
}
interface msdyn_livechatconfig_FormattedResult {
}
interface msdyn_livechatconfig_Select {
}
interface msdyn_livechatconfig_Expand {
}
interface msdyn_livechatconfig_Filter {
}
interface msdyn_livechatconfig_Create extends msdyn_livechatconfig {
}
interface msdyn_livechatconfig_Update extends msdyn_livechatconfig {
}
interface msdyn_livechatengagementctx_Base extends WebEntity {
}
interface msdyn_livechatengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_livechatengagementctxid: string;
}
interface msdyn_livechatengagementctx extends msdyn_livechatengagementctx_Base, msdyn_livechatengagementctx_Relationships {
}
interface msdyn_livechatengagementctx_Relationships {
}
interface msdyn_livechatengagementctx_Result extends msdyn_livechatengagementctx_Base, msdyn_livechatengagementctx_Relationships {
}
interface msdyn_livechatengagementctx_FormattedResult {
}
interface msdyn_livechatengagementctx_Select {
}
interface msdyn_livechatengagementctx_Expand {
}
interface msdyn_livechatengagementctx_Filter {
}
interface msdyn_livechatengagementctx_Create extends msdyn_livechatengagementctx {
}
interface msdyn_livechatengagementctx_Update extends msdyn_livechatengagementctx {
}
interface msdyn_livechatwidgetlocation_Base extends WebEntity {
}
interface msdyn_livechatwidgetlocation_Fixed extends WebEntity_Fixed {
  msdyn_livechatwidgetlocationid: string;
}
interface msdyn_livechatwidgetlocation extends msdyn_livechatwidgetlocation_Base, msdyn_livechatwidgetlocation_Relationships {
}
interface msdyn_livechatwidgetlocation_Relationships {
}
interface msdyn_livechatwidgetlocation_Result extends msdyn_livechatwidgetlocation_Base, msdyn_livechatwidgetlocation_Relationships {
}
interface msdyn_livechatwidgetlocation_FormattedResult {
}
interface msdyn_livechatwidgetlocation_Select {
}
interface msdyn_livechatwidgetlocation_Expand {
}
interface msdyn_livechatwidgetlocation_Filter {
}
interface msdyn_livechatwidgetlocation_Create extends msdyn_livechatwidgetlocation {
}
interface msdyn_livechatwidgetlocation_Update extends msdyn_livechatwidgetlocation {
}
interface msdyn_liveconversation_Base extends WebEntity {
}
interface msdyn_liveconversation_Fixed extends WebEntity_Fixed {
  msdyn_liveconversationid: string;
}
interface msdyn_liveconversation extends msdyn_liveconversation_Base, msdyn_liveconversation_Relationships {
}
interface msdyn_liveconversation_Relationships {
}
interface msdyn_liveconversation_Result extends msdyn_liveconversation_Base, msdyn_liveconversation_Relationships {
}
interface msdyn_liveconversation_FormattedResult {
}
interface msdyn_liveconversation_Select {
}
interface msdyn_liveconversation_Expand {
}
interface msdyn_liveconversation_Filter {
}
interface msdyn_liveconversation_Create extends msdyn_liveconversation {
}
interface msdyn_liveconversation_Update extends msdyn_liveconversation {
}
interface msdyn_liveworkitemevent_Base extends WebEntity {
}
interface msdyn_liveworkitemevent_Fixed extends WebEntity_Fixed {
  msdyn_liveworkitemeventid: string;
}
interface msdyn_liveworkitemevent extends msdyn_liveworkitemevent_Base, msdyn_liveworkitemevent_Relationships {
}
interface msdyn_liveworkitemevent_Relationships {
}
interface msdyn_liveworkitemevent_Result extends msdyn_liveworkitemevent_Base, msdyn_liveworkitemevent_Relationships {
}
interface msdyn_liveworkitemevent_FormattedResult {
}
interface msdyn_liveworkitemevent_Select {
}
interface msdyn_liveworkitemevent_Expand {
}
interface msdyn_liveworkitemevent_Filter {
}
interface msdyn_liveworkitemevent_Create extends msdyn_liveworkitemevent {
}
interface msdyn_liveworkitemevent_Update extends msdyn_liveworkitemevent {
}
interface msdyn_liveworkstream_Base extends WebEntity {
}
interface msdyn_liveworkstream_Fixed extends WebEntity_Fixed {
  msdyn_liveworkstreamid: string;
}
interface msdyn_liveworkstream extends msdyn_liveworkstream_Base, msdyn_liveworkstream_Relationships {
}
interface msdyn_liveworkstream_Relationships {
}
interface msdyn_liveworkstream_Result extends msdyn_liveworkstream_Base, msdyn_liveworkstream_Relationships {
}
interface msdyn_liveworkstream_FormattedResult {
}
interface msdyn_liveworkstream_Select {
}
interface msdyn_liveworkstream_Expand {
}
interface msdyn_liveworkstream_Filter {
}
interface msdyn_liveworkstream_Create extends msdyn_liveworkstream {
}
interface msdyn_liveworkstream_Update extends msdyn_liveworkstream {
}
interface msdyn_liveworkstreamcapacityprofile_Base extends WebEntity {
}
interface msdyn_liveworkstreamcapacityprofile_Fixed extends WebEntity_Fixed {
  msdyn_liveworkstreamcapacityprofileid: string;
}
interface msdyn_liveworkstreamcapacityprofile extends msdyn_liveworkstreamcapacityprofile_Base, msdyn_liveworkstreamcapacityprofile_Relationships {
}
interface msdyn_liveworkstreamcapacityprofile_Relationships {
}
interface msdyn_liveworkstreamcapacityprofile_Result extends msdyn_liveworkstreamcapacityprofile_Base, msdyn_liveworkstreamcapacityprofile_Relationships {
}
interface msdyn_liveworkstreamcapacityprofile_FormattedResult {
}
interface msdyn_liveworkstreamcapacityprofile_Select {
}
interface msdyn_liveworkstreamcapacityprofile_Expand {
}
interface msdyn_liveworkstreamcapacityprofile_Filter {
}
interface msdyn_liveworkstreamcapacityprofile_Create extends msdyn_liveworkstreamcapacityprofile {
}
interface msdyn_liveworkstreamcapacityprofile_Update extends msdyn_liveworkstreamcapacityprofile {
}
interface msdyn_localizedsurveyquestion_Base extends WebEntity {
}
interface msdyn_localizedsurveyquestion_Fixed extends WebEntity_Fixed {
  msdyn_localizedsurveyquestionid: string;
}
interface msdyn_localizedsurveyquestion extends msdyn_localizedsurveyquestion_Base, msdyn_localizedsurveyquestion_Relationships {
}
interface msdyn_localizedsurveyquestion_Relationships {
}
interface msdyn_localizedsurveyquestion_Result extends msdyn_localizedsurveyquestion_Base, msdyn_localizedsurveyquestion_Relationships {
}
interface msdyn_localizedsurveyquestion_FormattedResult {
}
interface msdyn_localizedsurveyquestion_Select {
}
interface msdyn_localizedsurveyquestion_Expand {
}
interface msdyn_localizedsurveyquestion_Filter {
}
interface msdyn_localizedsurveyquestion_Create extends msdyn_localizedsurveyquestion {
}
interface msdyn_localizedsurveyquestion_Update extends msdyn_localizedsurveyquestion {
}
interface msdyn_macrosession_Base extends WebEntity {
}
interface msdyn_macrosession_Fixed extends WebEntity_Fixed {
  msdyn_macrosessionid: string;
}
interface msdyn_macrosession extends msdyn_macrosession_Base, msdyn_macrosession_Relationships {
}
interface msdyn_macrosession_Relationships {
}
interface msdyn_macrosession_Result extends msdyn_macrosession_Base, msdyn_macrosession_Relationships {
}
interface msdyn_macrosession_FormattedResult {
}
interface msdyn_macrosession_Select {
}
interface msdyn_macrosession_Expand {
}
interface msdyn_macrosession_Filter {
}
interface msdyn_macrosession_Create extends msdyn_macrosession {
}
interface msdyn_macrosession_Update extends msdyn_macrosession {
}
interface msdyn_maskingrule_Base extends WebEntity {
}
interface msdyn_maskingrule_Fixed extends WebEntity_Fixed {
  msdyn_maskingruleid: string;
}
interface msdyn_maskingrule extends msdyn_maskingrule_Base, msdyn_maskingrule_Relationships {
}
interface msdyn_maskingrule_Relationships {
}
interface msdyn_maskingrule_Result extends msdyn_maskingrule_Base, msdyn_maskingrule_Relationships {
}
interface msdyn_maskingrule_FormattedResult {
}
interface msdyn_maskingrule_Select {
}
interface msdyn_maskingrule_Expand {
}
interface msdyn_maskingrule_Filter {
}
interface msdyn_maskingrule_Create extends msdyn_maskingrule {
}
interface msdyn_maskingrule_Update extends msdyn_maskingrule {
}
interface msdyn_masterentityroutingconfiguration_Base extends WebEntity {
}
interface msdyn_masterentityroutingconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_masterentityroutingconfigurationid: string;
}
interface msdyn_masterentityroutingconfiguration extends msdyn_masterentityroutingconfiguration_Base, msdyn_masterentityroutingconfiguration_Relationships {
}
interface msdyn_masterentityroutingconfiguration_Relationships {
}
interface msdyn_masterentityroutingconfiguration_Result extends msdyn_masterentityroutingconfiguration_Base, msdyn_masterentityroutingconfiguration_Relationships {
}
interface msdyn_masterentityroutingconfiguration_FormattedResult {
}
interface msdyn_masterentityroutingconfiguration_Select {
}
interface msdyn_masterentityroutingconfiguration_Expand {
}
interface msdyn_masterentityroutingconfiguration_Filter {
}
interface msdyn_masterentityroutingconfiguration_Create extends msdyn_masterentityroutingconfiguration {
}
interface msdyn_masterentityroutingconfiguration_Update extends msdyn_masterentityroutingconfiguration {
}
interface msdyn_migrationtracker_Base extends WebEntity {
}
interface msdyn_migrationtracker_Fixed extends WebEntity_Fixed {
  msdyn_migrationtrackerid: string;
}
interface msdyn_migrationtracker extends msdyn_migrationtracker_Base, msdyn_migrationtracker_Relationships {
}
interface msdyn_migrationtracker_Relationships {
}
interface msdyn_migrationtracker_Result extends msdyn_migrationtracker_Base, msdyn_migrationtracker_Relationships {
}
interface msdyn_migrationtracker_FormattedResult {
}
interface msdyn_migrationtracker_Select {
}
interface msdyn_migrationtracker_Expand {
}
interface msdyn_migrationtracker_Filter {
}
interface msdyn_migrationtracker_Create extends msdyn_migrationtracker {
}
interface msdyn_migrationtracker_Update extends msdyn_migrationtracker {
}
interface msdyn_mlresultcache_Base extends WebEntity {
}
interface msdyn_mlresultcache_Fixed extends WebEntity_Fixed {
  msdyn_mlresultcacheid: string;
}
interface msdyn_mlresultcache extends msdyn_mlresultcache_Base, msdyn_mlresultcache_Relationships {
}
interface msdyn_mlresultcache_Relationships {
}
interface msdyn_mlresultcache_Result extends msdyn_mlresultcache_Base, msdyn_mlresultcache_Relationships {
}
interface msdyn_mlresultcache_FormattedResult {
}
interface msdyn_mlresultcache_Select {
}
interface msdyn_mlresultcache_Expand {
}
interface msdyn_mlresultcache_Filter {
}
interface msdyn_mlresultcache_Create extends msdyn_mlresultcache {
}
interface msdyn_mlresultcache_Update extends msdyn_mlresultcache {
}
interface msdyn_msdyn_attributevalue_systemuser_Base extends WebEntity {
}
interface msdyn_msdyn_attributevalue_systemuser_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_attributevalue_systemuserid: string;
}
interface msdyn_msdyn_attributevalue_systemuser extends msdyn_msdyn_attributevalue_systemuser_Base, msdyn_msdyn_attributevalue_systemuser_Relationships {
}
interface msdyn_msdyn_attributevalue_systemuser_Relationships {
}
interface msdyn_msdyn_attributevalue_systemuser_Result extends msdyn_msdyn_attributevalue_systemuser_Base, msdyn_msdyn_attributevalue_systemuser_Relationships {
}
interface msdyn_msdyn_attributevalue_systemuser_FormattedResult {
}
interface msdyn_msdyn_attributevalue_systemuser_Select {
}
interface msdyn_msdyn_attributevalue_systemuser_Expand {
}
interface msdyn_msdyn_attributevalue_systemuser_Filter {
}
interface msdyn_msdyn_attributevalue_systemuser_Create extends msdyn_msdyn_attributevalue_systemuser {
}
interface msdyn_msdyn_attributevalue_systemuser_Update extends msdyn_msdyn_attributevalue_systemuser {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Base extends WebEntity {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_cannedmessage_liveworkstreamid: string;
}
interface msdyn_msdyn_cannedmessage_liveworkstream extends msdyn_msdyn_cannedmessage_liveworkstream_Base, msdyn_msdyn_cannedmessage_liveworkstream_Relationships {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Relationships {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Result extends msdyn_msdyn_cannedmessage_liveworkstream_Base, msdyn_msdyn_cannedmessage_liveworkstream_Relationships {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_FormattedResult {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Select {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Expand {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Filter {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Create extends msdyn_msdyn_cannedmessage_liveworkstream {
}
interface msdyn_msdyn_cannedmessage_liveworkstream_Update extends msdyn_msdyn_cannedmessage_liveworkstream {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Base extends WebEntity {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_cannedmessage_msdyn_octagid: string;
}
interface msdyn_msdyn_cannedmessage_msdyn_octag extends msdyn_msdyn_cannedmessage_msdyn_octag_Base, msdyn_msdyn_cannedmessage_msdyn_octag_Relationships {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Relationships {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Result extends msdyn_msdyn_cannedmessage_msdyn_octag_Base, msdyn_msdyn_cannedmessage_msdyn_octag_Relationships {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_FormattedResult {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Select {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Expand {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Filter {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Create extends msdyn_msdyn_cannedmessage_msdyn_octag {
}
interface msdyn_msdyn_cannedmessage_msdyn_octag_Update extends msdyn_msdyn_cannedmessage_msdyn_octag {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Base extends WebEntity {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_consoleapplicationnotificationtagid: string;
}
interface msdyn_msdyn_consoleapplicationnotificationtag extends msdyn_msdyn_consoleapplicationnotificationtag_Base, msdyn_msdyn_consoleapplicationnotificationtag_Relationships {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Relationships {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Result extends msdyn_msdyn_consoleapplicationnotificationtag_Base, msdyn_msdyn_consoleapplicationnotificationtag_Relationships {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Select {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Expand {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Filter {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Create extends msdyn_msdyn_consoleapplicationnotificationtag {
}
interface msdyn_msdyn_consoleapplicationnotificationtag_Update extends msdyn_msdyn_consoleapplicationnotificationtag {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Base extends WebEntity {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_consoleapplicationnotificationtemid: string;
}
interface msdyn_msdyn_consoleapplicationnotificationtem extends msdyn_msdyn_consoleapplicationnotificationtem_Base, msdyn_msdyn_consoleapplicationnotificationtem_Relationships {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Relationships {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Result extends msdyn_msdyn_consoleapplicationnotificationtem_Base, msdyn_msdyn_consoleapplicationnotificationtem_Relationships {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Select {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Expand {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Filter {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Create extends msdyn_msdyn_consoleapplicationnotificationtem {
}
interface msdyn_msdyn_consoleapplicationnotificationtem_Update extends msdyn_msdyn_consoleapplicationnotificationtem {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Base extends WebEntity {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_consoleapplicationsessiontemp_tagid: string;
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag extends msdyn_msdyn_consoleapplicationsessiontemp_tag_Base, msdyn_msdyn_consoleapplicationsessiontemp_tag_Relationships {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Relationships {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Result extends msdyn_msdyn_consoleapplicationsessiontemp_tag_Base, msdyn_msdyn_consoleapplicationsessiontemp_tag_Relationships {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Select {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Expand {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Filter {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Create extends msdyn_msdyn_consoleapplicationsessiontemp_tag {
}
interface msdyn_msdyn_consoleapplicationsessiontemp_tag_Update extends msdyn_msdyn_consoleapplicationsessiontemp_tag {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Base extends WebEntity {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_consoleapplicationsessiontemplateid: string;
}
interface msdyn_msdyn_consoleapplicationsessiontemplate extends msdyn_msdyn_consoleapplicationsessiontemplate_Base, msdyn_msdyn_consoleapplicationsessiontemplate_Relationships {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Relationships {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Result extends msdyn_msdyn_consoleapplicationsessiontemplate_Base, msdyn_msdyn_consoleapplicationsessiontemplate_Relationships {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Select {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Expand {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Filter {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Create extends msdyn_msdyn_consoleapplicationsessiontemplate {
}
interface msdyn_msdyn_consoleapplicationsessiontemplate_Update extends msdyn_msdyn_consoleapplicationsessiontemplate {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Base extends WebEntity {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Fixed extends WebEntity_Fixed {
  msdyn_msdyn_consoleapplicationtemplate_msdyn_id: string;
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn_ extends msdyn_msdyn_consoleapplicationtemplate_msdyn__Base, msdyn_msdyn_consoleapplicationtemplate_msdyn__Relationships {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Relationships {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Result extends msdyn_msdyn_consoleapplicationtemplate_msdyn__Base, msdyn_msdyn_consoleapplicationtemplate_msdyn__Relationships {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__FormattedResult {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Select {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Expand {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Filter {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Create extends msdyn_msdyn_consoleapplicationtemplate_msdyn_ {
}
interface msdyn_msdyn_consoleapplicationtemplate_msdyn__Update extends msdyn_msdyn_consoleapplicationtemplate_msdyn_ {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Base extends WebEntity {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_consoleapplicationtemplate_tagsid: string;
}
interface msdyn_msdyn_consoleapplicationtemplate_tags extends msdyn_msdyn_consoleapplicationtemplate_tags_Base, msdyn_msdyn_consoleapplicationtemplate_tags_Relationships {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Relationships {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Result extends msdyn_msdyn_consoleapplicationtemplate_tags_Base, msdyn_msdyn_consoleapplicationtemplate_tags_Relationships {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Select {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Expand {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Filter {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Create extends msdyn_msdyn_consoleapplicationtemplate_tags {
}
interface msdyn_msdyn_consoleapplicationtemplate_tags_Update extends msdyn_msdyn_consoleapplicationtemplate_tags {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Base extends WebEntity {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_consoleapplicationtype_msdyn_consid: string;
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons extends msdyn_msdyn_consoleapplicationtype_msdyn_cons_Base, msdyn_msdyn_consoleapplicationtype_msdyn_cons_Relationships {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Relationships {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Result extends msdyn_msdyn_consoleapplicationtype_msdyn_cons_Base, msdyn_msdyn_consoleapplicationtype_msdyn_cons_Relationships {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_FormattedResult {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Select {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Expand {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Filter {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Create extends msdyn_msdyn_consoleapplicationtype_msdyn_cons {
}
interface msdyn_msdyn_consoleapplicationtype_msdyn_cons_Update extends msdyn_msdyn_consoleapplicationtype_msdyn_cons {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Base extends WebEntity {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_customerasset_knowledgearticlid: string;
}
interface msdyn_msdyn_customerasset_knowledgearticl extends msdyn_msdyn_customerasset_knowledgearticl_Base, msdyn_msdyn_customerasset_knowledgearticl_Relationships {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Relationships {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Result extends msdyn_msdyn_customerasset_knowledgearticl_Base, msdyn_msdyn_customerasset_knowledgearticl_Relationships {
}
interface msdyn_msdyn_customerasset_knowledgearticl_FormattedResult {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Select {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Expand {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Filter {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Create extends msdyn_msdyn_customerasset_knowledgearticl {
}
interface msdyn_msdyn_customerasset_knowledgearticl_Update extends msdyn_msdyn_customerasset_knowledgearticl {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Base extends WebEntity {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_customerasset_knowledgebasereid: string;
}
interface msdyn_msdyn_customerasset_knowledgebasere extends msdyn_msdyn_customerasset_knowledgebasere_Base, msdyn_msdyn_customerasset_knowledgebasere_Relationships {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Relationships {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Result extends msdyn_msdyn_customerasset_knowledgebasere_Base, msdyn_msdyn_customerasset_knowledgebasere_Relationships {
}
interface msdyn_msdyn_customerasset_knowledgebasere_FormattedResult {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Select {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Expand {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Filter {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Create extends msdyn_msdyn_customerasset_knowledgebasere {
}
interface msdyn_msdyn_customerasset_knowledgebasere_Update extends msdyn_msdyn_customerasset_knowledgebasere {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Base extends WebEntity {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_customerasset_msdyn_3dmodelid: string;
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel extends msdyn_msdyn_customerasset_msdyn_3dmodel_Base, msdyn_msdyn_customerasset_msdyn_3dmodel_Relationships {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Relationships {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Result extends msdyn_msdyn_customerasset_msdyn_3dmodel_Base, msdyn_msdyn_customerasset_msdyn_3dmodel_Relationships {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_FormattedResult {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Select {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Expand {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Filter {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Create extends msdyn_msdyn_customerasset_msdyn_3dmodel {
}
interface msdyn_msdyn_customerasset_msdyn_3dmodel_Update extends msdyn_msdyn_customerasset_msdyn_3dmodel {
}
interface msdyn_msdyn_functionallocation_account_Base extends WebEntity {
}
interface msdyn_msdyn_functionallocation_account_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_functionallocation_accountid: string;
}
interface msdyn_msdyn_functionallocation_account extends msdyn_msdyn_functionallocation_account_Base, msdyn_msdyn_functionallocation_account_Relationships {
}
interface msdyn_msdyn_functionallocation_account_Relationships {
}
interface msdyn_msdyn_functionallocation_account_Result extends msdyn_msdyn_functionallocation_account_Base, msdyn_msdyn_functionallocation_account_Relationships {
}
interface msdyn_msdyn_functionallocation_account_FormattedResult {
}
interface msdyn_msdyn_functionallocation_account_Select {
}
interface msdyn_msdyn_functionallocation_account_Expand {
}
interface msdyn_msdyn_functionallocation_account_Filter {
}
interface msdyn_msdyn_functionallocation_account_Create extends msdyn_msdyn_functionallocation_account {
}
interface msdyn_msdyn_functionallocation_account_Update extends msdyn_msdyn_functionallocation_account {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Base extends WebEntity {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_incidenttype_knowledgearticleid: string;
}
interface msdyn_msdyn_incidenttype_knowledgearticle extends msdyn_msdyn_incidenttype_knowledgearticle_Base, msdyn_msdyn_incidenttype_knowledgearticle_Relationships {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Relationships {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Result extends msdyn_msdyn_incidenttype_knowledgearticle_Base, msdyn_msdyn_incidenttype_knowledgearticle_Relationships {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_FormattedResult {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Select {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Expand {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Filter {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Create extends msdyn_msdyn_incidenttype_knowledgearticle {
}
interface msdyn_msdyn_incidenttype_knowledgearticle_Update extends msdyn_msdyn_incidenttype_knowledgearticle {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Base extends WebEntity {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_incidenttype_knowledgebaserecid: string;
}
interface msdyn_msdyn_incidenttype_knowledgebaserec extends msdyn_msdyn_incidenttype_knowledgebaserec_Base, msdyn_msdyn_incidenttype_knowledgebaserec_Relationships {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Relationships {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Result extends msdyn_msdyn_incidenttype_knowledgebaserec_Base, msdyn_msdyn_incidenttype_knowledgebaserec_Relationships {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_FormattedResult {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Select {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Expand {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Filter {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Create extends msdyn_msdyn_incidenttype_knowledgebaserec {
}
interface msdyn_msdyn_incidenttype_knowledgebaserec_Update extends msdyn_msdyn_incidenttype_knowledgebaserec {
}
interface msdyn_msdyn_journal_msdyn_expense_Base extends WebEntity {
}
interface msdyn_msdyn_journal_msdyn_expense_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_journal_msdyn_expenseid: string;
}
interface msdyn_msdyn_journal_msdyn_expense extends msdyn_msdyn_journal_msdyn_expense_Base, msdyn_msdyn_journal_msdyn_expense_Relationships {
}
interface msdyn_msdyn_journal_msdyn_expense_Relationships {
}
interface msdyn_msdyn_journal_msdyn_expense_Result extends msdyn_msdyn_journal_msdyn_expense_Base, msdyn_msdyn_journal_msdyn_expense_Relationships {
}
interface msdyn_msdyn_journal_msdyn_expense_FormattedResult {
}
interface msdyn_msdyn_journal_msdyn_expense_Select {
}
interface msdyn_msdyn_journal_msdyn_expense_Expand {
}
interface msdyn_msdyn_journal_msdyn_expense_Filter {
}
interface msdyn_msdyn_journal_msdyn_expense_Create extends msdyn_msdyn_journal_msdyn_expense {
}
interface msdyn_msdyn_journal_msdyn_expense_Update extends msdyn_msdyn_journal_msdyn_expense {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Base extends WebEntity {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_journal_msdyn_timeentryid: string;
}
interface msdyn_msdyn_journal_msdyn_timeentry extends msdyn_msdyn_journal_msdyn_timeentry_Base, msdyn_msdyn_journal_msdyn_timeentry_Relationships {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Relationships {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Result extends msdyn_msdyn_journal_msdyn_timeentry_Base, msdyn_msdyn_journal_msdyn_timeentry_Relationships {
}
interface msdyn_msdyn_journal_msdyn_timeentry_FormattedResult {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Select {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Expand {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Filter {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Create extends msdyn_msdyn_journal_msdyn_timeentry {
}
interface msdyn_msdyn_journal_msdyn_timeentry_Update extends msdyn_msdyn_journal_msdyn_timeentry {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Base extends WebEntity {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_kbattachment_knowledgearticleid: string;
}
interface msdyn_msdyn_kbattachment_knowledgearticle extends msdyn_msdyn_kbattachment_knowledgearticle_Base, msdyn_msdyn_kbattachment_knowledgearticle_Relationships {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Relationships {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Result extends msdyn_msdyn_kbattachment_knowledgearticle_Base, msdyn_msdyn_kbattachment_knowledgearticle_Relationships {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_FormattedResult {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Select {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Expand {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Filter {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Create extends msdyn_msdyn_kbattachment_knowledgearticle {
}
interface msdyn_msdyn_kbattachment_knowledgearticle_Update extends msdyn_msdyn_kbattachment_knowledgearticle {
}
interface msdyn_msdyn_liveworkstream_systemuser_Base extends WebEntity {
}
interface msdyn_msdyn_liveworkstream_systemuser_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_liveworkstream_systemuserid: string;
}
interface msdyn_msdyn_liveworkstream_systemuser extends msdyn_msdyn_liveworkstream_systemuser_Base, msdyn_msdyn_liveworkstream_systemuser_Relationships {
}
interface msdyn_msdyn_liveworkstream_systemuser_Relationships {
}
interface msdyn_msdyn_liveworkstream_systemuser_Result extends msdyn_msdyn_liveworkstream_systemuser_Base, msdyn_msdyn_liveworkstream_systemuser_Relationships {
}
interface msdyn_msdyn_liveworkstream_systemuser_FormattedResult {
}
interface msdyn_msdyn_liveworkstream_systemuser_Select {
}
interface msdyn_msdyn_liveworkstream_systemuser_Expand {
}
interface msdyn_msdyn_liveworkstream_systemuser_Filter {
}
interface msdyn_msdyn_liveworkstream_systemuser_Create extends msdyn_msdyn_liveworkstream_systemuser {
}
interface msdyn_msdyn_liveworkstream_systemuser_Update extends msdyn_msdyn_liveworkstream_systemuser {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Base extends WebEntity {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_ocliveworkitem_knowledgearticid: string;
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic extends msdyn_msdyn_ocliveworkitem_knowledgeartic_Base, msdyn_msdyn_ocliveworkitem_knowledgeartic_Relationships {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Relationships {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Result extends msdyn_msdyn_ocliveworkitem_knowledgeartic_Base, msdyn_msdyn_ocliveworkitem_knowledgeartic_Relationships {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_FormattedResult {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Select {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Expand {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Filter {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Create extends msdyn_msdyn_ocliveworkitem_knowledgeartic {
}
interface msdyn_msdyn_ocliveworkitem_knowledgeartic_Update extends msdyn_msdyn_ocliveworkitem_knowledgeartic {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Base extends WebEntity {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_ocliveworkitem_knowledgebaserid: string;
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser extends msdyn_msdyn_ocliveworkitem_knowledgebaser_Base, msdyn_msdyn_ocliveworkitem_knowledgebaser_Relationships {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Relationships {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Result extends msdyn_msdyn_ocliveworkitem_knowledgebaser_Base, msdyn_msdyn_ocliveworkitem_knowledgebaser_Relationships {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_FormattedResult {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Select {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Expand {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Filter {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Create extends msdyn_msdyn_ocliveworkitem_knowledgebaser {
}
interface msdyn_msdyn_ocliveworkitem_knowledgebaser_Update extends msdyn_msdyn_ocliveworkitem_knowledgebaser {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Base extends WebEntity {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_paneconfig_msdyn_appconfigid: string;
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig extends msdyn_msdyn_paneconfig_msdyn_appconfig_Base, msdyn_msdyn_paneconfig_msdyn_appconfig_Relationships {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Relationships {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Result extends msdyn_msdyn_paneconfig_msdyn_appconfig_Base, msdyn_msdyn_paneconfig_msdyn_appconfig_Relationships {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_FormattedResult {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Select {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Expand {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Filter {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Create extends msdyn_msdyn_paneconfig_msdyn_appconfig {
}
interface msdyn_msdyn_paneconfig_msdyn_appconfig_Update extends msdyn_msdyn_paneconfig_msdyn_appconfig {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Base extends WebEntity {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_personalmessage_msdyn_octagid: string;
}
interface msdyn_msdyn_personalmessage_msdyn_octag extends msdyn_msdyn_personalmessage_msdyn_octag_Base, msdyn_msdyn_personalmessage_msdyn_octag_Relationships {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Relationships {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Result extends msdyn_msdyn_personalmessage_msdyn_octag_Base, msdyn_msdyn_personalmessage_msdyn_octag_Relationships {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_FormattedResult {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Select {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Expand {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Filter {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Create extends msdyn_msdyn_personalmessage_msdyn_octag {
}
interface msdyn_msdyn_personalmessage_msdyn_octag_Update extends msdyn_msdyn_personalmessage_msdyn_octag {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Base extends WebEntity {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_prod_actioninputparameter_msdyn_parid: string;
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par extends msdyn_msdyn_prod_actioninputparameter_msdyn_par_Base, msdyn_msdyn_prod_actioninputparameter_msdyn_par_Relationships {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Relationships {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Result extends msdyn_msdyn_prod_actioninputparameter_msdyn_par_Base, msdyn_msdyn_prod_actioninputparameter_msdyn_par_Relationships {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_FormattedResult {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Select {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Expand {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Filter {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Create extends msdyn_msdyn_prod_actioninputparameter_msdyn_par {
}
interface msdyn_msdyn_prod_actioninputparameter_msdyn_par_Update extends msdyn_msdyn_prod_actioninputparameter_msdyn_par {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Base extends WebEntity {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_prod_actionoutputparameter_msdyn_paid: string;
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa extends msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Base, msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Relationships {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Relationships {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Result extends msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Base, msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Relationships {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_FormattedResult {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Select {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Expand {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Filter {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Create extends msdyn_msdyn_prod_actionoutputparameter_msdyn_pa {
}
interface msdyn_msdyn_prod_actionoutputparameter_msdyn_pa_Update extends msdyn_msdyn_prod_actionoutputparameter_msdyn_pa {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Base extends WebEntity {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_prod_agentscript_msdyn_sessiontemplid: string;
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl extends msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Base, msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Relationships {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Relationships {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Result extends msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Base, msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Relationships {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_FormattedResult {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Select {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Expand {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Filter {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Create extends msdyn_msdyn_prod_agentscript_msdyn_sessiontempl {
}
interface msdyn_msdyn_prod_agentscript_msdyn_sessiontempl_Update extends msdyn_msdyn_prod_agentscript_msdyn_sessiontempl {
}
interface msdyn_msdyn_workorder_knowledgearticle_Base extends WebEntity {
}
interface msdyn_msdyn_workorder_knowledgearticle_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_workorder_knowledgearticleid: string;
}
interface msdyn_msdyn_workorder_knowledgearticle extends msdyn_msdyn_workorder_knowledgearticle_Base, msdyn_msdyn_workorder_knowledgearticle_Relationships {
}
interface msdyn_msdyn_workorder_knowledgearticle_Relationships {
}
interface msdyn_msdyn_workorder_knowledgearticle_Result extends msdyn_msdyn_workorder_knowledgearticle_Base, msdyn_msdyn_workorder_knowledgearticle_Relationships {
}
interface msdyn_msdyn_workorder_knowledgearticle_FormattedResult {
}
interface msdyn_msdyn_workorder_knowledgearticle_Select {
}
interface msdyn_msdyn_workorder_knowledgearticle_Expand {
}
interface msdyn_msdyn_workorder_knowledgearticle_Filter {
}
interface msdyn_msdyn_workorder_knowledgearticle_Create extends msdyn_msdyn_workorder_knowledgearticle {
}
interface msdyn_msdyn_workorder_knowledgearticle_Update extends msdyn_msdyn_workorder_knowledgearticle {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Base extends WebEntity {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Fixed extends WebEntity_Fixed {
  msdyn_msdyn_workorder_knowledgebaserecordid: string;
}
interface msdyn_msdyn_workorder_knowledgebaserecord extends msdyn_msdyn_workorder_knowledgebaserecord_Base, msdyn_msdyn_workorder_knowledgebaserecord_Relationships {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Relationships {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Result extends msdyn_msdyn_workorder_knowledgebaserecord_Base, msdyn_msdyn_workorder_knowledgebaserecord_Relationships {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_FormattedResult {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Select {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Expand {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Filter {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Create extends msdyn_msdyn_workorder_knowledgebaserecord {
}
interface msdyn_msdyn_workorder_knowledgebaserecord_Update extends msdyn_msdyn_workorder_knowledgebaserecord {
}
interface msdyn_msteamssetting_Base extends WebEntity {
}
interface msdyn_msteamssetting_Fixed extends WebEntity_Fixed {
  msdyn_msteamssettingid: string;
}
interface msdyn_msteamssetting extends msdyn_msteamssetting_Base, msdyn_msteamssetting_Relationships {
}
interface msdyn_msteamssetting_Relationships {
}
interface msdyn_msteamssetting_Result extends msdyn_msteamssetting_Base, msdyn_msteamssetting_Relationships {
}
interface msdyn_msteamssetting_FormattedResult {
}
interface msdyn_msteamssetting_Select {
}
interface msdyn_msteamssetting_Expand {
}
interface msdyn_msteamssetting_Filter {
}
interface msdyn_msteamssetting_Create extends msdyn_msteamssetting {
}
interface msdyn_msteamssetting_Update extends msdyn_msteamssetting {
}
interface msdyn_msteamssettingsv2_Base extends WebEntity {
}
interface msdyn_msteamssettingsv2_Fixed extends WebEntity_Fixed {
  msdyn_msteamssettingsv2id: string;
}
interface msdyn_msteamssettingsv2 extends msdyn_msteamssettingsv2_Base, msdyn_msteamssettingsv2_Relationships {
}
interface msdyn_msteamssettingsv2_Relationships {
}
interface msdyn_msteamssettingsv2_Result extends msdyn_msteamssettingsv2_Base, msdyn_msteamssettingsv2_Relationships {
}
interface msdyn_msteamssettingsv2_FormattedResult {
}
interface msdyn_msteamssettingsv2_Select {
}
interface msdyn_msteamssettingsv2_Expand {
}
interface msdyn_msteamssettingsv2_Filter {
}
interface msdyn_msteamssettingsv2_Create extends msdyn_msteamssettingsv2 {
}
interface msdyn_msteamssettingsv2_Update extends msdyn_msteamssettingsv2 {
}
interface msdyn_nonrelationalds_Base extends WebEntity {
}
interface msdyn_nonrelationalds_Fixed extends WebEntity_Fixed {
  msdyn_nonrelationaldsid: string;
}
interface msdyn_nonrelationalds extends msdyn_nonrelationalds_Base, msdyn_nonrelationalds_Relationships {
}
interface msdyn_nonrelationalds_Relationships {
}
interface msdyn_nonrelationalds_Result extends msdyn_nonrelationalds_Base, msdyn_nonrelationalds_Relationships {
}
interface msdyn_nonrelationalds_FormattedResult {
}
interface msdyn_nonrelationalds_Select {
}
interface msdyn_nonrelationalds_Expand {
}
interface msdyn_nonrelationalds_Filter {
}
interface msdyn_nonrelationalds_Create extends msdyn_nonrelationalds {
}
interface msdyn_nonrelationalds_Update extends msdyn_nonrelationalds {
}
interface msdyn_notesanalysisconfig_Base extends WebEntity {
}
interface msdyn_notesanalysisconfig_Fixed extends WebEntity_Fixed {
  msdyn_notesanalysisconfigid: string;
}
interface msdyn_notesanalysisconfig extends msdyn_notesanalysisconfig_Base, msdyn_notesanalysisconfig_Relationships {
}
interface msdyn_notesanalysisconfig_Relationships {
}
interface msdyn_notesanalysisconfig_Result extends msdyn_notesanalysisconfig_Base, msdyn_notesanalysisconfig_Relationships {
}
interface msdyn_notesanalysisconfig_FormattedResult {
}
interface msdyn_notesanalysisconfig_Select {
}
interface msdyn_notesanalysisconfig_Expand {
}
interface msdyn_notesanalysisconfig_Filter {
}
interface msdyn_notesanalysisconfig_Create extends msdyn_notesanalysisconfig {
}
interface msdyn_notesanalysisconfig_Update extends msdyn_notesanalysisconfig {
}
interface msdyn_notificationfield_Base extends WebEntity {
}
interface msdyn_notificationfield_Fixed extends WebEntity_Fixed {
  msdyn_notificationfieldid: string;
}
interface msdyn_notificationfield extends msdyn_notificationfield_Base, msdyn_notificationfield_Relationships {
}
interface msdyn_notificationfield_Relationships {
}
interface msdyn_notificationfield_Result extends msdyn_notificationfield_Base, msdyn_notificationfield_Relationships {
}
interface msdyn_notificationfield_FormattedResult {
}
interface msdyn_notificationfield_Select {
}
interface msdyn_notificationfield_Expand {
}
interface msdyn_notificationfield_Filter {
}
interface msdyn_notificationfield_Create extends msdyn_notificationfield {
}
interface msdyn_notificationfield_Update extends msdyn_notificationfield {
}
interface msdyn_notificationtemplate_Base extends WebEntity {
}
interface msdyn_notificationtemplate_Fixed extends WebEntity_Fixed {
  msdyn_notificationtemplateid: string;
}
interface msdyn_notificationtemplate extends msdyn_notificationtemplate_Base, msdyn_notificationtemplate_Relationships {
}
interface msdyn_notificationtemplate_Relationships {
}
interface msdyn_notificationtemplate_Result extends msdyn_notificationtemplate_Base, msdyn_notificationtemplate_Relationships {
}
interface msdyn_notificationtemplate_FormattedResult {
}
interface msdyn_notificationtemplate_Select {
}
interface msdyn_notificationtemplate_Expand {
}
interface msdyn_notificationtemplate_Filter {
}
interface msdyn_notificationtemplate_Create extends msdyn_notificationtemplate {
}
interface msdyn_notificationtemplate_Update extends msdyn_notificationtemplate {
}
interface msdyn_notificationtemplate_notificationfield_Base extends WebEntity {
}
interface msdyn_notificationtemplate_notificationfield_Fixed extends WebEntity_Fixed {
  msdyn_notificationtemplate_notificationfieldid: string;
}
interface msdyn_notificationtemplate_notificationfield extends msdyn_notificationtemplate_notificationfield_Base, msdyn_notificationtemplate_notificationfield_Relationships {
}
interface msdyn_notificationtemplate_notificationfield_Relationships {
}
interface msdyn_notificationtemplate_notificationfield_Result extends msdyn_notificationtemplate_notificationfield_Base, msdyn_notificationtemplate_notificationfield_Relationships {
}
interface msdyn_notificationtemplate_notificationfield_FormattedResult {
}
interface msdyn_notificationtemplate_notificationfield_Select {
}
interface msdyn_notificationtemplate_notificationfield_Expand {
}
interface msdyn_notificationtemplate_notificationfield_Filter {
}
interface msdyn_notificationtemplate_notificationfield_Create extends msdyn_notificationtemplate_notificationfield {
}
interface msdyn_notificationtemplate_notificationfield_Update extends msdyn_notificationtemplate_notificationfield {
}
interface msdyn_oc_geolocationprovider_Base extends WebEntity {
}
interface msdyn_oc_geolocationprovider_Fixed extends WebEntity_Fixed {
  msdyn_oc_geolocationproviderid: string;
}
interface msdyn_oc_geolocationprovider extends msdyn_oc_geolocationprovider_Base, msdyn_oc_geolocationprovider_Relationships {
}
interface msdyn_oc_geolocationprovider_Relationships {
}
interface msdyn_oc_geolocationprovider_Result extends msdyn_oc_geolocationprovider_Base, msdyn_oc_geolocationprovider_Relationships {
}
interface msdyn_oc_geolocationprovider_FormattedResult {
}
interface msdyn_oc_geolocationprovider_Select {
}
interface msdyn_oc_geolocationprovider_Expand {
}
interface msdyn_oc_geolocationprovider_Filter {
}
interface msdyn_oc_geolocationprovider_Create extends msdyn_oc_geolocationprovider {
}
interface msdyn_oc_geolocationprovider_Update extends msdyn_oc_geolocationprovider {
}
interface msdyn_ocautoblockrule_Base extends WebEntity {
}
interface msdyn_ocautoblockrule_Fixed extends WebEntity_Fixed {
  msdyn_ocautoblockruleid: string;
}
interface msdyn_ocautoblockrule extends msdyn_ocautoblockrule_Base, msdyn_ocautoblockrule_Relationships {
}
interface msdyn_ocautoblockrule_Relationships {
}
interface msdyn_ocautoblockrule_Result extends msdyn_ocautoblockrule_Base, msdyn_ocautoblockrule_Relationships {
}
interface msdyn_ocautoblockrule_FormattedResult {
}
interface msdyn_ocautoblockrule_Select {
}
interface msdyn_ocautoblockrule_Expand {
}
interface msdyn_ocautoblockrule_Filter {
}
interface msdyn_ocautoblockrule_Create extends msdyn_ocautoblockrule {
}
interface msdyn_ocautoblockrule_Update extends msdyn_ocautoblockrule {
}
interface msdyn_ocbotchannelregistration_Base extends WebEntity {
}
interface msdyn_ocbotchannelregistration_Fixed extends WebEntity_Fixed {
  msdyn_ocbotchannelregistrationid: string;
}
interface msdyn_ocbotchannelregistration extends msdyn_ocbotchannelregistration_Base, msdyn_ocbotchannelregistration_Relationships {
}
interface msdyn_ocbotchannelregistration_Relationships {
}
interface msdyn_ocbotchannelregistration_Result extends msdyn_ocbotchannelregistration_Base, msdyn_ocbotchannelregistration_Relationships {
}
interface msdyn_ocbotchannelregistration_FormattedResult {
}
interface msdyn_ocbotchannelregistration_Select {
}
interface msdyn_ocbotchannelregistration_Expand {
}
interface msdyn_ocbotchannelregistration_Filter {
}
interface msdyn_ocbotchannelregistration_Create extends msdyn_ocbotchannelregistration {
}
interface msdyn_ocbotchannelregistration_Update extends msdyn_ocbotchannelregistration {
}
interface msdyn_occarrier_Base extends WebEntity {
}
interface msdyn_occarrier_Fixed extends WebEntity_Fixed {
  msdyn_occarrierid: string;
}
interface msdyn_occarrier extends msdyn_occarrier_Base, msdyn_occarrier_Relationships {
}
interface msdyn_occarrier_Relationships {
}
interface msdyn_occarrier_Result extends msdyn_occarrier_Base, msdyn_occarrier_Relationships {
}
interface msdyn_occarrier_FormattedResult {
}
interface msdyn_occarrier_Select {
}
interface msdyn_occarrier_Expand {
}
interface msdyn_occarrier_Filter {
}
interface msdyn_occarrier_Create extends msdyn_occarrier {
}
interface msdyn_occarrier_Update extends msdyn_occarrier {
}
interface msdyn_occhannelconfiguration_Base extends WebEntity {
}
interface msdyn_occhannelconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_occhannelconfigurationid: string;
}
interface msdyn_occhannelconfiguration extends msdyn_occhannelconfiguration_Base, msdyn_occhannelconfiguration_Relationships {
}
interface msdyn_occhannelconfiguration_Relationships {
}
interface msdyn_occhannelconfiguration_Result extends msdyn_occhannelconfiguration_Base, msdyn_occhannelconfiguration_Relationships {
}
interface msdyn_occhannelconfiguration_FormattedResult {
}
interface msdyn_occhannelconfiguration_Select {
}
interface msdyn_occhannelconfiguration_Expand {
}
interface msdyn_occhannelconfiguration_Filter {
}
interface msdyn_occhannelconfiguration_Create extends msdyn_occhannelconfiguration {
}
interface msdyn_occhannelconfiguration_Update extends msdyn_occhannelconfiguration {
}
interface msdyn_occhannelstateconfiguration_Base extends WebEntity {
}
interface msdyn_occhannelstateconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_occhannelstateconfigurationid: string;
}
interface msdyn_occhannelstateconfiguration extends msdyn_occhannelstateconfiguration_Base, msdyn_occhannelstateconfiguration_Relationships {
}
interface msdyn_occhannelstateconfiguration_Relationships {
}
interface msdyn_occhannelstateconfiguration_Result extends msdyn_occhannelstateconfiguration_Base, msdyn_occhannelstateconfiguration_Relationships {
}
interface msdyn_occhannelstateconfiguration_FormattedResult {
}
interface msdyn_occhannelstateconfiguration_Select {
}
interface msdyn_occhannelstateconfiguration_Expand {
}
interface msdyn_occhannelstateconfiguration_Filter {
}
interface msdyn_occhannelstateconfiguration_Create extends msdyn_occhannelstateconfiguration {
}
interface msdyn_occhannelstateconfiguration_Update extends msdyn_occhannelstateconfiguration {
}
interface msdyn_occommunicationprovidersetting_Base extends WebEntity {
}
interface msdyn_occommunicationprovidersetting_Fixed extends WebEntity_Fixed {
  msdyn_occommunicationprovidersettingid: string;
}
interface msdyn_occommunicationprovidersetting extends msdyn_occommunicationprovidersetting_Base, msdyn_occommunicationprovidersetting_Relationships {
}
interface msdyn_occommunicationprovidersetting_Relationships {
}
interface msdyn_occommunicationprovidersetting_Result extends msdyn_occommunicationprovidersetting_Base, msdyn_occommunicationprovidersetting_Relationships {
}
interface msdyn_occommunicationprovidersetting_FormattedResult {
}
interface msdyn_occommunicationprovidersetting_Select {
}
interface msdyn_occommunicationprovidersetting_Expand {
}
interface msdyn_occommunicationprovidersetting_Filter {
}
interface msdyn_occommunicationprovidersetting_Create extends msdyn_occommunicationprovidersetting {
}
interface msdyn_occommunicationprovidersetting_Update extends msdyn_occommunicationprovidersetting {
}
interface msdyn_occommunicationprovidersettingentry_Base extends WebEntity {
}
interface msdyn_occommunicationprovidersettingentry_Fixed extends WebEntity_Fixed {
  msdyn_occommunicationprovidersettingentryid: string;
}
interface msdyn_occommunicationprovidersettingentry extends msdyn_occommunicationprovidersettingentry_Base, msdyn_occommunicationprovidersettingentry_Relationships {
}
interface msdyn_occommunicationprovidersettingentry_Relationships {
}
interface msdyn_occommunicationprovidersettingentry_Result extends msdyn_occommunicationprovidersettingentry_Base, msdyn_occommunicationprovidersettingentry_Relationships {
}
interface msdyn_occommunicationprovidersettingentry_FormattedResult {
}
interface msdyn_occommunicationprovidersettingentry_Select {
}
interface msdyn_occommunicationprovidersettingentry_Expand {
}
interface msdyn_occommunicationprovidersettingentry_Filter {
}
interface msdyn_occommunicationprovidersettingentry_Create extends msdyn_occommunicationprovidersettingentry {
}
interface msdyn_occommunicationprovidersettingentry_Update extends msdyn_occommunicationprovidersettingentry {
}
interface msdyn_occustommessagingchannel_Base extends WebEntity {
}
interface msdyn_occustommessagingchannel_Fixed extends WebEntity_Fixed {
  msdyn_occustommessagingchannelid: string;
}
interface msdyn_occustommessagingchannel extends msdyn_occustommessagingchannel_Base, msdyn_occustommessagingchannel_Relationships {
}
interface msdyn_occustommessagingchannel_Relationships {
}
interface msdyn_occustommessagingchannel_Result extends msdyn_occustommessagingchannel_Base, msdyn_occustommessagingchannel_Relationships {
}
interface msdyn_occustommessagingchannel_FormattedResult {
}
interface msdyn_occustommessagingchannel_Select {
}
interface msdyn_occustommessagingchannel_Expand {
}
interface msdyn_occustommessagingchannel_Filter {
}
interface msdyn_occustommessagingchannel_Create extends msdyn_occustommessagingchannel {
}
interface msdyn_occustommessagingchannel_Update extends msdyn_occustommessagingchannel {
}
interface msdyn_ocfbapplication_Base extends WebEntity {
}
interface msdyn_ocfbapplication_Fixed extends WebEntity_Fixed {
  msdyn_ocfbapplicationid: string;
}
interface msdyn_ocfbapplication extends msdyn_ocfbapplication_Base, msdyn_ocfbapplication_Relationships {
}
interface msdyn_ocfbapplication_Relationships {
}
interface msdyn_ocfbapplication_Result extends msdyn_ocfbapplication_Base, msdyn_ocfbapplication_Relationships {
}
interface msdyn_ocfbapplication_FormattedResult {
}
interface msdyn_ocfbapplication_Select {
}
interface msdyn_ocfbapplication_Expand {
}
interface msdyn_ocfbapplication_Filter {
}
interface msdyn_ocfbapplication_Create extends msdyn_ocfbapplication {
}
interface msdyn_ocfbapplication_Update extends msdyn_ocfbapplication {
}
interface msdyn_ocfbpage_Base extends WebEntity {
}
interface msdyn_ocfbpage_Fixed extends WebEntity_Fixed {
  msdyn_ocfbpageid: string;
}
interface msdyn_ocfbpage extends msdyn_ocfbpage_Base, msdyn_ocfbpage_Relationships {
}
interface msdyn_ocfbpage_Relationships {
}
interface msdyn_ocfbpage_Result extends msdyn_ocfbpage_Base, msdyn_ocfbpage_Relationships {
}
interface msdyn_ocfbpage_FormattedResult {
}
interface msdyn_ocfbpage_Select {
}
interface msdyn_ocfbpage_Expand {
}
interface msdyn_ocfbpage_Filter {
}
interface msdyn_ocfbpage_Create extends msdyn_ocfbpage {
}
interface msdyn_ocfbpage_Update extends msdyn_ocfbpage {
}
interface msdyn_ocflaggedspam_Base extends WebEntity {
}
interface msdyn_ocflaggedspam_Fixed extends WebEntity_Fixed {
  msdyn_ocflaggedspamid: string;
}
interface msdyn_ocflaggedspam extends msdyn_ocflaggedspam_Base, msdyn_ocflaggedspam_Relationships {
}
interface msdyn_ocflaggedspam_Relationships {
}
interface msdyn_ocflaggedspam_Result extends msdyn_ocflaggedspam_Base, msdyn_ocflaggedspam_Relationships {
}
interface msdyn_ocflaggedspam_FormattedResult {
}
interface msdyn_ocflaggedspam_Select {
}
interface msdyn_ocflaggedspam_Expand {
}
interface msdyn_ocflaggedspam_Filter {
}
interface msdyn_ocflaggedspam_Create extends msdyn_ocflaggedspam {
}
interface msdyn_ocflaggedspam_Update extends msdyn_ocflaggedspam {
}
interface msdyn_oclanguage_Base extends WebEntity {
}
interface msdyn_oclanguage_Fixed extends WebEntity_Fixed {
  msdyn_oclanguageid: string;
}
interface msdyn_oclanguage extends msdyn_oclanguage_Base, msdyn_oclanguage_Relationships {
}
interface msdyn_oclanguage_Relationships {
}
interface msdyn_oclanguage_Result extends msdyn_oclanguage_Base, msdyn_oclanguage_Relationships {
}
interface msdyn_oclanguage_FormattedResult {
}
interface msdyn_oclanguage_Select {
}
interface msdyn_oclanguage_Expand {
}
interface msdyn_oclanguage_Filter {
}
interface msdyn_oclanguage_Create extends msdyn_oclanguage {
}
interface msdyn_oclanguage_Update extends msdyn_oclanguage {
}
interface msdyn_oclinechannelconfig_Base extends WebEntity {
}
interface msdyn_oclinechannelconfig_Fixed extends WebEntity_Fixed {
  msdyn_oclinechannelconfigid: string;
}
interface msdyn_oclinechannelconfig extends msdyn_oclinechannelconfig_Base, msdyn_oclinechannelconfig_Relationships {
}
interface msdyn_oclinechannelconfig_Relationships {
}
interface msdyn_oclinechannelconfig_Result extends msdyn_oclinechannelconfig_Base, msdyn_oclinechannelconfig_Relationships {
}
interface msdyn_oclinechannelconfig_FormattedResult {
}
interface msdyn_oclinechannelconfig_Select {
}
interface msdyn_oclinechannelconfig_Expand {
}
interface msdyn_oclinechannelconfig_Filter {
}
interface msdyn_oclinechannelconfig_Create extends msdyn_oclinechannelconfig {
}
interface msdyn_oclinechannelconfig_Update extends msdyn_oclinechannelconfig {
}
interface msdyn_ocliveworkitem_Base extends WebEntity {
}
interface msdyn_ocliveworkitem_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface msdyn_ocliveworkitem extends msdyn_ocliveworkitem_Base, msdyn_ocliveworkitem_Relationships {
}
interface msdyn_ocliveworkitem_Relationships {
}
interface msdyn_ocliveworkitem_Result extends msdyn_ocliveworkitem_Base, msdyn_ocliveworkitem_Relationships {
}
interface msdyn_ocliveworkitem_FormattedResult {
}
interface msdyn_ocliveworkitem_Select {
}
interface msdyn_ocliveworkitem_Expand {
}
interface msdyn_ocliveworkitem_Filter {
}
interface msdyn_ocliveworkitem_Create extends msdyn_ocliveworkitem {
}
interface msdyn_ocliveworkitem_Update extends msdyn_ocliveworkitem {
}
interface msdyn_ocliveworkitemcapacityprofile_Base extends WebEntity {
}
interface msdyn_ocliveworkitemcapacityprofile_Fixed extends WebEntity_Fixed {
  msdyn_ocliveworkitemcapacityprofileid: string;
}
interface msdyn_ocliveworkitemcapacityprofile extends msdyn_ocliveworkitemcapacityprofile_Base, msdyn_ocliveworkitemcapacityprofile_Relationships {
}
interface msdyn_ocliveworkitemcapacityprofile_Relationships {
}
interface msdyn_ocliveworkitemcapacityprofile_Result extends msdyn_ocliveworkitemcapacityprofile_Base, msdyn_ocliveworkitemcapacityprofile_Relationships {
}
interface msdyn_ocliveworkitemcapacityprofile_FormattedResult {
}
interface msdyn_ocliveworkitemcapacityprofile_Select {
}
interface msdyn_ocliveworkitemcapacityprofile_Expand {
}
interface msdyn_ocliveworkitemcapacityprofile_Filter {
}
interface msdyn_ocliveworkitemcapacityprofile_Create extends msdyn_ocliveworkitemcapacityprofile {
}
interface msdyn_ocliveworkitemcapacityprofile_Update extends msdyn_ocliveworkitemcapacityprofile {
}
interface msdyn_ocliveworkitemcharacteristic_Base extends WebEntity {
}
interface msdyn_ocliveworkitemcharacteristic_Fixed extends WebEntity_Fixed {
  msdyn_ocliveworkitemcharacteristicid: string;
}
interface msdyn_ocliveworkitemcharacteristic extends msdyn_ocliveworkitemcharacteristic_Base, msdyn_ocliveworkitemcharacteristic_Relationships {
}
interface msdyn_ocliveworkitemcharacteristic_Relationships {
}
interface msdyn_ocliveworkitemcharacteristic_Result extends msdyn_ocliveworkitemcharacteristic_Base, msdyn_ocliveworkitemcharacteristic_Relationships {
}
interface msdyn_ocliveworkitemcharacteristic_FormattedResult {
}
interface msdyn_ocliveworkitemcharacteristic_Select {
}
interface msdyn_ocliveworkitemcharacteristic_Expand {
}
interface msdyn_ocliveworkitemcharacteristic_Filter {
}
interface msdyn_ocliveworkitemcharacteristic_Create extends msdyn_ocliveworkitemcharacteristic {
}
interface msdyn_ocliveworkitemcharacteristic_Update extends msdyn_ocliveworkitemcharacteristic {
}
interface msdyn_ocliveworkitemcontextitem_Base extends WebEntity {
}
interface msdyn_ocliveworkitemcontextitem_Fixed extends WebEntity_Fixed {
  msdyn_ocliveworkitemcontextitemid: string;
}
interface msdyn_ocliveworkitemcontextitem extends msdyn_ocliveworkitemcontextitem_Base, msdyn_ocliveworkitemcontextitem_Relationships {
}
interface msdyn_ocliveworkitemcontextitem_Relationships {
}
interface msdyn_ocliveworkitemcontextitem_Result extends msdyn_ocliveworkitemcontextitem_Base, msdyn_ocliveworkitemcontextitem_Relationships {
}
interface msdyn_ocliveworkitemcontextitem_FormattedResult {
}
interface msdyn_ocliveworkitemcontextitem_Select {
}
interface msdyn_ocliveworkitemcontextitem_Expand {
}
interface msdyn_ocliveworkitemcontextitem_Filter {
}
interface msdyn_ocliveworkitemcontextitem_Create extends msdyn_ocliveworkitemcontextitem {
}
interface msdyn_ocliveworkitemcontextitem_Update extends msdyn_ocliveworkitemcontextitem {
}
interface msdyn_ocliveworkitemparticipant_Base extends WebEntity {
}
interface msdyn_ocliveworkitemparticipant_Fixed extends WebEntity_Fixed {
  msdyn_ocliveworkitemparticipantid: string;
}
interface msdyn_ocliveworkitemparticipant extends msdyn_ocliveworkitemparticipant_Base, msdyn_ocliveworkitemparticipant_Relationships {
}
interface msdyn_ocliveworkitemparticipant_Relationships {
}
interface msdyn_ocliveworkitemparticipant_Result extends msdyn_ocliveworkitemparticipant_Base, msdyn_ocliveworkitemparticipant_Relationships {
}
interface msdyn_ocliveworkitemparticipant_FormattedResult {
}
interface msdyn_ocliveworkitemparticipant_Select {
}
interface msdyn_ocliveworkitemparticipant_Expand {
}
interface msdyn_ocliveworkitemparticipant_Filter {
}
interface msdyn_ocliveworkitemparticipant_Create extends msdyn_ocliveworkitemparticipant {
}
interface msdyn_ocliveworkitemparticipant_Update extends msdyn_ocliveworkitemparticipant {
}
interface msdyn_ocliveworkitemsentiment_Base extends WebEntity {
}
interface msdyn_ocliveworkitemsentiment_Fixed extends WebEntity_Fixed {
  msdyn_ocliveworkitemsentimentid: string;
}
interface msdyn_ocliveworkitemsentiment extends msdyn_ocliveworkitemsentiment_Base, msdyn_ocliveworkitemsentiment_Relationships {
}
interface msdyn_ocliveworkitemsentiment_Relationships {
}
interface msdyn_ocliveworkitemsentiment_Result extends msdyn_ocliveworkitemsentiment_Base, msdyn_ocliveworkitemsentiment_Relationships {
}
interface msdyn_ocliveworkitemsentiment_FormattedResult {
}
interface msdyn_ocliveworkitemsentiment_Select {
}
interface msdyn_ocliveworkitemsentiment_Expand {
}
interface msdyn_ocliveworkitemsentiment_Filter {
}
interface msdyn_ocliveworkitemsentiment_Create extends msdyn_ocliveworkitemsentiment {
}
interface msdyn_ocliveworkitemsentiment_Update extends msdyn_ocliveworkitemsentiment {
}
interface msdyn_ocliveworkstreamcontextvariable_Base extends WebEntity {
}
interface msdyn_ocliveworkstreamcontextvariable_Fixed extends WebEntity_Fixed {
  msdyn_ocliveworkstreamcontextvariableid: string;
}
interface msdyn_ocliveworkstreamcontextvariable extends msdyn_ocliveworkstreamcontextvariable_Base, msdyn_ocliveworkstreamcontextvariable_Relationships {
}
interface msdyn_ocliveworkstreamcontextvariable_Relationships {
}
interface msdyn_ocliveworkstreamcontextvariable_Result extends msdyn_ocliveworkstreamcontextvariable_Base, msdyn_ocliveworkstreamcontextvariable_Relationships {
}
interface msdyn_ocliveworkstreamcontextvariable_FormattedResult {
}
interface msdyn_ocliveworkstreamcontextvariable_Select {
}
interface msdyn_ocliveworkstreamcontextvariable_Expand {
}
interface msdyn_ocliveworkstreamcontextvariable_Filter {
}
interface msdyn_ocliveworkstreamcontextvariable_Create extends msdyn_ocliveworkstreamcontextvariable {
}
interface msdyn_ocliveworkstreamcontextvariable_Update extends msdyn_ocliveworkstreamcontextvariable {
}
interface msdyn_oclocalizationdata_Base extends WebEntity {
}
interface msdyn_oclocalizationdata_Fixed extends WebEntity_Fixed {
  msdyn_oclocalizationdataid: string;
}
interface msdyn_oclocalizationdata extends msdyn_oclocalizationdata_Base, msdyn_oclocalizationdata_Relationships {
}
interface msdyn_oclocalizationdata_Relationships {
}
interface msdyn_oclocalizationdata_Result extends msdyn_oclocalizationdata_Base, msdyn_oclocalizationdata_Relationships {
}
interface msdyn_oclocalizationdata_FormattedResult {
}
interface msdyn_oclocalizationdata_Select {
}
interface msdyn_oclocalizationdata_Expand {
}
interface msdyn_oclocalizationdata_Filter {
}
interface msdyn_oclocalizationdata_Create extends msdyn_oclocalizationdata {
}
interface msdyn_oclocalizationdata_Update extends msdyn_oclocalizationdata {
}
interface msdyn_ocoutboundconfiguration_Base extends WebEntity {
}
interface msdyn_ocoutboundconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_ocoutboundconfigurationid: string;
}
interface msdyn_ocoutboundconfiguration extends msdyn_ocoutboundconfiguration_Base, msdyn_ocoutboundconfiguration_Relationships {
}
interface msdyn_ocoutboundconfiguration_Relationships {
}
interface msdyn_ocoutboundconfiguration_Result extends msdyn_ocoutboundconfiguration_Base, msdyn_ocoutboundconfiguration_Relationships {
}
interface msdyn_ocoutboundconfiguration_FormattedResult {
}
interface msdyn_ocoutboundconfiguration_Select {
}
interface msdyn_ocoutboundconfiguration_Expand {
}
interface msdyn_ocoutboundconfiguration_Filter {
}
interface msdyn_ocoutboundconfiguration_Create extends msdyn_ocoutboundconfiguration {
}
interface msdyn_ocoutboundconfiguration_Update extends msdyn_ocoutboundconfiguration {
}
interface msdyn_ocoutboundmessage_Base extends WebEntity {
}
interface msdyn_ocoutboundmessage_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface msdyn_ocoutboundmessage extends msdyn_ocoutboundmessage_Base, msdyn_ocoutboundmessage_Relationships {
}
interface msdyn_ocoutboundmessage_Relationships {
}
interface msdyn_ocoutboundmessage_Result extends msdyn_ocoutboundmessage_Base, msdyn_ocoutboundmessage_Relationships {
}
interface msdyn_ocoutboundmessage_FormattedResult {
}
interface msdyn_ocoutboundmessage_Select {
}
interface msdyn_ocoutboundmessage_Expand {
}
interface msdyn_ocoutboundmessage_Filter {
}
interface msdyn_ocoutboundmessage_Create extends msdyn_ocoutboundmessage {
}
interface msdyn_ocoutboundmessage_Update extends msdyn_ocoutboundmessage {
}
interface msdyn_ocphonenumber_Base extends WebEntity {
}
interface msdyn_ocphonenumber_Fixed extends WebEntity_Fixed {
  msdyn_ocphonenumberid: string;
}
interface msdyn_ocphonenumber extends msdyn_ocphonenumber_Base, msdyn_ocphonenumber_Relationships {
}
interface msdyn_ocphonenumber_Relationships {
}
interface msdyn_ocphonenumber_Result extends msdyn_ocphonenumber_Base, msdyn_ocphonenumber_Relationships {
}
interface msdyn_ocphonenumber_FormattedResult {
}
interface msdyn_ocphonenumber_Select {
}
interface msdyn_ocphonenumber_Expand {
}
interface msdyn_ocphonenumber_Filter {
}
interface msdyn_ocphonenumber_Create extends msdyn_ocphonenumber {
}
interface msdyn_ocphonenumber_Update extends msdyn_ocphonenumber {
}
interface msdyn_ocprovisioningstate_Base extends WebEntity {
}
interface msdyn_ocprovisioningstate_Fixed extends WebEntity_Fixed {
  msdyn_ocprovisioningstateid: string;
}
interface msdyn_ocprovisioningstate extends msdyn_ocprovisioningstate_Base, msdyn_ocprovisioningstate_Relationships {
}
interface msdyn_ocprovisioningstate_Relationships {
}
interface msdyn_ocprovisioningstate_Result extends msdyn_ocprovisioningstate_Base, msdyn_ocprovisioningstate_Relationships {
}
interface msdyn_ocprovisioningstate_FormattedResult {
}
interface msdyn_ocprovisioningstate_Select {
}
interface msdyn_ocprovisioningstate_Expand {
}
interface msdyn_ocprovisioningstate_Filter {
}
interface msdyn_ocprovisioningstate_Create extends msdyn_ocprovisioningstate {
}
interface msdyn_ocprovisioningstate_Update extends msdyn_ocprovisioningstate {
}
interface msdyn_ocrecording_Base extends WebEntity {
}
interface msdyn_ocrecording_Fixed extends WebEntity_Fixed {
  msdyn_ocrecordingid: string;
}
interface msdyn_ocrecording extends msdyn_ocrecording_Base, msdyn_ocrecording_Relationships {
}
interface msdyn_ocrecording_Relationships {
}
interface msdyn_ocrecording_Result extends msdyn_ocrecording_Base, msdyn_ocrecording_Relationships {
}
interface msdyn_ocrecording_FormattedResult {
}
interface msdyn_ocrecording_Select {
}
interface msdyn_ocrecording_Expand {
}
interface msdyn_ocrecording_Filter {
}
interface msdyn_ocrecording_Create extends msdyn_ocrecording {
}
interface msdyn_ocrecording_Update extends msdyn_ocrecording {
}
interface msdyn_ocrequest_Base extends WebEntity {
}
interface msdyn_ocrequest_Fixed extends WebEntity_Fixed {
  msdyn_ocrequestid: string;
}
interface msdyn_ocrequest extends msdyn_ocrequest_Base, msdyn_ocrequest_Relationships {
}
interface msdyn_ocrequest_Relationships {
}
interface msdyn_ocrequest_Result extends msdyn_ocrequest_Base, msdyn_ocrequest_Relationships {
}
interface msdyn_ocrequest_FormattedResult {
}
interface msdyn_ocrequest_Select {
}
interface msdyn_ocrequest_Expand {
}
interface msdyn_ocrequest_Filter {
}
interface msdyn_ocrequest_Create extends msdyn_ocrequest {
}
interface msdyn_ocrequest_Update extends msdyn_ocrequest {
}
interface msdyn_ocruleitem_Base extends WebEntity {
}
interface msdyn_ocruleitem_Fixed extends WebEntity_Fixed {
  msdyn_ocruleitemid: string;
}
interface msdyn_ocruleitem extends msdyn_ocruleitem_Base, msdyn_ocruleitem_Relationships {
}
interface msdyn_ocruleitem_Relationships {
}
interface msdyn_ocruleitem_Result extends msdyn_ocruleitem_Base, msdyn_ocruleitem_Relationships {
}
interface msdyn_ocruleitem_FormattedResult {
}
interface msdyn_ocruleitem_Select {
}
interface msdyn_ocruleitem_Expand {
}
interface msdyn_ocruleitem_Filter {
}
interface msdyn_ocruleitem_Create extends msdyn_ocruleitem {
}
interface msdyn_ocruleitem_Update extends msdyn_ocruleitem {
}
interface msdyn_ocsentimentdailytopic_Base extends WebEntity {
}
interface msdyn_ocsentimentdailytopic_Fixed extends WebEntity_Fixed {
  msdyn_ocsentimentdailytopicid: string;
}
interface msdyn_ocsentimentdailytopic extends msdyn_ocsentimentdailytopic_Base, msdyn_ocsentimentdailytopic_Relationships {
}
interface msdyn_ocsentimentdailytopic_Relationships {
}
interface msdyn_ocsentimentdailytopic_Result extends msdyn_ocsentimentdailytopic_Base, msdyn_ocsentimentdailytopic_Relationships {
}
interface msdyn_ocsentimentdailytopic_FormattedResult {
}
interface msdyn_ocsentimentdailytopic_Select {
}
interface msdyn_ocsentimentdailytopic_Expand {
}
interface msdyn_ocsentimentdailytopic_Filter {
}
interface msdyn_ocsentimentdailytopic_Create extends msdyn_ocsentimentdailytopic {
}
interface msdyn_ocsentimentdailytopic_Update extends msdyn_ocsentimentdailytopic {
}
interface msdyn_ocsentimentdailytopickeyword_Base extends WebEntity {
}
interface msdyn_ocsentimentdailytopickeyword_Fixed extends WebEntity_Fixed {
  msdyn_ocsentimentdailytopickeywordid: string;
}
interface msdyn_ocsentimentdailytopickeyword extends msdyn_ocsentimentdailytopickeyword_Base, msdyn_ocsentimentdailytopickeyword_Relationships {
}
interface msdyn_ocsentimentdailytopickeyword_Relationships {
}
interface msdyn_ocsentimentdailytopickeyword_Result extends msdyn_ocsentimentdailytopickeyword_Base, msdyn_ocsentimentdailytopickeyword_Relationships {
}
interface msdyn_ocsentimentdailytopickeyword_FormattedResult {
}
interface msdyn_ocsentimentdailytopickeyword_Select {
}
interface msdyn_ocsentimentdailytopickeyword_Expand {
}
interface msdyn_ocsentimentdailytopickeyword_Filter {
}
interface msdyn_ocsentimentdailytopickeyword_Create extends msdyn_ocsentimentdailytopickeyword {
}
interface msdyn_ocsentimentdailytopickeyword_Update extends msdyn_ocsentimentdailytopickeyword {
}
interface msdyn_ocsentimentdailytopictrending_Base extends WebEntity {
}
interface msdyn_ocsentimentdailytopictrending_Fixed extends WebEntity_Fixed {
  msdyn_ocsentimentdailytopictrendingid: string;
}
interface msdyn_ocsentimentdailytopictrending extends msdyn_ocsentimentdailytopictrending_Base, msdyn_ocsentimentdailytopictrending_Relationships {
}
interface msdyn_ocsentimentdailytopictrending_Relationships {
}
interface msdyn_ocsentimentdailytopictrending_Result extends msdyn_ocsentimentdailytopictrending_Base, msdyn_ocsentimentdailytopictrending_Relationships {
}
interface msdyn_ocsentimentdailytopictrending_FormattedResult {
}
interface msdyn_ocsentimentdailytopictrending_Select {
}
interface msdyn_ocsentimentdailytopictrending_Expand {
}
interface msdyn_ocsentimentdailytopictrending_Filter {
}
interface msdyn_ocsentimentdailytopictrending_Create extends msdyn_ocsentimentdailytopictrending {
}
interface msdyn_ocsentimentdailytopictrending_Update extends msdyn_ocsentimentdailytopictrending {
}
interface msdyn_ocsession_Base extends WebEntity {
}
interface msdyn_ocsession_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface msdyn_ocsession extends msdyn_ocsession_Base, msdyn_ocsession_Relationships {
}
interface msdyn_ocsession_Relationships {
}
interface msdyn_ocsession_Result extends msdyn_ocsession_Base, msdyn_ocsession_Relationships {
}
interface msdyn_ocsession_FormattedResult {
}
interface msdyn_ocsession_Select {
}
interface msdyn_ocsession_Expand {
}
interface msdyn_ocsession_Filter {
}
interface msdyn_ocsession_Create extends msdyn_ocsession {
}
interface msdyn_ocsession_Update extends msdyn_ocsession {
}
interface msdyn_ocsessioncharacteristic_Base extends WebEntity {
}
interface msdyn_ocsessioncharacteristic_Fixed extends WebEntity_Fixed {
  msdyn_ocsessioncharacteristicid: string;
}
interface msdyn_ocsessioncharacteristic extends msdyn_ocsessioncharacteristic_Base, msdyn_ocsessioncharacteristic_Relationships {
}
interface msdyn_ocsessioncharacteristic_Relationships {
}
interface msdyn_ocsessioncharacteristic_Result extends msdyn_ocsessioncharacteristic_Base, msdyn_ocsessioncharacteristic_Relationships {
}
interface msdyn_ocsessioncharacteristic_FormattedResult {
}
interface msdyn_ocsessioncharacteristic_Select {
}
interface msdyn_ocsessioncharacteristic_Expand {
}
interface msdyn_ocsessioncharacteristic_Filter {
}
interface msdyn_ocsessioncharacteristic_Create extends msdyn_ocsessioncharacteristic {
}
interface msdyn_ocsessioncharacteristic_Update extends msdyn_ocsessioncharacteristic {
}
interface msdyn_ocsessionparticipantevent_Base extends WebEntity {
}
interface msdyn_ocsessionparticipantevent_Fixed extends WebEntity_Fixed {
  msdyn_ocsessionparticipanteventid: string;
}
interface msdyn_ocsessionparticipantevent extends msdyn_ocsessionparticipantevent_Base, msdyn_ocsessionparticipantevent_Relationships {
}
interface msdyn_ocsessionparticipantevent_Relationships {
}
interface msdyn_ocsessionparticipantevent_Result extends msdyn_ocsessionparticipantevent_Base, msdyn_ocsessionparticipantevent_Relationships {
}
interface msdyn_ocsessionparticipantevent_FormattedResult {
}
interface msdyn_ocsessionparticipantevent_Select {
}
interface msdyn_ocsessionparticipantevent_Expand {
}
interface msdyn_ocsessionparticipantevent_Filter {
}
interface msdyn_ocsessionparticipantevent_Create extends msdyn_ocsessionparticipantevent {
}
interface msdyn_ocsessionparticipantevent_Update extends msdyn_ocsessionparticipantevent {
}
interface msdyn_ocsessionsentiment_Base extends WebEntity {
}
interface msdyn_ocsessionsentiment_Fixed extends WebEntity_Fixed {
  msdyn_ocsessionsentimentid: string;
}
interface msdyn_ocsessionsentiment extends msdyn_ocsessionsentiment_Base, msdyn_ocsessionsentiment_Relationships {
}
interface msdyn_ocsessionsentiment_Relationships {
}
interface msdyn_ocsessionsentiment_Result extends msdyn_ocsessionsentiment_Base, msdyn_ocsessionsentiment_Relationships {
}
interface msdyn_ocsessionsentiment_FormattedResult {
}
interface msdyn_ocsessionsentiment_Select {
}
interface msdyn_ocsessionsentiment_Expand {
}
interface msdyn_ocsessionsentiment_Filter {
}
interface msdyn_ocsessionsentiment_Create extends msdyn_ocsessionsentiment {
}
interface msdyn_ocsessionsentiment_Update extends msdyn_ocsessionsentiment {
}
interface msdyn_ocsimltraining_Base extends WebEntity {
}
interface msdyn_ocsimltraining_Fixed extends WebEntity_Fixed {
  msdyn_ocsimltrainingid: string;
}
interface msdyn_ocsimltraining extends msdyn_ocsimltraining_Base, msdyn_ocsimltraining_Relationships {
}
interface msdyn_ocsimltraining_Relationships {
}
interface msdyn_ocsimltraining_Result extends msdyn_ocsimltraining_Base, msdyn_ocsimltraining_Relationships {
}
interface msdyn_ocsimltraining_FormattedResult {
}
interface msdyn_ocsimltraining_Select {
}
interface msdyn_ocsimltraining_Expand {
}
interface msdyn_ocsimltraining_Filter {
}
interface msdyn_ocsimltraining_Create extends msdyn_ocsimltraining {
}
interface msdyn_ocsimltraining_Update extends msdyn_ocsimltraining {
}
interface msdyn_ocsitdimportconfig_Base extends WebEntity {
}
interface msdyn_ocsitdimportconfig_Fixed extends WebEntity_Fixed {
  msdyn_ocsitdimportconfigid: string;
}
interface msdyn_ocsitdimportconfig extends msdyn_ocsitdimportconfig_Base, msdyn_ocsitdimportconfig_Relationships {
}
interface msdyn_ocsitdimportconfig_Relationships {
}
interface msdyn_ocsitdimportconfig_Result extends msdyn_ocsitdimportconfig_Base, msdyn_ocsitdimportconfig_Relationships {
}
interface msdyn_ocsitdimportconfig_FormattedResult {
}
interface msdyn_ocsitdimportconfig_Select {
}
interface msdyn_ocsitdimportconfig_Expand {
}
interface msdyn_ocsitdimportconfig_Filter {
}
interface msdyn_ocsitdimportconfig_Create extends msdyn_ocsitdimportconfig {
}
interface msdyn_ocsitdimportconfig_Update extends msdyn_ocsitdimportconfig {
}
interface msdyn_ocsitdskill_Base extends WebEntity {
}
interface msdyn_ocsitdskill_Fixed extends WebEntity_Fixed {
  msdyn_ocsitdskillid: string;
}
interface msdyn_ocsitdskill extends msdyn_ocsitdskill_Base, msdyn_ocsitdskill_Relationships {
}
interface msdyn_ocsitdskill_Relationships {
}
interface msdyn_ocsitdskill_Result extends msdyn_ocsitdskill_Base, msdyn_ocsitdskill_Relationships {
}
interface msdyn_ocsitdskill_FormattedResult {
}
interface msdyn_ocsitdskill_Select {
}
interface msdyn_ocsitdskill_Expand {
}
interface msdyn_ocsitdskill_Filter {
}
interface msdyn_ocsitdskill_Create extends msdyn_ocsitdskill {
}
interface msdyn_ocsitdskill_Update extends msdyn_ocsitdskill {
}
interface msdyn_ocsitrainingdata_Base extends WebEntity {
}
interface msdyn_ocsitrainingdata_Fixed extends WebEntity_Fixed {
  msdyn_ocsitrainingdataid: string;
}
interface msdyn_ocsitrainingdata extends msdyn_ocsitrainingdata_Base, msdyn_ocsitrainingdata_Relationships {
}
interface msdyn_ocsitrainingdata_Relationships {
}
interface msdyn_ocsitrainingdata_Result extends msdyn_ocsitrainingdata_Base, msdyn_ocsitrainingdata_Relationships {
}
interface msdyn_ocsitrainingdata_FormattedResult {
}
interface msdyn_ocsitrainingdata_Select {
}
interface msdyn_ocsitrainingdata_Expand {
}
interface msdyn_ocsitrainingdata_Filter {
}
interface msdyn_ocsitrainingdata_Create extends msdyn_ocsitrainingdata {
}
interface msdyn_ocsitrainingdata_Update extends msdyn_ocsitrainingdata {
}
interface msdyn_ocskillidentmlmodel_Base extends WebEntity {
}
interface msdyn_ocskillidentmlmodel_Fixed extends WebEntity_Fixed {
  msdyn_ocskillidentmlmodelid: string;
}
interface msdyn_ocskillidentmlmodel extends msdyn_ocskillidentmlmodel_Base, msdyn_ocskillidentmlmodel_Relationships {
}
interface msdyn_ocskillidentmlmodel_Relationships {
}
interface msdyn_ocskillidentmlmodel_Result extends msdyn_ocskillidentmlmodel_Base, msdyn_ocskillidentmlmodel_Relationships {
}
interface msdyn_ocskillidentmlmodel_FormattedResult {
}
interface msdyn_ocskillidentmlmodel_Select {
}
interface msdyn_ocskillidentmlmodel_Expand {
}
interface msdyn_ocskillidentmlmodel_Filter {
}
interface msdyn_ocskillidentmlmodel_Create extends msdyn_ocskillidentmlmodel {
}
interface msdyn_ocskillidentmlmodel_Update extends msdyn_ocskillidentmlmodel {
}
interface msdyn_ocsmschannelsetting_Base extends WebEntity {
}
interface msdyn_ocsmschannelsetting_Fixed extends WebEntity_Fixed {
  msdyn_ocsmschannelsettingid: string;
}
interface msdyn_ocsmschannelsetting extends msdyn_ocsmschannelsetting_Base, msdyn_ocsmschannelsetting_Relationships {
}
interface msdyn_ocsmschannelsetting_Relationships {
}
interface msdyn_ocsmschannelsetting_Result extends msdyn_ocsmschannelsetting_Base, msdyn_ocsmschannelsetting_Relationships {
}
interface msdyn_ocsmschannelsetting_FormattedResult {
}
interface msdyn_ocsmschannelsetting_Select {
}
interface msdyn_ocsmschannelsetting_Expand {
}
interface msdyn_ocsmschannelsetting_Filter {
}
interface msdyn_ocsmschannelsetting_Create extends msdyn_ocsmschannelsetting {
}
interface msdyn_ocsmschannelsetting_Update extends msdyn_ocsmschannelsetting {
}
interface msdyn_ocsystemmessage_Base extends WebEntity {
}
interface msdyn_ocsystemmessage_Fixed extends WebEntity_Fixed {
  msdyn_ocsystemmessageid: string;
}
interface msdyn_ocsystemmessage extends msdyn_ocsystemmessage_Base, msdyn_ocsystemmessage_Relationships {
}
interface msdyn_ocsystemmessage_Relationships {
}
interface msdyn_ocsystemmessage_Result extends msdyn_ocsystemmessage_Base, msdyn_ocsystemmessage_Relationships {
}
interface msdyn_ocsystemmessage_FormattedResult {
}
interface msdyn_ocsystemmessage_Select {
}
interface msdyn_ocsystemmessage_Expand {
}
interface msdyn_ocsystemmessage_Filter {
}
interface msdyn_ocsystemmessage_Create extends msdyn_ocsystemmessage {
}
interface msdyn_ocsystemmessage_Update extends msdyn_ocsystemmessage {
}
interface msdyn_octag_Base extends WebEntity {
}
interface msdyn_octag_Fixed extends WebEntity_Fixed {
  msdyn_octagid: string;
}
interface msdyn_octag extends msdyn_octag_Base, msdyn_octag_Relationships {
}
interface msdyn_octag_Relationships {
}
interface msdyn_octag_Result extends msdyn_octag_Base, msdyn_octag_Relationships {
}
interface msdyn_octag_FormattedResult {
}
interface msdyn_octag_Select {
}
interface msdyn_octag_Expand {
}
interface msdyn_octag_Filter {
}
interface msdyn_octag_Create extends msdyn_octag {
}
interface msdyn_octag_Update extends msdyn_octag {
}
interface msdyn_octeamschannelconfig_Base extends WebEntity {
}
interface msdyn_octeamschannelconfig_Fixed extends WebEntity_Fixed {
  msdyn_octeamschannelconfigid: string;
}
interface msdyn_octeamschannelconfig extends msdyn_octeamschannelconfig_Base, msdyn_octeamschannelconfig_Relationships {
}
interface msdyn_octeamschannelconfig_Relationships {
}
interface msdyn_octeamschannelconfig_Result extends msdyn_octeamschannelconfig_Base, msdyn_octeamschannelconfig_Relationships {
}
interface msdyn_octeamschannelconfig_FormattedResult {
}
interface msdyn_octeamschannelconfig_Select {
}
interface msdyn_octeamschannelconfig_Expand {
}
interface msdyn_octeamschannelconfig_Filter {
}
interface msdyn_octeamschannelconfig_Create extends msdyn_octeamschannelconfig {
}
interface msdyn_octeamschannelconfig_Update extends msdyn_octeamschannelconfig {
}
interface msdyn_octwitterapplication_Base extends WebEntity {
}
interface msdyn_octwitterapplication_Fixed extends WebEntity_Fixed {
  msdyn_octwitterapplicationid: string;
}
interface msdyn_octwitterapplication extends msdyn_octwitterapplication_Base, msdyn_octwitterapplication_Relationships {
}
interface msdyn_octwitterapplication_Relationships {
}
interface msdyn_octwitterapplication_Result extends msdyn_octwitterapplication_Base, msdyn_octwitterapplication_Relationships {
}
interface msdyn_octwitterapplication_FormattedResult {
}
interface msdyn_octwitterapplication_Select {
}
interface msdyn_octwitterapplication_Expand {
}
interface msdyn_octwitterapplication_Filter {
}
interface msdyn_octwitterapplication_Create extends msdyn_octwitterapplication {
}
interface msdyn_octwitterapplication_Update extends msdyn_octwitterapplication {
}
interface msdyn_octwitterhandle_Base extends WebEntity {
}
interface msdyn_octwitterhandle_Fixed extends WebEntity_Fixed {
  msdyn_octwitterhandleid: string;
}
interface msdyn_octwitterhandle extends msdyn_octwitterhandle_Base, msdyn_octwitterhandle_Relationships {
}
interface msdyn_octwitterhandle_Relationships {
}
interface msdyn_octwitterhandle_Result extends msdyn_octwitterhandle_Base, msdyn_octwitterhandle_Relationships {
}
interface msdyn_octwitterhandle_FormattedResult {
}
interface msdyn_octwitterhandle_Select {
}
interface msdyn_octwitterhandle_Expand {
}
interface msdyn_octwitterhandle_Filter {
}
interface msdyn_octwitterhandle_Create extends msdyn_octwitterhandle {
}
interface msdyn_octwitterhandle_Update extends msdyn_octwitterhandle {
}
interface msdyn_ocwechatchannelconfig_Base extends WebEntity {
}
interface msdyn_ocwechatchannelconfig_Fixed extends WebEntity_Fixed {
  msdyn_ocwechatchannelconfigid: string;
}
interface msdyn_ocwechatchannelconfig extends msdyn_ocwechatchannelconfig_Base, msdyn_ocwechatchannelconfig_Relationships {
}
interface msdyn_ocwechatchannelconfig_Relationships {
}
interface msdyn_ocwechatchannelconfig_Result extends msdyn_ocwechatchannelconfig_Base, msdyn_ocwechatchannelconfig_Relationships {
}
interface msdyn_ocwechatchannelconfig_FormattedResult {
}
interface msdyn_ocwechatchannelconfig_Select {
}
interface msdyn_ocwechatchannelconfig_Expand {
}
interface msdyn_ocwechatchannelconfig_Filter {
}
interface msdyn_ocwechatchannelconfig_Create extends msdyn_ocwechatchannelconfig {
}
interface msdyn_ocwechatchannelconfig_Update extends msdyn_ocwechatchannelconfig {
}
interface msdyn_ocwhatsappchannelaccount_Base extends WebEntity {
}
interface msdyn_ocwhatsappchannelaccount_Fixed extends WebEntity_Fixed {
  msdyn_ocwhatsappchannelaccountid: string;
}
interface msdyn_ocwhatsappchannelaccount extends msdyn_ocwhatsappchannelaccount_Base, msdyn_ocwhatsappchannelaccount_Relationships {
}
interface msdyn_ocwhatsappchannelaccount_Relationships {
}
interface msdyn_ocwhatsappchannelaccount_Result extends msdyn_ocwhatsappchannelaccount_Base, msdyn_ocwhatsappchannelaccount_Relationships {
}
interface msdyn_ocwhatsappchannelaccount_FormattedResult {
}
interface msdyn_ocwhatsappchannelaccount_Select {
}
interface msdyn_ocwhatsappchannelaccount_Expand {
}
interface msdyn_ocwhatsappchannelaccount_Filter {
}
interface msdyn_ocwhatsappchannelaccount_Create extends msdyn_ocwhatsappchannelaccount {
}
interface msdyn_ocwhatsappchannelaccount_Update extends msdyn_ocwhatsappchannelaccount {
}
interface msdyn_ocwhatsappchannelnumber_Base extends WebEntity {
}
interface msdyn_ocwhatsappchannelnumber_Fixed extends WebEntity_Fixed {
  msdyn_ocwhatsappchannelnumberid: string;
}
interface msdyn_ocwhatsappchannelnumber extends msdyn_ocwhatsappchannelnumber_Base, msdyn_ocwhatsappchannelnumber_Relationships {
}
interface msdyn_ocwhatsappchannelnumber_Relationships {
}
interface msdyn_ocwhatsappchannelnumber_Result extends msdyn_ocwhatsappchannelnumber_Base, msdyn_ocwhatsappchannelnumber_Relationships {
}
interface msdyn_ocwhatsappchannelnumber_FormattedResult {
}
interface msdyn_ocwhatsappchannelnumber_Select {
}
interface msdyn_ocwhatsappchannelnumber_Expand {
}
interface msdyn_ocwhatsappchannelnumber_Filter {
}
interface msdyn_ocwhatsappchannelnumber_Create extends msdyn_ocwhatsappchannelnumber {
}
interface msdyn_ocwhatsappchannelnumber_Update extends msdyn_ocwhatsappchannelnumber {
}
interface msdyn_odatav4ds_Base extends WebEntity {
}
interface msdyn_odatav4ds_Fixed extends WebEntity_Fixed {
  msdyn_odatav4dsid: string;
}
interface msdyn_odatav4ds extends msdyn_odatav4ds_Base, msdyn_odatav4ds_Relationships {
}
interface msdyn_odatav4ds_Relationships {
}
interface msdyn_odatav4ds_Result extends msdyn_odatav4ds_Base, msdyn_odatav4ds_Relationships {
}
interface msdyn_odatav4ds_FormattedResult {
}
interface msdyn_odatav4ds_Select {
}
interface msdyn_odatav4ds_Expand {
}
interface msdyn_odatav4ds_Filter {
}
interface msdyn_odatav4ds_Create extends msdyn_odatav4ds {
}
interface msdyn_odatav4ds_Update extends msdyn_odatav4ds {
}
interface msdyn_omnichannelconfiguration_Base extends WebEntity {
}
interface msdyn_omnichannelconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_omnichannelconfigurationid: string;
}
interface msdyn_omnichannelconfiguration extends msdyn_omnichannelconfiguration_Base, msdyn_omnichannelconfiguration_Relationships {
}
interface msdyn_omnichannelconfiguration_Relationships {
}
interface msdyn_omnichannelconfiguration_Result extends msdyn_omnichannelconfiguration_Base, msdyn_omnichannelconfiguration_Relationships {
}
interface msdyn_omnichannelconfiguration_FormattedResult {
}
interface msdyn_omnichannelconfiguration_Select {
}
interface msdyn_omnichannelconfiguration_Expand {
}
interface msdyn_omnichannelconfiguration_Filter {
}
interface msdyn_omnichannelconfiguration_Create extends msdyn_omnichannelconfiguration {
}
interface msdyn_omnichannelconfiguration_Update extends msdyn_omnichannelconfiguration {
}
interface msdyn_omnichannelpersonalization_Base extends WebEntity {
}
interface msdyn_omnichannelpersonalization_Fixed extends WebEntity_Fixed {
  msdyn_omnichannelpersonalizationid: string;
}
interface msdyn_omnichannelpersonalization extends msdyn_omnichannelpersonalization_Base, msdyn_omnichannelpersonalization_Relationships {
}
interface msdyn_omnichannelpersonalization_Relationships {
}
interface msdyn_omnichannelpersonalization_Result extends msdyn_omnichannelpersonalization_Base, msdyn_omnichannelpersonalization_Relationships {
}
interface msdyn_omnichannelpersonalization_FormattedResult {
}
interface msdyn_omnichannelpersonalization_Select {
}
interface msdyn_omnichannelpersonalization_Expand {
}
interface msdyn_omnichannelpersonalization_Filter {
}
interface msdyn_omnichannelpersonalization_Create extends msdyn_omnichannelpersonalization {
}
interface msdyn_omnichannelpersonalization_Update extends msdyn_omnichannelpersonalization {
}
interface msdyn_omnichannelqueue_Base extends WebEntity {
}
interface msdyn_omnichannelqueue_Fixed extends WebEntity_Fixed {
  msdyn_omnichannelqueueid: string;
}
interface msdyn_omnichannelqueue extends msdyn_omnichannelqueue_Base, msdyn_omnichannelqueue_Relationships {
}
interface msdyn_omnichannelqueue_Relationships {
}
interface msdyn_omnichannelqueue_Result extends msdyn_omnichannelqueue_Base, msdyn_omnichannelqueue_Relationships {
}
interface msdyn_omnichannelqueue_FormattedResult {
}
interface msdyn_omnichannelqueue_Select {
}
interface msdyn_omnichannelqueue_Expand {
}
interface msdyn_omnichannelqueue_Filter {
}
interface msdyn_omnichannelqueue_Create extends msdyn_omnichannelqueue {
}
interface msdyn_omnichannelqueue_Update extends msdyn_omnichannelqueue {
}
interface msdyn_omnichannelsyncconfig_Base extends WebEntity {
}
interface msdyn_omnichannelsyncconfig_Fixed extends WebEntity_Fixed {
  msdyn_omnichannelsyncconfigid: string;
}
interface msdyn_omnichannelsyncconfig extends msdyn_omnichannelsyncconfig_Base, msdyn_omnichannelsyncconfig_Relationships {
}
interface msdyn_omnichannelsyncconfig_Relationships {
}
interface msdyn_omnichannelsyncconfig_Result extends msdyn_omnichannelsyncconfig_Base, msdyn_omnichannelsyncconfig_Relationships {
}
interface msdyn_omnichannelsyncconfig_FormattedResult {
}
interface msdyn_omnichannelsyncconfig_Select {
}
interface msdyn_omnichannelsyncconfig_Expand {
}
interface msdyn_omnichannelsyncconfig_Filter {
}
interface msdyn_omnichannelsyncconfig_Create extends msdyn_omnichannelsyncconfig {
}
interface msdyn_omnichannelsyncconfig_Update extends msdyn_omnichannelsyncconfig {
}
interface msdyn_operatinghour_Base extends WebEntity {
}
interface msdyn_operatinghour_Fixed extends WebEntity_Fixed {
  msdyn_operatinghourid: string;
}
interface msdyn_operatinghour extends msdyn_operatinghour_Base, msdyn_operatinghour_Relationships {
}
interface msdyn_operatinghour_Relationships {
}
interface msdyn_operatinghour_Result extends msdyn_operatinghour_Base, msdyn_operatinghour_Relationships {
}
interface msdyn_operatinghour_FormattedResult {
}
interface msdyn_operatinghour_Select {
}
interface msdyn_operatinghour_Expand {
}
interface msdyn_operatinghour_Filter {
}
interface msdyn_operatinghour_Create extends msdyn_operatinghour {
}
interface msdyn_operatinghour_Update extends msdyn_operatinghour {
}
interface msdyn_opportunitylineresourcecategory_Base extends WebEntity {
}
interface msdyn_opportunitylineresourcecategory_Fixed extends WebEntity_Fixed {
  msdyn_opportunitylineresourcecategoryid: string;
}
interface msdyn_opportunitylineresourcecategory extends msdyn_opportunitylineresourcecategory_Base, msdyn_opportunitylineresourcecategory_Relationships {
}
interface msdyn_opportunitylineresourcecategory_Relationships {
}
interface msdyn_opportunitylineresourcecategory_Result extends msdyn_opportunitylineresourcecategory_Base, msdyn_opportunitylineresourcecategory_Relationships {
}
interface msdyn_opportunitylineresourcecategory_FormattedResult {
}
interface msdyn_opportunitylineresourcecategory_Select {
}
interface msdyn_opportunitylineresourcecategory_Expand {
}
interface msdyn_opportunitylineresourcecategory_Filter {
}
interface msdyn_opportunitylineresourcecategory_Create extends msdyn_opportunitylineresourcecategory {
}
interface msdyn_opportunitylineresourcecategory_Update extends msdyn_opportunitylineresourcecategory {
}
interface msdyn_opportunitylinetransaction_Base extends WebEntity {
}
interface msdyn_opportunitylinetransaction_Fixed extends WebEntity_Fixed {
  msdyn_opportunitylinetransactionid: string;
}
interface msdyn_opportunitylinetransaction extends msdyn_opportunitylinetransaction_Base, msdyn_opportunitylinetransaction_Relationships {
}
interface msdyn_opportunitylinetransaction_Relationships {
}
interface msdyn_opportunitylinetransaction_Result extends msdyn_opportunitylinetransaction_Base, msdyn_opportunitylinetransaction_Relationships {
}
interface msdyn_opportunitylinetransaction_FormattedResult {
}
interface msdyn_opportunitylinetransaction_Select {
}
interface msdyn_opportunitylinetransaction_Expand {
}
interface msdyn_opportunitylinetransaction_Filter {
}
interface msdyn_opportunitylinetransaction_Create extends msdyn_opportunitylinetransaction {
}
interface msdyn_opportunitylinetransaction_Update extends msdyn_opportunitylinetransaction {
}
interface msdyn_opportunitylinetransactioncategory_Base extends WebEntity {
}
interface msdyn_opportunitylinetransactioncategory_Fixed extends WebEntity_Fixed {
  msdyn_opportunitylinetransactioncategoryid: string;
}
interface msdyn_opportunitylinetransactioncategory extends msdyn_opportunitylinetransactioncategory_Base, msdyn_opportunitylinetransactioncategory_Relationships {
}
interface msdyn_opportunitylinetransactioncategory_Relationships {
}
interface msdyn_opportunitylinetransactioncategory_Result extends msdyn_opportunitylinetransactioncategory_Base, msdyn_opportunitylinetransactioncategory_Relationships {
}
interface msdyn_opportunitylinetransactioncategory_FormattedResult {
}
interface msdyn_opportunitylinetransactioncategory_Select {
}
interface msdyn_opportunitylinetransactioncategory_Expand {
}
interface msdyn_opportunitylinetransactioncategory_Filter {
}
interface msdyn_opportunitylinetransactioncategory_Create extends msdyn_opportunitylinetransactioncategory {
}
interface msdyn_opportunitylinetransactioncategory_Update extends msdyn_opportunitylinetransactioncategory {
}
interface msdyn_opportunitylinetransactionclassificatio_Base extends WebEntity {
}
interface msdyn_opportunitylinetransactionclassificatio_Fixed extends WebEntity_Fixed {
  msdyn_opportunitylinetransactionclassificatioid: string;
}
interface msdyn_opportunitylinetransactionclassificatio extends msdyn_opportunitylinetransactionclassificatio_Base, msdyn_opportunitylinetransactionclassificatio_Relationships {
}
interface msdyn_opportunitylinetransactionclassificatio_Relationships {
}
interface msdyn_opportunitylinetransactionclassificatio_Result extends msdyn_opportunitylinetransactionclassificatio_Base, msdyn_opportunitylinetransactionclassificatio_Relationships {
}
interface msdyn_opportunitylinetransactionclassificatio_FormattedResult {
}
interface msdyn_opportunitylinetransactionclassificatio_Select {
}
interface msdyn_opportunitylinetransactionclassificatio_Expand {
}
interface msdyn_opportunitylinetransactionclassificatio_Filter {
}
interface msdyn_opportunitylinetransactionclassificatio_Create extends msdyn_opportunitylinetransactionclassificatio {
}
interface msdyn_opportunitylinetransactionclassificatio_Update extends msdyn_opportunitylinetransactionclassificatio {
}
interface msdyn_opportunitypricelist_Base extends WebEntity {
}
interface msdyn_opportunitypricelist_Fixed extends WebEntity_Fixed {
  msdyn_opportunitypricelistid: string;
}
interface msdyn_opportunitypricelist extends msdyn_opportunitypricelist_Base, msdyn_opportunitypricelist_Relationships {
}
interface msdyn_opportunitypricelist_Relationships {
}
interface msdyn_opportunitypricelist_Result extends msdyn_opportunitypricelist_Base, msdyn_opportunitypricelist_Relationships {
}
interface msdyn_opportunitypricelist_FormattedResult {
}
interface msdyn_opportunitypricelist_Select {
}
interface msdyn_opportunitypricelist_Expand {
}
interface msdyn_opportunitypricelist_Filter {
}
interface msdyn_opportunitypricelist_Create extends msdyn_opportunitypricelist {
}
interface msdyn_opportunitypricelist_Update extends msdyn_opportunitypricelist {
}
interface msdyn_orderinvoicingdate_Base extends WebEntity {
}
interface msdyn_orderinvoicingdate_Fixed extends WebEntity_Fixed {
  msdyn_orderinvoicingdateid: string;
}
interface msdyn_orderinvoicingdate extends msdyn_orderinvoicingdate_Base, msdyn_orderinvoicingdate_Relationships {
}
interface msdyn_orderinvoicingdate_Relationships {
}
interface msdyn_orderinvoicingdate_Result extends msdyn_orderinvoicingdate_Base, msdyn_orderinvoicingdate_Relationships {
}
interface msdyn_orderinvoicingdate_FormattedResult {
}
interface msdyn_orderinvoicingdate_Select {
}
interface msdyn_orderinvoicingdate_Expand {
}
interface msdyn_orderinvoicingdate_Filter {
}
interface msdyn_orderinvoicingdate_Create extends msdyn_orderinvoicingdate {
}
interface msdyn_orderinvoicingdate_Update extends msdyn_orderinvoicingdate {
}
interface msdyn_orderinvoicingproduct_Base extends WebEntity {
}
interface msdyn_orderinvoicingproduct_Fixed extends WebEntity_Fixed {
  msdyn_orderinvoicingproductid: string;
}
interface msdyn_orderinvoicingproduct extends msdyn_orderinvoicingproduct_Base, msdyn_orderinvoicingproduct_Relationships {
}
interface msdyn_orderinvoicingproduct_Relationships {
}
interface msdyn_orderinvoicingproduct_Result extends msdyn_orderinvoicingproduct_Base, msdyn_orderinvoicingproduct_Relationships {
}
interface msdyn_orderinvoicingproduct_FormattedResult {
}
interface msdyn_orderinvoicingproduct_Select {
}
interface msdyn_orderinvoicingproduct_Expand {
}
interface msdyn_orderinvoicingproduct_Filter {
}
interface msdyn_orderinvoicingproduct_Create extends msdyn_orderinvoicingproduct {
}
interface msdyn_orderinvoicingproduct_Update extends msdyn_orderinvoicingproduct {
}
interface msdyn_orderinvoicingsetup_Base extends WebEntity {
}
interface msdyn_orderinvoicingsetup_Fixed extends WebEntity_Fixed {
  msdyn_orderinvoicingsetupid: string;
}
interface msdyn_orderinvoicingsetup extends msdyn_orderinvoicingsetup_Base, msdyn_orderinvoicingsetup_Relationships {
}
interface msdyn_orderinvoicingsetup_Relationships {
}
interface msdyn_orderinvoicingsetup_Result extends msdyn_orderinvoicingsetup_Base, msdyn_orderinvoicingsetup_Relationships {
}
interface msdyn_orderinvoicingsetup_FormattedResult {
}
interface msdyn_orderinvoicingsetup_Select {
}
interface msdyn_orderinvoicingsetup_Expand {
}
interface msdyn_orderinvoicingsetup_Filter {
}
interface msdyn_orderinvoicingsetup_Create extends msdyn_orderinvoicingsetup {
}
interface msdyn_orderinvoicingsetup_Update extends msdyn_orderinvoicingsetup {
}
interface msdyn_orderinvoicingsetupdate_Base extends WebEntity {
}
interface msdyn_orderinvoicingsetupdate_Fixed extends WebEntity_Fixed {
  msdyn_orderinvoicingsetupdateid: string;
}
interface msdyn_orderinvoicingsetupdate extends msdyn_orderinvoicingsetupdate_Base, msdyn_orderinvoicingsetupdate_Relationships {
}
interface msdyn_orderinvoicingsetupdate_Relationships {
}
interface msdyn_orderinvoicingsetupdate_Result extends msdyn_orderinvoicingsetupdate_Base, msdyn_orderinvoicingsetupdate_Relationships {
}
interface msdyn_orderinvoicingsetupdate_FormattedResult {
}
interface msdyn_orderinvoicingsetupdate_Select {
}
interface msdyn_orderinvoicingsetupdate_Expand {
}
interface msdyn_orderinvoicingsetupdate_Filter {
}
interface msdyn_orderinvoicingsetupdate_Create extends msdyn_orderinvoicingsetupdate {
}
interface msdyn_orderinvoicingsetupdate_Update extends msdyn_orderinvoicingsetupdate {
}
interface msdyn_orderlineresourcecategory_Base extends WebEntity {
}
interface msdyn_orderlineresourcecategory_Fixed extends WebEntity_Fixed {
  msdyn_orderlineresourcecategoryid: string;
}
interface msdyn_orderlineresourcecategory extends msdyn_orderlineresourcecategory_Base, msdyn_orderlineresourcecategory_Relationships {
}
interface msdyn_orderlineresourcecategory_Relationships {
}
interface msdyn_orderlineresourcecategory_Result extends msdyn_orderlineresourcecategory_Base, msdyn_orderlineresourcecategory_Relationships {
}
interface msdyn_orderlineresourcecategory_FormattedResult {
}
interface msdyn_orderlineresourcecategory_Select {
}
interface msdyn_orderlineresourcecategory_Expand {
}
interface msdyn_orderlineresourcecategory_Filter {
}
interface msdyn_orderlineresourcecategory_Create extends msdyn_orderlineresourcecategory {
}
interface msdyn_orderlineresourcecategory_Update extends msdyn_orderlineresourcecategory {
}
interface msdyn_orderlinetransaction_Base extends WebEntity {
}
interface msdyn_orderlinetransaction_Fixed extends WebEntity_Fixed {
  msdyn_orderlinetransactionid: string;
}
interface msdyn_orderlinetransaction extends msdyn_orderlinetransaction_Base, msdyn_orderlinetransaction_Relationships {
}
interface msdyn_orderlinetransaction_Relationships {
}
interface msdyn_orderlinetransaction_Result extends msdyn_orderlinetransaction_Base, msdyn_orderlinetransaction_Relationships {
}
interface msdyn_orderlinetransaction_FormattedResult {
}
interface msdyn_orderlinetransaction_Select {
}
interface msdyn_orderlinetransaction_Expand {
}
interface msdyn_orderlinetransaction_Filter {
}
interface msdyn_orderlinetransaction_Create extends msdyn_orderlinetransaction {
}
interface msdyn_orderlinetransaction_Update extends msdyn_orderlinetransaction {
}
interface msdyn_orderlinetransactioncategory_Base extends WebEntity {
}
interface msdyn_orderlinetransactioncategory_Fixed extends WebEntity_Fixed {
  msdyn_orderlinetransactioncategoryid: string;
}
interface msdyn_orderlinetransactioncategory extends msdyn_orderlinetransactioncategory_Base, msdyn_orderlinetransactioncategory_Relationships {
}
interface msdyn_orderlinetransactioncategory_Relationships {
}
interface msdyn_orderlinetransactioncategory_Result extends msdyn_orderlinetransactioncategory_Base, msdyn_orderlinetransactioncategory_Relationships {
}
interface msdyn_orderlinetransactioncategory_FormattedResult {
}
interface msdyn_orderlinetransactioncategory_Select {
}
interface msdyn_orderlinetransactioncategory_Expand {
}
interface msdyn_orderlinetransactioncategory_Filter {
}
interface msdyn_orderlinetransactioncategory_Create extends msdyn_orderlinetransactioncategory {
}
interface msdyn_orderlinetransactioncategory_Update extends msdyn_orderlinetransactioncategory {
}
interface msdyn_orderlinetransactionclassification_Base extends WebEntity {
}
interface msdyn_orderlinetransactionclassification_Fixed extends WebEntity_Fixed {
  msdyn_orderlinetransactionclassificationid: string;
}
interface msdyn_orderlinetransactionclassification extends msdyn_orderlinetransactionclassification_Base, msdyn_orderlinetransactionclassification_Relationships {
}
interface msdyn_orderlinetransactionclassification_Relationships {
}
interface msdyn_orderlinetransactionclassification_Result extends msdyn_orderlinetransactionclassification_Base, msdyn_orderlinetransactionclassification_Relationships {
}
interface msdyn_orderlinetransactionclassification_FormattedResult {
}
interface msdyn_orderlinetransactionclassification_Select {
}
interface msdyn_orderlinetransactionclassification_Expand {
}
interface msdyn_orderlinetransactionclassification_Filter {
}
interface msdyn_orderlinetransactionclassification_Create extends msdyn_orderlinetransactionclassification {
}
interface msdyn_orderlinetransactionclassification_Update extends msdyn_orderlinetransactionclassification {
}
interface msdyn_orderpricelist_Base extends WebEntity {
}
interface msdyn_orderpricelist_Fixed extends WebEntity_Fixed {
  msdyn_orderpricelistid: string;
}
interface msdyn_orderpricelist extends msdyn_orderpricelist_Base, msdyn_orderpricelist_Relationships {
}
interface msdyn_orderpricelist_Relationships {
}
interface msdyn_orderpricelist_Result extends msdyn_orderpricelist_Base, msdyn_orderpricelist_Relationships {
}
interface msdyn_orderpricelist_FormattedResult {
}
interface msdyn_orderpricelist_Select {
}
interface msdyn_orderpricelist_Expand {
}
interface msdyn_orderpricelist_Filter {
}
interface msdyn_orderpricelist_Create extends msdyn_orderpricelist {
}
interface msdyn_orderpricelist_Update extends msdyn_orderpricelist {
}
interface msdyn_organizationalunit_Base extends WebEntity {
}
interface msdyn_organizationalunit_Fixed extends WebEntity_Fixed {
  msdyn_organizationalunitid: string;
}
interface msdyn_organizationalunit extends msdyn_organizationalunit_Base, msdyn_organizationalunit_Relationships {
}
interface msdyn_organizationalunit_Relationships {
}
interface msdyn_organizationalunit_Result extends msdyn_organizationalunit_Base, msdyn_organizationalunit_Relationships {
}
interface msdyn_organizationalunit_FormattedResult {
}
interface msdyn_organizationalunit_Select {
}
interface msdyn_organizationalunit_Expand {
}
interface msdyn_organizationalunit_Filter {
}
interface msdyn_organizationalunit_Create extends msdyn_organizationalunit {
}
interface msdyn_organizationalunit_Update extends msdyn_organizationalunit {
}
interface msdyn_organizationalunit_pricelevel_Base extends WebEntity {
}
interface msdyn_organizationalunit_pricelevel_Fixed extends WebEntity_Fixed {
  msdyn_organizationalunit_pricelevelid: string;
}
interface msdyn_organizationalunit_pricelevel extends msdyn_organizationalunit_pricelevel_Base, msdyn_organizationalunit_pricelevel_Relationships {
}
interface msdyn_organizationalunit_pricelevel_Relationships {
}
interface msdyn_organizationalunit_pricelevel_Result extends msdyn_organizationalunit_pricelevel_Base, msdyn_organizationalunit_pricelevel_Relationships {
}
interface msdyn_organizationalunit_pricelevel_FormattedResult {
}
interface msdyn_organizationalunit_pricelevel_Select {
}
interface msdyn_organizationalunit_pricelevel_Expand {
}
interface msdyn_organizationalunit_pricelevel_Filter {
}
interface msdyn_organizationalunit_pricelevel_Create extends msdyn_organizationalunit_pricelevel {
}
interface msdyn_organizationalunit_pricelevel_Update extends msdyn_organizationalunit_pricelevel {
}
interface msdyn_overflowactionconfig_Base extends WebEntity {
}
interface msdyn_overflowactionconfig_Fixed extends WebEntity_Fixed {
  msdyn_overflowactionconfigid: string;
}
interface msdyn_overflowactionconfig extends msdyn_overflowactionconfig_Base, msdyn_overflowactionconfig_Relationships {
}
interface msdyn_overflowactionconfig_Relationships {
}
interface msdyn_overflowactionconfig_Result extends msdyn_overflowactionconfig_Base, msdyn_overflowactionconfig_Relationships {
}
interface msdyn_overflowactionconfig_FormattedResult {
}
interface msdyn_overflowactionconfig_Select {
}
interface msdyn_overflowactionconfig_Expand {
}
interface msdyn_overflowactionconfig_Filter {
}
interface msdyn_overflowactionconfig_Create extends msdyn_overflowactionconfig {
}
interface msdyn_overflowactionconfig_Update extends msdyn_overflowactionconfig {
}
interface msdyn_paneconfiguration_Base extends WebEntity {
}
interface msdyn_paneconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_paneconfigurationid: string;
}
interface msdyn_paneconfiguration extends msdyn_paneconfiguration_Base, msdyn_paneconfiguration_Relationships {
}
interface msdyn_paneconfiguration_Relationships {
}
interface msdyn_paneconfiguration_Result extends msdyn_paneconfiguration_Base, msdyn_paneconfiguration_Relationships {
}
interface msdyn_paneconfiguration_FormattedResult {
}
interface msdyn_paneconfiguration_Select {
}
interface msdyn_paneconfiguration_Expand {
}
interface msdyn_paneconfiguration_Filter {
}
interface msdyn_paneconfiguration_Create extends msdyn_paneconfiguration {
}
interface msdyn_paneconfiguration_Update extends msdyn_paneconfiguration {
}
interface msdyn_panetabconfiguration_Base extends WebEntity {
}
interface msdyn_panetabconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_panetabconfigurationid: string;
}
interface msdyn_panetabconfiguration extends msdyn_panetabconfiguration_Base, msdyn_panetabconfiguration_Relationships {
}
interface msdyn_panetabconfiguration_Relationships {
}
interface msdyn_panetabconfiguration_Result extends msdyn_panetabconfiguration_Base, msdyn_panetabconfiguration_Relationships {
}
interface msdyn_panetabconfiguration_FormattedResult {
}
interface msdyn_panetabconfiguration_Select {
}
interface msdyn_panetabconfiguration_Expand {
}
interface msdyn_panetabconfiguration_Filter {
}
interface msdyn_panetabconfiguration_Create extends msdyn_panetabconfiguration {
}
interface msdyn_panetabconfiguration_Update extends msdyn_panetabconfiguration {
}
interface msdyn_panetoolconfiguration_Base extends WebEntity {
}
interface msdyn_panetoolconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_panetoolconfigurationid: string;
}
interface msdyn_panetoolconfiguration extends msdyn_panetoolconfiguration_Base, msdyn_panetoolconfiguration_Relationships {
}
interface msdyn_panetoolconfiguration_Relationships {
}
interface msdyn_panetoolconfiguration_Result extends msdyn_panetoolconfiguration_Base, msdyn_panetoolconfiguration_Relationships {
}
interface msdyn_panetoolconfiguration_FormattedResult {
}
interface msdyn_panetoolconfiguration_Select {
}
interface msdyn_panetoolconfiguration_Expand {
}
interface msdyn_panetoolconfiguration_Filter {
}
interface msdyn_panetoolconfiguration_Create extends msdyn_panetoolconfiguration {
}
interface msdyn_panetoolconfiguration_Update extends msdyn_panetoolconfiguration {
}
interface msdyn_payment_Base extends WebEntity {
}
interface msdyn_payment_Fixed extends WebEntity_Fixed {
  msdyn_paymentid: string;
}
interface msdyn_payment extends msdyn_payment_Base, msdyn_payment_Relationships {
}
interface msdyn_payment_Relationships {
}
interface msdyn_payment_Result extends msdyn_payment_Base, msdyn_payment_Relationships {
}
interface msdyn_payment_FormattedResult {
}
interface msdyn_payment_Select {
}
interface msdyn_payment_Expand {
}
interface msdyn_payment_Filter {
}
interface msdyn_payment_Create extends msdyn_payment {
}
interface msdyn_payment_Update extends msdyn_payment {
}
interface msdyn_paymentdetail_Base extends WebEntity {
}
interface msdyn_paymentdetail_Fixed extends WebEntity_Fixed {
  msdyn_paymentdetailid: string;
}
interface msdyn_paymentdetail extends msdyn_paymentdetail_Base, msdyn_paymentdetail_Relationships {
}
interface msdyn_paymentdetail_Relationships {
}
interface msdyn_paymentdetail_Result extends msdyn_paymentdetail_Base, msdyn_paymentdetail_Relationships {
}
interface msdyn_paymentdetail_FormattedResult {
}
interface msdyn_paymentdetail_Select {
}
interface msdyn_paymentdetail_Expand {
}
interface msdyn_paymentdetail_Filter {
}
interface msdyn_paymentdetail_Create extends msdyn_paymentdetail {
}
interface msdyn_paymentdetail_Update extends msdyn_paymentdetail {
}
interface msdyn_paymentmethod_Base extends WebEntity {
}
interface msdyn_paymentmethod_Fixed extends WebEntity_Fixed {
  msdyn_paymentmethodid: string;
}
interface msdyn_paymentmethod extends msdyn_paymentmethod_Base, msdyn_paymentmethod_Relationships {
}
interface msdyn_paymentmethod_Relationships {
}
interface msdyn_paymentmethod_Result extends msdyn_paymentmethod_Base, msdyn_paymentmethod_Relationships {
}
interface msdyn_paymentmethod_FormattedResult {
}
interface msdyn_paymentmethod_Select {
}
interface msdyn_paymentmethod_Expand {
}
interface msdyn_paymentmethod_Filter {
}
interface msdyn_paymentmethod_Create extends msdyn_paymentmethod {
}
interface msdyn_paymentmethod_Update extends msdyn_paymentmethod {
}
interface msdyn_paymentterm_Base extends WebEntity {
}
interface msdyn_paymentterm_Fixed extends WebEntity_Fixed {
  msdyn_paymenttermid: string;
}
interface msdyn_paymentterm extends msdyn_paymentterm_Base, msdyn_paymentterm_Relationships {
}
interface msdyn_paymentterm_Relationships {
}
interface msdyn_paymentterm_Result extends msdyn_paymentterm_Base, msdyn_paymentterm_Relationships {
}
interface msdyn_paymentterm_FormattedResult {
}
interface msdyn_paymentterm_Select {
}
interface msdyn_paymentterm_Expand {
}
interface msdyn_paymentterm_Filter {
}
interface msdyn_paymentterm_Create extends msdyn_paymentterm {
}
interface msdyn_paymentterm_Update extends msdyn_paymentterm {
}
interface msdyn_personalmessage_Base extends WebEntity {
}
interface msdyn_personalmessage_Fixed extends WebEntity_Fixed {
  msdyn_personalmessageid: string;
}
interface msdyn_personalmessage extends msdyn_personalmessage_Base, msdyn_personalmessage_Relationships {
}
interface msdyn_personalmessage_Relationships {
}
interface msdyn_personalmessage_Result extends msdyn_personalmessage_Base, msdyn_personalmessage_Relationships {
}
interface msdyn_personalmessage_FormattedResult {
}
interface msdyn_personalmessage_Select {
}
interface msdyn_personalmessage_Expand {
}
interface msdyn_personalmessage_Filter {
}
interface msdyn_personalmessage_Create extends msdyn_personalmessage {
}
interface msdyn_personalmessage_Update extends msdyn_personalmessage {
}
interface msdyn_Personalsoundsetting_Base extends WebEntity {
}
interface msdyn_Personalsoundsetting_Fixed extends WebEntity_Fixed {
  msdyn_personalsoundsettingid: string;
}
interface msdyn_Personalsoundsetting extends msdyn_Personalsoundsetting_Base, msdyn_Personalsoundsetting_Relationships {
}
interface msdyn_Personalsoundsetting_Relationships {
}
interface msdyn_Personalsoundsetting_Result extends msdyn_Personalsoundsetting_Base, msdyn_Personalsoundsetting_Relationships {
}
interface msdyn_Personalsoundsetting_FormattedResult {
}
interface msdyn_Personalsoundsetting_Select {
}
interface msdyn_Personalsoundsetting_Expand {
}
interface msdyn_Personalsoundsetting_Filter {
}
interface msdyn_Personalsoundsetting_Create extends msdyn_Personalsoundsetting {
}
interface msdyn_Personalsoundsetting_Update extends msdyn_Personalsoundsetting {
}
interface msdyn_personasecurityrolemapping_Base extends WebEntity {
}
interface msdyn_personasecurityrolemapping_Fixed extends WebEntity_Fixed {
  msdyn_personasecurityrolemappingid: string;
}
interface msdyn_personasecurityrolemapping extends msdyn_personasecurityrolemapping_Base, msdyn_personasecurityrolemapping_Relationships {
}
interface msdyn_personasecurityrolemapping_Relationships {
}
interface msdyn_personasecurityrolemapping_Result extends msdyn_personasecurityrolemapping_Base, msdyn_personasecurityrolemapping_Relationships {
}
interface msdyn_personasecurityrolemapping_FormattedResult {
}
interface msdyn_personasecurityrolemapping_Select {
}
interface msdyn_personasecurityrolemapping_Expand {
}
interface msdyn_personasecurityrolemapping_Filter {
}
interface msdyn_personasecurityrolemapping_Create extends msdyn_personasecurityrolemapping {
}
interface msdyn_personasecurityrolemapping_Update extends msdyn_personasecurityrolemapping {
}
interface msdyn_playbookactivity_Base extends WebEntity {
}
interface msdyn_playbookactivity_Fixed extends WebEntity_Fixed {
  msdyn_playbookactivityid: string;
}
interface msdyn_playbookactivity extends msdyn_playbookactivity_Base, msdyn_playbookactivity_Relationships {
}
interface msdyn_playbookactivity_Relationships {
}
interface msdyn_playbookactivity_Result extends msdyn_playbookactivity_Base, msdyn_playbookactivity_Relationships {
}
interface msdyn_playbookactivity_FormattedResult {
}
interface msdyn_playbookactivity_Select {
}
interface msdyn_playbookactivity_Expand {
}
interface msdyn_playbookactivity_Filter {
}
interface msdyn_playbookactivity_Create extends msdyn_playbookactivity {
}
interface msdyn_playbookactivity_Update extends msdyn_playbookactivity {
}
interface msdyn_playbookactivityattribute_Base extends WebEntity {
}
interface msdyn_playbookactivityattribute_Fixed extends WebEntity_Fixed {
  msdyn_playbookactivityattributeid: string;
}
interface msdyn_playbookactivityattribute extends msdyn_playbookactivityattribute_Base, msdyn_playbookactivityattribute_Relationships {
}
interface msdyn_playbookactivityattribute_Relationships {
}
interface msdyn_playbookactivityattribute_Result extends msdyn_playbookactivityattribute_Base, msdyn_playbookactivityattribute_Relationships {
}
interface msdyn_playbookactivityattribute_FormattedResult {
}
interface msdyn_playbookactivityattribute_Select {
}
interface msdyn_playbookactivityattribute_Expand {
}
interface msdyn_playbookactivityattribute_Filter {
}
interface msdyn_playbookactivityattribute_Create extends msdyn_playbookactivityattribute {
}
interface msdyn_playbookactivityattribute_Update extends msdyn_playbookactivityattribute {
}
interface msdyn_playbookcategory_Base extends WebEntity {
}
interface msdyn_playbookcategory_Fixed extends WebEntity_Fixed {
  msdyn_playbookcategoryid: string;
}
interface msdyn_playbookcategory extends msdyn_playbookcategory_Base, msdyn_playbookcategory_Relationships {
}
interface msdyn_playbookcategory_Relationships {
}
interface msdyn_playbookcategory_Result extends msdyn_playbookcategory_Base, msdyn_playbookcategory_Relationships {
}
interface msdyn_playbookcategory_FormattedResult {
}
interface msdyn_playbookcategory_Select {
}
interface msdyn_playbookcategory_Expand {
}
interface msdyn_playbookcategory_Filter {
}
interface msdyn_playbookcategory_Create extends msdyn_playbookcategory {
}
interface msdyn_playbookcategory_Update extends msdyn_playbookcategory {
}
interface msdyn_playbookinstance_Base extends WebEntity {
}
interface msdyn_playbookinstance_Fixed extends WebEntity_Fixed {
  msdyn_playbookinstanceid: string;
}
interface msdyn_playbookinstance extends msdyn_playbookinstance_Base, msdyn_playbookinstance_Relationships {
}
interface msdyn_playbookinstance_Relationships {
}
interface msdyn_playbookinstance_Result extends msdyn_playbookinstance_Base, msdyn_playbookinstance_Relationships {
}
interface msdyn_playbookinstance_FormattedResult {
}
interface msdyn_playbookinstance_Select {
}
interface msdyn_playbookinstance_Expand {
}
interface msdyn_playbookinstance_Filter {
}
interface msdyn_playbookinstance_Create extends msdyn_playbookinstance {
}
interface msdyn_playbookinstance_Update extends msdyn_playbookinstance {
}
interface msdyn_playbooktemplate_Base extends WebEntity {
}
interface msdyn_playbooktemplate_Fixed extends WebEntity_Fixed {
  msdyn_playbooktemplateid: string;
}
interface msdyn_playbooktemplate extends msdyn_playbooktemplate_Base, msdyn_playbooktemplate_Relationships {
}
interface msdyn_playbooktemplate_Relationships {
}
interface msdyn_playbooktemplate_Result extends msdyn_playbooktemplate_Base, msdyn_playbooktemplate_Relationships {
}
interface msdyn_playbooktemplate_FormattedResult {
}
interface msdyn_playbooktemplate_Select {
}
interface msdyn_playbooktemplate_Expand {
}
interface msdyn_playbooktemplate_Filter {
}
interface msdyn_playbooktemplate_Create extends msdyn_playbooktemplate {
}
interface msdyn_playbooktemplate_Update extends msdyn_playbooktemplate {
}
interface msdyn_pminferredtask_Base extends WebEntity {
}
interface msdyn_pminferredtask_Fixed extends WebEntity_Fixed {
  msdyn_pminferredtaskid: string;
}
interface msdyn_pminferredtask extends msdyn_pminferredtask_Base, msdyn_pminferredtask_Relationships {
}
interface msdyn_pminferredtask_Relationships {
}
interface msdyn_pminferredtask_Result extends msdyn_pminferredtask_Base, msdyn_pminferredtask_Relationships {
}
interface msdyn_pminferredtask_FormattedResult {
}
interface msdyn_pminferredtask_Select {
}
interface msdyn_pminferredtask_Expand {
}
interface msdyn_pminferredtask_Filter {
}
interface msdyn_pminferredtask_Create extends msdyn_pminferredtask {
}
interface msdyn_pminferredtask_Update extends msdyn_pminferredtask {
}
interface msdyn_pmrecording_Base extends WebEntity {
}
interface msdyn_pmrecording_Fixed extends WebEntity_Fixed {
  msdyn_pmrecordingid: string;
}
interface msdyn_pmrecording extends msdyn_pmrecording_Base, msdyn_pmrecording_Relationships {
}
interface msdyn_pmrecording_Relationships {
}
interface msdyn_pmrecording_Result extends msdyn_pmrecording_Base, msdyn_pmrecording_Relationships {
}
interface msdyn_pmrecording_FormattedResult {
}
interface msdyn_pmrecording_Select {
}
interface msdyn_pmrecording_Expand {
}
interface msdyn_pmrecording_Filter {
}
interface msdyn_pmrecording_Create extends msdyn_pmrecording {
}
interface msdyn_pmrecording_Update extends msdyn_pmrecording {
}
interface msdyn_PostAlbum_Base extends WebEntity {
}
interface msdyn_PostAlbum_Fixed extends WebEntity_Fixed {
  msdyn_postalbumid: string;
}
interface msdyn_PostAlbum extends msdyn_PostAlbum_Base, msdyn_PostAlbum_Relationships {
}
interface msdyn_PostAlbum_Relationships {
}
interface msdyn_PostAlbum_Result extends msdyn_PostAlbum_Base, msdyn_PostAlbum_Relationships {
}
interface msdyn_PostAlbum_FormattedResult {
}
interface msdyn_PostAlbum_Select {
}
interface msdyn_PostAlbum_Expand {
}
interface msdyn_PostAlbum_Filter {
}
interface msdyn_PostAlbum_Create extends msdyn_PostAlbum {
}
interface msdyn_PostAlbum_Update extends msdyn_PostAlbum {
}
interface msdyn_postalcode_Base extends WebEntity {
}
interface msdyn_postalcode_Fixed extends WebEntity_Fixed {
  msdyn_postalcodeid: string;
}
interface msdyn_postalcode extends msdyn_postalcode_Base, msdyn_postalcode_Relationships {
}
interface msdyn_postalcode_Relationships {
}
interface msdyn_postalcode_Result extends msdyn_postalcode_Base, msdyn_postalcode_Relationships {
}
interface msdyn_postalcode_FormattedResult {
}
interface msdyn_postalcode_Select {
}
interface msdyn_postalcode_Expand {
}
interface msdyn_postalcode_Filter {
}
interface msdyn_postalcode_Create extends msdyn_postalcode {
}
interface msdyn_postalcode_Update extends msdyn_postalcode {
}
interface msdyn_PostConfig_Base extends WebEntity {
}
interface msdyn_PostConfig_Fixed extends WebEntity_Fixed {
  msdyn_postconfigid: string;
}
interface msdyn_PostConfig extends msdyn_PostConfig_Base, msdyn_PostConfig_Relationships {
}
interface msdyn_PostConfig_Relationships {
}
interface msdyn_PostConfig_Result extends msdyn_PostConfig_Base, msdyn_PostConfig_Relationships {
}
interface msdyn_PostConfig_FormattedResult {
}
interface msdyn_PostConfig_Select {
}
interface msdyn_PostConfig_Expand {
}
interface msdyn_PostConfig_Filter {
}
interface msdyn_PostConfig_Create extends msdyn_PostConfig {
}
interface msdyn_PostConfig_Update extends msdyn_PostConfig {
}
interface msdyn_PostRuleConfig_Base extends WebEntity {
}
interface msdyn_PostRuleConfig_Fixed extends WebEntity_Fixed {
  msdyn_postruleconfigid: string;
}
interface msdyn_PostRuleConfig extends msdyn_PostRuleConfig_Base, msdyn_PostRuleConfig_Relationships {
}
interface msdyn_PostRuleConfig_Relationships {
}
interface msdyn_PostRuleConfig_Result extends msdyn_PostRuleConfig_Base, msdyn_PostRuleConfig_Relationships {
}
interface msdyn_PostRuleConfig_FormattedResult {
}
interface msdyn_PostRuleConfig_Select {
}
interface msdyn_PostRuleConfig_Expand {
}
interface msdyn_PostRuleConfig_Filter {
}
interface msdyn_PostRuleConfig_Create extends msdyn_PostRuleConfig {
}
interface msdyn_PostRuleConfig_Update extends msdyn_PostRuleConfig {
}
interface msdyn_predictworkhourdurationsetting_Base extends WebEntity {
}
interface msdyn_predictworkhourdurationsetting_Fixed extends WebEntity_Fixed {
  msdyn_predictworkhourdurationsettingid: string;
}
interface msdyn_predictworkhourdurationsetting extends msdyn_predictworkhourdurationsetting_Base, msdyn_predictworkhourdurationsetting_Relationships {
}
interface msdyn_predictworkhourdurationsetting_Relationships {
}
interface msdyn_predictworkhourdurationsetting_Result extends msdyn_predictworkhourdurationsetting_Base, msdyn_predictworkhourdurationsetting_Relationships {
}
interface msdyn_predictworkhourdurationsetting_FormattedResult {
}
interface msdyn_predictworkhourdurationsetting_Select {
}
interface msdyn_predictworkhourdurationsetting_Expand {
}
interface msdyn_predictworkhourdurationsetting_Filter {
}
interface msdyn_predictworkhourdurationsetting_Create extends msdyn_predictworkhourdurationsetting {
}
interface msdyn_predictworkhourdurationsetting_Update extends msdyn_predictworkhourdurationsetting {
}
interface msdyn_presence_Base extends WebEntity {
}
interface msdyn_presence_Fixed extends WebEntity_Fixed {
  msdyn_presenceid: string;
}
interface msdyn_presence extends msdyn_presence_Base, msdyn_presence_Relationships {
}
interface msdyn_presence_Relationships {
}
interface msdyn_presence_Result extends msdyn_presence_Base, msdyn_presence_Relationships {
}
interface msdyn_presence_FormattedResult {
}
interface msdyn_presence_Select {
}
interface msdyn_presence_Expand {
}
interface msdyn_presence_Filter {
}
interface msdyn_presence_Create extends msdyn_presence {
}
interface msdyn_presence_Update extends msdyn_presence {
}
interface msdyn_priority_Base extends WebEntity {
}
interface msdyn_priority_Fixed extends WebEntity_Fixed {
  msdyn_priorityid: string;
}
interface msdyn_priority extends msdyn_priority_Base, msdyn_priority_Relationships {
}
interface msdyn_priority_Relationships {
}
interface msdyn_priority_Result extends msdyn_priority_Base, msdyn_priority_Relationships {
}
interface msdyn_priority_FormattedResult {
}
interface msdyn_priority_Select {
}
interface msdyn_priority_Expand {
}
interface msdyn_priority_Filter {
}
interface msdyn_priority_Create extends msdyn_priority {
}
interface msdyn_priority_Update extends msdyn_priority {
}
interface msdyn_problematicasset_Base extends WebEntity {
}
interface msdyn_problematicasset_Fixed extends WebEntity_Fixed {
  msdyn_problematicassetid: string;
}
interface msdyn_problematicasset extends msdyn_problematicasset_Base, msdyn_problematicasset_Relationships {
}
interface msdyn_problematicasset_Relationships {
}
interface msdyn_problematicasset_Result extends msdyn_problematicasset_Base, msdyn_problematicasset_Relationships {
}
interface msdyn_problematicasset_FormattedResult {
}
interface msdyn_problematicasset_Select {
}
interface msdyn_problematicasset_Expand {
}
interface msdyn_problematicasset_Filter {
}
interface msdyn_problematicasset_Create extends msdyn_problematicasset {
}
interface msdyn_problematicasset_Update extends msdyn_problematicasset {
}
interface msdyn_problematicassetfeedback_Base extends WebEntity {
}
interface msdyn_problematicassetfeedback_Fixed extends WebEntity_Fixed {
  msdyn_problematicassetfeedbackid: string;
}
interface msdyn_problematicassetfeedback extends msdyn_problematicassetfeedback_Base, msdyn_problematicassetfeedback_Relationships {
}
interface msdyn_problematicassetfeedback_Relationships {
}
interface msdyn_problematicassetfeedback_Result extends msdyn_problematicassetfeedback_Base, msdyn_problematicassetfeedback_Relationships {
}
interface msdyn_problematicassetfeedback_FormattedResult {
}
interface msdyn_problematicassetfeedback_Select {
}
interface msdyn_problematicassetfeedback_Expand {
}
interface msdyn_problematicassetfeedback_Filter {
}
interface msdyn_problematicassetfeedback_Create extends msdyn_problematicassetfeedback {
}
interface msdyn_problematicassetfeedback_Update extends msdyn_problematicassetfeedback {
}
interface msdyn_processnotes_Base extends WebEntity {
}
interface msdyn_processnotes_Fixed extends WebEntity_Fixed {
  msdyn_processnotesid: string;
}
interface msdyn_processnotes extends msdyn_processnotes_Base, msdyn_processnotes_Relationships {
}
interface msdyn_processnotes_Relationships {
}
interface msdyn_processnotes_Result extends msdyn_processnotes_Base, msdyn_processnotes_Relationships {
}
interface msdyn_processnotes_FormattedResult {
}
interface msdyn_processnotes_Select {
}
interface msdyn_processnotes_Expand {
}
interface msdyn_processnotes_Filter {
}
interface msdyn_processnotes_Create extends msdyn_processnotes {
}
interface msdyn_processnotes_Update extends msdyn_processnotes {
}
interface msdyn_product_knowledgearticle_Base extends WebEntity {
}
interface msdyn_product_knowledgearticle_Fixed extends WebEntity_Fixed {
  msdyn_product_knowledgearticleid: string;
}
interface msdyn_product_knowledgearticle extends msdyn_product_knowledgearticle_Base, msdyn_product_knowledgearticle_Relationships {
}
interface msdyn_product_knowledgearticle_Relationships {
}
interface msdyn_product_knowledgearticle_Result extends msdyn_product_knowledgearticle_Base, msdyn_product_knowledgearticle_Relationships {
}
interface msdyn_product_knowledgearticle_FormattedResult {
}
interface msdyn_product_knowledgearticle_Select {
}
interface msdyn_product_knowledgearticle_Expand {
}
interface msdyn_product_knowledgearticle_Filter {
}
interface msdyn_product_knowledgearticle_Create extends msdyn_product_knowledgearticle {
}
interface msdyn_product_knowledgearticle_Update extends msdyn_product_knowledgearticle {
}
interface msdyn_product_knowledgebaserecord_Base extends WebEntity {
}
interface msdyn_product_knowledgebaserecord_Fixed extends WebEntity_Fixed {
  msdyn_product_knowledgebaserecordid: string;
}
interface msdyn_product_knowledgebaserecord extends msdyn_product_knowledgebaserecord_Base, msdyn_product_knowledgebaserecord_Relationships {
}
interface msdyn_product_knowledgebaserecord_Relationships {
}
interface msdyn_product_knowledgebaserecord_Result extends msdyn_product_knowledgebaserecord_Base, msdyn_product_knowledgebaserecord_Relationships {
}
interface msdyn_product_knowledgebaserecord_FormattedResult {
}
interface msdyn_product_knowledgebaserecord_Select {
}
interface msdyn_product_knowledgebaserecord_Expand {
}
interface msdyn_product_knowledgebaserecord_Filter {
}
interface msdyn_product_knowledgebaserecord_Create extends msdyn_product_knowledgebaserecord {
}
interface msdyn_product_knowledgebaserecord_Update extends msdyn_product_knowledgebaserecord {
}
interface msdyn_productinventory_Base extends WebEntity {
}
interface msdyn_productinventory_Fixed extends WebEntity_Fixed {
  msdyn_productinventoryid: string;
}
interface msdyn_productinventory extends msdyn_productinventory_Base, msdyn_productinventory_Relationships {
}
interface msdyn_productinventory_Relationships {
}
interface msdyn_productinventory_Result extends msdyn_productinventory_Base, msdyn_productinventory_Relationships {
}
interface msdyn_productinventory_FormattedResult {
}
interface msdyn_productinventory_Select {
}
interface msdyn_productinventory_Expand {
}
interface msdyn_productinventory_Filter {
}
interface msdyn_productinventory_Create extends msdyn_productinventory {
}
interface msdyn_productinventory_Update extends msdyn_productinventory {
}
interface msdyn_productivityactioninputparameter_Base extends WebEntity {
}
interface msdyn_productivityactioninputparameter_Fixed extends WebEntity_Fixed {
  msdyn_productivityactioninputparameterid: string;
}
interface msdyn_productivityactioninputparameter extends msdyn_productivityactioninputparameter_Base, msdyn_productivityactioninputparameter_Relationships {
}
interface msdyn_productivityactioninputparameter_Relationships {
}
interface msdyn_productivityactioninputparameter_Result extends msdyn_productivityactioninputparameter_Base, msdyn_productivityactioninputparameter_Relationships {
}
interface msdyn_productivityactioninputparameter_FormattedResult {
}
interface msdyn_productivityactioninputparameter_Select {
}
interface msdyn_productivityactioninputparameter_Expand {
}
interface msdyn_productivityactioninputparameter_Filter {
}
interface msdyn_productivityactioninputparameter_Create extends msdyn_productivityactioninputparameter {
}
interface msdyn_productivityactioninputparameter_Update extends msdyn_productivityactioninputparameter {
}
interface msdyn_productivityactionoutputparameter_Base extends WebEntity {
}
interface msdyn_productivityactionoutputparameter_Fixed extends WebEntity_Fixed {
  msdyn_productivityactionoutputparameterid: string;
}
interface msdyn_productivityactionoutputparameter extends msdyn_productivityactionoutputparameter_Base, msdyn_productivityactionoutputparameter_Relationships {
}
interface msdyn_productivityactionoutputparameter_Relationships {
}
interface msdyn_productivityactionoutputparameter_Result extends msdyn_productivityactionoutputparameter_Base, msdyn_productivityactionoutputparameter_Relationships {
}
interface msdyn_productivityactionoutputparameter_FormattedResult {
}
interface msdyn_productivityactionoutputparameter_Select {
}
interface msdyn_productivityactionoutputparameter_Expand {
}
interface msdyn_productivityactionoutputparameter_Filter {
}
interface msdyn_productivityactionoutputparameter_Create extends msdyn_productivityactionoutputparameter {
}
interface msdyn_productivityactionoutputparameter_Update extends msdyn_productivityactionoutputparameter {
}
interface msdyn_productivityagentscript_Base extends WebEntity {
}
interface msdyn_productivityagentscript_Fixed extends WebEntity_Fixed {
  msdyn_productivityagentscriptid: string;
}
interface msdyn_productivityagentscript extends msdyn_productivityagentscript_Base, msdyn_productivityagentscript_Relationships {
}
interface msdyn_productivityagentscript_Relationships {
}
interface msdyn_productivityagentscript_Result extends msdyn_productivityagentscript_Base, msdyn_productivityagentscript_Relationships {
}
interface msdyn_productivityagentscript_FormattedResult {
}
interface msdyn_productivityagentscript_Select {
}
interface msdyn_productivityagentscript_Expand {
}
interface msdyn_productivityagentscript_Filter {
}
interface msdyn_productivityagentscript_Create extends msdyn_productivityagentscript {
}
interface msdyn_productivityagentscript_Update extends msdyn_productivityagentscript {
}
interface msdyn_productivityagentscriptstep_Base extends WebEntity {
}
interface msdyn_productivityagentscriptstep_Fixed extends WebEntity_Fixed {
  msdyn_productivityagentscriptstepid: string;
}
interface msdyn_productivityagentscriptstep extends msdyn_productivityagentscriptstep_Base, msdyn_productivityagentscriptstep_Relationships {
}
interface msdyn_productivityagentscriptstep_Relationships {
}
interface msdyn_productivityagentscriptstep_Result extends msdyn_productivityagentscriptstep_Base, msdyn_productivityagentscriptstep_Relationships {
}
interface msdyn_productivityagentscriptstep_FormattedResult {
}
interface msdyn_productivityagentscriptstep_Select {
}
interface msdyn_productivityagentscriptstep_Expand {
}
interface msdyn_productivityagentscriptstep_Filter {
}
interface msdyn_productivityagentscriptstep_Create extends msdyn_productivityagentscriptstep {
}
interface msdyn_productivityagentscriptstep_Update extends msdyn_productivityagentscriptstep {
}
interface msdyn_productivitymacroactiontemplate_Base extends WebEntity {
}
interface msdyn_productivitymacroactiontemplate_Fixed extends WebEntity_Fixed {
  msdyn_productivitymacroactiontemplateid: string;
}
interface msdyn_productivitymacroactiontemplate extends msdyn_productivitymacroactiontemplate_Base, msdyn_productivitymacroactiontemplate_Relationships {
}
interface msdyn_productivitymacroactiontemplate_Relationships {
}
interface msdyn_productivitymacroactiontemplate_Result extends msdyn_productivitymacroactiontemplate_Base, msdyn_productivitymacroactiontemplate_Relationships {
}
interface msdyn_productivitymacroactiontemplate_FormattedResult {
}
interface msdyn_productivitymacroactiontemplate_Select {
}
interface msdyn_productivitymacroactiontemplate_Expand {
}
interface msdyn_productivitymacroactiontemplate_Filter {
}
interface msdyn_productivitymacroactiontemplate_Create extends msdyn_productivitymacroactiontemplate {
}
interface msdyn_productivitymacroactiontemplate_Update extends msdyn_productivitymacroactiontemplate {
}
interface msdyn_productivitymacroconnector_Base extends WebEntity {
}
interface msdyn_productivitymacroconnector_Fixed extends WebEntity_Fixed {
  msdyn_productivitymacroconnectorid: string;
}
interface msdyn_productivitymacroconnector extends msdyn_productivitymacroconnector_Base, msdyn_productivitymacroconnector_Relationships {
}
interface msdyn_productivitymacroconnector_Relationships {
}
interface msdyn_productivitymacroconnector_Result extends msdyn_productivitymacroconnector_Base, msdyn_productivitymacroconnector_Relationships {
}
interface msdyn_productivitymacroconnector_FormattedResult {
}
interface msdyn_productivitymacroconnector_Select {
}
interface msdyn_productivitymacroconnector_Expand {
}
interface msdyn_productivitymacroconnector_Filter {
}
interface msdyn_productivitymacroconnector_Create extends msdyn_productivitymacroconnector {
}
interface msdyn_productivitymacroconnector_Update extends msdyn_productivitymacroconnector {
}
interface msdyn_productivitymacrosolutionconfiguration_Base extends WebEntity {
}
interface msdyn_productivitymacrosolutionconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_productivitymacrosolutionconfigurationid: string;
}
interface msdyn_productivitymacrosolutionconfiguration extends msdyn_productivitymacrosolutionconfiguration_Base, msdyn_productivitymacrosolutionconfiguration_Relationships {
}
interface msdyn_productivitymacrosolutionconfiguration_Relationships {
}
interface msdyn_productivitymacrosolutionconfiguration_Result extends msdyn_productivitymacrosolutionconfiguration_Base, msdyn_productivitymacrosolutionconfiguration_Relationships {
}
interface msdyn_productivitymacrosolutionconfiguration_FormattedResult {
}
interface msdyn_productivitymacrosolutionconfiguration_Select {
}
interface msdyn_productivitymacrosolutionconfiguration_Expand {
}
interface msdyn_productivitymacrosolutionconfiguration_Filter {
}
interface msdyn_productivitymacrosolutionconfiguration_Create extends msdyn_productivitymacrosolutionconfiguration {
}
interface msdyn_productivitymacrosolutionconfiguration_Update extends msdyn_productivitymacrosolutionconfiguration {
}
interface msdyn_productivityparameterdefinition_Base extends WebEntity {
}
interface msdyn_productivityparameterdefinition_Fixed extends WebEntity_Fixed {
  msdyn_productivityparameterdefinitionid: string;
}
interface msdyn_productivityparameterdefinition extends msdyn_productivityparameterdefinition_Base, msdyn_productivityparameterdefinition_Relationships {
}
interface msdyn_productivityparameterdefinition_Relationships {
}
interface msdyn_productivityparameterdefinition_Result extends msdyn_productivityparameterdefinition_Base, msdyn_productivityparameterdefinition_Relationships {
}
interface msdyn_productivityparameterdefinition_FormattedResult {
}
interface msdyn_productivityparameterdefinition_Select {
}
interface msdyn_productivityparameterdefinition_Expand {
}
interface msdyn_productivityparameterdefinition_Filter {
}
interface msdyn_productivityparameterdefinition_Create extends msdyn_productivityparameterdefinition {
}
interface msdyn_productivityparameterdefinition_Update extends msdyn_productivityparameterdefinition {
}
interface msdyn_project_Base extends WebEntity {
}
interface msdyn_project_Fixed extends WebEntity_Fixed {
  msdyn_projectid: string;
}
interface msdyn_project extends msdyn_project_Base, msdyn_project_Relationships {
}
interface msdyn_project_Relationships {
}
interface msdyn_project_Result extends msdyn_project_Base, msdyn_project_Relationships {
}
interface msdyn_project_FormattedResult {
}
interface msdyn_project_Select {
}
interface msdyn_project_Expand {
}
interface msdyn_project_Filter {
}
interface msdyn_project_Create extends msdyn_project {
}
interface msdyn_project_Update extends msdyn_project {
}
interface msdyn_projectapproval_Base extends WebEntity {
}
interface msdyn_projectapproval_Fixed extends WebEntity_Fixed {
  msdyn_projectapprovalid: string;
}
interface msdyn_projectapproval extends msdyn_projectapproval_Base, msdyn_projectapproval_Relationships {
}
interface msdyn_projectapproval_Relationships {
}
interface msdyn_projectapproval_Result extends msdyn_projectapproval_Base, msdyn_projectapproval_Relationships {
}
interface msdyn_projectapproval_FormattedResult {
}
interface msdyn_projectapproval_Select {
}
interface msdyn_projectapproval_Expand {
}
interface msdyn_projectapproval_Filter {
}
interface msdyn_projectapproval_Create extends msdyn_projectapproval {
}
interface msdyn_projectapproval_Update extends msdyn_projectapproval {
}
interface msdyn_projectparameter_Base extends WebEntity {
}
interface msdyn_projectparameter_Fixed extends WebEntity_Fixed {
  msdyn_projectparameterid: string;
}
interface msdyn_projectparameter extends msdyn_projectparameter_Base, msdyn_projectparameter_Relationships {
}
interface msdyn_projectparameter_Relationships {
}
interface msdyn_projectparameter_Result extends msdyn_projectparameter_Base, msdyn_projectparameter_Relationships {
}
interface msdyn_projectparameter_FormattedResult {
}
interface msdyn_projectparameter_Select {
}
interface msdyn_projectparameter_Expand {
}
interface msdyn_projectparameter_Filter {
}
interface msdyn_projectparameter_Create extends msdyn_projectparameter {
}
interface msdyn_projectparameter_Update extends msdyn_projectparameter {
}
interface msdyn_projectparameterpricelist_Base extends WebEntity {
}
interface msdyn_projectparameterpricelist_Fixed extends WebEntity_Fixed {
  msdyn_projectparameterpricelistid: string;
}
interface msdyn_projectparameterpricelist extends msdyn_projectparameterpricelist_Base, msdyn_projectparameterpricelist_Relationships {
}
interface msdyn_projectparameterpricelist_Relationships {
}
interface msdyn_projectparameterpricelist_Result extends msdyn_projectparameterpricelist_Base, msdyn_projectparameterpricelist_Relationships {
}
interface msdyn_projectparameterpricelist_FormattedResult {
}
interface msdyn_projectparameterpricelist_Select {
}
interface msdyn_projectparameterpricelist_Expand {
}
interface msdyn_projectparameterpricelist_Filter {
}
interface msdyn_projectparameterpricelist_Create extends msdyn_projectparameterpricelist {
}
interface msdyn_projectparameterpricelist_Update extends msdyn_projectparameterpricelist {
}
interface msdyn_projectpricelist_Base extends WebEntity {
}
interface msdyn_projectpricelist_Fixed extends WebEntity_Fixed {
  msdyn_projectpricelistid: string;
}
interface msdyn_projectpricelist extends msdyn_projectpricelist_Base, msdyn_projectpricelist_Relationships {
}
interface msdyn_projectpricelist_Relationships {
}
interface msdyn_projectpricelist_Result extends msdyn_projectpricelist_Base, msdyn_projectpricelist_Relationships {
}
interface msdyn_projectpricelist_FormattedResult {
}
interface msdyn_projectpricelist_Select {
}
interface msdyn_projectpricelist_Expand {
}
interface msdyn_projectpricelist_Filter {
}
interface msdyn_projectpricelist_Create extends msdyn_projectpricelist {
}
interface msdyn_projectpricelist_Update extends msdyn_projectpricelist {
}
interface msdyn_projecttask_Base extends WebEntity {
}
interface msdyn_projecttask_Fixed extends WebEntity_Fixed {
  msdyn_projecttaskid: string;
}
interface msdyn_projecttask extends msdyn_projecttask_Base, msdyn_projecttask_Relationships {
}
interface msdyn_projecttask_Relationships {
}
interface msdyn_projecttask_Result extends msdyn_projecttask_Base, msdyn_projecttask_Relationships {
}
interface msdyn_projecttask_FormattedResult {
}
interface msdyn_projecttask_Select {
}
interface msdyn_projecttask_Expand {
}
interface msdyn_projecttask_Filter {
}
interface msdyn_projecttask_Create extends msdyn_projecttask {
}
interface msdyn_projecttask_Update extends msdyn_projecttask {
}
interface msdyn_projecttaskdependency_Base extends WebEntity {
}
interface msdyn_projecttaskdependency_Fixed extends WebEntity_Fixed {
  msdyn_projecttaskdependencyid: string;
}
interface msdyn_projecttaskdependency extends msdyn_projecttaskdependency_Base, msdyn_projecttaskdependency_Relationships {
}
interface msdyn_projecttaskdependency_Relationships {
}
interface msdyn_projecttaskdependency_Result extends msdyn_projecttaskdependency_Base, msdyn_projecttaskdependency_Relationships {
}
interface msdyn_projecttaskdependency_FormattedResult {
}
interface msdyn_projecttaskdependency_Select {
}
interface msdyn_projecttaskdependency_Expand {
}
interface msdyn_projecttaskdependency_Filter {
}
interface msdyn_projecttaskdependency_Create extends msdyn_projecttaskdependency {
}
interface msdyn_projecttaskdependency_Update extends msdyn_projecttaskdependency {
}
interface msdyn_projecttaskstatususer_Base extends WebEntity {
}
interface msdyn_projecttaskstatususer_Fixed extends WebEntity_Fixed {
  msdyn_projecttaskstatususerid: string;
}
interface msdyn_projecttaskstatususer extends msdyn_projecttaskstatususer_Base, msdyn_projecttaskstatususer_Relationships {
}
interface msdyn_projecttaskstatususer_Relationships {
}
interface msdyn_projecttaskstatususer_Result extends msdyn_projecttaskstatususer_Base, msdyn_projecttaskstatususer_Relationships {
}
interface msdyn_projecttaskstatususer_FormattedResult {
}
interface msdyn_projecttaskstatususer_Select {
}
interface msdyn_projecttaskstatususer_Expand {
}
interface msdyn_projecttaskstatususer_Filter {
}
interface msdyn_projecttaskstatususer_Create extends msdyn_projecttaskstatususer {
}
interface msdyn_projecttaskstatususer_Update extends msdyn_projecttaskstatususer {
}
interface msdyn_projectteam_Base extends WebEntity {
}
interface msdyn_projectteam_Fixed extends WebEntity_Fixed {
  msdyn_projectteamid: string;
}
interface msdyn_projectteam extends msdyn_projectteam_Base, msdyn_projectteam_Relationships {
}
interface msdyn_projectteam_Relationships {
}
interface msdyn_projectteam_Result extends msdyn_projectteam_Base, msdyn_projectteam_Relationships {
}
interface msdyn_projectteam_FormattedResult {
}
interface msdyn_projectteam_Select {
}
interface msdyn_projectteam_Expand {
}
interface msdyn_projectteam_Filter {
}
interface msdyn_projectteam_Create extends msdyn_projectteam {
}
interface msdyn_projectteam_Update extends msdyn_projectteam {
}
interface msdyn_projectteammembersignup_Base extends WebEntity {
}
interface msdyn_projectteammembersignup_Fixed extends WebEntity_Fixed {
  msdyn_projectteammembersignupid: string;
}
interface msdyn_projectteammembersignup extends msdyn_projectteammembersignup_Base, msdyn_projectteammembersignup_Relationships {
}
interface msdyn_projectteammembersignup_Relationships {
}
interface msdyn_projectteammembersignup_Result extends msdyn_projectteammembersignup_Base, msdyn_projectteammembersignup_Relationships {
}
interface msdyn_projectteammembersignup_FormattedResult {
}
interface msdyn_projectteammembersignup_Select {
}
interface msdyn_projectteammembersignup_Expand {
}
interface msdyn_projectteammembersignup_Filter {
}
interface msdyn_projectteammembersignup_Create extends msdyn_projectteammembersignup {
}
interface msdyn_projectteammembersignup_Update extends msdyn_projectteammembersignup {
}
interface msdyn_projecttransactioncategory_Base extends WebEntity {
}
interface msdyn_projecttransactioncategory_Fixed extends WebEntity_Fixed {
  msdyn_projecttransactioncategoryid: string;
}
interface msdyn_projecttransactioncategory extends msdyn_projecttransactioncategory_Base, msdyn_projecttransactioncategory_Relationships {
}
interface msdyn_projecttransactioncategory_Relationships {
}
interface msdyn_projecttransactioncategory_Result extends msdyn_projecttransactioncategory_Base, msdyn_projecttransactioncategory_Relationships {
}
interface msdyn_projecttransactioncategory_FormattedResult {
}
interface msdyn_projecttransactioncategory_Select {
}
interface msdyn_projecttransactioncategory_Expand {
}
interface msdyn_projecttransactioncategory_Filter {
}
interface msdyn_projecttransactioncategory_Create extends msdyn_projecttransactioncategory {
}
interface msdyn_projecttransactioncategory_Update extends msdyn_projecttransactioncategory {
}
interface msdyn_property_Base extends WebEntity {
}
interface msdyn_property_Fixed extends WebEntity_Fixed {
  msdyn_propertyid: string;
}
interface msdyn_property extends msdyn_property_Base, msdyn_property_Relationships {
}
interface msdyn_property_Relationships {
}
interface msdyn_property_Result extends msdyn_property_Base, msdyn_property_Relationships {
}
interface msdyn_property_FormattedResult {
}
interface msdyn_property_Select {
}
interface msdyn_property_Expand {
}
interface msdyn_property_Filter {
}
interface msdyn_property_Create extends msdyn_property {
}
interface msdyn_property_Update extends msdyn_property {
}
interface msdyn_propertyassetassociation_Base extends WebEntity {
}
interface msdyn_propertyassetassociation_Fixed extends WebEntity_Fixed {
  msdyn_propertyassetassociationid: string;
}
interface msdyn_propertyassetassociation extends msdyn_propertyassetassociation_Base, msdyn_propertyassetassociation_Relationships {
}
interface msdyn_propertyassetassociation_Relationships {
}
interface msdyn_propertyassetassociation_Result extends msdyn_propertyassetassociation_Base, msdyn_propertyassetassociation_Relationships {
}
interface msdyn_propertyassetassociation_FormattedResult {
}
interface msdyn_propertyassetassociation_Select {
}
interface msdyn_propertyassetassociation_Expand {
}
interface msdyn_propertyassetassociation_Filter {
}
interface msdyn_propertyassetassociation_Create extends msdyn_propertyassetassociation {
}
interface msdyn_propertyassetassociation_Update extends msdyn_propertyassetassociation {
}
interface msdyn_propertylog_Base extends WebEntity {
}
interface msdyn_propertylog_Fixed extends WebEntity_Fixed {
  msdyn_propertylogid: string;
}
interface msdyn_propertylog extends msdyn_propertylog_Base, msdyn_propertylog_Relationships {
}
interface msdyn_propertylog_Relationships {
}
interface msdyn_propertylog_Result extends msdyn_propertylog_Base, msdyn_propertylog_Relationships {
}
interface msdyn_propertylog_FormattedResult {
}
interface msdyn_propertylog_Select {
}
interface msdyn_propertylog_Expand {
}
interface msdyn_propertylog_Filter {
}
interface msdyn_propertylog_Create extends msdyn_propertylog {
}
interface msdyn_propertylog_Update extends msdyn_propertylog {
}
interface msdyn_propertytemplateassociation_Base extends WebEntity {
}
interface msdyn_propertytemplateassociation_Fixed extends WebEntity_Fixed {
  msdyn_propertytemplateassociationid: string;
}
interface msdyn_propertytemplateassociation extends msdyn_propertytemplateassociation_Base, msdyn_propertytemplateassociation_Relationships {
}
interface msdyn_propertytemplateassociation_Relationships {
}
interface msdyn_propertytemplateassociation_Result extends msdyn_propertytemplateassociation_Base, msdyn_propertytemplateassociation_Relationships {
}
interface msdyn_propertytemplateassociation_FormattedResult {
}
interface msdyn_propertytemplateassociation_Select {
}
interface msdyn_propertytemplateassociation_Expand {
}
interface msdyn_propertytemplateassociation_Filter {
}
interface msdyn_propertytemplateassociation_Create extends msdyn_propertytemplateassociation {
}
interface msdyn_propertytemplateassociation_Update extends msdyn_propertytemplateassociation {
}
interface msdyn_provider_Base extends WebEntity {
}
interface msdyn_provider_Fixed extends WebEntity_Fixed {
  msdyn_providerid: string;
}
interface msdyn_provider extends msdyn_provider_Base, msdyn_provider_Relationships {
}
interface msdyn_provider_Relationships {
}
interface msdyn_provider_Result extends msdyn_provider_Base, msdyn_provider_Relationships {
}
interface msdyn_provider_FormattedResult {
}
interface msdyn_provider_Select {
}
interface msdyn_provider_Expand {
}
interface msdyn_provider_Filter {
}
interface msdyn_provider_Create extends msdyn_provider {
}
interface msdyn_provider_Update extends msdyn_provider {
}
interface msdyn_purchaseorder_Base extends WebEntity {
}
interface msdyn_purchaseorder_Fixed extends WebEntity_Fixed {
  msdyn_purchaseorderid: string;
}
interface msdyn_purchaseorder extends msdyn_purchaseorder_Base, msdyn_purchaseorder_Relationships {
}
interface msdyn_purchaseorder_Relationships {
}
interface msdyn_purchaseorder_Result extends msdyn_purchaseorder_Base, msdyn_purchaseorder_Relationships {
}
interface msdyn_purchaseorder_FormattedResult {
}
interface msdyn_purchaseorder_Select {
}
interface msdyn_purchaseorder_Expand {
}
interface msdyn_purchaseorder_Filter {
}
interface msdyn_purchaseorder_Create extends msdyn_purchaseorder {
}
interface msdyn_purchaseorder_Update extends msdyn_purchaseorder {
}
interface msdyn_purchaseorderbill_Base extends WebEntity {
}
interface msdyn_purchaseorderbill_Fixed extends WebEntity_Fixed {
  msdyn_purchaseorderbillid: string;
}
interface msdyn_purchaseorderbill extends msdyn_purchaseorderbill_Base, msdyn_purchaseorderbill_Relationships {
}
interface msdyn_purchaseorderbill_Relationships {
}
interface msdyn_purchaseorderbill_Result extends msdyn_purchaseorderbill_Base, msdyn_purchaseorderbill_Relationships {
}
interface msdyn_purchaseorderbill_FormattedResult {
}
interface msdyn_purchaseorderbill_Select {
}
interface msdyn_purchaseorderbill_Expand {
}
interface msdyn_purchaseorderbill_Filter {
}
interface msdyn_purchaseorderbill_Create extends msdyn_purchaseorderbill {
}
interface msdyn_purchaseorderbill_Update extends msdyn_purchaseorderbill {
}
interface msdyn_purchaseorderproduct_Base extends WebEntity {
}
interface msdyn_purchaseorderproduct_Fixed extends WebEntity_Fixed {
  msdyn_purchaseorderproductid: string;
}
interface msdyn_purchaseorderproduct extends msdyn_purchaseorderproduct_Base, msdyn_purchaseorderproduct_Relationships {
}
interface msdyn_purchaseorderproduct_Relationships {
}
interface msdyn_purchaseorderproduct_Result extends msdyn_purchaseorderproduct_Base, msdyn_purchaseorderproduct_Relationships {
}
interface msdyn_purchaseorderproduct_FormattedResult {
}
interface msdyn_purchaseorderproduct_Select {
}
interface msdyn_purchaseorderproduct_Expand {
}
interface msdyn_purchaseorderproduct_Filter {
}
interface msdyn_purchaseorderproduct_Create extends msdyn_purchaseorderproduct {
}
interface msdyn_purchaseorderproduct_Update extends msdyn_purchaseorderproduct {
}
interface msdyn_purchaseorderreceipt_Base extends WebEntity {
}
interface msdyn_purchaseorderreceipt_Fixed extends WebEntity_Fixed {
  msdyn_purchaseorderreceiptid: string;
}
interface msdyn_purchaseorderreceipt extends msdyn_purchaseorderreceipt_Base, msdyn_purchaseorderreceipt_Relationships {
}
interface msdyn_purchaseorderreceipt_Relationships {
}
interface msdyn_purchaseorderreceipt_Result extends msdyn_purchaseorderreceipt_Base, msdyn_purchaseorderreceipt_Relationships {
}
interface msdyn_purchaseorderreceipt_FormattedResult {
}
interface msdyn_purchaseorderreceipt_Select {
}
interface msdyn_purchaseorderreceipt_Expand {
}
interface msdyn_purchaseorderreceipt_Filter {
}
interface msdyn_purchaseorderreceipt_Create extends msdyn_purchaseorderreceipt {
}
interface msdyn_purchaseorderreceipt_Update extends msdyn_purchaseorderreceipt {
}
interface msdyn_purchaseorderreceiptproduct_Base extends WebEntity {
}
interface msdyn_purchaseorderreceiptproduct_Fixed extends WebEntity_Fixed {
  msdyn_purchaseorderreceiptproductid: string;
}
interface msdyn_purchaseorderreceiptproduct extends msdyn_purchaseorderreceiptproduct_Base, msdyn_purchaseorderreceiptproduct_Relationships {
}
interface msdyn_purchaseorderreceiptproduct_Relationships {
}
interface msdyn_purchaseorderreceiptproduct_Result extends msdyn_purchaseorderreceiptproduct_Base, msdyn_purchaseorderreceiptproduct_Relationships {
}
interface msdyn_purchaseorderreceiptproduct_FormattedResult {
}
interface msdyn_purchaseorderreceiptproduct_Select {
}
interface msdyn_purchaseorderreceiptproduct_Expand {
}
interface msdyn_purchaseorderreceiptproduct_Filter {
}
interface msdyn_purchaseorderreceiptproduct_Create extends msdyn_purchaseorderreceiptproduct {
}
interface msdyn_purchaseorderreceiptproduct_Update extends msdyn_purchaseorderreceiptproduct {
}
interface msdyn_purchaseordersubstatus_Base extends WebEntity {
}
interface msdyn_purchaseordersubstatus_Fixed extends WebEntity_Fixed {
  msdyn_purchaseordersubstatusid: string;
}
interface msdyn_purchaseordersubstatus extends msdyn_purchaseordersubstatus_Base, msdyn_purchaseordersubstatus_Relationships {
}
interface msdyn_purchaseordersubstatus_Relationships {
}
interface msdyn_purchaseordersubstatus_Result extends msdyn_purchaseordersubstatus_Base, msdyn_purchaseordersubstatus_Relationships {
}
interface msdyn_purchaseordersubstatus_FormattedResult {
}
interface msdyn_purchaseordersubstatus_Select {
}
interface msdyn_purchaseordersubstatus_Expand {
}
interface msdyn_purchaseordersubstatus_Filter {
}
interface msdyn_purchaseordersubstatus_Create extends msdyn_purchaseordersubstatus {
}
interface msdyn_purchaseordersubstatus_Update extends msdyn_purchaseordersubstatus {
}
interface msdyn_questionsequence_Base extends WebEntity {
}
interface msdyn_questionsequence_Fixed extends WebEntity_Fixed {
  msdyn_questionsequenceid: string;
}
interface msdyn_questionsequence extends msdyn_questionsequence_Base, msdyn_questionsequence_Relationships {
}
interface msdyn_questionsequence_Relationships {
}
interface msdyn_questionsequence_Result extends msdyn_questionsequence_Base, msdyn_questionsequence_Relationships {
}
interface msdyn_questionsequence_FormattedResult {
}
interface msdyn_questionsequence_Select {
}
interface msdyn_questionsequence_Expand {
}
interface msdyn_questionsequence_Filter {
}
interface msdyn_questionsequence_Create extends msdyn_questionsequence {
}
interface msdyn_questionsequence_Update extends msdyn_questionsequence {
}
interface msdyn_quotebookingincident_Base extends WebEntity {
}
interface msdyn_quotebookingincident_Fixed extends WebEntity_Fixed {
  msdyn_quotebookingincidentid: string;
}
interface msdyn_quotebookingincident extends msdyn_quotebookingincident_Base, msdyn_quotebookingincident_Relationships {
}
interface msdyn_quotebookingincident_Relationships {
}
interface msdyn_quotebookingincident_Result extends msdyn_quotebookingincident_Base, msdyn_quotebookingincident_Relationships {
}
interface msdyn_quotebookingincident_FormattedResult {
}
interface msdyn_quotebookingincident_Select {
}
interface msdyn_quotebookingincident_Expand {
}
interface msdyn_quotebookingincident_Filter {
}
interface msdyn_quotebookingincident_Create extends msdyn_quotebookingincident {
}
interface msdyn_quotebookingincident_Update extends msdyn_quotebookingincident {
}
interface msdyn_quotebookingproduct_Base extends WebEntity {
}
interface msdyn_quotebookingproduct_Fixed extends WebEntity_Fixed {
  msdyn_quotebookingproductid: string;
}
interface msdyn_quotebookingproduct extends msdyn_quotebookingproduct_Base, msdyn_quotebookingproduct_Relationships {
}
interface msdyn_quotebookingproduct_Relationships {
}
interface msdyn_quotebookingproduct_Result extends msdyn_quotebookingproduct_Base, msdyn_quotebookingproduct_Relationships {
}
interface msdyn_quotebookingproduct_FormattedResult {
}
interface msdyn_quotebookingproduct_Select {
}
interface msdyn_quotebookingproduct_Expand {
}
interface msdyn_quotebookingproduct_Filter {
}
interface msdyn_quotebookingproduct_Create extends msdyn_quotebookingproduct {
}
interface msdyn_quotebookingproduct_Update extends msdyn_quotebookingproduct {
}
interface msdyn_quotebookingservice_Base extends WebEntity {
}
interface msdyn_quotebookingservice_Fixed extends WebEntity_Fixed {
  msdyn_quotebookingserviceid: string;
}
interface msdyn_quotebookingservice extends msdyn_quotebookingservice_Base, msdyn_quotebookingservice_Relationships {
}
interface msdyn_quotebookingservice_Relationships {
}
interface msdyn_quotebookingservice_Result extends msdyn_quotebookingservice_Base, msdyn_quotebookingservice_Relationships {
}
interface msdyn_quotebookingservice_FormattedResult {
}
interface msdyn_quotebookingservice_Select {
}
interface msdyn_quotebookingservice_Expand {
}
interface msdyn_quotebookingservice_Filter {
}
interface msdyn_quotebookingservice_Create extends msdyn_quotebookingservice {
}
interface msdyn_quotebookingservice_Update extends msdyn_quotebookingservice {
}
interface msdyn_quotebookingservicetask_Base extends WebEntity {
}
interface msdyn_quotebookingservicetask_Fixed extends WebEntity_Fixed {
  msdyn_quotebookingservicetaskid: string;
}
interface msdyn_quotebookingservicetask extends msdyn_quotebookingservicetask_Base, msdyn_quotebookingservicetask_Relationships {
}
interface msdyn_quotebookingservicetask_Relationships {
}
interface msdyn_quotebookingservicetask_Result extends msdyn_quotebookingservicetask_Base, msdyn_quotebookingservicetask_Relationships {
}
interface msdyn_quotebookingservicetask_FormattedResult {
}
interface msdyn_quotebookingservicetask_Select {
}
interface msdyn_quotebookingservicetask_Expand {
}
interface msdyn_quotebookingservicetask_Filter {
}
interface msdyn_quotebookingservicetask_Create extends msdyn_quotebookingservicetask {
}
interface msdyn_quotebookingservicetask_Update extends msdyn_quotebookingservicetask {
}
interface msdyn_quotebookingsetup_Base extends WebEntity {
}
interface msdyn_quotebookingsetup_Fixed extends WebEntity_Fixed {
  msdyn_quotebookingsetupid: string;
}
interface msdyn_quotebookingsetup extends msdyn_quotebookingsetup_Base, msdyn_quotebookingsetup_Relationships {
}
interface msdyn_quotebookingsetup_Relationships {
}
interface msdyn_quotebookingsetup_Result extends msdyn_quotebookingsetup_Base, msdyn_quotebookingsetup_Relationships {
}
interface msdyn_quotebookingsetup_FormattedResult {
}
interface msdyn_quotebookingsetup_Select {
}
interface msdyn_quotebookingsetup_Expand {
}
interface msdyn_quotebookingsetup_Filter {
}
interface msdyn_quotebookingsetup_Create extends msdyn_quotebookingsetup {
}
interface msdyn_quotebookingsetup_Update extends msdyn_quotebookingsetup {
}
interface msdyn_quoteinvoicingproduct_Base extends WebEntity {
}
interface msdyn_quoteinvoicingproduct_Fixed extends WebEntity_Fixed {
  msdyn_quoteinvoicingproductid: string;
}
interface msdyn_quoteinvoicingproduct extends msdyn_quoteinvoicingproduct_Base, msdyn_quoteinvoicingproduct_Relationships {
}
interface msdyn_quoteinvoicingproduct_Relationships {
}
interface msdyn_quoteinvoicingproduct_Result extends msdyn_quoteinvoicingproduct_Base, msdyn_quoteinvoicingproduct_Relationships {
}
interface msdyn_quoteinvoicingproduct_FormattedResult {
}
interface msdyn_quoteinvoicingproduct_Select {
}
interface msdyn_quoteinvoicingproduct_Expand {
}
interface msdyn_quoteinvoicingproduct_Filter {
}
interface msdyn_quoteinvoicingproduct_Create extends msdyn_quoteinvoicingproduct {
}
interface msdyn_quoteinvoicingproduct_Update extends msdyn_quoteinvoicingproduct {
}
interface msdyn_quoteinvoicingsetup_Base extends WebEntity {
}
interface msdyn_quoteinvoicingsetup_Fixed extends WebEntity_Fixed {
  msdyn_quoteinvoicingsetupid: string;
}
interface msdyn_quoteinvoicingsetup extends msdyn_quoteinvoicingsetup_Base, msdyn_quoteinvoicingsetup_Relationships {
}
interface msdyn_quoteinvoicingsetup_Relationships {
}
interface msdyn_quoteinvoicingsetup_Result extends msdyn_quoteinvoicingsetup_Base, msdyn_quoteinvoicingsetup_Relationships {
}
interface msdyn_quoteinvoicingsetup_FormattedResult {
}
interface msdyn_quoteinvoicingsetup_Select {
}
interface msdyn_quoteinvoicingsetup_Expand {
}
interface msdyn_quoteinvoicingsetup_Filter {
}
interface msdyn_quoteinvoicingsetup_Create extends msdyn_quoteinvoicingsetup {
}
interface msdyn_quoteinvoicingsetup_Update extends msdyn_quoteinvoicingsetup {
}
interface msdyn_quotelineanalyticsbreakdown_Base extends WebEntity {
}
interface msdyn_quotelineanalyticsbreakdown_Fixed extends WebEntity_Fixed {
  msdyn_quotelineanalyticsbreakdownid: string;
}
interface msdyn_quotelineanalyticsbreakdown extends msdyn_quotelineanalyticsbreakdown_Base, msdyn_quotelineanalyticsbreakdown_Relationships {
}
interface msdyn_quotelineanalyticsbreakdown_Relationships {
}
interface msdyn_quotelineanalyticsbreakdown_Result extends msdyn_quotelineanalyticsbreakdown_Base, msdyn_quotelineanalyticsbreakdown_Relationships {
}
interface msdyn_quotelineanalyticsbreakdown_FormattedResult {
}
interface msdyn_quotelineanalyticsbreakdown_Select {
}
interface msdyn_quotelineanalyticsbreakdown_Expand {
}
interface msdyn_quotelineanalyticsbreakdown_Filter {
}
interface msdyn_quotelineanalyticsbreakdown_Create extends msdyn_quotelineanalyticsbreakdown {
}
interface msdyn_quotelineanalyticsbreakdown_Update extends msdyn_quotelineanalyticsbreakdown {
}
interface msdyn_quotelineinvoiceschedule_Base extends WebEntity {
}
interface msdyn_quotelineinvoiceschedule_Fixed extends WebEntity_Fixed {
  msdyn_quotelineinvoicescheduleid: string;
}
interface msdyn_quotelineinvoiceschedule extends msdyn_quotelineinvoiceschedule_Base, msdyn_quotelineinvoiceschedule_Relationships {
}
interface msdyn_quotelineinvoiceschedule_Relationships {
}
interface msdyn_quotelineinvoiceschedule_Result extends msdyn_quotelineinvoiceschedule_Base, msdyn_quotelineinvoiceschedule_Relationships {
}
interface msdyn_quotelineinvoiceschedule_FormattedResult {
}
interface msdyn_quotelineinvoiceschedule_Select {
}
interface msdyn_quotelineinvoiceschedule_Expand {
}
interface msdyn_quotelineinvoiceschedule_Filter {
}
interface msdyn_quotelineinvoiceschedule_Create extends msdyn_quotelineinvoiceschedule {
}
interface msdyn_quotelineinvoiceschedule_Update extends msdyn_quotelineinvoiceschedule {
}
interface msdyn_quotelineresourcecategory_Base extends WebEntity {
}
interface msdyn_quotelineresourcecategory_Fixed extends WebEntity_Fixed {
  msdyn_quotelineresourcecategoryid: string;
}
interface msdyn_quotelineresourcecategory extends msdyn_quotelineresourcecategory_Base, msdyn_quotelineresourcecategory_Relationships {
}
interface msdyn_quotelineresourcecategory_Relationships {
}
interface msdyn_quotelineresourcecategory_Result extends msdyn_quotelineresourcecategory_Base, msdyn_quotelineresourcecategory_Relationships {
}
interface msdyn_quotelineresourcecategory_FormattedResult {
}
interface msdyn_quotelineresourcecategory_Select {
}
interface msdyn_quotelineresourcecategory_Expand {
}
interface msdyn_quotelineresourcecategory_Filter {
}
interface msdyn_quotelineresourcecategory_Create extends msdyn_quotelineresourcecategory {
}
interface msdyn_quotelineresourcecategory_Update extends msdyn_quotelineresourcecategory {
}
interface msdyn_quotelinescheduleofvalue_Base extends WebEntity {
}
interface msdyn_quotelinescheduleofvalue_Fixed extends WebEntity_Fixed {
  msdyn_quotelinescheduleofvalueid: string;
}
interface msdyn_quotelinescheduleofvalue extends msdyn_quotelinescheduleofvalue_Base, msdyn_quotelinescheduleofvalue_Relationships {
}
interface msdyn_quotelinescheduleofvalue_Relationships {
}
interface msdyn_quotelinescheduleofvalue_Result extends msdyn_quotelinescheduleofvalue_Base, msdyn_quotelinescheduleofvalue_Relationships {
}
interface msdyn_quotelinescheduleofvalue_FormattedResult {
}
interface msdyn_quotelinescheduleofvalue_Select {
}
interface msdyn_quotelinescheduleofvalue_Expand {
}
interface msdyn_quotelinescheduleofvalue_Filter {
}
interface msdyn_quotelinescheduleofvalue_Create extends msdyn_quotelinescheduleofvalue {
}
interface msdyn_quotelinescheduleofvalue_Update extends msdyn_quotelinescheduleofvalue {
}
interface msdyn_quotelinetransaction_Base extends WebEntity {
}
interface msdyn_quotelinetransaction_Fixed extends WebEntity_Fixed {
  msdyn_quotelinetransactionid: string;
}
interface msdyn_quotelinetransaction extends msdyn_quotelinetransaction_Base, msdyn_quotelinetransaction_Relationships {
}
interface msdyn_quotelinetransaction_Relationships {
}
interface msdyn_quotelinetransaction_Result extends msdyn_quotelinetransaction_Base, msdyn_quotelinetransaction_Relationships {
}
interface msdyn_quotelinetransaction_FormattedResult {
}
interface msdyn_quotelinetransaction_Select {
}
interface msdyn_quotelinetransaction_Expand {
}
interface msdyn_quotelinetransaction_Filter {
}
interface msdyn_quotelinetransaction_Create extends msdyn_quotelinetransaction {
}
interface msdyn_quotelinetransaction_Update extends msdyn_quotelinetransaction {
}
interface msdyn_quotelinetransactioncategory_Base extends WebEntity {
}
interface msdyn_quotelinetransactioncategory_Fixed extends WebEntity_Fixed {
  msdyn_quotelinetransactioncategoryid: string;
}
interface msdyn_quotelinetransactioncategory extends msdyn_quotelinetransactioncategory_Base, msdyn_quotelinetransactioncategory_Relationships {
}
interface msdyn_quotelinetransactioncategory_Relationships {
}
interface msdyn_quotelinetransactioncategory_Result extends msdyn_quotelinetransactioncategory_Base, msdyn_quotelinetransactioncategory_Relationships {
}
interface msdyn_quotelinetransactioncategory_FormattedResult {
}
interface msdyn_quotelinetransactioncategory_Select {
}
interface msdyn_quotelinetransactioncategory_Expand {
}
interface msdyn_quotelinetransactioncategory_Filter {
}
interface msdyn_quotelinetransactioncategory_Create extends msdyn_quotelinetransactioncategory {
}
interface msdyn_quotelinetransactioncategory_Update extends msdyn_quotelinetransactioncategory {
}
interface msdyn_quotelinetransactionclassification_Base extends WebEntity {
}
interface msdyn_quotelinetransactionclassification_Fixed extends WebEntity_Fixed {
  msdyn_quotelinetransactionclassificationid: string;
}
interface msdyn_quotelinetransactionclassification extends msdyn_quotelinetransactionclassification_Base, msdyn_quotelinetransactionclassification_Relationships {
}
interface msdyn_quotelinetransactionclassification_Relationships {
}
interface msdyn_quotelinetransactionclassification_Result extends msdyn_quotelinetransactionclassification_Base, msdyn_quotelinetransactionclassification_Relationships {
}
interface msdyn_quotelinetransactionclassification_FormattedResult {
}
interface msdyn_quotelinetransactionclassification_Select {
}
interface msdyn_quotelinetransactionclassification_Expand {
}
interface msdyn_quotelinetransactionclassification_Filter {
}
interface msdyn_quotelinetransactionclassification_Create extends msdyn_quotelinetransactionclassification {
}
interface msdyn_quotelinetransactionclassification_Update extends msdyn_quotelinetransactionclassification {
}
interface msdyn_quotepricelist_Base extends WebEntity {
}
interface msdyn_quotepricelist_Fixed extends WebEntity_Fixed {
  msdyn_quotepricelistid: string;
}
interface msdyn_quotepricelist extends msdyn_quotepricelist_Base, msdyn_quotepricelist_Relationships {
}
interface msdyn_quotepricelist_Relationships {
}
interface msdyn_quotepricelist_Result extends msdyn_quotepricelist_Base, msdyn_quotepricelist_Relationships {
}
interface msdyn_quotepricelist_FormattedResult {
}
interface msdyn_quotepricelist_Select {
}
interface msdyn_quotepricelist_Expand {
}
interface msdyn_quotepricelist_Filter {
}
interface msdyn_quotepricelist_Create extends msdyn_quotepricelist {
}
interface msdyn_quotepricelist_Update extends msdyn_quotepricelist {
}
interface msdyn_relationshipinsightsunifiedconfig_Base extends WebEntity {
}
interface msdyn_relationshipinsightsunifiedconfig_Fixed extends WebEntity_Fixed {
  msdyn_relationshipinsightsunifiedconfigid: string;
}
interface msdyn_relationshipinsightsunifiedconfig extends msdyn_relationshipinsightsunifiedconfig_Base, msdyn_relationshipinsightsunifiedconfig_Relationships {
}
interface msdyn_relationshipinsightsunifiedconfig_Relationships {
}
interface msdyn_relationshipinsightsunifiedconfig_Result extends msdyn_relationshipinsightsunifiedconfig_Base, msdyn_relationshipinsightsunifiedconfig_Relationships {
}
interface msdyn_relationshipinsightsunifiedconfig_FormattedResult {
}
interface msdyn_relationshipinsightsunifiedconfig_Select {
}
interface msdyn_relationshipinsightsunifiedconfig_Expand {
}
interface msdyn_relationshipinsightsunifiedconfig_Filter {
}
interface msdyn_relationshipinsightsunifiedconfig_Create extends msdyn_relationshipinsightsunifiedconfig {
}
interface msdyn_relationshipinsightsunifiedconfig_Update extends msdyn_relationshipinsightsunifiedconfig {
}
interface msdyn_requirementcharacteristic_Base extends WebEntity {
}
interface msdyn_requirementcharacteristic_Fixed extends WebEntity_Fixed {
  msdyn_requirementcharacteristicid: string;
}
interface msdyn_requirementcharacteristic extends msdyn_requirementcharacteristic_Base, msdyn_requirementcharacteristic_Relationships {
}
interface msdyn_requirementcharacteristic_Relationships {
}
interface msdyn_requirementcharacteristic_Result extends msdyn_requirementcharacteristic_Base, msdyn_requirementcharacteristic_Relationships {
}
interface msdyn_requirementcharacteristic_FormattedResult {
}
interface msdyn_requirementcharacteristic_Select {
}
interface msdyn_requirementcharacteristic_Expand {
}
interface msdyn_requirementcharacteristic_Filter {
}
interface msdyn_requirementcharacteristic_Create extends msdyn_requirementcharacteristic {
}
interface msdyn_requirementcharacteristic_Update extends msdyn_requirementcharacteristic {
}
interface msdyn_requirementdependency_Base extends WebEntity {
}
interface msdyn_requirementdependency_Fixed extends WebEntity_Fixed {
  msdyn_requirementdependencyid: string;
}
interface msdyn_requirementdependency extends msdyn_requirementdependency_Base, msdyn_requirementdependency_Relationships {
}
interface msdyn_requirementdependency_Relationships {
}
interface msdyn_requirementdependency_Result extends msdyn_requirementdependency_Base, msdyn_requirementdependency_Relationships {
}
interface msdyn_requirementdependency_FormattedResult {
}
interface msdyn_requirementdependency_Select {
}
interface msdyn_requirementdependency_Expand {
}
interface msdyn_requirementdependency_Filter {
}
interface msdyn_requirementdependency_Create extends msdyn_requirementdependency {
}
interface msdyn_requirementdependency_Update extends msdyn_requirementdependency {
}
interface msdyn_requirementgroup_Base extends WebEntity {
}
interface msdyn_requirementgroup_Fixed extends WebEntity_Fixed {
  msdyn_requirementgroupid: string;
}
interface msdyn_requirementgroup extends msdyn_requirementgroup_Base, msdyn_requirementgroup_Relationships {
}
interface msdyn_requirementgroup_Relationships {
}
interface msdyn_requirementgroup_Result extends msdyn_requirementgroup_Base, msdyn_requirementgroup_Relationships {
}
interface msdyn_requirementgroup_FormattedResult {
}
interface msdyn_requirementgroup_Select {
}
interface msdyn_requirementgroup_Expand {
}
interface msdyn_requirementgroup_Filter {
}
interface msdyn_requirementgroup_Create extends msdyn_requirementgroup {
}
interface msdyn_requirementgroup_Update extends msdyn_requirementgroup {
}
interface msdyn_requirementorganizationunit_Base extends WebEntity {
}
interface msdyn_requirementorganizationunit_Fixed extends WebEntity_Fixed {
  msdyn_requirementorganizationunitid: string;
}
interface msdyn_requirementorganizationunit extends msdyn_requirementorganizationunit_Base, msdyn_requirementorganizationunit_Relationships {
}
interface msdyn_requirementorganizationunit_Relationships {
}
interface msdyn_requirementorganizationunit_Result extends msdyn_requirementorganizationunit_Base, msdyn_requirementorganizationunit_Relationships {
}
interface msdyn_requirementorganizationunit_FormattedResult {
}
interface msdyn_requirementorganizationunit_Select {
}
interface msdyn_requirementorganizationunit_Expand {
}
interface msdyn_requirementorganizationunit_Filter {
}
interface msdyn_requirementorganizationunit_Create extends msdyn_requirementorganizationunit {
}
interface msdyn_requirementorganizationunit_Update extends msdyn_requirementorganizationunit {
}
interface msdyn_requirementrelationship_Base extends WebEntity {
}
interface msdyn_requirementrelationship_Fixed extends WebEntity_Fixed {
  msdyn_requirementrelationshipid: string;
}
interface msdyn_requirementrelationship extends msdyn_requirementrelationship_Base, msdyn_requirementrelationship_Relationships {
}
interface msdyn_requirementrelationship_Relationships {
}
interface msdyn_requirementrelationship_Result extends msdyn_requirementrelationship_Base, msdyn_requirementrelationship_Relationships {
}
interface msdyn_requirementrelationship_FormattedResult {
}
interface msdyn_requirementrelationship_Select {
}
interface msdyn_requirementrelationship_Expand {
}
interface msdyn_requirementrelationship_Filter {
}
interface msdyn_requirementrelationship_Create extends msdyn_requirementrelationship {
}
interface msdyn_requirementrelationship_Update extends msdyn_requirementrelationship {
}
interface msdyn_requirementresourcecategory_Base extends WebEntity {
}
interface msdyn_requirementresourcecategory_Fixed extends WebEntity_Fixed {
  msdyn_requirementresourcecategoryid: string;
}
interface msdyn_requirementresourcecategory extends msdyn_requirementresourcecategory_Base, msdyn_requirementresourcecategory_Relationships {
}
interface msdyn_requirementresourcecategory_Relationships {
}
interface msdyn_requirementresourcecategory_Result extends msdyn_requirementresourcecategory_Base, msdyn_requirementresourcecategory_Relationships {
}
interface msdyn_requirementresourcecategory_FormattedResult {
}
interface msdyn_requirementresourcecategory_Select {
}
interface msdyn_requirementresourcecategory_Expand {
}
interface msdyn_requirementresourcecategory_Filter {
}
interface msdyn_requirementresourcecategory_Create extends msdyn_requirementresourcecategory {
}
interface msdyn_requirementresourcecategory_Update extends msdyn_requirementresourcecategory {
}
interface msdyn_requirementresourcepreference_Base extends WebEntity {
}
interface msdyn_requirementresourcepreference_Fixed extends WebEntity_Fixed {
  msdyn_requirementresourcepreferenceid: string;
}
interface msdyn_requirementresourcepreference extends msdyn_requirementresourcepreference_Base, msdyn_requirementresourcepreference_Relationships {
}
interface msdyn_requirementresourcepreference_Relationships {
}
interface msdyn_requirementresourcepreference_Result extends msdyn_requirementresourcepreference_Base, msdyn_requirementresourcepreference_Relationships {
}
interface msdyn_requirementresourcepreference_FormattedResult {
}
interface msdyn_requirementresourcepreference_Select {
}
interface msdyn_requirementresourcepreference_Expand {
}
interface msdyn_requirementresourcepreference_Filter {
}
interface msdyn_requirementresourcepreference_Create extends msdyn_requirementresourcepreference {
}
interface msdyn_requirementresourcepreference_Update extends msdyn_requirementresourcepreference {
}
interface msdyn_requirementstatus_Base extends WebEntity {
}
interface msdyn_requirementstatus_Fixed extends WebEntity_Fixed {
  msdyn_requirementstatusid: string;
}
interface msdyn_requirementstatus extends msdyn_requirementstatus_Base, msdyn_requirementstatus_Relationships {
}
interface msdyn_requirementstatus_Relationships {
}
interface msdyn_requirementstatus_Result extends msdyn_requirementstatus_Base, msdyn_requirementstatus_Relationships {
}
interface msdyn_requirementstatus_FormattedResult {
}
interface msdyn_requirementstatus_Select {
}
interface msdyn_requirementstatus_Expand {
}
interface msdyn_requirementstatus_Filter {
}
interface msdyn_requirementstatus_Create extends msdyn_requirementstatus {
}
interface msdyn_requirementstatus_Update extends msdyn_requirementstatus {
}
interface msdyn_resolution_Base extends WebEntity {
}
interface msdyn_resolution_Fixed extends WebEntity_Fixed {
  msdyn_resolutionid: string;
}
interface msdyn_resolution extends msdyn_resolution_Base, msdyn_resolution_Relationships {
}
interface msdyn_resolution_Relationships {
}
interface msdyn_resolution_Result extends msdyn_resolution_Base, msdyn_resolution_Relationships {
}
interface msdyn_resolution_FormattedResult {
}
interface msdyn_resolution_Select {
}
interface msdyn_resolution_Expand {
}
interface msdyn_resolution_Filter {
}
interface msdyn_resolution_Create extends msdyn_resolution {
}
interface msdyn_resolution_Update extends msdyn_resolution {
}
interface msdyn_resourceassignment_Base extends WebEntity {
}
interface msdyn_resourceassignment_Fixed extends WebEntity_Fixed {
  msdyn_resourceassignmentid: string;
}
interface msdyn_resourceassignment extends msdyn_resourceassignment_Base, msdyn_resourceassignment_Relationships {
}
interface msdyn_resourceassignment_Relationships {
}
interface msdyn_resourceassignment_Result extends msdyn_resourceassignment_Base, msdyn_resourceassignment_Relationships {
}
interface msdyn_resourceassignment_FormattedResult {
}
interface msdyn_resourceassignment_Select {
}
interface msdyn_resourceassignment_Expand {
}
interface msdyn_resourceassignment_Filter {
}
interface msdyn_resourceassignment_Create extends msdyn_resourceassignment {
}
interface msdyn_resourceassignment_Update extends msdyn_resourceassignment {
}
interface msdyn_resourceassignmentdetail_Base extends WebEntity {
}
interface msdyn_resourceassignmentdetail_Fixed extends WebEntity_Fixed {
  msdyn_resourceassignmentdetailid: string;
}
interface msdyn_resourceassignmentdetail extends msdyn_resourceassignmentdetail_Base, msdyn_resourceassignmentdetail_Relationships {
}
interface msdyn_resourceassignmentdetail_Relationships {
}
interface msdyn_resourceassignmentdetail_Result extends msdyn_resourceassignmentdetail_Base, msdyn_resourceassignmentdetail_Relationships {
}
interface msdyn_resourceassignmentdetail_FormattedResult {
}
interface msdyn_resourceassignmentdetail_Select {
}
interface msdyn_resourceassignmentdetail_Expand {
}
interface msdyn_resourceassignmentdetail_Filter {
}
interface msdyn_resourceassignmentdetail_Create extends msdyn_resourceassignmentdetail {
}
interface msdyn_resourceassignmentdetail_Update extends msdyn_resourceassignmentdetail {
}
interface msdyn_resourcecategorymarkuppricelevel_Base extends WebEntity {
}
interface msdyn_resourcecategorymarkuppricelevel_Fixed extends WebEntity_Fixed {
  msdyn_resourcecategorymarkuppricelevelid: string;
}
interface msdyn_resourcecategorymarkuppricelevel extends msdyn_resourcecategorymarkuppricelevel_Base, msdyn_resourcecategorymarkuppricelevel_Relationships {
}
interface msdyn_resourcecategorymarkuppricelevel_Relationships {
}
interface msdyn_resourcecategorymarkuppricelevel_Result extends msdyn_resourcecategorymarkuppricelevel_Base, msdyn_resourcecategorymarkuppricelevel_Relationships {
}
interface msdyn_resourcecategorymarkuppricelevel_FormattedResult {
}
interface msdyn_resourcecategorymarkuppricelevel_Select {
}
interface msdyn_resourcecategorymarkuppricelevel_Expand {
}
interface msdyn_resourcecategorymarkuppricelevel_Filter {
}
interface msdyn_resourcecategorymarkuppricelevel_Create extends msdyn_resourcecategorymarkuppricelevel {
}
interface msdyn_resourcecategorymarkuppricelevel_Update extends msdyn_resourcecategorymarkuppricelevel {
}
interface msdyn_resourcecategorypricelevel_Base extends WebEntity {
}
interface msdyn_resourcecategorypricelevel_Fixed extends WebEntity_Fixed {
  msdyn_resourcecategorypricelevelid: string;
}
interface msdyn_resourcecategorypricelevel extends msdyn_resourcecategorypricelevel_Base, msdyn_resourcecategorypricelevel_Relationships {
}
interface msdyn_resourcecategorypricelevel_Relationships {
}
interface msdyn_resourcecategorypricelevel_Result extends msdyn_resourcecategorypricelevel_Base, msdyn_resourcecategorypricelevel_Relationships {
}
interface msdyn_resourcecategorypricelevel_FormattedResult {
}
interface msdyn_resourcecategorypricelevel_Select {
}
interface msdyn_resourcecategorypricelevel_Expand {
}
interface msdyn_resourcecategorypricelevel_Filter {
}
interface msdyn_resourcecategorypricelevel_Create extends msdyn_resourcecategorypricelevel {
}
interface msdyn_resourcecategorypricelevel_Update extends msdyn_resourcecategorypricelevel {
}
interface msdyn_resourcepaytype_Base extends WebEntity {
}
interface msdyn_resourcepaytype_Fixed extends WebEntity_Fixed {
  msdyn_resourcepaytypeid: string;
}
interface msdyn_resourcepaytype extends msdyn_resourcepaytype_Base, msdyn_resourcepaytype_Relationships {
}
interface msdyn_resourcepaytype_Relationships {
}
interface msdyn_resourcepaytype_Result extends msdyn_resourcepaytype_Base, msdyn_resourcepaytype_Relationships {
}
interface msdyn_resourcepaytype_FormattedResult {
}
interface msdyn_resourcepaytype_Select {
}
interface msdyn_resourcepaytype_Expand {
}
interface msdyn_resourcepaytype_Filter {
}
interface msdyn_resourcepaytype_Create extends msdyn_resourcepaytype {
}
interface msdyn_resourcepaytype_Update extends msdyn_resourcepaytype {
}
interface msdyn_resourcerequest_Base extends WebEntity {
}
interface msdyn_resourcerequest_Fixed extends WebEntity_Fixed {
  msdyn_resourcerequestid: string;
}
interface msdyn_resourcerequest extends msdyn_resourcerequest_Base, msdyn_resourcerequest_Relationships {
}
interface msdyn_resourcerequest_Relationships {
}
interface msdyn_resourcerequest_Result extends msdyn_resourcerequest_Base, msdyn_resourcerequest_Relationships {
}
interface msdyn_resourcerequest_FormattedResult {
}
interface msdyn_resourcerequest_Select {
}
interface msdyn_resourcerequest_Expand {
}
interface msdyn_resourcerequest_Filter {
}
interface msdyn_resourcerequest_Create extends msdyn_resourcerequest {
}
interface msdyn_resourcerequest_Update extends msdyn_resourcerequest {
}
interface msdyn_resourcerequirement_Base extends WebEntity {
}
interface msdyn_resourcerequirement_Fixed extends WebEntity_Fixed {
  msdyn_resourcerequirementid: string;
}
interface msdyn_resourcerequirement extends msdyn_resourcerequirement_Base, msdyn_resourcerequirement_Relationships {
}
interface msdyn_resourcerequirement_Relationships {
}
interface msdyn_resourcerequirement_Result extends msdyn_resourcerequirement_Base, msdyn_resourcerequirement_Relationships {
}
interface msdyn_resourcerequirement_FormattedResult {
}
interface msdyn_resourcerequirement_Select {
}
interface msdyn_resourcerequirement_Expand {
}
interface msdyn_resourcerequirement_Filter {
}
interface msdyn_resourcerequirement_Create extends msdyn_resourcerequirement {
}
interface msdyn_resourcerequirement_Update extends msdyn_resourcerequirement {
}
interface msdyn_resourcerequirement_bookableresource_Base extends WebEntity {
}
interface msdyn_resourcerequirement_bookableresource_Fixed extends WebEntity_Fixed {
  msdyn_resourcerequirement_bookableresourceid: string;
}
interface msdyn_resourcerequirement_bookableresource extends msdyn_resourcerequirement_bookableresource_Base, msdyn_resourcerequirement_bookableresource_Relationships {
}
interface msdyn_resourcerequirement_bookableresource_Relationships {
}
interface msdyn_resourcerequirement_bookableresource_Result extends msdyn_resourcerequirement_bookableresource_Base, msdyn_resourcerequirement_bookableresource_Relationships {
}
interface msdyn_resourcerequirement_bookableresource_FormattedResult {
}
interface msdyn_resourcerequirement_bookableresource_Select {
}
interface msdyn_resourcerequirement_bookableresource_Expand {
}
interface msdyn_resourcerequirement_bookableresource_Filter {
}
interface msdyn_resourcerequirement_bookableresource_Create extends msdyn_resourcerequirement_bookableresource {
}
interface msdyn_resourcerequirement_bookableresource_Update extends msdyn_resourcerequirement_bookableresource {
}
interface msdyn_resourcerequirement_bookingheader_Base extends WebEntity {
}
interface msdyn_resourcerequirement_bookingheader_Fixed extends WebEntity_Fixed {
  msdyn_resourcerequirement_bookingheaderid: string;
}
interface msdyn_resourcerequirement_bookingheader extends msdyn_resourcerequirement_bookingheader_Base, msdyn_resourcerequirement_bookingheader_Relationships {
}
interface msdyn_resourcerequirement_bookingheader_Relationships {
}
interface msdyn_resourcerequirement_bookingheader_Result extends msdyn_resourcerequirement_bookingheader_Base, msdyn_resourcerequirement_bookingheader_Relationships {
}
interface msdyn_resourcerequirement_bookingheader_FormattedResult {
}
interface msdyn_resourcerequirement_bookingheader_Select {
}
interface msdyn_resourcerequirement_bookingheader_Expand {
}
interface msdyn_resourcerequirement_bookingheader_Filter {
}
interface msdyn_resourcerequirement_bookingheader_Create extends msdyn_resourcerequirement_bookingheader {
}
interface msdyn_resourcerequirement_bookingheader_Update extends msdyn_resourcerequirement_bookingheader {
}
interface msdyn_resourcerequirement_systemuser_Base extends WebEntity {
}
interface msdyn_resourcerequirement_systemuser_Fixed extends WebEntity_Fixed {
  msdyn_resourcerequirement_systemuserid: string;
}
interface msdyn_resourcerequirement_systemuser extends msdyn_resourcerequirement_systemuser_Base, msdyn_resourcerequirement_systemuser_Relationships {
}
interface msdyn_resourcerequirement_systemuser_Relationships {
}
interface msdyn_resourcerequirement_systemuser_Result extends msdyn_resourcerequirement_systemuser_Base, msdyn_resourcerequirement_systemuser_Relationships {
}
interface msdyn_resourcerequirement_systemuser_FormattedResult {
}
interface msdyn_resourcerequirement_systemuser_Select {
}
interface msdyn_resourcerequirement_systemuser_Expand {
}
interface msdyn_resourcerequirement_systemuser_Filter {
}
interface msdyn_resourcerequirement_systemuser_Create extends msdyn_resourcerequirement_systemuser {
}
interface msdyn_resourcerequirement_systemuser_Update extends msdyn_resourcerequirement_systemuser {
}
interface msdyn_resourcerequirementdetail_Base extends WebEntity {
}
interface msdyn_resourcerequirementdetail_Fixed extends WebEntity_Fixed {
  msdyn_resourcerequirementdetailid: string;
}
interface msdyn_resourcerequirementdetail extends msdyn_resourcerequirementdetail_Base, msdyn_resourcerequirementdetail_Relationships {
}
interface msdyn_resourcerequirementdetail_Relationships {
}
interface msdyn_resourcerequirementdetail_Result extends msdyn_resourcerequirementdetail_Base, msdyn_resourcerequirementdetail_Relationships {
}
interface msdyn_resourcerequirementdetail_FormattedResult {
}
interface msdyn_resourcerequirementdetail_Select {
}
interface msdyn_resourcerequirementdetail_Expand {
}
interface msdyn_resourcerequirementdetail_Filter {
}
interface msdyn_resourcerequirementdetail_Create extends msdyn_resourcerequirementdetail {
}
interface msdyn_resourcerequirementdetail_Update extends msdyn_resourcerequirementdetail {
}
interface msdyn_resourceterritory_Base extends WebEntity {
}
interface msdyn_resourceterritory_Fixed extends WebEntity_Fixed {
  msdyn_resourceterritoryid: string;
}
interface msdyn_resourceterritory extends msdyn_resourceterritory_Base, msdyn_resourceterritory_Relationships {
}
interface msdyn_resourceterritory_Relationships {
}
interface msdyn_resourceterritory_Result extends msdyn_resourceterritory_Base, msdyn_resourceterritory_Relationships {
}
interface msdyn_resourceterritory_FormattedResult {
}
interface msdyn_resourceterritory_Select {
}
interface msdyn_resourceterritory_Expand {
}
interface msdyn_resourceterritory_Filter {
}
interface msdyn_resourceterritory_Create extends msdyn_resourceterritory {
}
interface msdyn_resourceterritory_Update extends msdyn_resourceterritory {
}
interface msdyn_richtextfile_Base extends WebEntity {
}
interface msdyn_richtextfile_Fixed extends WebEntity_Fixed {
  msdyn_richtextfileid: string;
}
interface msdyn_richtextfile extends msdyn_richtextfile_Base, msdyn_richtextfile_Relationships {
}
interface msdyn_richtextfile_Relationships {
}
interface msdyn_richtextfile_Result extends msdyn_richtextfile_Base, msdyn_richtextfile_Relationships {
}
interface msdyn_richtextfile_FormattedResult {
}
interface msdyn_richtextfile_Select {
}
interface msdyn_richtextfile_Expand {
}
interface msdyn_richtextfile_Filter {
}
interface msdyn_richtextfile_Create extends msdyn_richtextfile {
}
interface msdyn_richtextfile_Update extends msdyn_richtextfile {
}
interface msdyn_rma_Base extends WebEntity {
}
interface msdyn_rma_Fixed extends WebEntity_Fixed {
  msdyn_rmaid: string;
}
interface msdyn_rma extends msdyn_rma_Base, msdyn_rma_Relationships {
}
interface msdyn_rma_Relationships {
}
interface msdyn_rma_Result extends msdyn_rma_Base, msdyn_rma_Relationships {
}
interface msdyn_rma_FormattedResult {
}
interface msdyn_rma_Select {
}
interface msdyn_rma_Expand {
}
interface msdyn_rma_Filter {
}
interface msdyn_rma_Create extends msdyn_rma {
}
interface msdyn_rma_Update extends msdyn_rma {
}
interface msdyn_rmaproduct_Base extends WebEntity {
}
interface msdyn_rmaproduct_Fixed extends WebEntity_Fixed {
  msdyn_rmaproductid: string;
}
interface msdyn_rmaproduct extends msdyn_rmaproduct_Base, msdyn_rmaproduct_Relationships {
}
interface msdyn_rmaproduct_Relationships {
}
interface msdyn_rmaproduct_Result extends msdyn_rmaproduct_Base, msdyn_rmaproduct_Relationships {
}
interface msdyn_rmaproduct_FormattedResult {
}
interface msdyn_rmaproduct_Select {
}
interface msdyn_rmaproduct_Expand {
}
interface msdyn_rmaproduct_Filter {
}
interface msdyn_rmaproduct_Create extends msdyn_rmaproduct {
}
interface msdyn_rmaproduct_Update extends msdyn_rmaproduct {
}
interface msdyn_rmareceipt_Base extends WebEntity {
}
interface msdyn_rmareceipt_Fixed extends WebEntity_Fixed {
  msdyn_rmareceiptid: string;
}
interface msdyn_rmareceipt extends msdyn_rmareceipt_Base, msdyn_rmareceipt_Relationships {
}
interface msdyn_rmareceipt_Relationships {
}
interface msdyn_rmareceipt_Result extends msdyn_rmareceipt_Base, msdyn_rmareceipt_Relationships {
}
interface msdyn_rmareceipt_FormattedResult {
}
interface msdyn_rmareceipt_Select {
}
interface msdyn_rmareceipt_Expand {
}
interface msdyn_rmareceipt_Filter {
}
interface msdyn_rmareceipt_Create extends msdyn_rmareceipt {
}
interface msdyn_rmareceipt_Update extends msdyn_rmareceipt {
}
interface msdyn_rmareceiptproduct_Base extends WebEntity {
}
interface msdyn_rmareceiptproduct_Fixed extends WebEntity_Fixed {
  msdyn_rmareceiptproductid: string;
}
interface msdyn_rmareceiptproduct extends msdyn_rmareceiptproduct_Base, msdyn_rmareceiptproduct_Relationships {
}
interface msdyn_rmareceiptproduct_Relationships {
}
interface msdyn_rmareceiptproduct_Result extends msdyn_rmareceiptproduct_Base, msdyn_rmareceiptproduct_Relationships {
}
interface msdyn_rmareceiptproduct_FormattedResult {
}
interface msdyn_rmareceiptproduct_Select {
}
interface msdyn_rmareceiptproduct_Expand {
}
interface msdyn_rmareceiptproduct_Filter {
}
interface msdyn_rmareceiptproduct_Create extends msdyn_rmareceiptproduct {
}
interface msdyn_rmareceiptproduct_Update extends msdyn_rmareceiptproduct {
}
interface msdyn_rmasubstatus_Base extends WebEntity {
}
interface msdyn_rmasubstatus_Fixed extends WebEntity_Fixed {
  msdyn_rmasubstatusid: string;
}
interface msdyn_rmasubstatus extends msdyn_rmasubstatus_Base, msdyn_rmasubstatus_Relationships {
}
interface msdyn_rmasubstatus_Relationships {
}
interface msdyn_rmasubstatus_Result extends msdyn_rmasubstatus_Base, msdyn_rmasubstatus_Relationships {
}
interface msdyn_rmasubstatus_FormattedResult {
}
interface msdyn_rmasubstatus_Select {
}
interface msdyn_rmasubstatus_Expand {
}
interface msdyn_rmasubstatus_Filter {
}
interface msdyn_rmasubstatus_Create extends msdyn_rmasubstatus {
}
interface msdyn_rmasubstatus_Update extends msdyn_rmasubstatus {
}
interface msdyn_rolecompetencyrequirement_Base extends WebEntity {
}
interface msdyn_rolecompetencyrequirement_Fixed extends WebEntity_Fixed {
  msdyn_rolecompetencyrequirementid: string;
}
interface msdyn_rolecompetencyrequirement extends msdyn_rolecompetencyrequirement_Base, msdyn_rolecompetencyrequirement_Relationships {
}
interface msdyn_rolecompetencyrequirement_Relationships {
}
interface msdyn_rolecompetencyrequirement_Result extends msdyn_rolecompetencyrequirement_Base, msdyn_rolecompetencyrequirement_Relationships {
}
interface msdyn_rolecompetencyrequirement_FormattedResult {
}
interface msdyn_rolecompetencyrequirement_Select {
}
interface msdyn_rolecompetencyrequirement_Expand {
}
interface msdyn_rolecompetencyrequirement_Filter {
}
interface msdyn_rolecompetencyrequirement_Create extends msdyn_rolecompetencyrequirement {
}
interface msdyn_rolecompetencyrequirement_Update extends msdyn_rolecompetencyrequirement {
}
interface msdyn_roleutilization_Base extends WebEntity {
}
interface msdyn_roleutilization_Fixed extends WebEntity_Fixed {
  msdyn_roleutilizationid: string;
}
interface msdyn_roleutilization extends msdyn_roleutilization_Base, msdyn_roleutilization_Relationships {
}
interface msdyn_roleutilization_Relationships {
}
interface msdyn_roleutilization_Result extends msdyn_roleutilization_Base, msdyn_roleutilization_Relationships {
}
interface msdyn_roleutilization_FormattedResult {
}
interface msdyn_roleutilization_Select {
}
interface msdyn_roleutilization_Expand {
}
interface msdyn_roleutilization_Filter {
}
interface msdyn_roleutilization_Create extends msdyn_roleutilization {
}
interface msdyn_roleutilization_Update extends msdyn_roleutilization {
}
interface msdyn_routingconfiguration_Base extends WebEntity {
}
interface msdyn_routingconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_routingconfigurationid: string;
}
interface msdyn_routingconfiguration extends msdyn_routingconfiguration_Base, msdyn_routingconfiguration_Relationships {
}
interface msdyn_routingconfiguration_Relationships {
}
interface msdyn_routingconfiguration_Result extends msdyn_routingconfiguration_Base, msdyn_routingconfiguration_Relationships {
}
interface msdyn_routingconfiguration_FormattedResult {
}
interface msdyn_routingconfiguration_Select {
}
interface msdyn_routingconfiguration_Expand {
}
interface msdyn_routingconfiguration_Filter {
}
interface msdyn_routingconfiguration_Create extends msdyn_routingconfiguration {
}
interface msdyn_routingconfiguration_Update extends msdyn_routingconfiguration {
}
interface msdyn_routingconfigurationstep_Base extends WebEntity {
}
interface msdyn_routingconfigurationstep_Fixed extends WebEntity_Fixed {
  msdyn_routingconfigurationstepid: string;
}
interface msdyn_routingconfigurationstep extends msdyn_routingconfigurationstep_Base, msdyn_routingconfigurationstep_Relationships {
}
interface msdyn_routingconfigurationstep_Relationships {
}
interface msdyn_routingconfigurationstep_Result extends msdyn_routingconfigurationstep_Base, msdyn_routingconfigurationstep_Relationships {
}
interface msdyn_routingconfigurationstep_FormattedResult {
}
interface msdyn_routingconfigurationstep_Select {
}
interface msdyn_routingconfigurationstep_Expand {
}
interface msdyn_routingconfigurationstep_Filter {
}
interface msdyn_routingconfigurationstep_Create extends msdyn_routingconfigurationstep {
}
interface msdyn_routingconfigurationstep_Update extends msdyn_routingconfigurationstep {
}
interface msdyn_routingrequest_Base extends WebEntity {
}
interface msdyn_routingrequest_Fixed extends WebEntity_Fixed {
  msdyn_routingrequestid: string;
}
interface msdyn_routingrequest extends msdyn_routingrequest_Base, msdyn_routingrequest_Relationships {
}
interface msdyn_routingrequest_Relationships {
}
interface msdyn_routingrequest_Result extends msdyn_routingrequest_Base, msdyn_routingrequest_Relationships {
}
interface msdyn_routingrequest_FormattedResult {
}
interface msdyn_routingrequest_Select {
}
interface msdyn_routingrequest_Expand {
}
interface msdyn_routingrequest_Filter {
}
interface msdyn_routingrequest_Create extends msdyn_routingrequest {
}
interface msdyn_routingrequest_Update extends msdyn_routingrequest {
}
interface msdyn_routingrulesetsetting_Base extends WebEntity {
}
interface msdyn_routingrulesetsetting_Fixed extends WebEntity_Fixed {
  msdyn_routingrulesetsettingid: string;
}
interface msdyn_routingrulesetsetting extends msdyn_routingrulesetsetting_Base, msdyn_routingrulesetsetting_Relationships {
}
interface msdyn_routingrulesetsetting_Relationships {
}
interface msdyn_routingrulesetsetting_Result extends msdyn_routingrulesetsetting_Base, msdyn_routingrulesetsetting_Relationships {
}
interface msdyn_routingrulesetsetting_FormattedResult {
}
interface msdyn_routingrulesetsetting_Select {
}
interface msdyn_routingrulesetsetting_Expand {
}
interface msdyn_routingrulesetsetting_Filter {
}
interface msdyn_routingrulesetsetting_Create extends msdyn_routingrulesetsetting {
}
interface msdyn_routingrulesetsetting_Update extends msdyn_routingrulesetsetting {
}
interface msdyn_rtv_Base extends WebEntity {
}
interface msdyn_rtv_Fixed extends WebEntity_Fixed {
  msdyn_rtvid: string;
}
interface msdyn_rtv extends msdyn_rtv_Base, msdyn_rtv_Relationships {
}
interface msdyn_rtv_Relationships {
}
interface msdyn_rtv_Result extends msdyn_rtv_Base, msdyn_rtv_Relationships {
}
interface msdyn_rtv_FormattedResult {
}
interface msdyn_rtv_Select {
}
interface msdyn_rtv_Expand {
}
interface msdyn_rtv_Filter {
}
interface msdyn_rtv_Create extends msdyn_rtv {
}
interface msdyn_rtv_Update extends msdyn_rtv {
}
interface msdyn_rtvproduct_Base extends WebEntity {
}
interface msdyn_rtvproduct_Fixed extends WebEntity_Fixed {
  msdyn_rtvproductid: string;
}
interface msdyn_rtvproduct extends msdyn_rtvproduct_Base, msdyn_rtvproduct_Relationships {
}
interface msdyn_rtvproduct_Relationships {
}
interface msdyn_rtvproduct_Result extends msdyn_rtvproduct_Base, msdyn_rtvproduct_Relationships {
}
interface msdyn_rtvproduct_FormattedResult {
}
interface msdyn_rtvproduct_Select {
}
interface msdyn_rtvproduct_Expand {
}
interface msdyn_rtvproduct_Filter {
}
interface msdyn_rtvproduct_Create extends msdyn_rtvproduct {
}
interface msdyn_rtvproduct_Update extends msdyn_rtvproduct {
}
interface msdyn_rtvsubstatus_Base extends WebEntity {
}
interface msdyn_rtvsubstatus_Fixed extends WebEntity_Fixed {
  msdyn_rtvsubstatusid: string;
}
interface msdyn_rtvsubstatus extends msdyn_rtvsubstatus_Base, msdyn_rtvsubstatus_Relationships {
}
interface msdyn_rtvsubstatus_Relationships {
}
interface msdyn_rtvsubstatus_Result extends msdyn_rtvsubstatus_Base, msdyn_rtvsubstatus_Relationships {
}
interface msdyn_rtvsubstatus_FormattedResult {
}
interface msdyn_rtvsubstatus_Select {
}
interface msdyn_rtvsubstatus_Expand {
}
interface msdyn_rtvsubstatus_Filter {
}
interface msdyn_rtvsubstatus_Create extends msdyn_rtvsubstatus {
}
interface msdyn_rtvsubstatus_Update extends msdyn_rtvsubstatus {
}
interface msdyn_rulesetdependencymapping_Base extends WebEntity {
}
interface msdyn_rulesetdependencymapping_Fixed extends WebEntity_Fixed {
  msdyn_rulesetdependencymappingid: string;
}
interface msdyn_rulesetdependencymapping extends msdyn_rulesetdependencymapping_Base, msdyn_rulesetdependencymapping_Relationships {
}
interface msdyn_rulesetdependencymapping_Relationships {
}
interface msdyn_rulesetdependencymapping_Result extends msdyn_rulesetdependencymapping_Base, msdyn_rulesetdependencymapping_Relationships {
}
interface msdyn_rulesetdependencymapping_FormattedResult {
}
interface msdyn_rulesetdependencymapping_Select {
}
interface msdyn_rulesetdependencymapping_Expand {
}
interface msdyn_rulesetdependencymapping_Filter {
}
interface msdyn_rulesetdependencymapping_Create extends msdyn_rulesetdependencymapping {
}
interface msdyn_rulesetdependencymapping_Update extends msdyn_rulesetdependencymapping {
}
interface msdyn_salesaccelerationsettings_Base extends WebEntity {
}
interface msdyn_salesaccelerationsettings_Fixed extends WebEntity_Fixed {
  msdyn_salesaccelerationsettingsid: string;
}
interface msdyn_salesaccelerationsettings extends msdyn_salesaccelerationsettings_Base, msdyn_salesaccelerationsettings_Relationships {
}
interface msdyn_salesaccelerationsettings_Relationships {
}
interface msdyn_salesaccelerationsettings_Result extends msdyn_salesaccelerationsettings_Base, msdyn_salesaccelerationsettings_Relationships {
}
interface msdyn_salesaccelerationsettings_FormattedResult {
}
interface msdyn_salesaccelerationsettings_Select {
}
interface msdyn_salesaccelerationsettings_Expand {
}
interface msdyn_salesaccelerationsettings_Filter {
}
interface msdyn_salesaccelerationsettings_Create extends msdyn_salesaccelerationsettings {
}
interface msdyn_salesaccelerationsettings_Update extends msdyn_salesaccelerationsettings {
}
interface msdyn_salesassignmentsetting_Base extends WebEntity {
}
interface msdyn_salesassignmentsetting_Fixed extends WebEntity_Fixed {
  msdyn_salesassignmentsettingid: string;
}
interface msdyn_salesassignmentsetting extends msdyn_salesassignmentsetting_Base, msdyn_salesassignmentsetting_Relationships {
}
interface msdyn_salesassignmentsetting_Relationships {
}
interface msdyn_salesassignmentsetting_Result extends msdyn_salesassignmentsetting_Base, msdyn_salesassignmentsetting_Relationships {
}
interface msdyn_salesassignmentsetting_FormattedResult {
}
interface msdyn_salesassignmentsetting_Select {
}
interface msdyn_salesassignmentsetting_Expand {
}
interface msdyn_salesassignmentsetting_Filter {
}
interface msdyn_salesassignmentsetting_Create extends msdyn_salesassignmentsetting {
}
interface msdyn_salesassignmentsetting_Update extends msdyn_salesassignmentsetting {
}
interface msdyn_salesinsightssettings_Base extends WebEntity {
}
interface msdyn_salesinsightssettings_Fixed extends WebEntity_Fixed {
  msdyn_salesinsightssettingsid: string;
}
interface msdyn_salesinsightssettings extends msdyn_salesinsightssettings_Base, msdyn_salesinsightssettings_Relationships {
}
interface msdyn_salesinsightssettings_Relationships {
}
interface msdyn_salesinsightssettings_Result extends msdyn_salesinsightssettings_Base, msdyn_salesinsightssettings_Relationships {
}
interface msdyn_salesinsightssettings_FormattedResult {
}
interface msdyn_salesinsightssettings_Select {
}
interface msdyn_salesinsightssettings_Expand {
}
interface msdyn_salesinsightssettings_Filter {
}
interface msdyn_salesinsightssettings_Create extends msdyn_salesinsightssettings {
}
interface msdyn_salesinsightssettings_Update extends msdyn_salesinsightssettings {
}
interface msdyn_salesroutingrun_Base extends WebEntity {
}
interface msdyn_salesroutingrun_Fixed extends WebEntity_Fixed {
  msdyn_salesroutingrunid: string;
}
interface msdyn_salesroutingrun extends msdyn_salesroutingrun_Base, msdyn_salesroutingrun_Relationships {
}
interface msdyn_salesroutingrun_Relationships {
}
interface msdyn_salesroutingrun_Result extends msdyn_salesroutingrun_Base, msdyn_salesroutingrun_Relationships {
}
interface msdyn_salesroutingrun_FormattedResult {
}
interface msdyn_salesroutingrun_Select {
}
interface msdyn_salesroutingrun_Expand {
}
interface msdyn_salesroutingrun_Filter {
}
interface msdyn_salesroutingrun_Create extends msdyn_salesroutingrun {
}
interface msdyn_salesroutingrun_Update extends msdyn_salesroutingrun {
}
interface msdyn_scenario_Base extends WebEntity {
}
interface msdyn_scenario_Fixed extends WebEntity_Fixed {
  msdyn_scenarioid: string;
}
interface msdyn_scenario extends msdyn_scenario_Base, msdyn_scenario_Relationships {
}
interface msdyn_scenario_Relationships {
}
interface msdyn_scenario_Result extends msdyn_scenario_Base, msdyn_scenario_Relationships {
}
interface msdyn_scenario_FormattedResult {
}
interface msdyn_scenario_Select {
}
interface msdyn_scenario_Expand {
}
interface msdyn_scenario_Filter {
}
interface msdyn_scenario_Create extends msdyn_scenario {
}
interface msdyn_scenario_Update extends msdyn_scenario {
}
interface msdyn_scheduleboardsetting_Base extends WebEntity {
}
interface msdyn_scheduleboardsetting_Fixed extends WebEntity_Fixed {
  msdyn_scheduleboardsettingid: string;
}
interface msdyn_scheduleboardsetting extends msdyn_scheduleboardsetting_Base, msdyn_scheduleboardsetting_Relationships {
}
interface msdyn_scheduleboardsetting_Relationships {
}
interface msdyn_scheduleboardsetting_Result extends msdyn_scheduleboardsetting_Base, msdyn_scheduleboardsetting_Relationships {
}
interface msdyn_scheduleboardsetting_FormattedResult {
}
interface msdyn_scheduleboardsetting_Select {
}
interface msdyn_scheduleboardsetting_Expand {
}
interface msdyn_scheduleboardsetting_Filter {
}
interface msdyn_scheduleboardsetting_Create extends msdyn_scheduleboardsetting {
}
interface msdyn_scheduleboardsetting_Update extends msdyn_scheduleboardsetting {
}
interface msdyn_schedulingfeatureflag_Base extends WebEntity {
}
interface msdyn_schedulingfeatureflag_Fixed extends WebEntity_Fixed {
  msdyn_schedulingfeatureflagid: string;
}
interface msdyn_schedulingfeatureflag extends msdyn_schedulingfeatureflag_Base, msdyn_schedulingfeatureflag_Relationships {
}
interface msdyn_schedulingfeatureflag_Relationships {
}
interface msdyn_schedulingfeatureflag_Result extends msdyn_schedulingfeatureflag_Base, msdyn_schedulingfeatureflag_Relationships {
}
interface msdyn_schedulingfeatureflag_FormattedResult {
}
interface msdyn_schedulingfeatureflag_Select {
}
interface msdyn_schedulingfeatureflag_Expand {
}
interface msdyn_schedulingfeatureflag_Filter {
}
interface msdyn_schedulingfeatureflag_Create extends msdyn_schedulingfeatureflag {
}
interface msdyn_schedulingfeatureflag_Update extends msdyn_schedulingfeatureflag {
}
interface msdyn_schedulingparameter_Base extends WebEntity {
}
interface msdyn_schedulingparameter_Fixed extends WebEntity_Fixed {
  msdyn_schedulingparameterid: string;
}
interface msdyn_schedulingparameter extends msdyn_schedulingparameter_Base, msdyn_schedulingparameter_Relationships {
}
interface msdyn_schedulingparameter_Relationships {
}
interface msdyn_schedulingparameter_Result extends msdyn_schedulingparameter_Base, msdyn_schedulingparameter_Relationships {
}
interface msdyn_schedulingparameter_FormattedResult {
}
interface msdyn_schedulingparameter_Select {
}
interface msdyn_schedulingparameter_Expand {
}
interface msdyn_schedulingparameter_Filter {
}
interface msdyn_schedulingparameter_Create extends msdyn_schedulingparameter {
}
interface msdyn_schedulingparameter_Update extends msdyn_schedulingparameter {
}
interface msdyn_searchconfiguration_Base extends WebEntity {
}
interface msdyn_searchconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_searchconfigurationid: string;
}
interface msdyn_searchconfiguration extends msdyn_searchconfiguration_Base, msdyn_searchconfiguration_Relationships {
}
interface msdyn_searchconfiguration_Relationships {
}
interface msdyn_searchconfiguration_Result extends msdyn_searchconfiguration_Base, msdyn_searchconfiguration_Relationships {
}
interface msdyn_searchconfiguration_FormattedResult {
}
interface msdyn_searchconfiguration_Select {
}
interface msdyn_searchconfiguration_Expand {
}
interface msdyn_searchconfiguration_Filter {
}
interface msdyn_searchconfiguration_Create extends msdyn_searchconfiguration {
}
interface msdyn_searchconfiguration_Update extends msdyn_searchconfiguration {
}
interface msdyn_segment_Base extends WebEntity {
}
interface msdyn_segment_Fixed extends WebEntity_Fixed {
  msdyn_segmentid: string;
}
interface msdyn_segment extends msdyn_segment_Base, msdyn_segment_Relationships {
}
interface msdyn_segment_Relationships {
}
interface msdyn_segment_Result extends msdyn_segment_Base, msdyn_segment_Relationships {
}
interface msdyn_segment_FormattedResult {
}
interface msdyn_segment_Select {
}
interface msdyn_segment_Expand {
}
interface msdyn_segment_Filter {
}
interface msdyn_segment_Create extends msdyn_segment {
}
interface msdyn_segment_Update extends msdyn_segment {
}
interface msdyn_segmentcatalogue_Base extends WebEntity {
}
interface msdyn_segmentcatalogue_Fixed extends WebEntity_Fixed {
  msdyn_segmentcatalogueid: string;
}
interface msdyn_segmentcatalogue extends msdyn_segmentcatalogue_Base, msdyn_segmentcatalogue_Relationships {
}
interface msdyn_segmentcatalogue_Relationships {
}
interface msdyn_segmentcatalogue_Result extends msdyn_segmentcatalogue_Base, msdyn_segmentcatalogue_Relationships {
}
interface msdyn_segmentcatalogue_FormattedResult {
}
interface msdyn_segmentcatalogue_Select {
}
interface msdyn_segmentcatalogue_Expand {
}
interface msdyn_segmentcatalogue_Filter {
}
interface msdyn_segmentcatalogue_Create extends msdyn_segmentcatalogue {
}
interface msdyn_segmentcatalogue_Update extends msdyn_segmentcatalogue {
}
interface msdyn_sentimentanalysis_Base extends WebEntity {
}
interface msdyn_sentimentanalysis_Fixed extends WebEntity_Fixed {
  msdyn_sentimentanalysisid: string;
}
interface msdyn_sentimentanalysis extends msdyn_sentimentanalysis_Base, msdyn_sentimentanalysis_Relationships {
}
interface msdyn_sentimentanalysis_Relationships {
}
interface msdyn_sentimentanalysis_Result extends msdyn_sentimentanalysis_Base, msdyn_sentimentanalysis_Relationships {
}
interface msdyn_sentimentanalysis_FormattedResult {
}
interface msdyn_sentimentanalysis_Select {
}
interface msdyn_sentimentanalysis_Expand {
}
interface msdyn_sentimentanalysis_Filter {
}
interface msdyn_sentimentanalysis_Create extends msdyn_sentimentanalysis {
}
interface msdyn_sentimentanalysis_Update extends msdyn_sentimentanalysis {
}
interface msdyn_sequence_Base extends WebEntity {
}
interface msdyn_sequence_Fixed extends WebEntity_Fixed {
  msdyn_sequenceid: string;
}
interface msdyn_sequence extends msdyn_sequence_Base, msdyn_sequence_Relationships {
}
interface msdyn_sequence_Relationships {
}
interface msdyn_sequence_Result extends msdyn_sequence_Base, msdyn_sequence_Relationships {
}
interface msdyn_sequence_FormattedResult {
}
interface msdyn_sequence_Select {
}
interface msdyn_sequence_Expand {
}
interface msdyn_sequence_Filter {
}
interface msdyn_sequence_Create extends msdyn_sequence {
}
interface msdyn_sequence_Update extends msdyn_sequence {
}
interface msdyn_sequencestat_Base extends WebEntity {
}
interface msdyn_sequencestat_Fixed extends WebEntity_Fixed {
  msdyn_sequencestatid: string;
}
interface msdyn_sequencestat extends msdyn_sequencestat_Base, msdyn_sequencestat_Relationships {
}
interface msdyn_sequencestat_Relationships {
}
interface msdyn_sequencestat_Result extends msdyn_sequencestat_Base, msdyn_sequencestat_Relationships {
}
interface msdyn_sequencestat_FormattedResult {
}
interface msdyn_sequencestat_Select {
}
interface msdyn_sequencestat_Expand {
}
interface msdyn_sequencestat_Filter {
}
interface msdyn_sequencestat_Create extends msdyn_sequencestat {
}
interface msdyn_sequencestat_Update extends msdyn_sequencestat {
}
interface msdyn_sequencetarget_Base extends WebEntity {
}
interface msdyn_sequencetarget_Fixed extends WebEntity_Fixed {
  msdyn_sequencetargetid: string;
}
interface msdyn_sequencetarget extends msdyn_sequencetarget_Base, msdyn_sequencetarget_Relationships {
}
interface msdyn_sequencetarget_Relationships {
}
interface msdyn_sequencetarget_Result extends msdyn_sequencetarget_Base, msdyn_sequencetarget_Relationships {
}
interface msdyn_sequencetarget_FormattedResult {
}
interface msdyn_sequencetarget_Select {
}
interface msdyn_sequencetarget_Expand {
}
interface msdyn_sequencetarget_Filter {
}
interface msdyn_sequencetarget_Create extends msdyn_sequencetarget {
}
interface msdyn_sequencetarget_Update extends msdyn_sequencetarget {
}
interface msdyn_sequencetargetstep_Base extends WebEntity {
}
interface msdyn_sequencetargetstep_Fixed extends WebEntity_Fixed {
  msdyn_sequencetargetstepid: string;
}
interface msdyn_sequencetargetstep extends msdyn_sequencetargetstep_Base, msdyn_sequencetargetstep_Relationships {
}
interface msdyn_sequencetargetstep_Relationships {
}
interface msdyn_sequencetargetstep_Result extends msdyn_sequencetargetstep_Base, msdyn_sequencetargetstep_Relationships {
}
interface msdyn_sequencetargetstep_FormattedResult {
}
interface msdyn_sequencetargetstep_Select {
}
interface msdyn_sequencetargetstep_Expand {
}
interface msdyn_sequencetargetstep_Filter {
}
interface msdyn_sequencetargetstep_Create extends msdyn_sequencetargetstep {
}
interface msdyn_sequencetargetstep_Update extends msdyn_sequencetargetstep {
}
interface msdyn_serviceconfiguration_Base extends WebEntity {
}
interface msdyn_serviceconfiguration_Fixed extends WebEntity_Fixed {
  msdyn_serviceconfigurationid: string;
}
interface msdyn_serviceconfiguration extends msdyn_serviceconfiguration_Base, msdyn_serviceconfiguration_Relationships {
}
interface msdyn_serviceconfiguration_Relationships {
}
interface msdyn_serviceconfiguration_Result extends msdyn_serviceconfiguration_Base, msdyn_serviceconfiguration_Relationships {
}
interface msdyn_serviceconfiguration_FormattedResult {
}
interface msdyn_serviceconfiguration_Select {
}
interface msdyn_serviceconfiguration_Expand {
}
interface msdyn_serviceconfiguration_Filter {
}
interface msdyn_serviceconfiguration_Create extends msdyn_serviceconfiguration {
}
interface msdyn_serviceconfiguration_Update extends msdyn_serviceconfiguration {
}
interface msdyn_servicetasktype_Base extends WebEntity {
}
interface msdyn_servicetasktype_Fixed extends WebEntity_Fixed {
  msdyn_servicetasktypeid: string;
}
interface msdyn_servicetasktype extends msdyn_servicetasktype_Base, msdyn_servicetasktype_Relationships {
}
interface msdyn_servicetasktype_Relationships {
}
interface msdyn_servicetasktype_Result extends msdyn_servicetasktype_Base, msdyn_servicetasktype_Relationships {
}
interface msdyn_servicetasktype_FormattedResult {
}
interface msdyn_servicetasktype_Select {
}
interface msdyn_servicetasktype_Expand {
}
interface msdyn_servicetasktype_Filter {
}
interface msdyn_servicetasktype_Create extends msdyn_servicetasktype {
}
interface msdyn_servicetasktype_Update extends msdyn_servicetasktype {
}
interface msdyn_SessionData_Base extends WebEntity {
}
interface msdyn_SessionData_Fixed extends WebEntity_Fixed {
  msdyn_sessiondataid: string;
}
interface msdyn_SessionData extends msdyn_SessionData_Base, msdyn_SessionData_Relationships {
}
interface msdyn_SessionData_Relationships {
}
interface msdyn_SessionData_Result extends msdyn_SessionData_Base, msdyn_SessionData_Relationships {
}
interface msdyn_SessionData_FormattedResult {
}
interface msdyn_SessionData_Select {
}
interface msdyn_SessionData_Expand {
}
interface msdyn_SessionData_Filter {
}
interface msdyn_SessionData_Create extends msdyn_SessionData {
}
interface msdyn_SessionData_Update extends msdyn_SessionData {
}
interface msdyn_sessionevent_Base extends WebEntity {
}
interface msdyn_sessionevent_Fixed extends WebEntity_Fixed {
  msdyn_sessioneventid: string;
}
interface msdyn_sessionevent extends msdyn_sessionevent_Base, msdyn_sessionevent_Relationships {
}
interface msdyn_sessionevent_Relationships {
}
interface msdyn_sessionevent_Result extends msdyn_sessionevent_Base, msdyn_sessionevent_Relationships {
}
interface msdyn_sessionevent_FormattedResult {
}
interface msdyn_sessionevent_Select {
}
interface msdyn_sessionevent_Expand {
}
interface msdyn_sessionevent_Filter {
}
interface msdyn_sessionevent_Create extends msdyn_sessionevent {
}
interface msdyn_sessionevent_Update extends msdyn_sessionevent {
}
interface msdyn_sessionparticipant_Base extends WebEntity {
}
interface msdyn_sessionparticipant_Fixed extends WebEntity_Fixed {
  msdyn_sessionparticipantid: string;
}
interface msdyn_sessionparticipant extends msdyn_sessionparticipant_Base, msdyn_sessionparticipant_Relationships {
}
interface msdyn_sessionparticipant_Relationships {
}
interface msdyn_sessionparticipant_Result extends msdyn_sessionparticipant_Base, msdyn_sessionparticipant_Relationships {
}
interface msdyn_sessionparticipant_FormattedResult {
}
interface msdyn_sessionparticipant_Select {
}
interface msdyn_sessionparticipant_Expand {
}
interface msdyn_sessionparticipant_Filter {
}
interface msdyn_sessionparticipant_Create extends msdyn_sessionparticipant {
}
interface msdyn_sessionparticipant_Update extends msdyn_sessionparticipant {
}
interface msdyn_SessionParticipantData_Base extends WebEntity {
}
interface msdyn_SessionParticipantData_Fixed extends WebEntity_Fixed {
  msdyn_sessionparticipantdataid: string;
}
interface msdyn_SessionParticipantData extends msdyn_SessionParticipantData_Base, msdyn_SessionParticipantData_Relationships {
}
interface msdyn_SessionParticipantData_Relationships {
}
interface msdyn_SessionParticipantData_Result extends msdyn_SessionParticipantData_Base, msdyn_SessionParticipantData_Relationships {
}
interface msdyn_SessionParticipantData_FormattedResult {
}
interface msdyn_SessionParticipantData_Select {
}
interface msdyn_SessionParticipantData_Expand {
}
interface msdyn_SessionParticipantData_Filter {
}
interface msdyn_SessionParticipantData_Create extends msdyn_SessionParticipantData {
}
interface msdyn_SessionParticipantData_Update extends msdyn_SessionParticipantData {
}
interface msdyn_sessiontemplate_Base extends WebEntity {
}
interface msdyn_sessiontemplate_Fixed extends WebEntity_Fixed {
  msdyn_sessiontemplateid: string;
}
interface msdyn_sessiontemplate extends msdyn_sessiontemplate_Base, msdyn_sessiontemplate_Relationships {
}
interface msdyn_sessiontemplate_Relationships {
}
interface msdyn_sessiontemplate_Result extends msdyn_sessiontemplate_Base, msdyn_sessiontemplate_Relationships {
}
interface msdyn_sessiontemplate_FormattedResult {
}
interface msdyn_sessiontemplate_Select {
}
interface msdyn_sessiontemplate_Expand {
}
interface msdyn_sessiontemplate_Filter {
}
interface msdyn_sessiontemplate_Create extends msdyn_sessiontemplate {
}
interface msdyn_sessiontemplate_Update extends msdyn_sessiontemplate {
}
interface msdyn_sessiontemplate_applicationtab_Base extends WebEntity {
}
interface msdyn_sessiontemplate_applicationtab_Fixed extends WebEntity_Fixed {
  msdyn_sessiontemplate_applicationtabid: string;
}
interface msdyn_sessiontemplate_applicationtab extends msdyn_sessiontemplate_applicationtab_Base, msdyn_sessiontemplate_applicationtab_Relationships {
}
interface msdyn_sessiontemplate_applicationtab_Relationships {
}
interface msdyn_sessiontemplate_applicationtab_Result extends msdyn_sessiontemplate_applicationtab_Base, msdyn_sessiontemplate_applicationtab_Relationships {
}
interface msdyn_sessiontemplate_applicationtab_FormattedResult {
}
interface msdyn_sessiontemplate_applicationtab_Select {
}
interface msdyn_sessiontemplate_applicationtab_Expand {
}
interface msdyn_sessiontemplate_applicationtab_Filter {
}
interface msdyn_sessiontemplate_applicationtab_Create extends msdyn_sessiontemplate_applicationtab {
}
interface msdyn_sessiontemplate_applicationtab_Update extends msdyn_sessiontemplate_applicationtab {
}
interface msdyn_shipvia_Base extends WebEntity {
}
interface msdyn_shipvia_Fixed extends WebEntity_Fixed {
  msdyn_shipviaid: string;
}
interface msdyn_shipvia extends msdyn_shipvia_Base, msdyn_shipvia_Relationships {
}
interface msdyn_shipvia_Relationships {
}
interface msdyn_shipvia_Result extends msdyn_shipvia_Base, msdyn_shipvia_Relationships {
}
interface msdyn_shipvia_FormattedResult {
}
interface msdyn_shipvia_Select {
}
interface msdyn_shipvia_Expand {
}
interface msdyn_shipvia_Filter {
}
interface msdyn_shipvia_Create extends msdyn_shipvia {
}
interface msdyn_shipvia_Update extends msdyn_shipvia {
}
interface msdyn_siconfig_Base extends WebEntity {
}
interface msdyn_siconfig_Fixed extends WebEntity_Fixed {
  msdyn_siconfigid: string;
}
interface msdyn_siconfig extends msdyn_siconfig_Base, msdyn_siconfig_Relationships {
}
interface msdyn_siconfig_Relationships {
}
interface msdyn_siconfig_Result extends msdyn_siconfig_Base, msdyn_siconfig_Relationships {
}
interface msdyn_siconfig_FormattedResult {
}
interface msdyn_siconfig_Select {
}
interface msdyn_siconfig_Expand {
}
interface msdyn_siconfig_Filter {
}
interface msdyn_siconfig_Create extends msdyn_siconfig {
}
interface msdyn_siconfig_Update extends msdyn_siconfig {
}
interface msdyn_sikeyvalueconfig_Base extends WebEntity {
}
interface msdyn_sikeyvalueconfig_Fixed extends WebEntity_Fixed {
  msdyn_sikeyvalueconfigid: string;
}
interface msdyn_sikeyvalueconfig extends msdyn_sikeyvalueconfig_Base, msdyn_sikeyvalueconfig_Relationships {
}
interface msdyn_sikeyvalueconfig_Relationships {
}
interface msdyn_sikeyvalueconfig_Result extends msdyn_sikeyvalueconfig_Base, msdyn_sikeyvalueconfig_Relationships {
}
interface msdyn_sikeyvalueconfig_FormattedResult {
}
interface msdyn_sikeyvalueconfig_Select {
}
interface msdyn_sikeyvalueconfig_Expand {
}
interface msdyn_sikeyvalueconfig_Filter {
}
interface msdyn_sikeyvalueconfig_Create extends msdyn_sikeyvalueconfig {
}
interface msdyn_sikeyvalueconfig_Update extends msdyn_sikeyvalueconfig {
}
interface msdyn_skillattachmentruleitem_Base extends WebEntity {
}
interface msdyn_skillattachmentruleitem_Fixed extends WebEntity_Fixed {
  msdyn_skillattachmentruleitemid: string;
}
interface msdyn_skillattachmentruleitem extends msdyn_skillattachmentruleitem_Base, msdyn_skillattachmentruleitem_Relationships {
}
interface msdyn_skillattachmentruleitem_Relationships {
}
interface msdyn_skillattachmentruleitem_Result extends msdyn_skillattachmentruleitem_Base, msdyn_skillattachmentruleitem_Relationships {
}
interface msdyn_skillattachmentruleitem_FormattedResult {
}
interface msdyn_skillattachmentruleitem_Select {
}
interface msdyn_skillattachmentruleitem_Expand {
}
interface msdyn_skillattachmentruleitem_Filter {
}
interface msdyn_skillattachmentruleitem_Create extends msdyn_skillattachmentruleitem {
}
interface msdyn_skillattachmentruleitem_Update extends msdyn_skillattachmentruleitem {
}
interface msdyn_skillattachmenttarget_Base extends WebEntity {
}
interface msdyn_skillattachmenttarget_Fixed extends WebEntity_Fixed {
  msdyn_skillattachmenttargetid: string;
}
interface msdyn_skillattachmenttarget extends msdyn_skillattachmenttarget_Base, msdyn_skillattachmenttarget_Relationships {
}
interface msdyn_skillattachmenttarget_Relationships {
}
interface msdyn_skillattachmenttarget_Result extends msdyn_skillattachmenttarget_Base, msdyn_skillattachmenttarget_Relationships {
}
interface msdyn_skillattachmenttarget_FormattedResult {
}
interface msdyn_skillattachmenttarget_Select {
}
interface msdyn_skillattachmenttarget_Expand {
}
interface msdyn_skillattachmenttarget_Filter {
}
interface msdyn_skillattachmenttarget_Create extends msdyn_skillattachmenttarget {
}
interface msdyn_skillattachmenttarget_Update extends msdyn_skillattachmenttarget {
}
interface msdyn_slakpi_Base extends WebEntity {
}
interface msdyn_slakpi_Fixed extends WebEntity_Fixed {
  msdyn_slakpiid: string;
}
interface msdyn_slakpi extends msdyn_slakpi_Base, msdyn_slakpi_Relationships {
}
interface msdyn_slakpi_Relationships {
}
interface msdyn_slakpi_Result extends msdyn_slakpi_Base, msdyn_slakpi_Relationships {
}
interface msdyn_slakpi_FormattedResult {
}
interface msdyn_slakpi_Select {
}
interface msdyn_slakpi_Expand {
}
interface msdyn_slakpi_Filter {
}
interface msdyn_slakpi_Create extends msdyn_slakpi {
}
interface msdyn_slakpi_Update extends msdyn_slakpi {
}
interface msdyn_smartassistconfig_Base extends WebEntity {
}
interface msdyn_smartassistconfig_Fixed extends WebEntity_Fixed {
  msdyn_smartassistconfigid: string;
}
interface msdyn_smartassistconfig extends msdyn_smartassistconfig_Base, msdyn_smartassistconfig_Relationships {
}
interface msdyn_smartassistconfig_Relationships {
}
interface msdyn_smartassistconfig_Result extends msdyn_smartassistconfig_Base, msdyn_smartassistconfig_Relationships {
}
interface msdyn_smartassistconfig_FormattedResult {
}
interface msdyn_smartassistconfig_Select {
}
interface msdyn_smartassistconfig_Expand {
}
interface msdyn_smartassistconfig_Filter {
}
interface msdyn_smartassistconfig_Create extends msdyn_smartassistconfig {
}
interface msdyn_smartassistconfig_Update extends msdyn_smartassistconfig {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Base extends WebEntity {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Fixed extends WebEntity_Fixed {
  msdyn_smartassistconfig_msdyn_appconfigid: string;
}
interface msdyn_smartassistconfig_msdyn_appconfig extends msdyn_smartassistconfig_msdyn_appconfig_Base, msdyn_smartassistconfig_msdyn_appconfig_Relationships {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Relationships {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Result extends msdyn_smartassistconfig_msdyn_appconfig_Base, msdyn_smartassistconfig_msdyn_appconfig_Relationships {
}
interface msdyn_smartassistconfig_msdyn_appconfig_FormattedResult {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Select {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Expand {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Filter {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Create extends msdyn_smartassistconfig_msdyn_appconfig {
}
interface msdyn_smartassistconfig_msdyn_appconfig_Update extends msdyn_smartassistconfig_msdyn_appconfig {
}
interface msdyn_smsengagementctx_Base extends WebEntity {
}
interface msdyn_smsengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_smsengagementctxid: string;
}
interface msdyn_smsengagementctx extends msdyn_smsengagementctx_Base, msdyn_smsengagementctx_Relationships {
}
interface msdyn_smsengagementctx_Relationships {
}
interface msdyn_smsengagementctx_Result extends msdyn_smsengagementctx_Base, msdyn_smsengagementctx_Relationships {
}
interface msdyn_smsengagementctx_FormattedResult {
}
interface msdyn_smsengagementctx_Select {
}
interface msdyn_smsengagementctx_Expand {
}
interface msdyn_smsengagementctx_Filter {
}
interface msdyn_smsengagementctx_Create extends msdyn_smsengagementctx {
}
interface msdyn_smsengagementctx_Update extends msdyn_smsengagementctx {
}
interface msdyn_smsnumber_Base extends WebEntity {
}
interface msdyn_smsnumber_Fixed extends WebEntity_Fixed {
  msdyn_smsnumberid: string;
}
interface msdyn_smsnumber extends msdyn_smsnumber_Base, msdyn_smsnumber_Relationships {
}
interface msdyn_smsnumber_Relationships {
}
interface msdyn_smsnumber_Result extends msdyn_smsnumber_Base, msdyn_smsnumber_Relationships {
}
interface msdyn_smsnumber_FormattedResult {
}
interface msdyn_smsnumber_Select {
}
interface msdyn_smsnumber_Expand {
}
interface msdyn_smsnumber_Filter {
}
interface msdyn_smsnumber_Create extends msdyn_smsnumber {
}
interface msdyn_smsnumber_Update extends msdyn_smsnumber {
}
interface msdyn_solutioncomponentcountdatasource_Base extends WebEntity {
}
interface msdyn_solutioncomponentcountdatasource_Fixed extends WebEntity_Fixed {
  msdyn_solutioncomponentcountdatasourceid: string;
}
interface msdyn_solutioncomponentcountdatasource extends msdyn_solutioncomponentcountdatasource_Base, msdyn_solutioncomponentcountdatasource_Relationships {
}
interface msdyn_solutioncomponentcountdatasource_Relationships {
}
interface msdyn_solutioncomponentcountdatasource_Result extends msdyn_solutioncomponentcountdatasource_Base, msdyn_solutioncomponentcountdatasource_Relationships {
}
interface msdyn_solutioncomponentcountdatasource_FormattedResult {
}
interface msdyn_solutioncomponentcountdatasource_Select {
}
interface msdyn_solutioncomponentcountdatasource_Expand {
}
interface msdyn_solutioncomponentcountdatasource_Filter {
}
interface msdyn_solutioncomponentcountdatasource_Create extends msdyn_solutioncomponentcountdatasource {
}
interface msdyn_solutioncomponentcountdatasource_Update extends msdyn_solutioncomponentcountdatasource {
}
interface msdyn_solutioncomponentcountsummary_Base extends WebEntity {
}
interface msdyn_solutioncomponentcountsummary_Fixed extends WebEntity_Fixed {
  msdyn_solutioncomponentcountsummaryid: string;
}
interface msdyn_solutioncomponentcountsummary extends msdyn_solutioncomponentcountsummary_Base, msdyn_solutioncomponentcountsummary_Relationships {
}
interface msdyn_solutioncomponentcountsummary_Relationships {
}
interface msdyn_solutioncomponentcountsummary_Result extends msdyn_solutioncomponentcountsummary_Base, msdyn_solutioncomponentcountsummary_Relationships {
}
interface msdyn_solutioncomponentcountsummary_FormattedResult {
}
interface msdyn_solutioncomponentcountsummary_Select {
}
interface msdyn_solutioncomponentcountsummary_Expand {
}
interface msdyn_solutioncomponentcountsummary_Filter {
}
interface msdyn_solutioncomponentcountsummary_Create extends msdyn_solutioncomponentcountsummary {
}
interface msdyn_solutioncomponentcountsummary_Update extends msdyn_solutioncomponentcountsummary {
}
interface msdyn_solutioncomponentdatasource_Base extends WebEntity {
}
interface msdyn_solutioncomponentdatasource_Fixed extends WebEntity_Fixed {
  msdyn_solutioncomponentdatasourceid: string;
}
interface msdyn_solutioncomponentdatasource extends msdyn_solutioncomponentdatasource_Base, msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource_Result extends msdyn_solutioncomponentdatasource_Base, msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource_FormattedResult {
}
interface msdyn_solutioncomponentdatasource_Select {
}
interface msdyn_solutioncomponentdatasource_Expand {
}
interface msdyn_solutioncomponentdatasource_Filter {
}
interface msdyn_solutioncomponentdatasource_Create extends msdyn_solutioncomponentdatasource {
}
interface msdyn_solutioncomponentdatasource_Update extends msdyn_solutioncomponentdatasource {
}
interface msdyn_solutioncomponentsummary_Base extends WebEntity {
}
interface msdyn_solutioncomponentsummary_Fixed extends WebEntity_Fixed {
  msdyn_solutioncomponentsummaryid: string;
}
interface msdyn_solutioncomponentsummary extends msdyn_solutioncomponentsummary_Base, msdyn_solutioncomponentsummary_Relationships {
}
interface msdyn_solutioncomponentsummary_Relationships {
}
interface msdyn_solutioncomponentsummary_Result extends msdyn_solutioncomponentsummary_Base, msdyn_solutioncomponentsummary_Relationships {
}
interface msdyn_solutioncomponentsummary_FormattedResult {
}
interface msdyn_solutioncomponentsummary_Select {
}
interface msdyn_solutioncomponentsummary_Expand {
}
interface msdyn_solutioncomponentsummary_Filter {
}
interface msdyn_solutioncomponentsummary_Create extends msdyn_solutioncomponentsummary {
}
interface msdyn_solutioncomponentsummary_Update extends msdyn_solutioncomponentsummary {
}
interface msdyn_solutionhealthrule_Base extends WebEntity {
}
interface msdyn_solutionhealthrule_Fixed extends WebEntity_Fixed {
  msdyn_solutionhealthruleid: string;
}
interface msdyn_solutionhealthrule extends msdyn_solutionhealthrule_Base, msdyn_solutionhealthrule_Relationships {
}
interface msdyn_solutionhealthrule_Relationships {
}
interface msdyn_solutionhealthrule_Result extends msdyn_solutionhealthrule_Base, msdyn_solutionhealthrule_Relationships {
}
interface msdyn_solutionhealthrule_FormattedResult {
}
interface msdyn_solutionhealthrule_Select {
}
interface msdyn_solutionhealthrule_Expand {
}
interface msdyn_solutionhealthrule_Filter {
}
interface msdyn_solutionhealthrule_Create extends msdyn_solutionhealthrule {
}
interface msdyn_solutionhealthrule_Update extends msdyn_solutionhealthrule {
}
interface msdyn_solutionhealthruleargument_Base extends WebEntity {
}
interface msdyn_solutionhealthruleargument_Fixed extends WebEntity_Fixed {
  msdyn_solutionhealthruleargumentid: string;
}
interface msdyn_solutionhealthruleargument extends msdyn_solutionhealthruleargument_Base, msdyn_solutionhealthruleargument_Relationships {
}
interface msdyn_solutionhealthruleargument_Relationships {
}
interface msdyn_solutionhealthruleargument_Result extends msdyn_solutionhealthruleargument_Base, msdyn_solutionhealthruleargument_Relationships {
}
interface msdyn_solutionhealthruleargument_FormattedResult {
}
interface msdyn_solutionhealthruleargument_Select {
}
interface msdyn_solutionhealthruleargument_Expand {
}
interface msdyn_solutionhealthruleargument_Filter {
}
interface msdyn_solutionhealthruleargument_Create extends msdyn_solutionhealthruleargument {
}
interface msdyn_solutionhealthruleargument_Update extends msdyn_solutionhealthruleargument {
}
interface msdyn_solutionhealthruleset_Base extends WebEntity {
}
interface msdyn_solutionhealthruleset_Fixed extends WebEntity_Fixed {
  msdyn_solutionhealthrulesetid: string;
}
interface msdyn_solutionhealthruleset extends msdyn_solutionhealthruleset_Base, msdyn_solutionhealthruleset_Relationships {
}
interface msdyn_solutionhealthruleset_Relationships {
}
interface msdyn_solutionhealthruleset_Result extends msdyn_solutionhealthruleset_Base, msdyn_solutionhealthruleset_Relationships {
}
interface msdyn_solutionhealthruleset_FormattedResult {
}
interface msdyn_solutionhealthruleset_Select {
}
interface msdyn_solutionhealthruleset_Expand {
}
interface msdyn_solutionhealthruleset_Filter {
}
interface msdyn_solutionhealthruleset_Create extends msdyn_solutionhealthruleset {
}
interface msdyn_solutionhealthruleset_Update extends msdyn_solutionhealthruleset {
}
interface msdyn_solutionhistory_Base extends WebEntity {
}
interface msdyn_solutionhistory_Fixed extends WebEntity_Fixed {
  msdyn_solutionhistoryid: string;
}
interface msdyn_solutionhistory extends msdyn_solutionhistory_Base, msdyn_solutionhistory_Relationships {
}
interface msdyn_solutionhistory_Relationships {
}
interface msdyn_solutionhistory_Result extends msdyn_solutionhistory_Base, msdyn_solutionhistory_Relationships {
}
interface msdyn_solutionhistory_FormattedResult {
}
interface msdyn_solutionhistory_Select {
}
interface msdyn_solutionhistory_Expand {
}
interface msdyn_solutionhistory_Filter {
}
interface msdyn_solutionhistory_Create extends msdyn_solutionhistory {
}
interface msdyn_solutionhistory_Update extends msdyn_solutionhistory {
}
interface msdyn_solutionhistorydatasource_Base extends WebEntity {
}
interface msdyn_solutionhistorydatasource_Fixed extends WebEntity_Fixed {
  msdyn_solutionhistorydatasourceid: string;
}
interface msdyn_solutionhistorydatasource extends msdyn_solutionhistorydatasource_Base, msdyn_solutionhistorydatasource_Relationships {
}
interface msdyn_solutionhistorydatasource_Relationships {
}
interface msdyn_solutionhistorydatasource_Result extends msdyn_solutionhistorydatasource_Base, msdyn_solutionhistorydatasource_Relationships {
}
interface msdyn_solutionhistorydatasource_FormattedResult {
}
interface msdyn_solutionhistorydatasource_Select {
}
interface msdyn_solutionhistorydatasource_Expand {
}
interface msdyn_solutionhistorydatasource_Filter {
}
interface msdyn_solutionhistorydatasource_Create extends msdyn_solutionhistorydatasource {
}
interface msdyn_solutionhistorydatasource_Update extends msdyn_solutionhistorydatasource {
}
interface msdyn_soundfile_Base extends WebEntity {
}
interface msdyn_soundfile_Fixed extends WebEntity_Fixed {
  msdyn_soundfileid: string;
}
interface msdyn_soundfile extends msdyn_soundfile_Base, msdyn_soundfile_Relationships {
}
interface msdyn_soundfile_Relationships {
}
interface msdyn_soundfile_Result extends msdyn_soundfile_Base, msdyn_soundfile_Relationships {
}
interface msdyn_soundfile_FormattedResult {
}
interface msdyn_soundfile_Select {
}
interface msdyn_soundfile_Expand {
}
interface msdyn_soundfile_Filter {
}
interface msdyn_soundfile_Create extends msdyn_soundfile {
}
interface msdyn_soundfile_Update extends msdyn_soundfile {
}
interface msdyn_soundnotificationsetting_Base extends WebEntity {
}
interface msdyn_soundnotificationsetting_Fixed extends WebEntity_Fixed {
  msdyn_soundnotificationsettingid: string;
}
interface msdyn_soundnotificationsetting extends msdyn_soundnotificationsetting_Base, msdyn_soundnotificationsetting_Relationships {
}
interface msdyn_soundnotificationsetting_Relationships {
}
interface msdyn_soundnotificationsetting_Result extends msdyn_soundnotificationsetting_Base, msdyn_soundnotificationsetting_Relationships {
}
interface msdyn_soundnotificationsetting_FormattedResult {
}
interface msdyn_soundnotificationsetting_Select {
}
interface msdyn_soundnotificationsetting_Expand {
}
interface msdyn_soundnotificationsetting_Filter {
}
interface msdyn_soundnotificationsetting_Create extends msdyn_soundnotificationsetting {
}
interface msdyn_soundnotificationsetting_Update extends msdyn_soundnotificationsetting {
}
interface msdyn_suggestedactivity_Base extends WebEntity {
}
interface msdyn_suggestedactivity_Fixed extends WebEntity_Fixed {
  msdyn_suggestedactivityid: string;
}
interface msdyn_suggestedactivity extends msdyn_suggestedactivity_Base, msdyn_suggestedactivity_Relationships {
}
interface msdyn_suggestedactivity_Relationships {
}
interface msdyn_suggestedactivity_Result extends msdyn_suggestedactivity_Base, msdyn_suggestedactivity_Relationships {
}
interface msdyn_suggestedactivity_FormattedResult {
}
interface msdyn_suggestedactivity_Select {
}
interface msdyn_suggestedactivity_Expand {
}
interface msdyn_suggestedactivity_Filter {
}
interface msdyn_suggestedactivity_Create extends msdyn_suggestedactivity {
}
interface msdyn_suggestedactivity_Update extends msdyn_suggestedactivity {
}
interface msdyn_suggestedactivitydatasource_Base extends WebEntity {
}
interface msdyn_suggestedactivitydatasource_Fixed extends WebEntity_Fixed {
  msdyn_suggestedactivitydatasourceid: string;
}
interface msdyn_suggestedactivitydatasource extends msdyn_suggestedactivitydatasource_Base, msdyn_suggestedactivitydatasource_Relationships {
}
interface msdyn_suggestedactivitydatasource_Relationships {
}
interface msdyn_suggestedactivitydatasource_Result extends msdyn_suggestedactivitydatasource_Base, msdyn_suggestedactivitydatasource_Relationships {
}
interface msdyn_suggestedactivitydatasource_FormattedResult {
}
interface msdyn_suggestedactivitydatasource_Select {
}
interface msdyn_suggestedactivitydatasource_Expand {
}
interface msdyn_suggestedactivitydatasource_Filter {
}
interface msdyn_suggestedactivitydatasource_Create extends msdyn_suggestedactivitydatasource {
}
interface msdyn_suggestedactivitydatasource_Update extends msdyn_suggestedactivitydatasource {
}
interface msdyn_suggestedcontact_Base extends WebEntity {
}
interface msdyn_suggestedcontact_Fixed extends WebEntity_Fixed {
  msdyn_suggestedcontactid: string;
}
interface msdyn_suggestedcontact extends msdyn_suggestedcontact_Base, msdyn_suggestedcontact_Relationships {
}
interface msdyn_suggestedcontact_Relationships {
}
interface msdyn_suggestedcontact_Result extends msdyn_suggestedcontact_Base, msdyn_suggestedcontact_Relationships {
}
interface msdyn_suggestedcontact_FormattedResult {
}
interface msdyn_suggestedcontact_Select {
}
interface msdyn_suggestedcontact_Expand {
}
interface msdyn_suggestedcontact_Filter {
}
interface msdyn_suggestedcontact_Create extends msdyn_suggestedcontact {
}
interface msdyn_suggestedcontact_Update extends msdyn_suggestedcontact {
}
interface msdyn_suggestedcontactsdatasource_Base extends WebEntity {
}
interface msdyn_suggestedcontactsdatasource_Fixed extends WebEntity_Fixed {
  msdyn_suggestedcontactsdatasourceid: string;
}
interface msdyn_suggestedcontactsdatasource extends msdyn_suggestedcontactsdatasource_Base, msdyn_suggestedcontactsdatasource_Relationships {
}
interface msdyn_suggestedcontactsdatasource_Relationships {
}
interface msdyn_suggestedcontactsdatasource_Result extends msdyn_suggestedcontactsdatasource_Base, msdyn_suggestedcontactsdatasource_Relationships {
}
interface msdyn_suggestedcontactsdatasource_FormattedResult {
}
interface msdyn_suggestedcontactsdatasource_Select {
}
interface msdyn_suggestedcontactsdatasource_Expand {
}
interface msdyn_suggestedcontactsdatasource_Filter {
}
interface msdyn_suggestedcontactsdatasource_Create extends msdyn_suggestedcontactsdatasource {
}
interface msdyn_suggestedcontactsdatasource_Update extends msdyn_suggestedcontactsdatasource {
}
interface msdyn_suggestioninteraction_Base extends WebEntity {
}
interface msdyn_suggestioninteraction_Fixed extends WebEntity_Fixed {
  msdyn_suggestioninteractionid: string;
}
interface msdyn_suggestioninteraction extends msdyn_suggestioninteraction_Base, msdyn_suggestioninteraction_Relationships {
}
interface msdyn_suggestioninteraction_Relationships {
}
interface msdyn_suggestioninteraction_Result extends msdyn_suggestioninteraction_Base, msdyn_suggestioninteraction_Relationships {
}
interface msdyn_suggestioninteraction_FormattedResult {
}
interface msdyn_suggestioninteraction_Select {
}
interface msdyn_suggestioninteraction_Expand {
}
interface msdyn_suggestioninteraction_Filter {
}
interface msdyn_suggestioninteraction_Create extends msdyn_suggestioninteraction {
}
interface msdyn_suggestioninteraction_Update extends msdyn_suggestioninteraction {
}
interface msdyn_suggestionrequestpayload_Base extends WebEntity {
}
interface msdyn_suggestionrequestpayload_Fixed extends WebEntity_Fixed {
  msdyn_suggestionrequestpayloadid: string;
}
interface msdyn_suggestionrequestpayload extends msdyn_suggestionrequestpayload_Base, msdyn_suggestionrequestpayload_Relationships {
}
interface msdyn_suggestionrequestpayload_Relationships {
}
interface msdyn_suggestionrequestpayload_Result extends msdyn_suggestionrequestpayload_Base, msdyn_suggestionrequestpayload_Relationships {
}
interface msdyn_suggestionrequestpayload_FormattedResult {
}
interface msdyn_suggestionrequestpayload_Select {
}
interface msdyn_suggestionrequestpayload_Expand {
}
interface msdyn_suggestionrequestpayload_Filter {
}
interface msdyn_suggestionrequestpayload_Create extends msdyn_suggestionrequestpayload {
}
interface msdyn_suggestionrequestpayload_Update extends msdyn_suggestionrequestpayload {
}
interface msdyn_suggestionsmodelsummary_Base extends WebEntity {
}
interface msdyn_suggestionsmodelsummary_Fixed extends WebEntity_Fixed {
  msdyn_suggestionsmodelsummaryid: string;
}
interface msdyn_suggestionsmodelsummary extends msdyn_suggestionsmodelsummary_Base, msdyn_suggestionsmodelsummary_Relationships {
}
interface msdyn_suggestionsmodelsummary_Relationships {
}
interface msdyn_suggestionsmodelsummary_Result extends msdyn_suggestionsmodelsummary_Base, msdyn_suggestionsmodelsummary_Relationships {
}
interface msdyn_suggestionsmodelsummary_FormattedResult {
}
interface msdyn_suggestionsmodelsummary_Select {
}
interface msdyn_suggestionsmodelsummary_Expand {
}
interface msdyn_suggestionsmodelsummary_Filter {
}
interface msdyn_suggestionsmodelsummary_Create extends msdyn_suggestionsmodelsummary {
}
interface msdyn_suggestionsmodelsummary_Update extends msdyn_suggestionsmodelsummary {
}
interface msdyn_suggestionssetting_Base extends WebEntity {
}
interface msdyn_suggestionssetting_Fixed extends WebEntity_Fixed {
  msdyn_suggestionssettingid: string;
}
interface msdyn_suggestionssetting extends msdyn_suggestionssetting_Base, msdyn_suggestionssetting_Relationships {
}
interface msdyn_suggestionssetting_Relationships {
}
interface msdyn_suggestionssetting_Result extends msdyn_suggestionssetting_Base, msdyn_suggestionssetting_Relationships {
}
interface msdyn_suggestionssetting_FormattedResult {
}
interface msdyn_suggestionssetting_Select {
}
interface msdyn_suggestionssetting_Expand {
}
interface msdyn_suggestionssetting_Filter {
}
interface msdyn_suggestionssetting_Create extends msdyn_suggestionssetting {
}
interface msdyn_suggestionssetting_Update extends msdyn_suggestionssetting {
}
interface msdyn_surveyquestion_Base extends WebEntity {
}
interface msdyn_surveyquestion_Fixed extends WebEntity_Fixed {
  msdyn_surveyquestionid: string;
}
interface msdyn_surveyquestion extends msdyn_surveyquestion_Base, msdyn_surveyquestion_Relationships {
}
interface msdyn_surveyquestion_Relationships {
}
interface msdyn_surveyquestion_Result extends msdyn_surveyquestion_Base, msdyn_surveyquestion_Relationships {
}
interface msdyn_surveyquestion_FormattedResult {
}
interface msdyn_surveyquestion_Select {
}
interface msdyn_surveyquestion_Expand {
}
interface msdyn_surveyquestion_Filter {
}
interface msdyn_surveyquestion_Create extends msdyn_surveyquestion {
}
interface msdyn_surveyquestion_Update extends msdyn_surveyquestion {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Base extends WebEntity {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Fixed extends WebEntity_Fixed {
  msdyn_systemuser_msdyn_omnichannelqueueid: string;
}
interface msdyn_systemuser_msdyn_omnichannelqueue extends msdyn_systemuser_msdyn_omnichannelqueue_Base, msdyn_systemuser_msdyn_omnichannelqueue_Relationships {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Relationships {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Result extends msdyn_systemuser_msdyn_omnichannelqueue_Base, msdyn_systemuser_msdyn_omnichannelqueue_Relationships {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_FormattedResult {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Select {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Expand {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Filter {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Create extends msdyn_systemuser_msdyn_omnichannelqueue {
}
interface msdyn_systemuser_msdyn_omnichannelqueue_Update extends msdyn_systemuser_msdyn_omnichannelqueue {
}
interface msdyn_systemuserschedulersetting_Base extends WebEntity {
}
interface msdyn_systemuserschedulersetting_Fixed extends WebEntity_Fixed {
  msdyn_systemuserschedulersettingid: string;
}
interface msdyn_systemuserschedulersetting extends msdyn_systemuserschedulersetting_Base, msdyn_systemuserschedulersetting_Relationships {
}
interface msdyn_systemuserschedulersetting_Relationships {
}
interface msdyn_systemuserschedulersetting_Result extends msdyn_systemuserschedulersetting_Base, msdyn_systemuserschedulersetting_Relationships {
}
interface msdyn_systemuserschedulersetting_FormattedResult {
}
interface msdyn_systemuserschedulersetting_Select {
}
interface msdyn_systemuserschedulersetting_Expand {
}
interface msdyn_systemuserschedulersetting_Filter {
}
interface msdyn_systemuserschedulersetting_Create extends msdyn_systemuserschedulersetting {
}
interface msdyn_systemuserschedulersetting_Update extends msdyn_systemuserschedulersetting {
}
interface msdyn_taxcode_Base extends WebEntity {
}
interface msdyn_taxcode_Fixed extends WebEntity_Fixed {
  msdyn_taxcodeid: string;
}
interface msdyn_taxcode extends msdyn_taxcode_Base, msdyn_taxcode_Relationships {
}
interface msdyn_taxcode_Relationships {
}
interface msdyn_taxcode_Result extends msdyn_taxcode_Base, msdyn_taxcode_Relationships {
}
interface msdyn_taxcode_FormattedResult {
}
interface msdyn_taxcode_Select {
}
interface msdyn_taxcode_Expand {
}
interface msdyn_taxcode_Filter {
}
interface msdyn_taxcode_Create extends msdyn_taxcode {
}
interface msdyn_taxcode_Update extends msdyn_taxcode {
}
interface msdyn_taxcodedetail_Base extends WebEntity {
}
interface msdyn_taxcodedetail_Fixed extends WebEntity_Fixed {
  msdyn_taxcodedetailid: string;
}
interface msdyn_taxcodedetail extends msdyn_taxcodedetail_Base, msdyn_taxcodedetail_Relationships {
}
interface msdyn_taxcodedetail_Relationships {
}
interface msdyn_taxcodedetail_Result extends msdyn_taxcodedetail_Base, msdyn_taxcodedetail_Relationships {
}
interface msdyn_taxcodedetail_FormattedResult {
}
interface msdyn_taxcodedetail_Select {
}
interface msdyn_taxcodedetail_Expand {
}
interface msdyn_taxcodedetail_Filter {
}
interface msdyn_taxcodedetail_Create extends msdyn_taxcodedetail {
}
interface msdyn_taxcodedetail_Update extends msdyn_taxcodedetail {
}
interface msdyn_teamschannelengagementctx_Base extends WebEntity {
}
interface msdyn_teamschannelengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_teamschannelengagementctxid: string;
}
interface msdyn_teamschannelengagementctx extends msdyn_teamschannelengagementctx_Base, msdyn_teamschannelengagementctx_Relationships {
}
interface msdyn_teamschannelengagementctx_Relationships {
}
interface msdyn_teamschannelengagementctx_Result extends msdyn_teamschannelengagementctx_Base, msdyn_teamschannelengagementctx_Relationships {
}
interface msdyn_teamschannelengagementctx_FormattedResult {
}
interface msdyn_teamschannelengagementctx_Select {
}
interface msdyn_teamschannelengagementctx_Expand {
}
interface msdyn_teamschannelengagementctx_Filter {
}
interface msdyn_teamschannelengagementctx_Create extends msdyn_teamschannelengagementctx {
}
interface msdyn_teamschannelengagementctx_Update extends msdyn_teamschannelengagementctx {
}
interface msdyn_teamschatassociation_Base extends WebEntity {
}
interface msdyn_teamschatassociation_Fixed extends WebEntity_Fixed {
  msdyn_teamschatassociationid: string;
}
interface msdyn_teamschatassociation extends msdyn_teamschatassociation_Base, msdyn_teamschatassociation_Relationships {
}
interface msdyn_teamschatassociation_Relationships {
}
interface msdyn_teamschatassociation_Result extends msdyn_teamschatassociation_Base, msdyn_teamschatassociation_Relationships {
}
interface msdyn_teamschatassociation_FormattedResult {
}
interface msdyn_teamschatassociation_Select {
}
interface msdyn_teamschatassociation_Expand {
}
interface msdyn_teamschatassociation_Filter {
}
interface msdyn_teamschatassociation_Create extends msdyn_teamschatassociation {
}
interface msdyn_teamschatassociation_Update extends msdyn_teamschatassociation {
}
interface msdyn_teamschatsuggestion_Base extends WebEntity {
}
interface msdyn_teamschatsuggestion_Fixed extends WebEntity_Fixed {
  msdyn_teamschatsuggestionid: string;
}
interface msdyn_teamschatsuggestion extends msdyn_teamschatsuggestion_Base, msdyn_teamschatsuggestion_Relationships {
}
interface msdyn_teamschatsuggestion_Relationships {
}
interface msdyn_teamschatsuggestion_Result extends msdyn_teamschatsuggestion_Base, msdyn_teamschatsuggestion_Relationships {
}
interface msdyn_teamschatsuggestion_FormattedResult {
}
interface msdyn_teamschatsuggestion_Select {
}
interface msdyn_teamschatsuggestion_Expand {
}
interface msdyn_teamschatsuggestion_Filter {
}
interface msdyn_teamschatsuggestion_Create extends msdyn_teamschatsuggestion {
}
interface msdyn_teamschatsuggestion_Update extends msdyn_teamschatsuggestion {
}
interface msdyn_TeamsCollaboration_Base extends WebEntity {
}
interface msdyn_TeamsCollaboration_Fixed extends WebEntity_Fixed {
  msdyn_teamscollaborationid: string;
}
interface msdyn_TeamsCollaboration extends msdyn_TeamsCollaboration_Base, msdyn_TeamsCollaboration_Relationships {
}
interface msdyn_TeamsCollaboration_Relationships {
}
interface msdyn_TeamsCollaboration_Result extends msdyn_TeamsCollaboration_Base, msdyn_TeamsCollaboration_Relationships {
}
interface msdyn_TeamsCollaboration_FormattedResult {
}
interface msdyn_TeamsCollaboration_Select {
}
interface msdyn_TeamsCollaboration_Expand {
}
interface msdyn_TeamsCollaboration_Filter {
}
interface msdyn_TeamsCollaboration_Create extends msdyn_TeamsCollaboration {
}
interface msdyn_TeamsCollaboration_Update extends msdyn_TeamsCollaboration {
}
interface msdyn_teamsdialeradminsettings_Base extends WebEntity {
}
interface msdyn_teamsdialeradminsettings_Fixed extends WebEntity_Fixed {
  msdyn_teamsdialeradminsettingsid: string;
}
interface msdyn_teamsdialeradminsettings extends msdyn_teamsdialeradminsettings_Base, msdyn_teamsdialeradminsettings_Relationships {
}
interface msdyn_teamsdialeradminsettings_Relationships {
}
interface msdyn_teamsdialeradminsettings_Result extends msdyn_teamsdialeradminsettings_Base, msdyn_teamsdialeradminsettings_Relationships {
}
interface msdyn_teamsdialeradminsettings_FormattedResult {
}
interface msdyn_teamsdialeradminsettings_Select {
}
interface msdyn_teamsdialeradminsettings_Expand {
}
interface msdyn_teamsdialeradminsettings_Filter {
}
interface msdyn_teamsdialeradminsettings_Create extends msdyn_teamsdialeradminsettings {
}
interface msdyn_teamsdialeradminsettings_Update extends msdyn_teamsdialeradminsettings {
}
interface msdyn_teamsengagementctx_Base extends WebEntity {
}
interface msdyn_teamsengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_teamsengagementctxid: string;
}
interface msdyn_teamsengagementctx extends msdyn_teamsengagementctx_Base, msdyn_teamsengagementctx_Relationships {
}
interface msdyn_teamsengagementctx_Relationships {
}
interface msdyn_teamsengagementctx_Result extends msdyn_teamsengagementctx_Base, msdyn_teamsengagementctx_Relationships {
}
interface msdyn_teamsengagementctx_FormattedResult {
}
interface msdyn_teamsengagementctx_Select {
}
interface msdyn_teamsengagementctx_Expand {
}
interface msdyn_teamsengagementctx_Filter {
}
interface msdyn_teamsengagementctx_Create extends msdyn_teamsengagementctx {
}
interface msdyn_teamsengagementctx_Update extends msdyn_teamsengagementctx {
}
interface msdyn_templateforproperties_Base extends WebEntity {
}
interface msdyn_templateforproperties_Fixed extends WebEntity_Fixed {
  msdyn_templateforpropertiesid: string;
}
interface msdyn_templateforproperties extends msdyn_templateforproperties_Base, msdyn_templateforproperties_Relationships {
}
interface msdyn_templateforproperties_Relationships {
}
interface msdyn_templateforproperties_Result extends msdyn_templateforproperties_Base, msdyn_templateforproperties_Relationships {
}
interface msdyn_templateforproperties_FormattedResult {
}
interface msdyn_templateforproperties_Select {
}
interface msdyn_templateforproperties_Expand {
}
interface msdyn_templateforproperties_Filter {
}
interface msdyn_templateforproperties_Create extends msdyn_templateforproperties {
}
interface msdyn_templateforproperties_Update extends msdyn_templateforproperties {
}
interface msdyn_templateparameter_Base extends WebEntity {
}
interface msdyn_templateparameter_Fixed extends WebEntity_Fixed {
  msdyn_templateparameterid: string;
}
interface msdyn_templateparameter extends msdyn_templateparameter_Base, msdyn_templateparameter_Relationships {
}
interface msdyn_templateparameter_Relationships {
}
interface msdyn_templateparameter_Result extends msdyn_templateparameter_Base, msdyn_templateparameter_Relationships {
}
interface msdyn_templateparameter_FormattedResult {
}
interface msdyn_templateparameter_Select {
}
interface msdyn_templateparameter_Expand {
}
interface msdyn_templateparameter_Filter {
}
interface msdyn_templateparameter_Create extends msdyn_templateparameter {
}
interface msdyn_templateparameter_Update extends msdyn_templateparameter {
}
interface msdyn_templatetags_Base extends WebEntity {
}
interface msdyn_templatetags_Fixed extends WebEntity_Fixed {
  msdyn_templatetagsid: string;
}
interface msdyn_templatetags extends msdyn_templatetags_Base, msdyn_templatetags_Relationships {
}
interface msdyn_templatetags_Relationships {
}
interface msdyn_templatetags_Result extends msdyn_templatetags_Base, msdyn_templatetags_Relationships {
}
interface msdyn_templatetags_FormattedResult {
}
interface msdyn_templatetags_Select {
}
interface msdyn_templatetags_Expand {
}
interface msdyn_templatetags_Filter {
}
interface msdyn_templatetags_Create extends msdyn_templatetags {
}
interface msdyn_templatetags_Update extends msdyn_templatetags {
}
interface msdyn_timeentry_Base extends WebEntity {
}
interface msdyn_timeentry_Fixed extends WebEntity_Fixed {
  msdyn_timeentryid: string;
}
interface msdyn_timeentry extends msdyn_timeentry_Base, msdyn_timeentry_Relationships {
}
interface msdyn_timeentry_Relationships {
}
interface msdyn_timeentry_Result extends msdyn_timeentry_Base, msdyn_timeentry_Relationships {
}
interface msdyn_timeentry_FormattedResult {
}
interface msdyn_timeentry_Select {
}
interface msdyn_timeentry_Expand {
}
interface msdyn_timeentry_Filter {
}
interface msdyn_timeentry_Create extends msdyn_timeentry {
}
interface msdyn_timeentry_Update extends msdyn_timeentry {
}
interface msdyn_timeentrysetting_Base extends WebEntity {
}
interface msdyn_timeentrysetting_Fixed extends WebEntity_Fixed {
  msdyn_timeentrysettingid: string;
}
interface msdyn_timeentrysetting extends msdyn_timeentrysetting_Base, msdyn_timeentrysetting_Relationships {
}
interface msdyn_timeentrysetting_Relationships {
}
interface msdyn_timeentrysetting_Result extends msdyn_timeentrysetting_Base, msdyn_timeentrysetting_Relationships {
}
interface msdyn_timeentrysetting_FormattedResult {
}
interface msdyn_timeentrysetting_Select {
}
interface msdyn_timeentrysetting_Expand {
}
interface msdyn_timeentrysetting_Filter {
}
interface msdyn_timeentrysetting_Create extends msdyn_timeentrysetting {
}
interface msdyn_timeentrysetting_Update extends msdyn_timeentrysetting {
}
interface msdyn_timegroup_Base extends WebEntity {
}
interface msdyn_timegroup_Fixed extends WebEntity_Fixed {
  msdyn_timegroupid: string;
}
interface msdyn_timegroup extends msdyn_timegroup_Base, msdyn_timegroup_Relationships {
}
interface msdyn_timegroup_Relationships {
}
interface msdyn_timegroup_Result extends msdyn_timegroup_Base, msdyn_timegroup_Relationships {
}
interface msdyn_timegroup_FormattedResult {
}
interface msdyn_timegroup_Select {
}
interface msdyn_timegroup_Expand {
}
interface msdyn_timegroup_Filter {
}
interface msdyn_timegroup_Create extends msdyn_timegroup {
}
interface msdyn_timegroup_Update extends msdyn_timegroup {
}
interface msdyn_timegroupdetail_Base extends WebEntity {
}
interface msdyn_timegroupdetail_Fixed extends WebEntity_Fixed {
  msdyn_timegroupdetailid: string;
}
interface msdyn_timegroupdetail extends msdyn_timegroupdetail_Base, msdyn_timegroupdetail_Relationships {
}
interface msdyn_timegroupdetail_Relationships {
}
interface msdyn_timegroupdetail_Result extends msdyn_timegroupdetail_Base, msdyn_timegroupdetail_Relationships {
}
interface msdyn_timegroupdetail_FormattedResult {
}
interface msdyn_timegroupdetail_Select {
}
interface msdyn_timegroupdetail_Expand {
}
interface msdyn_timegroupdetail_Filter {
}
interface msdyn_timegroupdetail_Create extends msdyn_timegroupdetail {
}
interface msdyn_timegroupdetail_Update extends msdyn_timegroupdetail {
}
interface msdyn_timeoffcalendar_Base extends WebEntity {
}
interface msdyn_timeoffcalendar_Fixed extends WebEntity_Fixed {
  msdyn_timeoffcalendarid: string;
}
interface msdyn_timeoffcalendar extends msdyn_timeoffcalendar_Base, msdyn_timeoffcalendar_Relationships {
}
interface msdyn_timeoffcalendar_Relationships {
}
interface msdyn_timeoffcalendar_Result extends msdyn_timeoffcalendar_Base, msdyn_timeoffcalendar_Relationships {
}
interface msdyn_timeoffcalendar_FormattedResult {
}
interface msdyn_timeoffcalendar_Select {
}
interface msdyn_timeoffcalendar_Expand {
}
interface msdyn_timeoffcalendar_Filter {
}
interface msdyn_timeoffcalendar_Create extends msdyn_timeoffcalendar {
}
interface msdyn_timeoffcalendar_Update extends msdyn_timeoffcalendar {
}
interface msdyn_timeoffrequest_Base extends WebEntity {
}
interface msdyn_timeoffrequest_Fixed extends WebEntity_Fixed {
  msdyn_timeoffrequestid: string;
}
interface msdyn_timeoffrequest extends msdyn_timeoffrequest_Base, msdyn_timeoffrequest_Relationships {
}
interface msdyn_timeoffrequest_Relationships {
}
interface msdyn_timeoffrequest_Result extends msdyn_timeoffrequest_Base, msdyn_timeoffrequest_Relationships {
}
interface msdyn_timeoffrequest_FormattedResult {
}
interface msdyn_timeoffrequest_Select {
}
interface msdyn_timeoffrequest_Expand {
}
interface msdyn_timeoffrequest_Filter {
}
interface msdyn_timeoffrequest_Create extends msdyn_timeoffrequest {
}
interface msdyn_timeoffrequest_Update extends msdyn_timeoffrequest {
}
interface msdyn_tour_Base extends WebEntity {
}
interface msdyn_tour_Fixed extends WebEntity_Fixed {
  msdyn_tourid: string;
}
interface msdyn_tour extends msdyn_tour_Base, msdyn_tour_Relationships {
}
interface msdyn_tour_Relationships {
}
interface msdyn_tour_Result extends msdyn_tour_Base, msdyn_tour_Relationships {
}
interface msdyn_tour_FormattedResult {
}
interface msdyn_tour_Select {
}
interface msdyn_tour_Expand {
}
interface msdyn_tour_Filter {
}
interface msdyn_tour_Create extends msdyn_tour {
}
interface msdyn_tour_Update extends msdyn_tour {
}
interface msdyn_transactioncategory_Base extends WebEntity {
}
interface msdyn_transactioncategory_Fixed extends WebEntity_Fixed {
  msdyn_transactioncategoryid: string;
}
interface msdyn_transactioncategory extends msdyn_transactioncategory_Base, msdyn_transactioncategory_Relationships {
}
interface msdyn_transactioncategory_Relationships {
}
interface msdyn_transactioncategory_Result extends msdyn_transactioncategory_Base, msdyn_transactioncategory_Relationships {
}
interface msdyn_transactioncategory_FormattedResult {
}
interface msdyn_transactioncategory_Select {
}
interface msdyn_transactioncategory_Expand {
}
interface msdyn_transactioncategory_Filter {
}
interface msdyn_transactioncategory_Create extends msdyn_transactioncategory {
}
interface msdyn_transactioncategory_Update extends msdyn_transactioncategory {
}
interface msdyn_transactioncategoryclassification_Base extends WebEntity {
}
interface msdyn_transactioncategoryclassification_Fixed extends WebEntity_Fixed {
  msdyn_transactioncategoryclassificationid: string;
}
interface msdyn_transactioncategoryclassification extends msdyn_transactioncategoryclassification_Base, msdyn_transactioncategoryclassification_Relationships {
}
interface msdyn_transactioncategoryclassification_Relationships {
}
interface msdyn_transactioncategoryclassification_Result extends msdyn_transactioncategoryclassification_Base, msdyn_transactioncategoryclassification_Relationships {
}
interface msdyn_transactioncategoryclassification_FormattedResult {
}
interface msdyn_transactioncategoryclassification_Select {
}
interface msdyn_transactioncategoryclassification_Expand {
}
interface msdyn_transactioncategoryclassification_Filter {
}
interface msdyn_transactioncategoryclassification_Create extends msdyn_transactioncategoryclassification {
}
interface msdyn_transactioncategoryclassification_Update extends msdyn_transactioncategoryclassification {
}
interface msdyn_transactioncategoryhierarchyelement_Base extends WebEntity {
}
interface msdyn_transactioncategoryhierarchyelement_Fixed extends WebEntity_Fixed {
  msdyn_transactioncategoryhierarchyelementid: string;
}
interface msdyn_transactioncategoryhierarchyelement extends msdyn_transactioncategoryhierarchyelement_Base, msdyn_transactioncategoryhierarchyelement_Relationships {
}
interface msdyn_transactioncategoryhierarchyelement_Relationships {
}
interface msdyn_transactioncategoryhierarchyelement_Result extends msdyn_transactioncategoryhierarchyelement_Base, msdyn_transactioncategoryhierarchyelement_Relationships {
}
interface msdyn_transactioncategoryhierarchyelement_FormattedResult {
}
interface msdyn_transactioncategoryhierarchyelement_Select {
}
interface msdyn_transactioncategoryhierarchyelement_Expand {
}
interface msdyn_transactioncategoryhierarchyelement_Filter {
}
interface msdyn_transactioncategoryhierarchyelement_Create extends msdyn_transactioncategoryhierarchyelement {
}
interface msdyn_transactioncategoryhierarchyelement_Update extends msdyn_transactioncategoryhierarchyelement {
}
interface msdyn_transactioncategorypricelevel_Base extends WebEntity {
}
interface msdyn_transactioncategorypricelevel_Fixed extends WebEntity_Fixed {
  msdyn_transactioncategorypricelevelid: string;
}
interface msdyn_transactioncategorypricelevel extends msdyn_transactioncategorypricelevel_Base, msdyn_transactioncategorypricelevel_Relationships {
}
interface msdyn_transactioncategorypricelevel_Relationships {
}
interface msdyn_transactioncategorypricelevel_Result extends msdyn_transactioncategorypricelevel_Base, msdyn_transactioncategorypricelevel_Relationships {
}
interface msdyn_transactioncategorypricelevel_FormattedResult {
}
interface msdyn_transactioncategorypricelevel_Select {
}
interface msdyn_transactioncategorypricelevel_Expand {
}
interface msdyn_transactioncategorypricelevel_Filter {
}
interface msdyn_transactioncategorypricelevel_Create extends msdyn_transactioncategorypricelevel {
}
interface msdyn_transactioncategorypricelevel_Update extends msdyn_transactioncategorypricelevel {
}
interface msdyn_transactionconnection_Base extends WebEntity {
}
interface msdyn_transactionconnection_Fixed extends WebEntity_Fixed {
  msdyn_transactionconnectionid: string;
}
interface msdyn_transactionconnection extends msdyn_transactionconnection_Base, msdyn_transactionconnection_Relationships {
}
interface msdyn_transactionconnection_Relationships {
}
interface msdyn_transactionconnection_Result extends msdyn_transactionconnection_Base, msdyn_transactionconnection_Relationships {
}
interface msdyn_transactionconnection_FormattedResult {
}
interface msdyn_transactionconnection_Select {
}
interface msdyn_transactionconnection_Expand {
}
interface msdyn_transactionconnection_Filter {
}
interface msdyn_transactionconnection_Create extends msdyn_transactionconnection {
}
interface msdyn_transactionconnection_Update extends msdyn_transactionconnection {
}
interface msdyn_transactionorigin_Base extends WebEntity {
}
interface msdyn_transactionorigin_Fixed extends WebEntity_Fixed {
  msdyn_transactionoriginid: string;
}
interface msdyn_transactionorigin extends msdyn_transactionorigin_Base, msdyn_transactionorigin_Relationships {
}
interface msdyn_transactionorigin_Relationships {
}
interface msdyn_transactionorigin_Result extends msdyn_transactionorigin_Base, msdyn_transactionorigin_Relationships {
}
interface msdyn_transactionorigin_FormattedResult {
}
interface msdyn_transactionorigin_Select {
}
interface msdyn_transactionorigin_Expand {
}
interface msdyn_transactionorigin_Filter {
}
interface msdyn_transactionorigin_Create extends msdyn_transactionorigin {
}
interface msdyn_transactionorigin_Update extends msdyn_transactionorigin {
}
interface msdyn_transactiontype_Base extends WebEntity {
}
interface msdyn_transactiontype_Fixed extends WebEntity_Fixed {
  msdyn_transactiontypeid: string;
}
interface msdyn_transactiontype extends msdyn_transactiontype_Base, msdyn_transactiontype_Relationships {
}
interface msdyn_transactiontype_Relationships {
}
interface msdyn_transactiontype_Result extends msdyn_transactiontype_Base, msdyn_transactiontype_Relationships {
}
interface msdyn_transactiontype_FormattedResult {
}
interface msdyn_transactiontype_Select {
}
interface msdyn_transactiontype_Expand {
}
interface msdyn_transactiontype_Filter {
}
interface msdyn_transactiontype_Create extends msdyn_transactiontype {
}
interface msdyn_transactiontype_Update extends msdyn_transactiontype {
}
interface msdyn_transcript_Base extends WebEntity {
}
interface msdyn_transcript_Fixed extends WebEntity_Fixed {
  msdyn_transcriptid: string;
}
interface msdyn_transcript extends msdyn_transcript_Base, msdyn_transcript_Relationships {
}
interface msdyn_transcript_Relationships {
}
interface msdyn_transcript_Result extends msdyn_transcript_Base, msdyn_transcript_Relationships {
}
interface msdyn_transcript_FormattedResult {
}
interface msdyn_transcript_Select {
}
interface msdyn_transcript_Expand {
}
interface msdyn_transcript_Filter {
}
interface msdyn_transcript_Create extends msdyn_transcript {
}
interface msdyn_transcript_Update extends msdyn_transcript {
}
interface msdyn_twitterengagementctx_Base extends WebEntity {
}
interface msdyn_twitterengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_twitterengagementctxid: string;
}
interface msdyn_twitterengagementctx extends msdyn_twitterengagementctx_Base, msdyn_twitterengagementctx_Relationships {
}
interface msdyn_twitterengagementctx_Relationships {
}
interface msdyn_twitterengagementctx_Result extends msdyn_twitterengagementctx_Base, msdyn_twitterengagementctx_Relationships {
}
interface msdyn_twitterengagementctx_FormattedResult {
}
interface msdyn_twitterengagementctx_Select {
}
interface msdyn_twitterengagementctx_Expand {
}
interface msdyn_twitterengagementctx_Filter {
}
interface msdyn_twitterengagementctx_Create extends msdyn_twitterengagementctx {
}
interface msdyn_twitterengagementctx_Update extends msdyn_twitterengagementctx {
}
interface msdyn_unifiedroutingdiagnostic_Base extends WebEntity {
}
interface msdyn_unifiedroutingdiagnostic_Fixed extends WebEntity_Fixed {
  msdyn_unifiedroutingdiagnosticid: string;
}
interface msdyn_unifiedroutingdiagnostic extends msdyn_unifiedroutingdiagnostic_Base, msdyn_unifiedroutingdiagnostic_Relationships {
}
interface msdyn_unifiedroutingdiagnostic_Relationships {
}
interface msdyn_unifiedroutingdiagnostic_Result extends msdyn_unifiedroutingdiagnostic_Base, msdyn_unifiedroutingdiagnostic_Relationships {
}
interface msdyn_unifiedroutingdiagnostic_FormattedResult {
}
interface msdyn_unifiedroutingdiagnostic_Select {
}
interface msdyn_unifiedroutingdiagnostic_Expand {
}
interface msdyn_unifiedroutingdiagnostic_Filter {
}
interface msdyn_unifiedroutingdiagnostic_Create extends msdyn_unifiedroutingdiagnostic {
}
interface msdyn_unifiedroutingdiagnostic_Update extends msdyn_unifiedroutingdiagnostic {
}
interface msdyn_unifiedroutingrun_Base extends WebEntity {
}
interface msdyn_unifiedroutingrun_Fixed extends WebEntity_Fixed {
  msdyn_unifiedroutingrunid: string;
}
interface msdyn_unifiedroutingrun extends msdyn_unifiedroutingrun_Base, msdyn_unifiedroutingrun_Relationships {
}
interface msdyn_unifiedroutingrun_Relationships {
}
interface msdyn_unifiedroutingrun_Result extends msdyn_unifiedroutingrun_Base, msdyn_unifiedroutingrun_Relationships {
}
interface msdyn_unifiedroutingrun_FormattedResult {
}
interface msdyn_unifiedroutingrun_Select {
}
interface msdyn_unifiedroutingrun_Expand {
}
interface msdyn_unifiedroutingrun_Filter {
}
interface msdyn_unifiedroutingrun_Create extends msdyn_unifiedroutingrun {
}
interface msdyn_unifiedroutingrun_Update extends msdyn_unifiedroutingrun {
}
interface msdyn_unifiedroutingsetuptracker_Base extends WebEntity {
}
interface msdyn_unifiedroutingsetuptracker_Fixed extends WebEntity_Fixed {
  msdyn_unifiedroutingsetuptrackerid: string;
}
interface msdyn_unifiedroutingsetuptracker extends msdyn_unifiedroutingsetuptracker_Base, msdyn_unifiedroutingsetuptracker_Relationships {
}
interface msdyn_unifiedroutingsetuptracker_Relationships {
}
interface msdyn_unifiedroutingsetuptracker_Result extends msdyn_unifiedroutingsetuptracker_Base, msdyn_unifiedroutingsetuptracker_Relationships {
}
interface msdyn_unifiedroutingsetuptracker_FormattedResult {
}
interface msdyn_unifiedroutingsetuptracker_Select {
}
interface msdyn_unifiedroutingsetuptracker_Expand {
}
interface msdyn_unifiedroutingsetuptracker_Filter {
}
interface msdyn_unifiedroutingsetuptracker_Create extends msdyn_unifiedroutingsetuptracker {
}
interface msdyn_unifiedroutingsetuptracker_Update extends msdyn_unifiedroutingsetuptracker {
}
interface msdyn_uniquenumber_Base extends WebEntity {
}
interface msdyn_uniquenumber_Fixed extends WebEntity_Fixed {
  msdyn_uniquenumberid: string;
}
interface msdyn_uniquenumber extends msdyn_uniquenumber_Base, msdyn_uniquenumber_Relationships {
}
interface msdyn_uniquenumber_Relationships {
}
interface msdyn_uniquenumber_Result extends msdyn_uniquenumber_Base, msdyn_uniquenumber_Relationships {
}
interface msdyn_uniquenumber_FormattedResult {
}
interface msdyn_uniquenumber_Select {
}
interface msdyn_uniquenumber_Expand {
}
interface msdyn_uniquenumber_Filter {
}
interface msdyn_uniquenumber_Create extends msdyn_uniquenumber {
}
interface msdyn_uniquenumber_Update extends msdyn_uniquenumber {
}
interface msdyn_untrackedappointment_Base extends WebEntity {
}
interface msdyn_untrackedappointment_Fixed extends WebEntity_Fixed {
  msdyn_untrackedappointmentid: string;
}
interface msdyn_untrackedappointment extends msdyn_untrackedappointment_Base, msdyn_untrackedappointment_Relationships {
}
interface msdyn_untrackedappointment_Relationships {
}
interface msdyn_untrackedappointment_Result extends msdyn_untrackedappointment_Base, msdyn_untrackedappointment_Relationships {
}
interface msdyn_untrackedappointment_FormattedResult {
}
interface msdyn_untrackedappointment_Select {
}
interface msdyn_untrackedappointment_Expand {
}
interface msdyn_untrackedappointment_Filter {
}
interface msdyn_untrackedappointment_Create extends msdyn_untrackedappointment {
}
interface msdyn_untrackedappointment_Update extends msdyn_untrackedappointment {
}
interface msdyn_upgraderun_Base extends WebEntity {
}
interface msdyn_upgraderun_Fixed extends WebEntity_Fixed {
  msdyn_upgraderunid: string;
}
interface msdyn_upgraderun extends msdyn_upgraderun_Base, msdyn_upgraderun_Relationships {
}
interface msdyn_upgraderun_Relationships {
}
interface msdyn_upgraderun_Result extends msdyn_upgraderun_Base, msdyn_upgraderun_Relationships {
}
interface msdyn_upgraderun_FormattedResult {
}
interface msdyn_upgraderun_Select {
}
interface msdyn_upgraderun_Expand {
}
interface msdyn_upgraderun_Filter {
}
interface msdyn_upgraderun_Create extends msdyn_upgraderun {
}
interface msdyn_upgraderun_Update extends msdyn_upgraderun {
}
interface msdyn_upgradestep_Base extends WebEntity {
}
interface msdyn_upgradestep_Fixed extends WebEntity_Fixed {
  msdyn_upgradestepid: string;
}
interface msdyn_upgradestep extends msdyn_upgradestep_Base, msdyn_upgradestep_Relationships {
}
interface msdyn_upgradestep_Relationships {
}
interface msdyn_upgradestep_Result extends msdyn_upgradestep_Base, msdyn_upgradestep_Relationships {
}
interface msdyn_upgradestep_FormattedResult {
}
interface msdyn_upgradestep_Select {
}
interface msdyn_upgradestep_Expand {
}
interface msdyn_upgradestep_Filter {
}
interface msdyn_upgradestep_Create extends msdyn_upgradestep {
}
interface msdyn_upgradestep_Update extends msdyn_upgradestep {
}
interface msdyn_upgradeversion_Base extends WebEntity {
}
interface msdyn_upgradeversion_Fixed extends WebEntity_Fixed {
  msdyn_upgradeversionid: string;
}
interface msdyn_upgradeversion extends msdyn_upgradeversion_Base, msdyn_upgradeversion_Relationships {
}
interface msdyn_upgradeversion_Relationships {
}
interface msdyn_upgradeversion_Result extends msdyn_upgradeversion_Base, msdyn_upgradeversion_Relationships {
}
interface msdyn_upgradeversion_FormattedResult {
}
interface msdyn_upgradeversion_Select {
}
interface msdyn_upgradeversion_Expand {
}
interface msdyn_upgradeversion_Filter {
}
interface msdyn_upgradeversion_Create extends msdyn_upgradeversion {
}
interface msdyn_upgradeversion_Update extends msdyn_upgradeversion {
}
interface msdyn_urnotificationtemplate_Base extends WebEntity {
}
interface msdyn_urnotificationtemplate_Fixed extends WebEntity_Fixed {
  msdyn_urnotificationtemplateid: string;
}
interface msdyn_urnotificationtemplate extends msdyn_urnotificationtemplate_Base, msdyn_urnotificationtemplate_Relationships {
}
interface msdyn_urnotificationtemplate_Relationships {
}
interface msdyn_urnotificationtemplate_Result extends msdyn_urnotificationtemplate_Base, msdyn_urnotificationtemplate_Relationships {
}
interface msdyn_urnotificationtemplate_FormattedResult {
}
interface msdyn_urnotificationtemplate_Select {
}
interface msdyn_urnotificationtemplate_Expand {
}
interface msdyn_urnotificationtemplate_Filter {
}
interface msdyn_urnotificationtemplate_Create extends msdyn_urnotificationtemplate {
}
interface msdyn_urnotificationtemplate_Update extends msdyn_urnotificationtemplate {
}
interface msdyn_urnotificationtemplatemapping_Base extends WebEntity {
}
interface msdyn_urnotificationtemplatemapping_Fixed extends WebEntity_Fixed {
  msdyn_urnotificationtemplatemappingid: string;
}
interface msdyn_urnotificationtemplatemapping extends msdyn_urnotificationtemplatemapping_Base, msdyn_urnotificationtemplatemapping_Relationships {
}
interface msdyn_urnotificationtemplatemapping_Relationships {
}
interface msdyn_urnotificationtemplatemapping_Result extends msdyn_urnotificationtemplatemapping_Base, msdyn_urnotificationtemplatemapping_Relationships {
}
interface msdyn_urnotificationtemplatemapping_FormattedResult {
}
interface msdyn_urnotificationtemplatemapping_Select {
}
interface msdyn_urnotificationtemplatemapping_Expand {
}
interface msdyn_urnotificationtemplatemapping_Filter {
}
interface msdyn_urnotificationtemplatemapping_Create extends msdyn_urnotificationtemplatemapping {
}
interface msdyn_urnotificationtemplatemapping_Update extends msdyn_urnotificationtemplatemapping {
}
interface msdyn_usersetting_Base extends WebEntity {
}
interface msdyn_usersetting_Fixed extends WebEntity_Fixed {
  msdyn_usersettingid: string;
}
interface msdyn_usersetting extends msdyn_usersetting_Base, msdyn_usersetting_Relationships {
}
interface msdyn_usersetting_Relationships {
}
interface msdyn_usersetting_Result extends msdyn_usersetting_Base, msdyn_usersetting_Relationships {
}
interface msdyn_usersetting_FormattedResult {
}
interface msdyn_usersetting_Select {
}
interface msdyn_usersetting_Expand {
}
interface msdyn_usersetting_Filter {
}
interface msdyn_usersetting_Create extends msdyn_usersetting {
}
interface msdyn_usersetting_Update extends msdyn_usersetting {
}
interface msdyn_userworkhistory_Base extends WebEntity {
}
interface msdyn_userworkhistory_Fixed extends WebEntity_Fixed {
  msdyn_userworkhistoryid: string;
}
interface msdyn_userworkhistory extends msdyn_userworkhistory_Base, msdyn_userworkhistory_Relationships {
}
interface msdyn_userworkhistory_Relationships {
}
interface msdyn_userworkhistory_Result extends msdyn_userworkhistory_Base, msdyn_userworkhistory_Relationships {
}
interface msdyn_userworkhistory_FormattedResult {
}
interface msdyn_userworkhistory_Select {
}
interface msdyn_userworkhistory_Expand {
}
interface msdyn_userworkhistory_Filter {
}
interface msdyn_userworkhistory_Create extends msdyn_userworkhistory {
}
interface msdyn_userworkhistory_Update extends msdyn_userworkhistory {
}
interface msdyn_visitorjourney_Base extends WebEntity {
}
interface msdyn_visitorjourney_Fixed extends WebEntity_Fixed {
  msdyn_visitorjourneyid: string;
}
interface msdyn_visitorjourney extends msdyn_visitorjourney_Base, msdyn_visitorjourney_Relationships {
}
interface msdyn_visitorjourney_Relationships {
}
interface msdyn_visitorjourney_Result extends msdyn_visitorjourney_Base, msdyn_visitorjourney_Relationships {
}
interface msdyn_visitorjourney_FormattedResult {
}
interface msdyn_visitorjourney_Select {
}
interface msdyn_visitorjourney_Expand {
}
interface msdyn_visitorjourney_Filter {
}
interface msdyn_visitorjourney_Create extends msdyn_visitorjourney {
}
interface msdyn_visitorjourney_Update extends msdyn_visitorjourney {
}
interface msdyn_wallsavedquery_Base extends WebEntity {
}
interface msdyn_wallsavedquery_Fixed extends WebEntity_Fixed {
  msdyn_wallsavedqueryid: string;
}
interface msdyn_wallsavedquery extends msdyn_wallsavedquery_Base, msdyn_wallsavedquery_Relationships {
}
interface msdyn_wallsavedquery_Relationships {
}
interface msdyn_wallsavedquery_Result extends msdyn_wallsavedquery_Base, msdyn_wallsavedquery_Relationships {
}
interface msdyn_wallsavedquery_FormattedResult {
}
interface msdyn_wallsavedquery_Select {
}
interface msdyn_wallsavedquery_Expand {
}
interface msdyn_wallsavedquery_Filter {
}
interface msdyn_wallsavedquery_Create extends msdyn_wallsavedquery {
}
interface msdyn_wallsavedquery_Update extends msdyn_wallsavedquery {
}
interface msdyn_wallsavedqueryusersettings_Base extends WebEntity {
}
interface msdyn_wallsavedqueryusersettings_Fixed extends WebEntity_Fixed {
  msdyn_wallsavedqueryusersettingsid: string;
}
interface msdyn_wallsavedqueryusersettings extends msdyn_wallsavedqueryusersettings_Base, msdyn_wallsavedqueryusersettings_Relationships {
}
interface msdyn_wallsavedqueryusersettings_Relationships {
}
interface msdyn_wallsavedqueryusersettings_Result extends msdyn_wallsavedqueryusersettings_Base, msdyn_wallsavedqueryusersettings_Relationships {
}
interface msdyn_wallsavedqueryusersettings_FormattedResult {
}
interface msdyn_wallsavedqueryusersettings_Select {
}
interface msdyn_wallsavedqueryusersettings_Expand {
}
interface msdyn_wallsavedqueryusersettings_Filter {
}
interface msdyn_wallsavedqueryusersettings_Create extends msdyn_wallsavedqueryusersettings {
}
interface msdyn_wallsavedqueryusersettings_Update extends msdyn_wallsavedqueryusersettings {
}
interface msdyn_warehouse_Base extends WebEntity {
}
interface msdyn_warehouse_Fixed extends WebEntity_Fixed {
  msdyn_warehouseid: string;
}
interface msdyn_warehouse extends msdyn_warehouse_Base, msdyn_warehouse_Relationships {
}
interface msdyn_warehouse_Relationships {
}
interface msdyn_warehouse_Result extends msdyn_warehouse_Base, msdyn_warehouse_Relationships {
}
interface msdyn_warehouse_FormattedResult {
}
interface msdyn_warehouse_Select {
}
interface msdyn_warehouse_Expand {
}
interface msdyn_warehouse_Filter {
}
interface msdyn_warehouse_Create extends msdyn_warehouse {
}
interface msdyn_warehouse_Update extends msdyn_warehouse {
}
interface msdyn_wechatengagementctx_Base extends WebEntity {
}
interface msdyn_wechatengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_wechatengagementctxid: string;
}
interface msdyn_wechatengagementctx extends msdyn_wechatengagementctx_Base, msdyn_wechatengagementctx_Relationships {
}
interface msdyn_wechatengagementctx_Relationships {
}
interface msdyn_wechatengagementctx_Result extends msdyn_wechatengagementctx_Base, msdyn_wechatengagementctx_Relationships {
}
interface msdyn_wechatengagementctx_FormattedResult {
}
interface msdyn_wechatengagementctx_Select {
}
interface msdyn_wechatengagementctx_Expand {
}
interface msdyn_wechatengagementctx_Filter {
}
interface msdyn_wechatengagementctx_Create extends msdyn_wechatengagementctx {
}
interface msdyn_wechatengagementctx_Update extends msdyn_wechatengagementctx {
}
interface msdyn_whatsappengagementctx_Base extends WebEntity {
}
interface msdyn_whatsappengagementctx_Fixed extends WebEntity_Fixed {
  msdyn_whatsappengagementctxid: string;
}
interface msdyn_whatsappengagementctx extends msdyn_whatsappengagementctx_Base, msdyn_whatsappengagementctx_Relationships {
}
interface msdyn_whatsappengagementctx_Relationships {
}
interface msdyn_whatsappengagementctx_Result extends msdyn_whatsappengagementctx_Base, msdyn_whatsappengagementctx_Relationships {
}
interface msdyn_whatsappengagementctx_FormattedResult {
}
interface msdyn_whatsappengagementctx_Select {
}
interface msdyn_whatsappengagementctx_Expand {
}
interface msdyn_whatsappengagementctx_Filter {
}
interface msdyn_whatsappengagementctx_Create extends msdyn_whatsappengagementctx {
}
interface msdyn_whatsappengagementctx_Update extends msdyn_whatsappengagementctx {
}
interface msdyn_workhourtemplate_Base extends WebEntity {
}
interface msdyn_workhourtemplate_Fixed extends WebEntity_Fixed {
  msdyn_workhourtemplateid: string;
}
interface msdyn_workhourtemplate extends msdyn_workhourtemplate_Base, msdyn_workhourtemplate_Relationships {
}
interface msdyn_workhourtemplate_Relationships {
}
interface msdyn_workhourtemplate_Result extends msdyn_workhourtemplate_Base, msdyn_workhourtemplate_Relationships {
}
interface msdyn_workhourtemplate_FormattedResult {
}
interface msdyn_workhourtemplate_Select {
}
interface msdyn_workhourtemplate_Expand {
}
interface msdyn_workhourtemplate_Filter {
}
interface msdyn_workhourtemplate_Create extends msdyn_workhourtemplate {
}
interface msdyn_workhourtemplate_Update extends msdyn_workhourtemplate {
}
interface msdyn_workorder_Base extends WebEntity {
}
interface msdyn_workorder_Fixed extends WebEntity_Fixed {
  msdyn_workorderid: string;
}
interface msdyn_workorder extends msdyn_workorder_Base, msdyn_workorder_Relationships {
}
interface msdyn_workorder_Relationships {
}
interface msdyn_workorder_Result extends msdyn_workorder_Base, msdyn_workorder_Relationships {
}
interface msdyn_workorder_FormattedResult {
}
interface msdyn_workorder_Select {
}
interface msdyn_workorder_Expand {
}
interface msdyn_workorder_Filter {
}
interface msdyn_workorder_Create extends msdyn_workorder {
}
interface msdyn_workorder_Update extends msdyn_workorder {
}
interface msdyn_workordercharacteristic_Base extends WebEntity {
}
interface msdyn_workordercharacteristic_Fixed extends WebEntity_Fixed {
  msdyn_workordercharacteristicid: string;
}
interface msdyn_workordercharacteristic extends msdyn_workordercharacteristic_Base, msdyn_workordercharacteristic_Relationships {
}
interface msdyn_workordercharacteristic_Relationships {
}
interface msdyn_workordercharacteristic_Result extends msdyn_workordercharacteristic_Base, msdyn_workordercharacteristic_Relationships {
}
interface msdyn_workordercharacteristic_FormattedResult {
}
interface msdyn_workordercharacteristic_Select {
}
interface msdyn_workordercharacteristic_Expand {
}
interface msdyn_workordercharacteristic_Filter {
}
interface msdyn_workordercharacteristic_Create extends msdyn_workordercharacteristic {
}
interface msdyn_workordercharacteristic_Update extends msdyn_workordercharacteristic {
}
interface msdyn_workorderdetailsgenerationqueue_Base extends WebEntity {
}
interface msdyn_workorderdetailsgenerationqueue_Fixed extends WebEntity_Fixed {
  msdyn_workorderdetailsgenerationqueueid: string;
}
interface msdyn_workorderdetailsgenerationqueue extends msdyn_workorderdetailsgenerationqueue_Base, msdyn_workorderdetailsgenerationqueue_Relationships {
}
interface msdyn_workorderdetailsgenerationqueue_Relationships {
}
interface msdyn_workorderdetailsgenerationqueue_Result extends msdyn_workorderdetailsgenerationqueue_Base, msdyn_workorderdetailsgenerationqueue_Relationships {
}
interface msdyn_workorderdetailsgenerationqueue_FormattedResult {
}
interface msdyn_workorderdetailsgenerationqueue_Select {
}
interface msdyn_workorderdetailsgenerationqueue_Expand {
}
interface msdyn_workorderdetailsgenerationqueue_Filter {
}
interface msdyn_workorderdetailsgenerationqueue_Create extends msdyn_workorderdetailsgenerationqueue {
}
interface msdyn_workorderdetailsgenerationqueue_Update extends msdyn_workorderdetailsgenerationqueue {
}
interface msdyn_workorderincident_Base extends WebEntity {
}
interface msdyn_workorderincident_Fixed extends WebEntity_Fixed {
  msdyn_workorderincidentid: string;
}
interface msdyn_workorderincident extends msdyn_workorderincident_Base, msdyn_workorderincident_Relationships {
}
interface msdyn_workorderincident_Relationships {
}
interface msdyn_workorderincident_Result extends msdyn_workorderincident_Base, msdyn_workorderincident_Relationships {
}
interface msdyn_workorderincident_FormattedResult {
}
interface msdyn_workorderincident_Select {
}
interface msdyn_workorderincident_Expand {
}
interface msdyn_workorderincident_Filter {
}
interface msdyn_workorderincident_Create extends msdyn_workorderincident {
}
interface msdyn_workorderincident_Update extends msdyn_workorderincident {
}
interface msdyn_workorderproduct_Base extends WebEntity {
}
interface msdyn_workorderproduct_Fixed extends WebEntity_Fixed {
  msdyn_workorderproductid: string;
}
interface msdyn_workorderproduct extends msdyn_workorderproduct_Base, msdyn_workorderproduct_Relationships {
}
interface msdyn_workorderproduct_Relationships {
}
interface msdyn_workorderproduct_Result extends msdyn_workorderproduct_Base, msdyn_workorderproduct_Relationships {
}
interface msdyn_workorderproduct_FormattedResult {
}
interface msdyn_workorderproduct_Select {
}
interface msdyn_workorderproduct_Expand {
}
interface msdyn_workorderproduct_Filter {
}
interface msdyn_workorderproduct_Create extends msdyn_workorderproduct {
}
interface msdyn_workorderproduct_Update extends msdyn_workorderproduct {
}
interface msdyn_workorderresolution_Base extends WebEntity {
}
interface msdyn_workorderresolution_Fixed extends WebEntity_Fixed {
  msdyn_workorderresolutionid: string;
}
interface msdyn_workorderresolution extends msdyn_workorderresolution_Base, msdyn_workorderresolution_Relationships {
}
interface msdyn_workorderresolution_Relationships {
}
interface msdyn_workorderresolution_Result extends msdyn_workorderresolution_Base, msdyn_workorderresolution_Relationships {
}
interface msdyn_workorderresolution_FormattedResult {
}
interface msdyn_workorderresolution_Select {
}
interface msdyn_workorderresolution_Expand {
}
interface msdyn_workorderresolution_Filter {
}
interface msdyn_workorderresolution_Create extends msdyn_workorderresolution {
}
interface msdyn_workorderresolution_Update extends msdyn_workorderresolution {
}
interface msdyn_workorderresourcerestriction_Base extends WebEntity {
}
interface msdyn_workorderresourcerestriction_Fixed extends WebEntity_Fixed {
  msdyn_workorderresourcerestrictionid: string;
}
interface msdyn_workorderresourcerestriction extends msdyn_workorderresourcerestriction_Base, msdyn_workorderresourcerestriction_Relationships {
}
interface msdyn_workorderresourcerestriction_Relationships {
}
interface msdyn_workorderresourcerestriction_Result extends msdyn_workorderresourcerestriction_Base, msdyn_workorderresourcerestriction_Relationships {
}
interface msdyn_workorderresourcerestriction_FormattedResult {
}
interface msdyn_workorderresourcerestriction_Select {
}
interface msdyn_workorderresourcerestriction_Expand {
}
interface msdyn_workorderresourcerestriction_Filter {
}
interface msdyn_workorderresourcerestriction_Create extends msdyn_workorderresourcerestriction {
}
interface msdyn_workorderresourcerestriction_Update extends msdyn_workorderresourcerestriction {
}
interface msdyn_workorderservice_Base extends WebEntity {
}
interface msdyn_workorderservice_Fixed extends WebEntity_Fixed {
  msdyn_workorderserviceid: string;
}
interface msdyn_workorderservice extends msdyn_workorderservice_Base, msdyn_workorderservice_Relationships {
}
interface msdyn_workorderservice_Relationships {
}
interface msdyn_workorderservice_Result extends msdyn_workorderservice_Base, msdyn_workorderservice_Relationships {
}
interface msdyn_workorderservice_FormattedResult {
}
interface msdyn_workorderservice_Select {
}
interface msdyn_workorderservice_Expand {
}
interface msdyn_workorderservice_Filter {
}
interface msdyn_workorderservice_Create extends msdyn_workorderservice {
}
interface msdyn_workorderservice_Update extends msdyn_workorderservice {
}
interface msdyn_workorderservicetask_Base extends WebEntity {
}
interface msdyn_workorderservicetask_Fixed extends WebEntity_Fixed {
  msdyn_workorderservicetaskid: string;
}
interface msdyn_workorderservicetask extends msdyn_workorderservicetask_Base, msdyn_workorderservicetask_Relationships {
}
interface msdyn_workorderservicetask_Relationships {
}
interface msdyn_workorderservicetask_Result extends msdyn_workorderservicetask_Base, msdyn_workorderservicetask_Relationships {
}
interface msdyn_workorderservicetask_FormattedResult {
}
interface msdyn_workorderservicetask_Select {
}
interface msdyn_workorderservicetask_Expand {
}
interface msdyn_workorderservicetask_Filter {
}
interface msdyn_workorderservicetask_Create extends msdyn_workorderservicetask {
}
interface msdyn_workorderservicetask_Update extends msdyn_workorderservicetask {
}
interface msdyn_workordersubstatus_Base extends WebEntity {
}
interface msdyn_workordersubstatus_Fixed extends WebEntity_Fixed {
  msdyn_workordersubstatusid: string;
}
interface msdyn_workordersubstatus extends msdyn_workordersubstatus_Base, msdyn_workordersubstatus_Relationships {
}
interface msdyn_workordersubstatus_Relationships {
}
interface msdyn_workordersubstatus_Result extends msdyn_workordersubstatus_Base, msdyn_workordersubstatus_Relationships {
}
interface msdyn_workordersubstatus_FormattedResult {
}
interface msdyn_workordersubstatus_Select {
}
interface msdyn_workordersubstatus_Expand {
}
interface msdyn_workordersubstatus_Filter {
}
interface msdyn_workordersubstatus_Create extends msdyn_workordersubstatus {
}
interface msdyn_workordersubstatus_Update extends msdyn_workordersubstatus {
}
interface msdyn_workordertype_Base extends WebEntity {
}
interface msdyn_workordertype_Fixed extends WebEntity_Fixed {
  msdyn_workordertypeid: string;
}
interface msdyn_workordertype extends msdyn_workordertype_Base, msdyn_workordertype_Relationships {
}
interface msdyn_workordertype_Relationships {
}
interface msdyn_workordertype_Result extends msdyn_workordertype_Base, msdyn_workordertype_Relationships {
}
interface msdyn_workordertype_FormattedResult {
}
interface msdyn_workordertype_Select {
}
interface msdyn_workordertype_Expand {
}
interface msdyn_workordertype_Filter {
}
interface msdyn_workordertype_Create extends msdyn_workordertype {
}
interface msdyn_workordertype_Update extends msdyn_workordertype {
}
interface msdyn_workqueuerecord_Base extends WebEntity {
}
interface msdyn_workqueuerecord_Fixed extends WebEntity_Fixed {
  msdyn_workqueuerecordid: string;
}
interface msdyn_workqueuerecord extends msdyn_workqueuerecord_Base, msdyn_workqueuerecord_Relationships {
}
interface msdyn_workqueuerecord_Relationships {
}
interface msdyn_workqueuerecord_Result extends msdyn_workqueuerecord_Base, msdyn_workqueuerecord_Relationships {
}
interface msdyn_workqueuerecord_FormattedResult {
}
interface msdyn_workqueuerecord_Select {
}
interface msdyn_workqueuerecord_Expand {
}
interface msdyn_workqueuerecord_Filter {
}
interface msdyn_workqueuerecord_Create extends msdyn_workqueuerecord {
}
interface msdyn_workqueuerecord_Update extends msdyn_workqueuerecord {
}
interface msdyn_workqueuestate_Base extends WebEntity {
}
interface msdyn_workqueuestate_Fixed extends WebEntity_Fixed {
  msdyn_workqueuestateid: string;
}
interface msdyn_workqueuestate extends msdyn_workqueuestate_Base, msdyn_workqueuestate_Relationships {
}
interface msdyn_workqueuestate_Relationships {
}
interface msdyn_workqueuestate_Result extends msdyn_workqueuestate_Base, msdyn_workqueuestate_Relationships {
}
interface msdyn_workqueuestate_FormattedResult {
}
interface msdyn_workqueuestate_Select {
}
interface msdyn_workqueuestate_Expand {
}
interface msdyn_workqueuestate_Filter {
}
interface msdyn_workqueuestate_Create extends msdyn_workqueuestate {
}
interface msdyn_workqueuestate_Update extends msdyn_workqueuestate {
}
interface msdyn_workqueueusersetting_Base extends WebEntity {
}
interface msdyn_workqueueusersetting_Fixed extends WebEntity_Fixed {
  msdyn_workqueueusersettingid: string;
}
interface msdyn_workqueueusersetting extends msdyn_workqueueusersetting_Base, msdyn_workqueueusersetting_Relationships {
}
interface msdyn_workqueueusersetting_Relationships {
}
interface msdyn_workqueueusersetting_Result extends msdyn_workqueueusersetting_Base, msdyn_workqueueusersetting_Relationships {
}
interface msdyn_workqueueusersetting_FormattedResult {
}
interface msdyn_workqueueusersetting_Select {
}
interface msdyn_workqueueusersetting_Expand {
}
interface msdyn_workqueueusersetting_Filter {
}
interface msdyn_workqueueusersetting_Create extends msdyn_workqueueusersetting {
}
interface msdyn_workqueueusersetting_Update extends msdyn_workqueueusersetting {
}
interface msdyn_wqdatasource_Base extends WebEntity {
}
interface msdyn_wqdatasource_Fixed extends WebEntity_Fixed {
  msdyn_wqdatasourceid: string;
}
interface msdyn_wqdatasource extends msdyn_wqdatasource_Base, msdyn_wqdatasource_Relationships {
}
interface msdyn_wqdatasource_Relationships {
}
interface msdyn_wqdatasource_Result extends msdyn_wqdatasource_Base, msdyn_wqdatasource_Relationships {
}
interface msdyn_wqdatasource_FormattedResult {
}
interface msdyn_wqdatasource_Select {
}
interface msdyn_wqdatasource_Expand {
}
interface msdyn_wqdatasource_Filter {
}
interface msdyn_wqdatasource_Create extends msdyn_wqdatasource {
}
interface msdyn_wqdatasource_Update extends msdyn_wqdatasource {
}
interface msdynce_botcontent_Base extends WebEntity {
}
interface msdynce_botcontent_Fixed extends WebEntity_Fixed {
  msdynce_botcontentid: string;
}
interface msdynce_botcontent extends msdynce_botcontent_Base, msdynce_botcontent_Relationships {
}
interface msdynce_botcontent_Relationships {
}
interface msdynce_botcontent_Result extends msdynce_botcontent_Base, msdynce_botcontent_Relationships {
}
interface msdynce_botcontent_FormattedResult {
}
interface msdynce_botcontent_Select {
}
interface msdynce_botcontent_Expand {
}
interface msdynce_botcontent_Filter {
}
interface msdynce_botcontent_Create extends msdynce_botcontent {
}
interface msdynce_botcontent_Update extends msdynce_botcontent {
}
interface msdynsm_marketingsitemap_Base extends WebEntity {
}
interface msdynsm_marketingsitemap_Fixed extends WebEntity_Fixed {
  msdynsm_marketingsitemapid: string;
}
interface msdynsm_marketingsitemap extends msdynsm_marketingsitemap_Base, msdynsm_marketingsitemap_Relationships {
}
interface msdynsm_marketingsitemap_Relationships {
}
interface msdynsm_marketingsitemap_Result extends msdynsm_marketingsitemap_Base, msdynsm_marketingsitemap_Relationships {
}
interface msdynsm_marketingsitemap_FormattedResult {
}
interface msdynsm_marketingsitemap_Select {
}
interface msdynsm_marketingsitemap_Expand {
}
interface msdynsm_marketingsitemap_Filter {
}
interface msdynsm_marketingsitemap_Create extends msdynsm_marketingsitemap {
}
interface msdynsm_marketingsitemap_Update extends msdynsm_marketingsitemap {
}
interface msdynsm_salessitemap_Base extends WebEntity {
}
interface msdynsm_salessitemap_Fixed extends WebEntity_Fixed {
  msdynsm_salessitemapid: string;
}
interface msdynsm_salessitemap extends msdynsm_salessitemap_Base, msdynsm_salessitemap_Relationships {
}
interface msdynsm_salessitemap_Relationships {
}
interface msdynsm_salessitemap_Result extends msdynsm_salessitemap_Base, msdynsm_salessitemap_Relationships {
}
interface msdynsm_salessitemap_FormattedResult {
}
interface msdynsm_salessitemap_Select {
}
interface msdynsm_salessitemap_Expand {
}
interface msdynsm_salessitemap_Filter {
}
interface msdynsm_salessitemap_Create extends msdynsm_salessitemap {
}
interface msdynsm_salessitemap_Update extends msdynsm_salessitemap {
}
interface msdynsm_servicessitemap_Base extends WebEntity {
}
interface msdynsm_servicessitemap_Fixed extends WebEntity_Fixed {
  msdynsm_servicessitemapid: string;
}
interface msdynsm_servicessitemap extends msdynsm_servicessitemap_Base, msdynsm_servicessitemap_Relationships {
}
interface msdynsm_servicessitemap_Relationships {
}
interface msdynsm_servicessitemap_Result extends msdynsm_servicessitemap_Base, msdynsm_servicessitemap_Relationships {
}
interface msdynsm_servicessitemap_FormattedResult {
}
interface msdynsm_servicessitemap_Select {
}
interface msdynsm_servicessitemap_Expand {
}
interface msdynsm_servicessitemap_Filter {
}
interface msdynsm_servicessitemap_Create extends msdynsm_servicessitemap {
}
interface msdynsm_servicessitemap_Update extends msdynsm_servicessitemap {
}
interface msdynsm_settingssitemap_Base extends WebEntity {
}
interface msdynsm_settingssitemap_Fixed extends WebEntity_Fixed {
  msdynsm_settingssitemapid: string;
}
interface msdynsm_settingssitemap extends msdynsm_settingssitemap_Base, msdynsm_settingssitemap_Relationships {
}
interface msdynsm_settingssitemap_Relationships {
}
interface msdynsm_settingssitemap_Result extends msdynsm_settingssitemap_Base, msdynsm_settingssitemap_Relationships {
}
interface msdynsm_settingssitemap_FormattedResult {
}
interface msdynsm_settingssitemap_Select {
}
interface msdynsm_settingssitemap_Expand {
}
interface msdynsm_settingssitemap_Filter {
}
interface msdynsm_settingssitemap_Create extends msdynsm_settingssitemap {
}
interface msdynsm_settingssitemap_Update extends msdynsm_settingssitemap {
}
interface msdyusd_actioncallworkflow_Base extends WebEntity {
}
interface msdyusd_actioncallworkflow_Fixed extends WebEntity_Fixed {
  msdyusd_actioncallworkflowid: string;
}
interface msdyusd_actioncallworkflow extends msdyusd_actioncallworkflow_Base, msdyusd_actioncallworkflow_Relationships {
}
interface msdyusd_actioncallworkflow_Relationships {
}
interface msdyusd_actioncallworkflow_Result extends msdyusd_actioncallworkflow_Base, msdyusd_actioncallworkflow_Relationships {
}
interface msdyusd_actioncallworkflow_FormattedResult {
}
interface msdyusd_actioncallworkflow_Select {
}
interface msdyusd_actioncallworkflow_Expand {
}
interface msdyusd_actioncallworkflow_Filter {
}
interface msdyusd_actioncallworkflow_Create extends msdyusd_actioncallworkflow {
}
interface msdyusd_actioncallworkflow_Update extends msdyusd_actioncallworkflow {
}
interface msdyusd_agentscriptaction_Base extends WebEntity {
}
interface msdyusd_agentscriptaction_Fixed extends WebEntity_Fixed {
  msdyusd_agentscriptactionid: string;
}
interface msdyusd_agentscriptaction extends msdyusd_agentscriptaction_Base, msdyusd_agentscriptaction_Relationships {
}
interface msdyusd_agentscriptaction_Relationships {
}
interface msdyusd_agentscriptaction_Result extends msdyusd_agentscriptaction_Base, msdyusd_agentscriptaction_Relationships {
}
interface msdyusd_agentscriptaction_FormattedResult {
}
interface msdyusd_agentscriptaction_Select {
}
interface msdyusd_agentscriptaction_Expand {
}
interface msdyusd_agentscriptaction_Filter {
}
interface msdyusd_agentscriptaction_Create extends msdyusd_agentscriptaction {
}
interface msdyusd_agentscriptaction_Update extends msdyusd_agentscriptaction {
}
interface msdyusd_agentscripttaskcategory_Base extends WebEntity {
}
interface msdyusd_agentscripttaskcategory_Fixed extends WebEntity_Fixed {
  msdyusd_agentscripttaskcategoryid: string;
}
interface msdyusd_agentscripttaskcategory extends msdyusd_agentscripttaskcategory_Base, msdyusd_agentscripttaskcategory_Relationships {
}
interface msdyusd_agentscripttaskcategory_Relationships {
}
interface msdyusd_agentscripttaskcategory_Result extends msdyusd_agentscripttaskcategory_Base, msdyusd_agentscripttaskcategory_Relationships {
}
interface msdyusd_agentscripttaskcategory_FormattedResult {
}
interface msdyusd_agentscripttaskcategory_Select {
}
interface msdyusd_agentscripttaskcategory_Expand {
}
interface msdyusd_agentscripttaskcategory_Filter {
}
interface msdyusd_agentscripttaskcategory_Create extends msdyusd_agentscripttaskcategory {
}
interface msdyusd_agentscripttaskcategory_Update extends msdyusd_agentscripttaskcategory {
}
interface msdyusd_answer_Base extends WebEntity {
}
interface msdyusd_answer_Fixed extends WebEntity_Fixed {
  msdyusd_answerid: string;
}
interface msdyusd_answer extends msdyusd_answer_Base, msdyusd_answer_Relationships {
}
interface msdyusd_answer_Relationships {
}
interface msdyusd_answer_Result extends msdyusd_answer_Base, msdyusd_answer_Relationships {
}
interface msdyusd_answer_FormattedResult {
}
interface msdyusd_answer_Select {
}
interface msdyusd_answer_Expand {
}
interface msdyusd_answer_Filter {
}
interface msdyusd_answer_Create extends msdyusd_answer {
}
interface msdyusd_answer_Update extends msdyusd_answer {
}
interface msdyusd_answer_agentscriptaction_Base extends WebEntity {
}
interface msdyusd_answer_agentscriptaction_Fixed extends WebEntity_Fixed {
  msdyusd_answer_agentscriptactionid: string;
}
interface msdyusd_answer_agentscriptaction extends msdyusd_answer_agentscriptaction_Base, msdyusd_answer_agentscriptaction_Relationships {
}
interface msdyusd_answer_agentscriptaction_Relationships {
}
interface msdyusd_answer_agentscriptaction_Result extends msdyusd_answer_agentscriptaction_Base, msdyusd_answer_agentscriptaction_Relationships {
}
interface msdyusd_answer_agentscriptaction_FormattedResult {
}
interface msdyusd_answer_agentscriptaction_Select {
}
interface msdyusd_answer_agentscriptaction_Expand {
}
interface msdyusd_answer_agentscriptaction_Filter {
}
interface msdyusd_answer_agentscriptaction_Create extends msdyusd_answer_agentscriptaction {
}
interface msdyusd_answer_agentscriptaction_Update extends msdyusd_answer_agentscriptaction {
}
interface msdyusd_auditanddiagnosticssetting_Base extends WebEntity {
}
interface msdyusd_auditanddiagnosticssetting_Fixed extends WebEntity_Fixed {
  msdyusd_auditanddiagnosticssettingid: string;
}
interface msdyusd_auditanddiagnosticssetting extends msdyusd_auditanddiagnosticssetting_Base, msdyusd_auditanddiagnosticssetting_Relationships {
}
interface msdyusd_auditanddiagnosticssetting_Relationships {
}
interface msdyusd_auditanddiagnosticssetting_Result extends msdyusd_auditanddiagnosticssetting_Base, msdyusd_auditanddiagnosticssetting_Relationships {
}
interface msdyusd_auditanddiagnosticssetting_FormattedResult {
}
interface msdyusd_auditanddiagnosticssetting_Select {
}
interface msdyusd_auditanddiagnosticssetting_Expand {
}
interface msdyusd_auditanddiagnosticssetting_Filter {
}
interface msdyusd_auditanddiagnosticssetting_Create extends msdyusd_auditanddiagnosticssetting {
}
interface msdyusd_auditanddiagnosticssetting_Update extends msdyusd_auditanddiagnosticssetting {
}
interface msdyusd_auditdiag_tracesourcesetting_Base extends WebEntity {
}
interface msdyusd_auditdiag_tracesourcesetting_Fixed extends WebEntity_Fixed {
  msdyusd_auditdiag_tracesourcesettingid: string;
}
interface msdyusd_auditdiag_tracesourcesetting extends msdyusd_auditdiag_tracesourcesetting_Base, msdyusd_auditdiag_tracesourcesetting_Relationships {
}
interface msdyusd_auditdiag_tracesourcesetting_Relationships {
}
interface msdyusd_auditdiag_tracesourcesetting_Result extends msdyusd_auditdiag_tracesourcesetting_Base, msdyusd_auditdiag_tracesourcesetting_Relationships {
}
interface msdyusd_auditdiag_tracesourcesetting_FormattedResult {
}
interface msdyusd_auditdiag_tracesourcesetting_Select {
}
interface msdyusd_auditdiag_tracesourcesetting_Expand {
}
interface msdyusd_auditdiag_tracesourcesetting_Filter {
}
interface msdyusd_auditdiag_tracesourcesetting_Create extends msdyusd_auditdiag_tracesourcesetting {
}
interface msdyusd_auditdiag_tracesourcesetting_Update extends msdyusd_auditdiag_tracesourcesetting {
}
interface msdyusd_configuration_Base extends WebEntity {
}
interface msdyusd_configuration_Fixed extends WebEntity_Fixed {
  msdyusd_configurationid: string;
}
interface msdyusd_configuration extends msdyusd_configuration_Base, msdyusd_configuration_Relationships {
}
interface msdyusd_configuration_Relationships {
}
interface msdyusd_configuration_Result extends msdyusd_configuration_Base, msdyusd_configuration_Relationships {
}
interface msdyusd_configuration_FormattedResult {
}
interface msdyusd_configuration_Select {
}
interface msdyusd_configuration_Expand {
}
interface msdyusd_configuration_Filter {
}
interface msdyusd_configuration_Create extends msdyusd_configuration {
}
interface msdyusd_configuration_Update extends msdyusd_configuration {
}
interface msdyusd_configuration_actioncalls_Base extends WebEntity {
}
interface msdyusd_configuration_actioncalls_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_actioncallsid: string;
}
interface msdyusd_configuration_actioncalls extends msdyusd_configuration_actioncalls_Base, msdyusd_configuration_actioncalls_Relationships {
}
interface msdyusd_configuration_actioncalls_Relationships {
}
interface msdyusd_configuration_actioncalls_Result extends msdyusd_configuration_actioncalls_Base, msdyusd_configuration_actioncalls_Relationships {
}
interface msdyusd_configuration_actioncalls_FormattedResult {
}
interface msdyusd_configuration_actioncalls_Select {
}
interface msdyusd_configuration_actioncalls_Expand {
}
interface msdyusd_configuration_actioncalls_Filter {
}
interface msdyusd_configuration_actioncalls_Create extends msdyusd_configuration_actioncalls {
}
interface msdyusd_configuration_actioncalls_Update extends msdyusd_configuration_actioncalls {
}
interface msdyusd_configuration_agentscript_Base extends WebEntity {
}
interface msdyusd_configuration_agentscript_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_agentscriptid: string;
}
interface msdyusd_configuration_agentscript extends msdyusd_configuration_agentscript_Base, msdyusd_configuration_agentscript_Relationships {
}
interface msdyusd_configuration_agentscript_Relationships {
}
interface msdyusd_configuration_agentscript_Result extends msdyusd_configuration_agentscript_Base, msdyusd_configuration_agentscript_Relationships {
}
interface msdyusd_configuration_agentscript_FormattedResult {
}
interface msdyusd_configuration_agentscript_Select {
}
interface msdyusd_configuration_agentscript_Expand {
}
interface msdyusd_configuration_agentscript_Filter {
}
interface msdyusd_configuration_agentscript_Create extends msdyusd_configuration_agentscript {
}
interface msdyusd_configuration_agentscript_Update extends msdyusd_configuration_agentscript {
}
interface msdyusd_configuration_entitysearch_Base extends WebEntity {
}
interface msdyusd_configuration_entitysearch_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_entitysearchid: string;
}
interface msdyusd_configuration_entitysearch extends msdyusd_configuration_entitysearch_Base, msdyusd_configuration_entitysearch_Relationships {
}
interface msdyusd_configuration_entitysearch_Relationships {
}
interface msdyusd_configuration_entitysearch_Result extends msdyusd_configuration_entitysearch_Base, msdyusd_configuration_entitysearch_Relationships {
}
interface msdyusd_configuration_entitysearch_FormattedResult {
}
interface msdyusd_configuration_entitysearch_Select {
}
interface msdyusd_configuration_entitysearch_Expand {
}
interface msdyusd_configuration_entitysearch_Filter {
}
interface msdyusd_configuration_entitysearch_Create extends msdyusd_configuration_entitysearch {
}
interface msdyusd_configuration_entitysearch_Update extends msdyusd_configuration_entitysearch {
}
interface msdyusd_configuration_event_Base extends WebEntity {
}
interface msdyusd_configuration_event_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_eventid: string;
}
interface msdyusd_configuration_event extends msdyusd_configuration_event_Base, msdyusd_configuration_event_Relationships {
}
interface msdyusd_configuration_event_Relationships {
}
interface msdyusd_configuration_event_Result extends msdyusd_configuration_event_Base, msdyusd_configuration_event_Relationships {
}
interface msdyusd_configuration_event_FormattedResult {
}
interface msdyusd_configuration_event_Select {
}
interface msdyusd_configuration_event_Expand {
}
interface msdyusd_configuration_event_Filter {
}
interface msdyusd_configuration_event_Create extends msdyusd_configuration_event {
}
interface msdyusd_configuration_event_Update extends msdyusd_configuration_event {
}
interface msdyusd_configuration_form_Base extends WebEntity {
}
interface msdyusd_configuration_form_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_formid: string;
}
interface msdyusd_configuration_form extends msdyusd_configuration_form_Base, msdyusd_configuration_form_Relationships {
}
interface msdyusd_configuration_form_Relationships {
}
interface msdyusd_configuration_form_Result extends msdyusd_configuration_form_Base, msdyusd_configuration_form_Relationships {
}
interface msdyusd_configuration_form_FormattedResult {
}
interface msdyusd_configuration_form_Select {
}
interface msdyusd_configuration_form_Expand {
}
interface msdyusd_configuration_form_Filter {
}
interface msdyusd_configuration_form_Create extends msdyusd_configuration_form {
}
interface msdyusd_configuration_form_Update extends msdyusd_configuration_form {
}
interface msdyusd_configuration_hostedcontrol_Base extends WebEntity {
}
interface msdyusd_configuration_hostedcontrol_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_hostedcontrolid: string;
}
interface msdyusd_configuration_hostedcontrol extends msdyusd_configuration_hostedcontrol_Base, msdyusd_configuration_hostedcontrol_Relationships {
}
interface msdyusd_configuration_hostedcontrol_Relationships {
}
interface msdyusd_configuration_hostedcontrol_Result extends msdyusd_configuration_hostedcontrol_Base, msdyusd_configuration_hostedcontrol_Relationships {
}
interface msdyusd_configuration_hostedcontrol_FormattedResult {
}
interface msdyusd_configuration_hostedcontrol_Select {
}
interface msdyusd_configuration_hostedcontrol_Expand {
}
interface msdyusd_configuration_hostedcontrol_Filter {
}
interface msdyusd_configuration_hostedcontrol_Create extends msdyusd_configuration_hostedcontrol {
}
interface msdyusd_configuration_hostedcontrol_Update extends msdyusd_configuration_hostedcontrol {
}
interface msdyusd_configuration_option_Base extends WebEntity {
}
interface msdyusd_configuration_option_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_optionid: string;
}
interface msdyusd_configuration_option extends msdyusd_configuration_option_Base, msdyusd_configuration_option_Relationships {
}
interface msdyusd_configuration_option_Relationships {
}
interface msdyusd_configuration_option_Result extends msdyusd_configuration_option_Base, msdyusd_configuration_option_Relationships {
}
interface msdyusd_configuration_option_FormattedResult {
}
interface msdyusd_configuration_option_Select {
}
interface msdyusd_configuration_option_Expand {
}
interface msdyusd_configuration_option_Filter {
}
interface msdyusd_configuration_option_Create extends msdyusd_configuration_option {
}
interface msdyusd_configuration_option_Update extends msdyusd_configuration_option {
}
interface msdyusd_configuration_scriptlet_Base extends WebEntity {
}
interface msdyusd_configuration_scriptlet_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_scriptletid: string;
}
interface msdyusd_configuration_scriptlet extends msdyusd_configuration_scriptlet_Base, msdyusd_configuration_scriptlet_Relationships {
}
interface msdyusd_configuration_scriptlet_Relationships {
}
interface msdyusd_configuration_scriptlet_Result extends msdyusd_configuration_scriptlet_Base, msdyusd_configuration_scriptlet_Relationships {
}
interface msdyusd_configuration_scriptlet_FormattedResult {
}
interface msdyusd_configuration_scriptlet_Select {
}
interface msdyusd_configuration_scriptlet_Expand {
}
interface msdyusd_configuration_scriptlet_Filter {
}
interface msdyusd_configuration_scriptlet_Create extends msdyusd_configuration_scriptlet {
}
interface msdyusd_configuration_scriptlet_Update extends msdyusd_configuration_scriptlet {
}
interface msdyusd_configuration_sessionlines_Base extends WebEntity {
}
interface msdyusd_configuration_sessionlines_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_sessionlinesid: string;
}
interface msdyusd_configuration_sessionlines extends msdyusd_configuration_sessionlines_Base, msdyusd_configuration_sessionlines_Relationships {
}
interface msdyusd_configuration_sessionlines_Relationships {
}
interface msdyusd_configuration_sessionlines_Result extends msdyusd_configuration_sessionlines_Base, msdyusd_configuration_sessionlines_Relationships {
}
interface msdyusd_configuration_sessionlines_FormattedResult {
}
interface msdyusd_configuration_sessionlines_Select {
}
interface msdyusd_configuration_sessionlines_Expand {
}
interface msdyusd_configuration_sessionlines_Filter {
}
interface msdyusd_configuration_sessionlines_Create extends msdyusd_configuration_sessionlines {
}
interface msdyusd_configuration_sessionlines_Update extends msdyusd_configuration_sessionlines {
}
interface msdyusd_configuration_toolbar_Base extends WebEntity {
}
interface msdyusd_configuration_toolbar_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_toolbarid: string;
}
interface msdyusd_configuration_toolbar extends msdyusd_configuration_toolbar_Base, msdyusd_configuration_toolbar_Relationships {
}
interface msdyusd_configuration_toolbar_Relationships {
}
interface msdyusd_configuration_toolbar_Result extends msdyusd_configuration_toolbar_Base, msdyusd_configuration_toolbar_Relationships {
}
interface msdyusd_configuration_toolbar_FormattedResult {
}
interface msdyusd_configuration_toolbar_Select {
}
interface msdyusd_configuration_toolbar_Expand {
}
interface msdyusd_configuration_toolbar_Filter {
}
interface msdyusd_configuration_toolbar_Create extends msdyusd_configuration_toolbar {
}
interface msdyusd_configuration_toolbar_Update extends msdyusd_configuration_toolbar {
}
interface msdyusd_configuration_windowroute_Base extends WebEntity {
}
interface msdyusd_configuration_windowroute_Fixed extends WebEntity_Fixed {
  msdyusd_configuration_windowrouteid: string;
}
interface msdyusd_configuration_windowroute extends msdyusd_configuration_windowroute_Base, msdyusd_configuration_windowroute_Relationships {
}
interface msdyusd_configuration_windowroute_Relationships {
}
interface msdyusd_configuration_windowroute_Result extends msdyusd_configuration_windowroute_Base, msdyusd_configuration_windowroute_Relationships {
}
interface msdyusd_configuration_windowroute_FormattedResult {
}
interface msdyusd_configuration_windowroute_Select {
}
interface msdyusd_configuration_windowroute_Expand {
}
interface msdyusd_configuration_windowroute_Filter {
}
interface msdyusd_configuration_windowroute_Create extends msdyusd_configuration_windowroute {
}
interface msdyusd_configuration_windowroute_Update extends msdyusd_configuration_windowroute {
}
interface msdyusd_customizationfiles_Base extends WebEntity {
}
interface msdyusd_customizationfiles_Fixed extends WebEntity_Fixed {
  msdyusd_customizationfilesid: string;
}
interface msdyusd_customizationfiles extends msdyusd_customizationfiles_Base, msdyusd_customizationfiles_Relationships {
}
interface msdyusd_customizationfiles_Relationships {
}
interface msdyusd_customizationfiles_Result extends msdyusd_customizationfiles_Base, msdyusd_customizationfiles_Relationships {
}
interface msdyusd_customizationfiles_FormattedResult {
}
interface msdyusd_customizationfiles_Select {
}
interface msdyusd_customizationfiles_Expand {
}
interface msdyusd_customizationfiles_Filter {
}
interface msdyusd_customizationfiles_Create extends msdyusd_customizationfiles {
}
interface msdyusd_customizationfiles_Update extends msdyusd_customizationfiles {
}
interface msdyusd_customizationfiles_configuration_Base extends WebEntity {
}
interface msdyusd_customizationfiles_configuration_Fixed extends WebEntity_Fixed {
  msdyusd_customizationfiles_configurationid: string;
}
interface msdyusd_customizationfiles_configuration extends msdyusd_customizationfiles_configuration_Base, msdyusd_customizationfiles_configuration_Relationships {
}
interface msdyusd_customizationfiles_configuration_Relationships {
}
interface msdyusd_customizationfiles_configuration_Result extends msdyusd_customizationfiles_configuration_Base, msdyusd_customizationfiles_configuration_Relationships {
}
interface msdyusd_customizationfiles_configuration_FormattedResult {
}
interface msdyusd_customizationfiles_configuration_Select {
}
interface msdyusd_customizationfiles_configuration_Expand {
}
interface msdyusd_customizationfiles_configuration_Filter {
}
interface msdyusd_customizationfiles_configuration_Create extends msdyusd_customizationfiles_configuration {
}
interface msdyusd_customizationfiles_configuration_Update extends msdyusd_customizationfiles_configuration {
}
interface msdyusd_entityassignment_Base extends WebEntity {
}
interface msdyusd_entityassignment_Fixed extends WebEntity_Fixed {
  msdyusd_entityassignmentid: string;
}
interface msdyusd_entityassignment extends msdyusd_entityassignment_Base, msdyusd_entityassignment_Relationships {
}
interface msdyusd_entityassignment_Relationships {
}
interface msdyusd_entityassignment_Result extends msdyusd_entityassignment_Base, msdyusd_entityassignment_Relationships {
}
interface msdyusd_entityassignment_FormattedResult {
}
interface msdyusd_entityassignment_Select {
}
interface msdyusd_entityassignment_Expand {
}
interface msdyusd_entityassignment_Filter {
}
interface msdyusd_entityassignment_Create extends msdyusd_entityassignment {
}
interface msdyusd_entityassignment_Update extends msdyusd_entityassignment {
}
interface msdyusd_entitysearch_Base extends WebEntity {
}
interface msdyusd_entitysearch_Fixed extends WebEntity_Fixed {
  msdyusd_entitysearchid: string;
}
interface msdyusd_entitysearch extends msdyusd_entitysearch_Base, msdyusd_entitysearch_Relationships {
}
interface msdyusd_entitysearch_Relationships {
}
interface msdyusd_entitysearch_Result extends msdyusd_entitysearch_Base, msdyusd_entitysearch_Relationships {
}
interface msdyusd_entitysearch_FormattedResult {
}
interface msdyusd_entitysearch_Select {
}
interface msdyusd_entitysearch_Expand {
}
interface msdyusd_entitysearch_Filter {
}
interface msdyusd_entitysearch_Create extends msdyusd_entitysearch {
}
interface msdyusd_entitysearch_Update extends msdyusd_entitysearch {
}
interface msdyusd_form_Base extends WebEntity {
}
interface msdyusd_form_Fixed extends WebEntity_Fixed {
  msdyusd_formid: string;
}
interface msdyusd_form extends msdyusd_form_Base, msdyusd_form_Relationships {
}
interface msdyusd_form_Relationships {
}
interface msdyusd_form_Result extends msdyusd_form_Base, msdyusd_form_Relationships {
}
interface msdyusd_form_FormattedResult {
}
interface msdyusd_form_Select {
}
interface msdyusd_form_Expand {
}
interface msdyusd_form_Filter {
}
interface msdyusd_form_Create extends msdyusd_form {
}
interface msdyusd_form_Update extends msdyusd_form {
}
interface msdyusd_form_hostedapplication_Base extends WebEntity {
}
interface msdyusd_form_hostedapplication_Fixed extends WebEntity_Fixed {
  msdyusd_form_hostedapplicationid: string;
}
interface msdyusd_form_hostedapplication extends msdyusd_form_hostedapplication_Base, msdyusd_form_hostedapplication_Relationships {
}
interface msdyusd_form_hostedapplication_Relationships {
}
interface msdyusd_form_hostedapplication_Result extends msdyusd_form_hostedapplication_Base, msdyusd_form_hostedapplication_Relationships {
}
interface msdyusd_form_hostedapplication_FormattedResult {
}
interface msdyusd_form_hostedapplication_Select {
}
interface msdyusd_form_hostedapplication_Expand {
}
interface msdyusd_form_hostedapplication_Filter {
}
interface msdyusd_form_hostedapplication_Create extends msdyusd_form_hostedapplication {
}
interface msdyusd_form_hostedapplication_Update extends msdyusd_form_hostedapplication {
}
interface msdyusd_languagemodule_Base extends WebEntity {
}
interface msdyusd_languagemodule_Fixed extends WebEntity_Fixed {
  msdyusd_languagemoduleid: string;
}
interface msdyusd_languagemodule extends msdyusd_languagemodule_Base, msdyusd_languagemodule_Relationships {
}
interface msdyusd_languagemodule_Relationships {
}
interface msdyusd_languagemodule_Result extends msdyusd_languagemodule_Base, msdyusd_languagemodule_Relationships {
}
interface msdyusd_languagemodule_FormattedResult {
}
interface msdyusd_languagemodule_Select {
}
interface msdyusd_languagemodule_Expand {
}
interface msdyusd_languagemodule_Filter {
}
interface msdyusd_languagemodule_Create extends msdyusd_languagemodule {
}
interface msdyusd_languagemodule_Update extends msdyusd_languagemodule {
}
interface msdyusd_scriptlet_Base extends WebEntity {
}
interface msdyusd_scriptlet_Fixed extends WebEntity_Fixed {
  msdyusd_scriptletid: string;
}
interface msdyusd_scriptlet extends msdyusd_scriptlet_Base, msdyusd_scriptlet_Relationships {
}
interface msdyusd_scriptlet_Relationships {
}
interface msdyusd_scriptlet_Result extends msdyusd_scriptlet_Base, msdyusd_scriptlet_Relationships {
}
interface msdyusd_scriptlet_FormattedResult {
}
interface msdyusd_scriptlet_Select {
}
interface msdyusd_scriptlet_Expand {
}
interface msdyusd_scriptlet_Filter {
}
interface msdyusd_scriptlet_Create extends msdyusd_scriptlet {
}
interface msdyusd_scriptlet_Update extends msdyusd_scriptlet {
}
interface msdyusd_scripttasktrigger_Base extends WebEntity {
}
interface msdyusd_scripttasktrigger_Fixed extends WebEntity_Fixed {
  msdyusd_scripttasktriggerid: string;
}
interface msdyusd_scripttasktrigger extends msdyusd_scripttasktrigger_Base, msdyusd_scripttasktrigger_Relationships {
}
interface msdyusd_scripttasktrigger_Relationships {
}
interface msdyusd_scripttasktrigger_Result extends msdyusd_scripttasktrigger_Base, msdyusd_scripttasktrigger_Relationships {
}
interface msdyusd_scripttasktrigger_FormattedResult {
}
interface msdyusd_scripttasktrigger_Select {
}
interface msdyusd_scripttasktrigger_Expand {
}
interface msdyusd_scripttasktrigger_Filter {
}
interface msdyusd_scripttasktrigger_Create extends msdyusd_scripttasktrigger {
}
interface msdyusd_scripttasktrigger_Update extends msdyusd_scripttasktrigger {
}
interface msdyusd_search_Base extends WebEntity {
}
interface msdyusd_search_Fixed extends WebEntity_Fixed {
  msdyusd_searchid: string;
}
interface msdyusd_search extends msdyusd_search_Base, msdyusd_search_Relationships {
}
interface msdyusd_search_Relationships {
}
interface msdyusd_search_Result extends msdyusd_search_Base, msdyusd_search_Relationships {
}
interface msdyusd_search_FormattedResult {
}
interface msdyusd_search_Select {
}
interface msdyusd_search_Expand {
}
interface msdyusd_search_Filter {
}
interface msdyusd_search_Create extends msdyusd_search {
}
interface msdyusd_search_Update extends msdyusd_search {
}
interface msdyusd_sessioninformation_Base extends WebEntity {
}
interface msdyusd_sessioninformation_Fixed extends WebEntity_Fixed {
  msdyusd_sessioninformationid: string;
}
interface msdyusd_sessioninformation extends msdyusd_sessioninformation_Base, msdyusd_sessioninformation_Relationships {
}
interface msdyusd_sessioninformation_Relationships {
}
interface msdyusd_sessioninformation_Result extends msdyusd_sessioninformation_Base, msdyusd_sessioninformation_Relationships {
}
interface msdyusd_sessioninformation_FormattedResult {
}
interface msdyusd_sessioninformation_Select {
}
interface msdyusd_sessioninformation_Expand {
}
interface msdyusd_sessioninformation_Filter {
}
interface msdyusd_sessioninformation_Create extends msdyusd_sessioninformation {
}
interface msdyusd_sessioninformation_Update extends msdyusd_sessioninformation {
}
interface msdyusd_sessiontransfer_Base extends WebEntity {
}
interface msdyusd_sessiontransfer_Fixed extends WebEntity_Fixed {
  msdyusd_sessiontransferid: string;
}
interface msdyusd_sessiontransfer extends msdyusd_sessiontransfer_Base, msdyusd_sessiontransfer_Relationships {
}
interface msdyusd_sessiontransfer_Relationships {
}
interface msdyusd_sessiontransfer_Result extends msdyusd_sessiontransfer_Base, msdyusd_sessiontransfer_Relationships {
}
interface msdyusd_sessiontransfer_FormattedResult {
}
interface msdyusd_sessiontransfer_Select {
}
interface msdyusd_sessiontransfer_Expand {
}
interface msdyusd_sessiontransfer_Filter {
}
interface msdyusd_sessiontransfer_Create extends msdyusd_sessiontransfer {
}
interface msdyusd_sessiontransfer_Update extends msdyusd_sessiontransfer {
}
interface msdyusd_subactioncalls_Base extends WebEntity {
}
interface msdyusd_subactioncalls_Fixed extends WebEntity_Fixed {
  msdyusd_subactioncallsid: string;
}
interface msdyusd_subactioncalls extends msdyusd_subactioncalls_Base, msdyusd_subactioncalls_Relationships {
}
interface msdyusd_subactioncalls_Relationships {
}
interface msdyusd_subactioncalls_Result extends msdyusd_subactioncalls_Base, msdyusd_subactioncalls_Relationships {
}
interface msdyusd_subactioncalls_FormattedResult {
}
interface msdyusd_subactioncalls_Select {
}
interface msdyusd_subactioncalls_Expand {
}
interface msdyusd_subactioncalls_Filter {
}
interface msdyusd_subactioncalls_Create extends msdyusd_subactioncalls {
}
interface msdyusd_subactioncalls_Update extends msdyusd_subactioncalls {
}
interface msdyusd_task_Base extends WebEntity {
}
interface msdyusd_task_Fixed extends WebEntity_Fixed {
  msdyusd_taskid: string;
}
interface msdyusd_task extends msdyusd_task_Base, msdyusd_task_Relationships {
}
interface msdyusd_task_Relationships {
}
interface msdyusd_task_Result extends msdyusd_task_Base, msdyusd_task_Relationships {
}
interface msdyusd_task_FormattedResult {
}
interface msdyusd_task_Select {
}
interface msdyusd_task_Expand {
}
interface msdyusd_task_Filter {
}
interface msdyusd_task_Create extends msdyusd_task {
}
interface msdyusd_task_Update extends msdyusd_task {
}
interface msdyusd_task_agentscriptaction_Base extends WebEntity {
}
interface msdyusd_task_agentscriptaction_Fixed extends WebEntity_Fixed {
  msdyusd_task_agentscriptactionid: string;
}
interface msdyusd_task_agentscriptaction extends msdyusd_task_agentscriptaction_Base, msdyusd_task_agentscriptaction_Relationships {
}
interface msdyusd_task_agentscriptaction_Relationships {
}
interface msdyusd_task_agentscriptaction_Result extends msdyusd_task_agentscriptaction_Base, msdyusd_task_agentscriptaction_Relationships {
}
interface msdyusd_task_agentscriptaction_FormattedResult {
}
interface msdyusd_task_agentscriptaction_Select {
}
interface msdyusd_task_agentscriptaction_Expand {
}
interface msdyusd_task_agentscriptaction_Filter {
}
interface msdyusd_task_agentscriptaction_Create extends msdyusd_task_agentscriptaction {
}
interface msdyusd_task_agentscriptaction_Update extends msdyusd_task_agentscriptaction {
}
interface msdyusd_task_answer_Base extends WebEntity {
}
interface msdyusd_task_answer_Fixed extends WebEntity_Fixed {
  msdyusd_task_answerid: string;
}
interface msdyusd_task_answer extends msdyusd_task_answer_Base, msdyusd_task_answer_Relationships {
}
interface msdyusd_task_answer_Relationships {
}
interface msdyusd_task_answer_Result extends msdyusd_task_answer_Base, msdyusd_task_answer_Relationships {
}
interface msdyusd_task_answer_FormattedResult {
}
interface msdyusd_task_answer_Select {
}
interface msdyusd_task_answer_Expand {
}
interface msdyusd_task_answer_Filter {
}
interface msdyusd_task_answer_Create extends msdyusd_task_answer {
}
interface msdyusd_task_answer_Update extends msdyusd_task_answer {
}
interface msdyusd_toolbarbutton_Base extends WebEntity {
}
interface msdyusd_toolbarbutton_Fixed extends WebEntity_Fixed {
  msdyusd_toolbarbuttonid: string;
}
interface msdyusd_toolbarbutton extends msdyusd_toolbarbutton_Base, msdyusd_toolbarbutton_Relationships {
}
interface msdyusd_toolbarbutton_Relationships {
}
interface msdyusd_toolbarbutton_Result extends msdyusd_toolbarbutton_Base, msdyusd_toolbarbutton_Relationships {
}
interface msdyusd_toolbarbutton_FormattedResult {
}
interface msdyusd_toolbarbutton_Select {
}
interface msdyusd_toolbarbutton_Expand {
}
interface msdyusd_toolbarbutton_Filter {
}
interface msdyusd_toolbarbutton_Create extends msdyusd_toolbarbutton {
}
interface msdyusd_toolbarbutton_Update extends msdyusd_toolbarbutton {
}
interface msdyusd_toolbarbutton_agentscriptaction_Base extends WebEntity {
}
interface msdyusd_toolbarbutton_agentscriptaction_Fixed extends WebEntity_Fixed {
  msdyusd_toolbarbutton_agentscriptactionid: string;
}
interface msdyusd_toolbarbutton_agentscriptaction extends msdyusd_toolbarbutton_agentscriptaction_Base, msdyusd_toolbarbutton_agentscriptaction_Relationships {
}
interface msdyusd_toolbarbutton_agentscriptaction_Relationships {
}
interface msdyusd_toolbarbutton_agentscriptaction_Result extends msdyusd_toolbarbutton_agentscriptaction_Base, msdyusd_toolbarbutton_agentscriptaction_Relationships {
}
interface msdyusd_toolbarbutton_agentscriptaction_FormattedResult {
}
interface msdyusd_toolbarbutton_agentscriptaction_Select {
}
interface msdyusd_toolbarbutton_agentscriptaction_Expand {
}
interface msdyusd_toolbarbutton_agentscriptaction_Filter {
}
interface msdyusd_toolbarbutton_agentscriptaction_Create extends msdyusd_toolbarbutton_agentscriptaction {
}
interface msdyusd_toolbarbutton_agentscriptaction_Update extends msdyusd_toolbarbutton_agentscriptaction {
}
interface msdyusd_toolbarstrip_Base extends WebEntity {
}
interface msdyusd_toolbarstrip_Fixed extends WebEntity_Fixed {
  msdyusd_toolbarstripid: string;
}
interface msdyusd_toolbarstrip extends msdyusd_toolbarstrip_Base, msdyusd_toolbarstrip_Relationships {
}
interface msdyusd_toolbarstrip_Relationships {
}
interface msdyusd_toolbarstrip_Result extends msdyusd_toolbarstrip_Base, msdyusd_toolbarstrip_Relationships {
}
interface msdyusd_toolbarstrip_FormattedResult {
}
interface msdyusd_toolbarstrip_Select {
}
interface msdyusd_toolbarstrip_Expand {
}
interface msdyusd_toolbarstrip_Filter {
}
interface msdyusd_toolbarstrip_Create extends msdyusd_toolbarstrip {
}
interface msdyusd_toolbarstrip_Update extends msdyusd_toolbarstrip {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Base extends WebEntity {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Fixed extends WebEntity_Fixed {
  msdyusd_toolbarstrip_uii_hostedapplicationid: string;
}
interface msdyusd_toolbarstrip_uii_hostedapplication extends msdyusd_toolbarstrip_uii_hostedapplication_Base, msdyusd_toolbarstrip_uii_hostedapplication_Relationships {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Relationships {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Result extends msdyusd_toolbarstrip_uii_hostedapplication_Base, msdyusd_toolbarstrip_uii_hostedapplication_Relationships {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_FormattedResult {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Select {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Expand {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Filter {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Create extends msdyusd_toolbarstrip_uii_hostedapplication {
}
interface msdyusd_toolbarstrip_uii_hostedapplication_Update extends msdyusd_toolbarstrip_uii_hostedapplication {
}
interface msdyusd_tracesourcesetting_Base extends WebEntity {
}
interface msdyusd_tracesourcesetting_Fixed extends WebEntity_Fixed {
  msdyusd_tracesourcesettingid: string;
}
interface msdyusd_tracesourcesetting extends msdyusd_tracesourcesetting_Base, msdyusd_tracesourcesetting_Relationships {
}
interface msdyusd_tracesourcesetting_Relationships {
}
interface msdyusd_tracesourcesetting_Result extends msdyusd_tracesourcesetting_Base, msdyusd_tracesourcesetting_Relationships {
}
interface msdyusd_tracesourcesetting_FormattedResult {
}
interface msdyusd_tracesourcesetting_Select {
}
interface msdyusd_tracesourcesetting_Expand {
}
interface msdyusd_tracesourcesetting_Filter {
}
interface msdyusd_tracesourcesetting_Create extends msdyusd_tracesourcesetting {
}
interface msdyusd_tracesourcesetting_Update extends msdyusd_tracesourcesetting {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Base extends WebEntity {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Fixed extends WebEntity_Fixed {
  msdyusd_tracesourcesetting_hostedcontrolid: string;
}
interface msdyusd_tracesourcesetting_hostedcontrol extends msdyusd_tracesourcesetting_hostedcontrol_Base, msdyusd_tracesourcesetting_hostedcontrol_Relationships {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Relationships {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Result extends msdyusd_tracesourcesetting_hostedcontrol_Base, msdyusd_tracesourcesetting_hostedcontrol_Relationships {
}
interface msdyusd_tracesourcesetting_hostedcontrol_FormattedResult {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Select {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Expand {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Filter {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Create extends msdyusd_tracesourcesetting_hostedcontrol {
}
interface msdyusd_tracesourcesetting_hostedcontrol_Update extends msdyusd_tracesourcesetting_hostedcontrol {
}
interface msdyusd_ucisettings_Base extends WebEntity {
}
interface msdyusd_ucisettings_Fixed extends WebEntity_Fixed {
  msdyusd_ucisettingsid: string;
}
interface msdyusd_ucisettings extends msdyusd_ucisettings_Base, msdyusd_ucisettings_Relationships {
}
interface msdyusd_ucisettings_Relationships {
}
interface msdyusd_ucisettings_Result extends msdyusd_ucisettings_Base, msdyusd_ucisettings_Relationships {
}
interface msdyusd_ucisettings_FormattedResult {
}
interface msdyusd_ucisettings_Select {
}
interface msdyusd_ucisettings_Expand {
}
interface msdyusd_ucisettings_Filter {
}
interface msdyusd_ucisettings_Create extends msdyusd_ucisettings {
}
interface msdyusd_ucisettings_Update extends msdyusd_ucisettings {
}
interface msdyusd_uiievent_Base extends WebEntity {
}
interface msdyusd_uiievent_Fixed extends WebEntity_Fixed {
  msdyusd_uiieventid: string;
}
interface msdyusd_uiievent extends msdyusd_uiievent_Base, msdyusd_uiievent_Relationships {
}
interface msdyusd_uiievent_Relationships {
}
interface msdyusd_uiievent_Result extends msdyusd_uiievent_Base, msdyusd_uiievent_Relationships {
}
interface msdyusd_uiievent_FormattedResult {
}
interface msdyusd_uiievent_Select {
}
interface msdyusd_uiievent_Expand {
}
interface msdyusd_uiievent_Filter {
}
interface msdyusd_uiievent_Create extends msdyusd_uiievent {
}
interface msdyusd_uiievent_Update extends msdyusd_uiievent {
}
interface msdyusd_uiievent_agentscriptaction_Base extends WebEntity {
}
interface msdyusd_uiievent_agentscriptaction_Fixed extends WebEntity_Fixed {
  msdyusd_uiievent_agentscriptactionid: string;
}
interface msdyusd_uiievent_agentscriptaction extends msdyusd_uiievent_agentscriptaction_Base, msdyusd_uiievent_agentscriptaction_Relationships {
}
interface msdyusd_uiievent_agentscriptaction_Relationships {
}
interface msdyusd_uiievent_agentscriptaction_Result extends msdyusd_uiievent_agentscriptaction_Base, msdyusd_uiievent_agentscriptaction_Relationships {
}
interface msdyusd_uiievent_agentscriptaction_FormattedResult {
}
interface msdyusd_uiievent_agentscriptaction_Select {
}
interface msdyusd_uiievent_agentscriptaction_Expand {
}
interface msdyusd_uiievent_agentscriptaction_Filter {
}
interface msdyusd_uiievent_agentscriptaction_Create extends msdyusd_uiievent_agentscriptaction {
}
interface msdyusd_uiievent_agentscriptaction_Update extends msdyusd_uiievent_agentscriptaction {
}
interface msdyusd_usersettings_Base extends WebEntity {
}
interface msdyusd_usersettings_Fixed extends WebEntity_Fixed {
  msdyusd_usersettingsid: string;
}
interface msdyusd_usersettings extends msdyusd_usersettings_Base, msdyusd_usersettings_Relationships {
}
interface msdyusd_usersettings_Relationships {
}
interface msdyusd_usersettings_Result extends msdyusd_usersettings_Base, msdyusd_usersettings_Relationships {
}
interface msdyusd_usersettings_FormattedResult {
}
interface msdyusd_usersettings_Select {
}
interface msdyusd_usersettings_Expand {
}
interface msdyusd_usersettings_Filter {
}
interface msdyusd_usersettings_Create extends msdyusd_usersettings {
}
interface msdyusd_usersettings_Update extends msdyusd_usersettings {
}
interface msdyusd_windowroute_Base extends WebEntity {
}
interface msdyusd_windowroute_Fixed extends WebEntity_Fixed {
  msdyusd_windowrouteid: string;
}
interface msdyusd_windowroute extends msdyusd_windowroute_Base, msdyusd_windowroute_Relationships {
}
interface msdyusd_windowroute_Relationships {
}
interface msdyusd_windowroute_Result extends msdyusd_windowroute_Base, msdyusd_windowroute_Relationships {
}
interface msdyusd_windowroute_FormattedResult {
}
interface msdyusd_windowroute_Select {
}
interface msdyusd_windowroute_Expand {
}
interface msdyusd_windowroute_Filter {
}
interface msdyusd_windowroute_Create extends msdyusd_windowroute {
}
interface msdyusd_windowroute_Update extends msdyusd_windowroute {
}
interface msdyusd_windowroute_agentscriptaction_Base extends WebEntity {
}
interface msdyusd_windowroute_agentscriptaction_Fixed extends WebEntity_Fixed {
  msdyusd_windowroute_agentscriptactionid: string;
}
interface msdyusd_windowroute_agentscriptaction extends msdyusd_windowroute_agentscriptaction_Base, msdyusd_windowroute_agentscriptaction_Relationships {
}
interface msdyusd_windowroute_agentscriptaction_Relationships {
}
interface msdyusd_windowroute_agentscriptaction_Result extends msdyusd_windowroute_agentscriptaction_Base, msdyusd_windowroute_agentscriptaction_Relationships {
}
interface msdyusd_windowroute_agentscriptaction_FormattedResult {
}
interface msdyusd_windowroute_agentscriptaction_Select {
}
interface msdyusd_windowroute_agentscriptaction_Expand {
}
interface msdyusd_windowroute_agentscriptaction_Filter {
}
interface msdyusd_windowroute_agentscriptaction_Create extends msdyusd_windowroute_agentscriptaction {
}
interface msdyusd_windowroute_agentscriptaction_Update extends msdyusd_windowroute_agentscriptaction {
}
interface msdyusd_windowroute_ctisearch_Base extends WebEntity {
}
interface msdyusd_windowroute_ctisearch_Fixed extends WebEntity_Fixed {
  msdyusd_windowroute_ctisearchid: string;
}
interface msdyusd_windowroute_ctisearch extends msdyusd_windowroute_ctisearch_Base, msdyusd_windowroute_ctisearch_Relationships {
}
interface msdyusd_windowroute_ctisearch_Relationships {
}
interface msdyusd_windowroute_ctisearch_Result extends msdyusd_windowroute_ctisearch_Base, msdyusd_windowroute_ctisearch_Relationships {
}
interface msdyusd_windowroute_ctisearch_FormattedResult {
}
interface msdyusd_windowroute_ctisearch_Select {
}
interface msdyusd_windowroute_ctisearch_Expand {
}
interface msdyusd_windowroute_ctisearch_Filter {
}
interface msdyusd_windowroute_ctisearch_Create extends msdyusd_windowroute_ctisearch {
}
interface msdyusd_windowroute_ctisearch_Update extends msdyusd_windowroute_ctisearch {
}
interface msfp_alert_Base extends WebEntity {
}
interface msfp_alert_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface msfp_alert extends msfp_alert_Base, msfp_alert_Relationships {
}
interface msfp_alert_Relationships {
}
interface msfp_alert_Result extends msfp_alert_Base, msfp_alert_Relationships {
}
interface msfp_alert_FormattedResult {
}
interface msfp_alert_Select {
}
interface msfp_alert_Expand {
}
interface msfp_alert_Filter {
}
interface msfp_alert_Create extends msfp_alert {
}
interface msfp_alert_Update extends msfp_alert {
}
interface msfp_alertrule_Base extends WebEntity {
}
interface msfp_alertrule_Fixed extends WebEntity_Fixed {
  msfp_alertruleid: string;
}
interface msfp_alertrule extends msfp_alertrule_Base, msfp_alertrule_Relationships {
}
interface msfp_alertrule_Relationships {
}
interface msfp_alertrule_Result extends msfp_alertrule_Base, msfp_alertrule_Relationships {
}
interface msfp_alertrule_FormattedResult {
}
interface msfp_alertrule_Select {
}
interface msfp_alertrule_Expand {
}
interface msfp_alertrule_Filter {
}
interface msfp_alertrule_Create extends msfp_alertrule {
}
interface msfp_alertrule_Update extends msfp_alertrule {
}
interface msfp_emailtemplate_Base extends WebEntity {
}
interface msfp_emailtemplate_Fixed extends WebEntity_Fixed {
  msfp_emailtemplateid: string;
}
interface msfp_emailtemplate extends msfp_emailtemplate_Base, msfp_emailtemplate_Relationships {
}
interface msfp_emailtemplate_Relationships {
}
interface msfp_emailtemplate_Result extends msfp_emailtemplate_Base, msfp_emailtemplate_Relationships {
}
interface msfp_emailtemplate_FormattedResult {
}
interface msfp_emailtemplate_Select {
}
interface msfp_emailtemplate_Expand {
}
interface msfp_emailtemplate_Filter {
}
interface msfp_emailtemplate_Create extends msfp_emailtemplate {
}
interface msfp_emailtemplate_Update extends msfp_emailtemplate {
}
interface msfp_fileresponse_Base extends WebEntity {
}
interface msfp_fileresponse_Fixed extends WebEntity_Fixed {
  msfp_fileresponseid: string;
}
interface msfp_fileresponse extends msfp_fileresponse_Base, msfp_fileresponse_Relationships {
}
interface msfp_fileresponse_Relationships {
}
interface msfp_fileresponse_Result extends msfp_fileresponse_Base, msfp_fileresponse_Relationships {
}
interface msfp_fileresponse_FormattedResult {
}
interface msfp_fileresponse_Select {
}
interface msfp_fileresponse_Expand {
}
interface msfp_fileresponse_Filter {
}
interface msfp_fileresponse_Create extends msfp_fileresponse {
}
interface msfp_fileresponse_Update extends msfp_fileresponse {
}
interface msfp_localizedemailtemplate_Base extends WebEntity {
}
interface msfp_localizedemailtemplate_Fixed extends WebEntity_Fixed {
  msfp_localizedemailtemplateid: string;
}
interface msfp_localizedemailtemplate extends msfp_localizedemailtemplate_Base, msfp_localizedemailtemplate_Relationships {
}
interface msfp_localizedemailtemplate_Relationships {
}
interface msfp_localizedemailtemplate_Result extends msfp_localizedemailtemplate_Base, msfp_localizedemailtemplate_Relationships {
}
interface msfp_localizedemailtemplate_FormattedResult {
}
interface msfp_localizedemailtemplate_Select {
}
interface msfp_localizedemailtemplate_Expand {
}
interface msfp_localizedemailtemplate_Filter {
}
interface msfp_localizedemailtemplate_Create extends msfp_localizedemailtemplate {
}
interface msfp_localizedemailtemplate_Update extends msfp_localizedemailtemplate {
}
interface msfp_project_Base extends WebEntity {
}
interface msfp_project_Fixed extends WebEntity_Fixed {
  msfp_projectid: string;
}
interface msfp_project extends msfp_project_Base, msfp_project_Relationships {
}
interface msfp_project_Relationships {
}
interface msfp_project_Result extends msfp_project_Base, msfp_project_Relationships {
}
interface msfp_project_FormattedResult {
}
interface msfp_project_Select {
}
interface msfp_project_Expand {
}
interface msfp_project_Filter {
}
interface msfp_project_Create extends msfp_project {
}
interface msfp_project_Update extends msfp_project {
}
interface msfp_question_Base extends WebEntity {
}
interface msfp_question_Fixed extends WebEntity_Fixed {
  msfp_questionid: string;
}
interface msfp_question extends msfp_question_Base, msfp_question_Relationships {
}
interface msfp_question_Relationships {
}
interface msfp_question_Result extends msfp_question_Base, msfp_question_Relationships {
}
interface msfp_question_FormattedResult {
}
interface msfp_question_Select {
}
interface msfp_question_Expand {
}
interface msfp_question_Filter {
}
interface msfp_question_Create extends msfp_question {
}
interface msfp_question_Update extends msfp_question {
}
interface msfp_questionresponse_Base extends WebEntity {
}
interface msfp_questionresponse_Fixed extends WebEntity_Fixed {
  msfp_questionresponseid: string;
}
interface msfp_questionresponse extends msfp_questionresponse_Base, msfp_questionresponse_Relationships {
}
interface msfp_questionresponse_Relationships {
}
interface msfp_questionresponse_Result extends msfp_questionresponse_Base, msfp_questionresponse_Relationships {
}
interface msfp_questionresponse_FormattedResult {
}
interface msfp_questionresponse_Select {
}
interface msfp_questionresponse_Expand {
}
interface msfp_questionresponse_Filter {
}
interface msfp_questionresponse_Create extends msfp_questionresponse {
}
interface msfp_questionresponse_Update extends msfp_questionresponse {
}
interface msfp_satisfactionmetric_Base extends WebEntity {
}
interface msfp_satisfactionmetric_Fixed extends WebEntity_Fixed {
  msfp_satisfactionmetricid: string;
}
interface msfp_satisfactionmetric extends msfp_satisfactionmetric_Base, msfp_satisfactionmetric_Relationships {
}
interface msfp_satisfactionmetric_Relationships {
}
interface msfp_satisfactionmetric_Result extends msfp_satisfactionmetric_Base, msfp_satisfactionmetric_Relationships {
}
interface msfp_satisfactionmetric_FormattedResult {
}
interface msfp_satisfactionmetric_Select {
}
interface msfp_satisfactionmetric_Expand {
}
interface msfp_satisfactionmetric_Filter {
}
interface msfp_satisfactionmetric_Create extends msfp_satisfactionmetric {
}
interface msfp_satisfactionmetric_Update extends msfp_satisfactionmetric {
}
interface msfp_survey_Base extends WebEntity {
}
interface msfp_survey_Fixed extends WebEntity_Fixed {
  msfp_surveyid: string;
}
interface msfp_survey extends msfp_survey_Base, msfp_survey_Relationships {
}
interface msfp_survey_Relationships {
}
interface msfp_survey_Result extends msfp_survey_Base, msfp_survey_Relationships {
}
interface msfp_survey_FormattedResult {
}
interface msfp_survey_Select {
}
interface msfp_survey_Expand {
}
interface msfp_survey_Filter {
}
interface msfp_survey_Create extends msfp_survey {
}
interface msfp_survey_Update extends msfp_survey {
}
interface msfp_surveyinvite_Base extends WebEntity {
}
interface msfp_surveyinvite_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface msfp_surveyinvite extends msfp_surveyinvite_Base, msfp_surveyinvite_Relationships {
}
interface msfp_surveyinvite_Relationships {
}
interface msfp_surveyinvite_Result extends msfp_surveyinvite_Base, msfp_surveyinvite_Relationships {
}
interface msfp_surveyinvite_FormattedResult {
}
interface msfp_surveyinvite_Select {
}
interface msfp_surveyinvite_Expand {
}
interface msfp_surveyinvite_Filter {
}
interface msfp_surveyinvite_Create extends msfp_surveyinvite {
}
interface msfp_surveyinvite_Update extends msfp_surveyinvite {
}
interface msfp_surveyreminder_Base extends WebEntity {
}
interface msfp_surveyreminder_Fixed extends WebEntity_Fixed {
  msfp_surveyreminderid: string;
}
interface msfp_surveyreminder extends msfp_surveyreminder_Base, msfp_surveyreminder_Relationships {
}
interface msfp_surveyreminder_Relationships {
}
interface msfp_surveyreminder_Result extends msfp_surveyreminder_Base, msfp_surveyreminder_Relationships {
}
interface msfp_surveyreminder_FormattedResult {
}
interface msfp_surveyreminder_Select {
}
interface msfp_surveyreminder_Expand {
}
interface msfp_surveyreminder_Filter {
}
interface msfp_surveyreminder_Create extends msfp_surveyreminder {
}
interface msfp_surveyreminder_Update extends msfp_surveyreminder {
}
interface msfp_surveyresponse_Base extends WebEntity {
}
interface msfp_surveyresponse_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface msfp_surveyresponse extends msfp_surveyresponse_Base, msfp_surveyresponse_Relationships {
}
interface msfp_surveyresponse_Relationships {
}
interface msfp_surveyresponse_Result extends msfp_surveyresponse_Base, msfp_surveyresponse_Relationships {
}
interface msfp_surveyresponse_FormattedResult {
}
interface msfp_surveyresponse_Select {
}
interface msfp_surveyresponse_Expand {
}
interface msfp_surveyresponse_Filter {
}
interface msfp_surveyresponse_Create extends msfp_surveyresponse {
}
interface msfp_surveyresponse_Update extends msfp_surveyresponse {
}
interface msfp_unsubscribedrecipient_Base extends WebEntity {
}
interface msfp_unsubscribedrecipient_Fixed extends WebEntity_Fixed {
  msfp_unsubscribedrecipientid: string;
}
interface msfp_unsubscribedrecipient extends msfp_unsubscribedrecipient_Base, msfp_unsubscribedrecipient_Relationships {
}
interface msfp_unsubscribedrecipient_Relationships {
}
interface msfp_unsubscribedrecipient_Result extends msfp_unsubscribedrecipient_Base, msfp_unsubscribedrecipient_Relationships {
}
interface msfp_unsubscribedrecipient_FormattedResult {
}
interface msfp_unsubscribedrecipient_Select {
}
interface msfp_unsubscribedrecipient_Expand {
}
interface msfp_unsubscribedrecipient_Filter {
}
interface msfp_unsubscribedrecipient_Create extends msfp_unsubscribedrecipient {
}
interface msfp_unsubscribedrecipient_Update extends msfp_unsubscribedrecipient {
}
interface MultiEntitySearch_Base extends WebEntity {
}
interface MultiEntitySearch_Fixed extends WebEntity_Fixed {
  multientitysearchid: string;
}
interface MultiEntitySearch extends MultiEntitySearch_Base, MultiEntitySearch_Relationships {
}
interface MultiEntitySearch_Relationships {
}
interface MultiEntitySearch_Result extends MultiEntitySearch_Base, MultiEntitySearch_Relationships {
}
interface MultiEntitySearch_FormattedResult {
}
interface MultiEntitySearch_Select {
}
interface MultiEntitySearch_Expand {
}
interface MultiEntitySearch_Filter {
}
interface MultiEntitySearch_Create extends MultiEntitySearch {
}
interface MultiEntitySearch_Update extends MultiEntitySearch {
}
interface MultiEntitySearchEntities_Base extends WebEntity {
}
interface MultiEntitySearchEntities_Fixed extends WebEntity_Fixed {
  multientitysearchentityid: string;
}
interface MultiEntitySearchEntities extends MultiEntitySearchEntities_Base, MultiEntitySearchEntities_Relationships {
}
interface MultiEntitySearchEntities_Relationships {
}
interface MultiEntitySearchEntities_Result extends MultiEntitySearchEntities_Base, MultiEntitySearchEntities_Relationships {
}
interface MultiEntitySearchEntities_FormattedResult {
}
interface MultiEntitySearchEntities_Select {
}
interface MultiEntitySearchEntities_Expand {
}
interface MultiEntitySearchEntities_Filter {
}
interface MultiEntitySearchEntities_Create extends MultiEntitySearchEntities {
}
interface MultiEntitySearchEntities_Update extends MultiEntitySearchEntities {
}
interface MultiSelectAttributeOptionValues_Base extends WebEntity {
}
interface MultiSelectAttributeOptionValues_Fixed extends WebEntity_Fixed {
  multiselectfulltextidkey: string;
}
interface MultiSelectAttributeOptionValues extends MultiSelectAttributeOptionValues_Base, MultiSelectAttributeOptionValues_Relationships {
}
interface MultiSelectAttributeOptionValues_Relationships {
}
interface MultiSelectAttributeOptionValues_Result extends MultiSelectAttributeOptionValues_Base, MultiSelectAttributeOptionValues_Relationships {
}
interface MultiSelectAttributeOptionValues_FormattedResult {
}
interface MultiSelectAttributeOptionValues_Select {
}
interface MultiSelectAttributeOptionValues_Expand {
}
interface MultiSelectAttributeOptionValues_Filter {
}
interface MultiSelectAttributeOptionValues_Create extends MultiSelectAttributeOptionValues {
}
interface MultiSelectAttributeOptionValues_Update extends MultiSelectAttributeOptionValues {
}
interface NavigationSetting_Base extends WebEntity {
}
interface NavigationSetting_Fixed extends WebEntity_Fixed {
  navigationsettingid: string;
}
interface NavigationSetting extends NavigationSetting_Base, NavigationSetting_Relationships {
}
interface NavigationSetting_Relationships {
}
interface NavigationSetting_Result extends NavigationSetting_Base, NavigationSetting_Relationships {
}
interface NavigationSetting_FormattedResult {
}
interface NavigationSetting_Select {
}
interface NavigationSetting_Expand {
}
interface NavigationSetting_Filter {
}
interface NavigationSetting_Create extends NavigationSetting {
}
interface NavigationSetting_Update extends NavigationSetting {
}
interface NewProcess_Base extends WebEntity {
}
interface NewProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface NewProcess extends NewProcess_Base, NewProcess_Relationships {
}
interface NewProcess_Relationships {
}
interface NewProcess_Result extends NewProcess_Base, NewProcess_Relationships {
}
interface NewProcess_FormattedResult {
}
interface NewProcess_Select {
}
interface NewProcess_Expand {
}
interface NewProcess_Filter {
}
interface NewProcess_Create extends NewProcess {
}
interface NewProcess_Update extends NewProcess {
}
interface Notification_Base extends WebEntity {
}
interface Notification_Fixed extends WebEntity_Fixed {
  notificationid: string;
}
interface Notification extends Notification_Base, Notification_Relationships {
}
interface Notification_Relationships {
}
interface Notification_Result extends Notification_Base, Notification_Relationships {
}
interface Notification_FormattedResult {
}
interface Notification_Select {
}
interface Notification_Expand {
}
interface Notification_Filter {
}
interface Notification_Create extends Notification {
}
interface Notification_Update extends Notification {
}
interface OfficeDocument_Base extends WebEntity {
}
interface OfficeDocument_Fixed extends WebEntity_Fixed {
  officedocumentid: string;
}
interface OfficeDocument extends OfficeDocument_Base, OfficeDocument_Relationships {
}
interface OfficeDocument_Relationships {
}
interface OfficeDocument_Result extends OfficeDocument_Base, OfficeDocument_Relationships {
}
interface OfficeDocument_FormattedResult {
}
interface OfficeDocument_Select {
}
interface OfficeDocument_Expand {
}
interface OfficeDocument_Filter {
}
interface OfficeDocument_Create extends OfficeDocument {
}
interface OfficeDocument_Update extends OfficeDocument {
}
interface OfficeGraphDocument_Base extends WebEntity {
}
interface OfficeGraphDocument_Fixed extends WebEntity_Fixed {
  officegraphdocumentid: string;
}
interface OfficeGraphDocument extends OfficeGraphDocument_Base, OfficeGraphDocument_Relationships {
}
interface OfficeGraphDocument_Relationships {
}
interface OfficeGraphDocument_Result extends OfficeGraphDocument_Base, OfficeGraphDocument_Relationships {
}
interface OfficeGraphDocument_FormattedResult {
}
interface OfficeGraphDocument_Select {
}
interface OfficeGraphDocument_Expand {
}
interface OfficeGraphDocument_Filter {
}
interface OfficeGraphDocument_Create extends OfficeGraphDocument {
}
interface OfficeGraphDocument_Update extends OfficeGraphDocument {
}
interface OfflineCommandDefinition_Base extends WebEntity {
}
interface OfflineCommandDefinition_Fixed extends WebEntity_Fixed {
  commanddefinitionid: string;
}
interface OfflineCommandDefinition extends OfflineCommandDefinition_Base, OfflineCommandDefinition_Relationships {
}
interface OfflineCommandDefinition_Relationships {
}
interface OfflineCommandDefinition_Result extends OfflineCommandDefinition_Base, OfflineCommandDefinition_Relationships {
}
interface OfflineCommandDefinition_FormattedResult {
}
interface OfflineCommandDefinition_Select {
}
interface OfflineCommandDefinition_Expand {
}
interface OfflineCommandDefinition_Filter {
}
interface OfflineCommandDefinition_Create extends OfflineCommandDefinition {
}
interface OfflineCommandDefinition_Update extends OfflineCommandDefinition {
}
interface Opportunity_Base extends WebEntity {
}
interface Opportunity_Fixed extends WebEntity_Fixed {
  opportunityid: string;
}
interface Opportunity extends Opportunity_Base, Opportunity_Relationships {
}
interface Opportunity_Relationships {
}
interface Opportunity_Result extends Opportunity_Base, Opportunity_Relationships {
}
interface Opportunity_FormattedResult {
}
interface Opportunity_Select {
}
interface Opportunity_Expand {
}
interface Opportunity_Filter {
}
interface Opportunity_Create extends Opportunity {
}
interface Opportunity_Update extends Opportunity {
}
interface OpportunityClose_Base extends WebEntity {
}
interface OpportunityClose_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface OpportunityClose extends OpportunityClose_Base, OpportunityClose_Relationships {
}
interface OpportunityClose_Relationships {
}
interface OpportunityClose_Result extends OpportunityClose_Base, OpportunityClose_Relationships {
}
interface OpportunityClose_FormattedResult {
}
interface OpportunityClose_Select {
}
interface OpportunityClose_Expand {
}
interface OpportunityClose_Filter {
}
interface OpportunityClose_Create extends OpportunityClose {
}
interface OpportunityClose_Update extends OpportunityClose {
}
interface OpportunityCompetitors_Base extends WebEntity {
}
interface OpportunityCompetitors_Fixed extends WebEntity_Fixed {
  opportunitycompetitorid: string;
}
interface OpportunityCompetitors extends OpportunityCompetitors_Base, OpportunityCompetitors_Relationships {
}
interface OpportunityCompetitors_Relationships {
}
interface OpportunityCompetitors_Result extends OpportunityCompetitors_Base, OpportunityCompetitors_Relationships {
}
interface OpportunityCompetitors_FormattedResult {
}
interface OpportunityCompetitors_Select {
}
interface OpportunityCompetitors_Expand {
}
interface OpportunityCompetitors_Filter {
}
interface OpportunityCompetitors_Create extends OpportunityCompetitors {
}
interface OpportunityCompetitors_Update extends OpportunityCompetitors {
}
interface OpportunityProduct_Base extends WebEntity {
}
interface OpportunityProduct_Fixed extends WebEntity_Fixed {
  opportunityproductid: string;
}
interface OpportunityProduct extends OpportunityProduct_Base, OpportunityProduct_Relationships {
}
interface OpportunityProduct_Relationships {
}
interface OpportunityProduct_Result extends OpportunityProduct_Base, OpportunityProduct_Relationships {
}
interface OpportunityProduct_FormattedResult {
}
interface OpportunityProduct_Select {
}
interface OpportunityProduct_Expand {
}
interface OpportunityProduct_Filter {
}
interface OpportunityProduct_Create extends OpportunityProduct {
}
interface OpportunityProduct_Update extends OpportunityProduct {
}
interface OpportunitySalesProcess_Base extends WebEntity {
}
interface OpportunitySalesProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface OpportunitySalesProcess extends OpportunitySalesProcess_Base, OpportunitySalesProcess_Relationships {
}
interface OpportunitySalesProcess_Relationships {
}
interface OpportunitySalesProcess_Result extends OpportunitySalesProcess_Base, OpportunitySalesProcess_Relationships {
}
interface OpportunitySalesProcess_FormattedResult {
}
interface OpportunitySalesProcess_Select {
}
interface OpportunitySalesProcess_Expand {
}
interface OpportunitySalesProcess_Filter {
}
interface OpportunitySalesProcess_Create extends OpportunitySalesProcess {
}
interface OpportunitySalesProcess_Update extends OpportunitySalesProcess {
}
interface OptionSet_Base extends WebEntity {
}
interface OptionSet_Fixed extends WebEntity_Fixed {
  optionsetid: string;
}
interface OptionSet extends OptionSet_Base, OptionSet_Relationships {
}
interface OptionSet_Relationships {
}
interface OptionSet_Result extends OptionSet_Base, OptionSet_Relationships {
}
interface OptionSet_FormattedResult {
}
interface OptionSet_Select {
}
interface OptionSet_Expand {
}
interface OptionSet_Filter {
}
interface OptionSet_Create extends OptionSet {
}
interface OptionSet_Update extends OptionSet {
}
interface OrderClose_Base extends WebEntity {
}
interface OrderClose_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface OrderClose extends OrderClose_Base, OrderClose_Relationships {
}
interface OrderClose_Relationships {
}
interface OrderClose_Result extends OrderClose_Base, OrderClose_Relationships {
}
interface OrderClose_FormattedResult {
}
interface OrderClose_Select {
}
interface OrderClose_Expand {
}
interface OrderClose_Filter {
}
interface OrderClose_Create extends OrderClose {
}
interface OrderClose_Update extends OrderClose {
}
interface Organization_Base extends WebEntity {
}
interface Organization_Fixed extends WebEntity_Fixed {
  organizationid: string;
}
interface Organization extends Organization_Base, Organization_Relationships {
}
interface Organization_Relationships {
}
interface Organization_Result extends Organization_Base, Organization_Relationships {
}
interface Organization_FormattedResult {
}
interface Organization_Select {
}
interface Organization_Expand {
}
interface Organization_Filter {
}
interface Organization_Create extends Organization {
}
interface Organization_Update extends Organization {
}
interface organizationdatasyncsubscription_Base extends WebEntity {
}
interface organizationdatasyncsubscription_Fixed extends WebEntity_Fixed {
  organizationdatasyncsubscriptionid: string;
}
interface organizationdatasyncsubscription extends organizationdatasyncsubscription_Base, organizationdatasyncsubscription_Relationships {
}
interface organizationdatasyncsubscription_Relationships {
}
interface organizationdatasyncsubscription_Result extends organizationdatasyncsubscription_Base, organizationdatasyncsubscription_Relationships {
}
interface organizationdatasyncsubscription_FormattedResult {
}
interface organizationdatasyncsubscription_Select {
}
interface organizationdatasyncsubscription_Expand {
}
interface organizationdatasyncsubscription_Filter {
}
interface organizationdatasyncsubscription_Create extends organizationdatasyncsubscription {
}
interface organizationdatasyncsubscription_Update extends organizationdatasyncsubscription {
}
interface organizationdatasyncsubscriptionentity_Base extends WebEntity {
}
interface organizationdatasyncsubscriptionentity_Fixed extends WebEntity_Fixed {
  organizationdatasyncsubscriptionentityid: string;
}
interface organizationdatasyncsubscriptionentity extends organizationdatasyncsubscriptionentity_Base, organizationdatasyncsubscriptionentity_Relationships {
}
interface organizationdatasyncsubscriptionentity_Relationships {
}
interface organizationdatasyncsubscriptionentity_Result extends organizationdatasyncsubscriptionentity_Base, organizationdatasyncsubscriptionentity_Relationships {
}
interface organizationdatasyncsubscriptionentity_FormattedResult {
}
interface organizationdatasyncsubscriptionentity_Select {
}
interface organizationdatasyncsubscriptionentity_Expand {
}
interface organizationdatasyncsubscriptionentity_Filter {
}
interface organizationdatasyncsubscriptionentity_Create extends organizationdatasyncsubscriptionentity {
}
interface organizationdatasyncsubscriptionentity_Update extends organizationdatasyncsubscriptionentity {
}
interface OrganizationSetting_Base extends WebEntity {
}
interface OrganizationSetting_Fixed extends WebEntity_Fixed {
  organizationsettingid: string;
}
interface OrganizationSetting extends OrganizationSetting_Base, OrganizationSetting_Relationships {
}
interface OrganizationSetting_Relationships {
}
interface OrganizationSetting_Result extends OrganizationSetting_Base, OrganizationSetting_Relationships {
}
interface OrganizationSetting_FormattedResult {
}
interface OrganizationSetting_Select {
}
interface OrganizationSetting_Expand {
}
interface OrganizationSetting_Filter {
}
interface OrganizationSetting_Create extends OrganizationSetting {
}
interface OrganizationSetting_Update extends OrganizationSetting {
}
interface OrganizationStatistic_Base extends WebEntity {
}
interface OrganizationStatistic_Fixed extends WebEntity_Fixed {
  organizationstatisticid: string;
}
interface OrganizationStatistic extends OrganizationStatistic_Base, OrganizationStatistic_Relationships {
}
interface OrganizationStatistic_Relationships {
}
interface OrganizationStatistic_Result extends OrganizationStatistic_Base, OrganizationStatistic_Relationships {
}
interface OrganizationStatistic_FormattedResult {
}
interface OrganizationStatistic_Select {
}
interface OrganizationStatistic_Expand {
}
interface OrganizationStatistic_Filter {
}
interface OrganizationStatistic_Create extends OrganizationStatistic {
}
interface OrganizationStatistic_Update extends OrganizationStatistic {
}
interface OrganizationUI_Base extends WebEntity {
}
interface OrganizationUI_Fixed extends WebEntity_Fixed {
  formid: string;
}
interface OrganizationUI extends OrganizationUI_Base, OrganizationUI_Relationships {
}
interface OrganizationUI_Relationships {
}
interface OrganizationUI_Result extends OrganizationUI_Base, OrganizationUI_Relationships {
}
interface OrganizationUI_FormattedResult {
}
interface OrganizationUI_Select {
}
interface OrganizationUI_Expand {
}
interface OrganizationUI_Filter {
}
interface OrganizationUI_Create extends OrganizationUI {
}
interface OrganizationUI_Update extends OrganizationUI {
}
interface OrgInsightsMetric_Base extends WebEntity {
}
interface OrgInsightsMetric_Fixed extends WebEntity_Fixed {
  orginsightsmetricid: string;
}
interface OrgInsightsMetric extends OrgInsightsMetric_Base, OrgInsightsMetric_Relationships {
}
interface OrgInsightsMetric_Relationships {
}
interface OrgInsightsMetric_Result extends OrgInsightsMetric_Base, OrgInsightsMetric_Relationships {
}
interface OrgInsightsMetric_FormattedResult {
}
interface OrgInsightsMetric_Select {
}
interface OrgInsightsMetric_Expand {
}
interface OrgInsightsMetric_Filter {
}
interface OrgInsightsMetric_Create extends OrgInsightsMetric {
}
interface OrgInsightsMetric_Update extends OrgInsightsMetric {
}
interface OrgInsightsNotification_Base extends WebEntity {
}
interface OrgInsightsNotification_Fixed extends WebEntity_Fixed {
  orginsightsnotificationid: string;
}
interface OrgInsightsNotification extends OrgInsightsNotification_Base, OrgInsightsNotification_Relationships {
}
interface OrgInsightsNotification_Relationships {
}
interface OrgInsightsNotification_Result extends OrgInsightsNotification_Base, OrgInsightsNotification_Relationships {
}
interface OrgInsightsNotification_FormattedResult {
}
interface OrgInsightsNotification_Select {
}
interface OrgInsightsNotification_Expand {
}
interface OrgInsightsNotification_Filter {
}
interface OrgInsightsNotification_Create extends OrgInsightsNotification {
}
interface OrgInsightsNotification_Update extends OrgInsightsNotification {
}
interface Owner_Base extends WebEntity {
}
interface Owner_Fixed extends WebEntity_Fixed {
  ownerid: string;
}
interface Owner extends Owner_Base, Owner_Relationships {
}
interface Owner_Relationships {
}
interface Owner_Result extends Owner_Base, Owner_Relationships {
}
interface Owner_FormattedResult {
}
interface Owner_Select {
}
interface Owner_Expand {
}
interface Owner_Filter {
}
interface Owner_Create extends Owner {
}
interface Owner_Update extends Owner {
}
interface OwnerMapping_Base extends WebEntity {
}
interface OwnerMapping_Fixed extends WebEntity_Fixed {
  ownermappingid: string;
}
interface OwnerMapping extends OwnerMapping_Base, OwnerMapping_Relationships {
}
interface OwnerMapping_Relationships {
}
interface OwnerMapping_Result extends OwnerMapping_Base, OwnerMapping_Relationships {
}
interface OwnerMapping_FormattedResult {
}
interface OwnerMapping_Select {
}
interface OwnerMapping_Expand {
}
interface OwnerMapping_Filter {
}
interface OwnerMapping_Create extends OwnerMapping {
}
interface OwnerMapping_Update extends OwnerMapping {
}
interface package_Base extends WebEntity {
}
interface package_Fixed extends WebEntity_Fixed {
  packageid: string;
}
interface package extends package_Base, package_Relationships {
}
interface package_Relationships {
}
interface package_Result extends package_Base, package_Relationships {
}
interface package_FormattedResult {
}
interface package_Select {
}
interface package_Expand {
}
interface package_Filter {
}
interface package_Create extends package {
}
interface package_Update extends package {
}
interface package_solution_Base extends WebEntity {
}
interface package_solution_Fixed extends WebEntity_Fixed {
  package_solutionid: string;
}
interface package_solution extends package_solution_Base, package_solution_Relationships {
}
interface package_solution_Relationships {
}
interface package_solution_Result extends package_solution_Base, package_solution_Relationships {
}
interface package_solution_FormattedResult {
}
interface package_solution_Select {
}
interface package_solution_Expand {
}
interface package_solution_Filter {
}
interface package_solution_Create extends package_solution {
}
interface package_solution_Update extends package_solution {
}
interface PartnerApplication_Base extends WebEntity {
}
interface PartnerApplication_Fixed extends WebEntity_Fixed {
  partnerapplicationid: string;
}
interface PartnerApplication extends PartnerApplication_Base, PartnerApplication_Relationships {
}
interface PartnerApplication_Relationships {
}
interface PartnerApplication_Result extends PartnerApplication_Base, PartnerApplication_Relationships {
}
interface PartnerApplication_FormattedResult {
}
interface PartnerApplication_Select {
}
interface PartnerApplication_Expand {
}
interface PartnerApplication_Filter {
}
interface PartnerApplication_Create extends PartnerApplication {
}
interface PartnerApplication_Update extends PartnerApplication {
}
interface PDFSetting_Base extends WebEntity {
}
interface PDFSetting_Fixed extends WebEntity_Fixed {
  pdfsettingid: string;
}
interface PDFSetting extends PDFSetting_Base, PDFSetting_Relationships {
}
interface PDFSetting_Relationships {
}
interface PDFSetting_Result extends PDFSetting_Base, PDFSetting_Relationships {
}
interface PDFSetting_FormattedResult {
}
interface PDFSetting_Select {
}
interface PDFSetting_Expand {
}
interface PDFSetting_Filter {
}
interface PDFSetting_Create extends PDFSetting {
}
interface PDFSetting_Update extends PDFSetting {
}
interface PersonalDocumentTemplate_Base extends WebEntity {
}
interface PersonalDocumentTemplate_Fixed extends WebEntity_Fixed {
  personaldocumenttemplateid: string;
}
interface PersonalDocumentTemplate extends PersonalDocumentTemplate_Base, PersonalDocumentTemplate_Relationships {
}
interface PersonalDocumentTemplate_Relationships {
}
interface PersonalDocumentTemplate_Result extends PersonalDocumentTemplate_Base, PersonalDocumentTemplate_Relationships {
}
interface PersonalDocumentTemplate_FormattedResult {
}
interface PersonalDocumentTemplate_Select {
}
interface PersonalDocumentTemplate_Expand {
}
interface PersonalDocumentTemplate_Filter {
}
interface PersonalDocumentTemplate_Create extends PersonalDocumentTemplate {
}
interface PersonalDocumentTemplate_Update extends PersonalDocumentTemplate {
}
interface PhoneCall_Base extends WebEntity {
}
interface PhoneCall_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface PhoneCall extends PhoneCall_Base, PhoneCall_Relationships {
}
interface PhoneCall_Relationships {
}
interface PhoneCall_Result extends PhoneCall_Base, PhoneCall_Relationships {
}
interface PhoneCall_FormattedResult {
}
interface PhoneCall_Select {
}
interface PhoneCall_Expand {
}
interface PhoneCall_Filter {
}
interface PhoneCall_Create extends PhoneCall {
}
interface PhoneCall_Update extends PhoneCall {
}
interface PhoneToCaseProcess_Base extends WebEntity {
}
interface PhoneToCaseProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface PhoneToCaseProcess extends PhoneToCaseProcess_Base, PhoneToCaseProcess_Relationships {
}
interface PhoneToCaseProcess_Relationships {
}
interface PhoneToCaseProcess_Result extends PhoneToCaseProcess_Base, PhoneToCaseProcess_Relationships {
}
interface PhoneToCaseProcess_FormattedResult {
}
interface PhoneToCaseProcess_Select {
}
interface PhoneToCaseProcess_Expand {
}
interface PhoneToCaseProcess_Filter {
}
interface PhoneToCaseProcess_Create extends PhoneToCaseProcess {
}
interface PhoneToCaseProcess_Update extends PhoneToCaseProcess {
}
interface PickListMapping_Base extends WebEntity {
}
interface PickListMapping_Fixed extends WebEntity_Fixed {
  picklistmappingid: string;
}
interface PickListMapping extends PickListMapping_Base, PickListMapping_Relationships {
}
interface PickListMapping_Relationships {
}
interface PickListMapping_Result extends PickListMapping_Base, PickListMapping_Relationships {
}
interface PickListMapping_FormattedResult {
}
interface PickListMapping_Select {
}
interface PickListMapping_Expand {
}
interface PickListMapping_Filter {
}
interface PickListMapping_Create extends PickListMapping {
}
interface PickListMapping_Update extends PickListMapping {
}
interface PluginAssembly_Base extends WebEntity {
}
interface PluginAssembly_Fixed extends WebEntity_Fixed {
  pluginassemblyid: string;
}
interface PluginAssembly extends PluginAssembly_Base, PluginAssembly_Relationships {
}
interface PluginAssembly_Relationships {
}
interface PluginAssembly_Result extends PluginAssembly_Base, PluginAssembly_Relationships {
}
interface PluginAssembly_FormattedResult {
}
interface PluginAssembly_Select {
}
interface PluginAssembly_Expand {
}
interface PluginAssembly_Filter {
}
interface PluginAssembly_Create extends PluginAssembly {
}
interface PluginAssembly_Update extends PluginAssembly {
}
interface pluginpackage_Base extends WebEntity {
}
interface pluginpackage_Fixed extends WebEntity_Fixed {
  pluginpackageid: string;
}
interface pluginpackage extends pluginpackage_Base, pluginpackage_Relationships {
}
interface pluginpackage_Relationships {
}
interface pluginpackage_Result extends pluginpackage_Base, pluginpackage_Relationships {
}
interface pluginpackage_FormattedResult {
}
interface pluginpackage_Select {
}
interface pluginpackage_Expand {
}
interface pluginpackage_Filter {
}
interface pluginpackage_Create extends pluginpackage {
}
interface pluginpackage_Update extends pluginpackage {
}
interface PluginTraceLog_Base extends WebEntity {
}
interface PluginTraceLog_Fixed extends WebEntity_Fixed {
  plugintracelogid: string;
}
interface PluginTraceLog extends PluginTraceLog_Base, PluginTraceLog_Relationships {
}
interface PluginTraceLog_Relationships {
}
interface PluginTraceLog_Result extends PluginTraceLog_Base, PluginTraceLog_Relationships {
}
interface PluginTraceLog_FormattedResult {
}
interface PluginTraceLog_Select {
}
interface PluginTraceLog_Expand {
}
interface PluginTraceLog_Filter {
}
interface PluginTraceLog_Create extends PluginTraceLog {
}
interface PluginTraceLog_Update extends PluginTraceLog {
}
interface PluginType_Base extends WebEntity {
}
interface PluginType_Fixed extends WebEntity_Fixed {
  plugintypeid: string;
}
interface PluginType extends PluginType_Base, PluginType_Relationships {
}
interface PluginType_Relationships {
}
interface PluginType_Result extends PluginType_Base, PluginType_Relationships {
}
interface PluginType_FormattedResult {
}
interface PluginType_Select {
}
interface PluginType_Expand {
}
interface PluginType_Filter {
}
interface PluginType_Create extends PluginType {
}
interface PluginType_Update extends PluginType {
}
interface PluginTypeStatistic_Base extends WebEntity {
}
interface PluginTypeStatistic_Fixed extends WebEntity_Fixed {
  plugintypestatisticid: string;
}
interface PluginTypeStatistic extends PluginTypeStatistic_Base, PluginTypeStatistic_Relationships {
}
interface PluginTypeStatistic_Relationships {
}
interface PluginTypeStatistic_Result extends PluginTypeStatistic_Base, PluginTypeStatistic_Relationships {
}
interface PluginTypeStatistic_FormattedResult {
}
interface PluginTypeStatistic_Select {
}
interface PluginTypeStatistic_Expand {
}
interface PluginTypeStatistic_Filter {
}
interface PluginTypeStatistic_Create extends PluginTypeStatistic {
}
interface PluginTypeStatistic_Update extends PluginTypeStatistic {
}
interface Position_Base extends WebEntity {
}
interface Position_Fixed extends WebEntity_Fixed {
  positionid: string;
}
interface Position extends Position_Base, Position_Relationships {
}
interface Position_Relationships {
}
interface Position_Result extends Position_Base, Position_Relationships {
}
interface Position_FormattedResult {
}
interface Position_Select {
}
interface Position_Expand {
}
interface Position_Filter {
}
interface Position_Create extends Position {
}
interface Position_Update extends Position {
}
interface Post_Base extends WebEntity {
}
interface Post_Fixed extends WebEntity_Fixed {
  postid: string;
}
interface Post extends Post_Base, Post_Relationships {
}
interface Post_Relationships {
}
interface Post_Result extends Post_Base, Post_Relationships {
}
interface Post_FormattedResult {
}
interface Post_Select {
}
interface Post_Expand {
}
interface Post_Filter {
}
interface Post_Create extends Post {
}
interface Post_Update extends Post {
}
interface PostComment_Base extends WebEntity {
}
interface PostComment_Fixed extends WebEntity_Fixed {
  postcommentid: string;
}
interface PostComment extends PostComment_Base, PostComment_Relationships {
}
interface PostComment_Relationships {
}
interface PostComment_Result extends PostComment_Base, PostComment_Relationships {
}
interface PostComment_FormattedResult {
}
interface PostComment_Select {
}
interface PostComment_Expand {
}
interface PostComment_Filter {
}
interface PostComment_Create extends PostComment {
}
interface PostComment_Update extends PostComment {
}
interface PostFollow_Base extends WebEntity {
}
interface PostFollow_Fixed extends WebEntity_Fixed {
  postfollowid: string;
}
interface PostFollow extends PostFollow_Base, PostFollow_Relationships {
}
interface PostFollow_Relationships {
}
interface PostFollow_Result extends PostFollow_Base, PostFollow_Relationships {
}
interface PostFollow_FormattedResult {
}
interface PostFollow_Select {
}
interface PostFollow_Expand {
}
interface PostFollow_Filter {
}
interface PostFollow_Create extends PostFollow {
}
interface PostFollow_Update extends PostFollow {
}
interface PostLike_Base extends WebEntity {
}
interface PostLike_Fixed extends WebEntity_Fixed {
  postlikeid: string;
}
interface PostLike extends PostLike_Base, PostLike_Relationships {
}
interface PostLike_Relationships {
}
interface PostLike_Result extends PostLike_Base, PostLike_Relationships {
}
interface PostLike_FormattedResult {
}
interface PostLike_Select {
}
interface PostLike_Expand {
}
interface PostLike_Filter {
}
interface PostLike_Create extends PostLike {
}
interface PostLike_Update extends PostLike {
}
interface PostRegarding_Base extends WebEntity {
}
interface PostRegarding_Fixed extends WebEntity_Fixed {
  postregardingid: string;
}
interface PostRegarding extends PostRegarding_Base, PostRegarding_Relationships {
}
interface PostRegarding_Relationships {
}
interface PostRegarding_Result extends PostRegarding_Base, PostRegarding_Relationships {
}
interface PostRegarding_FormattedResult {
}
interface PostRegarding_Select {
}
interface PostRegarding_Expand {
}
interface PostRegarding_Filter {
}
interface PostRegarding_Create extends PostRegarding {
}
interface PostRegarding_Update extends PostRegarding {
}
interface PostRole_Base extends WebEntity {
}
interface PostRole_Fixed extends WebEntity_Fixed {
  postroleid: string;
}
interface PostRole extends PostRole_Base, PostRole_Relationships {
}
interface PostRole_Relationships {
}
interface PostRole_Result extends PostRole_Base, PostRole_Relationships {
}
interface PostRole_FormattedResult {
}
interface PostRole_Select {
}
interface PostRole_Expand {
}
interface PostRole_Filter {
}
interface PostRole_Create extends PostRole {
}
interface PostRole_Update extends PostRole {
}
interface PriceLevel_Base extends WebEntity {
}
interface PriceLevel_Fixed extends WebEntity_Fixed {
  pricelevelid: string;
}
interface PriceLevel extends PriceLevel_Base, PriceLevel_Relationships {
}
interface PriceLevel_Relationships {
}
interface PriceLevel_Result extends PriceLevel_Base, PriceLevel_Relationships {
}
interface PriceLevel_FormattedResult {
}
interface PriceLevel_Select {
}
interface PriceLevel_Expand {
}
interface PriceLevel_Filter {
}
interface PriceLevel_Create extends PriceLevel {
}
interface PriceLevel_Update extends PriceLevel {
}
interface PrincipalAttributeAccessMap_Base extends WebEntity {
}
interface PrincipalAttributeAccessMap_Fixed extends WebEntity_Fixed {
  principalattributeaccessmapid: string;
}
interface PrincipalAttributeAccessMap extends PrincipalAttributeAccessMap_Base, PrincipalAttributeAccessMap_Relationships {
}
interface PrincipalAttributeAccessMap_Relationships {
}
interface PrincipalAttributeAccessMap_Result extends PrincipalAttributeAccessMap_Base, PrincipalAttributeAccessMap_Relationships {
}
interface PrincipalAttributeAccessMap_FormattedResult {
}
interface PrincipalAttributeAccessMap_Select {
}
interface PrincipalAttributeAccessMap_Expand {
}
interface PrincipalAttributeAccessMap_Filter {
}
interface PrincipalAttributeAccessMap_Create extends PrincipalAttributeAccessMap {
}
interface PrincipalAttributeAccessMap_Update extends PrincipalAttributeAccessMap {
}
interface PrincipalEntityBusinessUnitMap_Base extends WebEntity {
}
interface PrincipalEntityBusinessUnitMap_Fixed extends WebEntity_Fixed {
  principalentitybusinessunitmapid: string;
}
interface PrincipalEntityBusinessUnitMap extends PrincipalEntityBusinessUnitMap_Base, PrincipalEntityBusinessUnitMap_Relationships {
}
interface PrincipalEntityBusinessUnitMap_Relationships {
}
interface PrincipalEntityBusinessUnitMap_Result extends PrincipalEntityBusinessUnitMap_Base, PrincipalEntityBusinessUnitMap_Relationships {
}
interface PrincipalEntityBusinessUnitMap_FormattedResult {
}
interface PrincipalEntityBusinessUnitMap_Select {
}
interface PrincipalEntityBusinessUnitMap_Expand {
}
interface PrincipalEntityBusinessUnitMap_Filter {
}
interface PrincipalEntityBusinessUnitMap_Create extends PrincipalEntityBusinessUnitMap {
}
interface PrincipalEntityBusinessUnitMap_Update extends PrincipalEntityBusinessUnitMap {
}
interface PrincipalEntityMap_Base extends WebEntity {
}
interface PrincipalEntityMap_Fixed extends WebEntity_Fixed {
  principalentitymapid: string;
}
interface PrincipalEntityMap extends PrincipalEntityMap_Base, PrincipalEntityMap_Relationships {
}
interface PrincipalEntityMap_Relationships {
}
interface PrincipalEntityMap_Result extends PrincipalEntityMap_Base, PrincipalEntityMap_Relationships {
}
interface PrincipalEntityMap_FormattedResult {
}
interface PrincipalEntityMap_Select {
}
interface PrincipalEntityMap_Expand {
}
interface PrincipalEntityMap_Filter {
}
interface PrincipalEntityMap_Create extends PrincipalEntityMap {
}
interface PrincipalEntityMap_Update extends PrincipalEntityMap {
}
interface PrincipalObjectAccess_Base extends WebEntity {
}
interface PrincipalObjectAccess_Fixed extends WebEntity_Fixed {
  principalobjectaccessid: string;
}
interface PrincipalObjectAccess extends PrincipalObjectAccess_Base, PrincipalObjectAccess_Relationships {
}
interface PrincipalObjectAccess_Relationships {
}
interface PrincipalObjectAccess_Result extends PrincipalObjectAccess_Base, PrincipalObjectAccess_Relationships {
}
interface PrincipalObjectAccess_FormattedResult {
}
interface PrincipalObjectAccess_Select {
}
interface PrincipalObjectAccess_Expand {
}
interface PrincipalObjectAccess_Filter {
}
interface PrincipalObjectAccess_Create extends PrincipalObjectAccess {
}
interface PrincipalObjectAccess_Update extends PrincipalObjectAccess {
}
interface PrincipalObjectAccessReadSnapshot_Base extends WebEntity {
}
interface PrincipalObjectAccessReadSnapshot_Fixed extends WebEntity_Fixed {
  principalobjectaccessreadsnapshotid: string;
}
interface PrincipalObjectAccessReadSnapshot extends PrincipalObjectAccessReadSnapshot_Base, PrincipalObjectAccessReadSnapshot_Relationships {
}
interface PrincipalObjectAccessReadSnapshot_Relationships {
}
interface PrincipalObjectAccessReadSnapshot_Result extends PrincipalObjectAccessReadSnapshot_Base, PrincipalObjectAccessReadSnapshot_Relationships {
}
interface PrincipalObjectAccessReadSnapshot_FormattedResult {
}
interface PrincipalObjectAccessReadSnapshot_Select {
}
interface PrincipalObjectAccessReadSnapshot_Expand {
}
interface PrincipalObjectAccessReadSnapshot_Filter {
}
interface PrincipalObjectAccessReadSnapshot_Create extends PrincipalObjectAccessReadSnapshot {
}
interface PrincipalObjectAccessReadSnapshot_Update extends PrincipalObjectAccessReadSnapshot {
}
interface PrincipalObjectAttributeAccess_Base extends WebEntity {
}
interface PrincipalObjectAttributeAccess_Fixed extends WebEntity_Fixed {
  principalobjectattributeaccessid: string;
}
interface PrincipalObjectAttributeAccess extends PrincipalObjectAttributeAccess_Base, PrincipalObjectAttributeAccess_Relationships {
}
interface PrincipalObjectAttributeAccess_Relationships {
}
interface PrincipalObjectAttributeAccess_Result extends PrincipalObjectAttributeAccess_Base, PrincipalObjectAttributeAccess_Relationships {
}
interface PrincipalObjectAttributeAccess_FormattedResult {
}
interface PrincipalObjectAttributeAccess_Select {
}
interface PrincipalObjectAttributeAccess_Expand {
}
interface PrincipalObjectAttributeAccess_Filter {
}
interface PrincipalObjectAttributeAccess_Create extends PrincipalObjectAttributeAccess {
}
interface PrincipalObjectAttributeAccess_Update extends PrincipalObjectAttributeAccess {
}
interface PrincipalSyncAttributeMap_Base extends WebEntity {
}
interface PrincipalSyncAttributeMap_Fixed extends WebEntity_Fixed {
  principalsyncattributemapid: string;
}
interface PrincipalSyncAttributeMap extends PrincipalSyncAttributeMap_Base, PrincipalSyncAttributeMap_Relationships {
}
interface PrincipalSyncAttributeMap_Relationships {
}
interface PrincipalSyncAttributeMap_Result extends PrincipalSyncAttributeMap_Base, PrincipalSyncAttributeMap_Relationships {
}
interface PrincipalSyncAttributeMap_FormattedResult {
}
interface PrincipalSyncAttributeMap_Select {
}
interface PrincipalSyncAttributeMap_Expand {
}
interface PrincipalSyncAttributeMap_Filter {
}
interface PrincipalSyncAttributeMap_Create extends PrincipalSyncAttributeMap {
}
interface PrincipalSyncAttributeMap_Update extends PrincipalSyncAttributeMap {
}
interface Privilege_Base extends WebEntity {
}
interface Privilege_Fixed extends WebEntity_Fixed {
  privilegeid: string;
}
interface Privilege extends Privilege_Base, Privilege_Relationships {
}
interface Privilege_Relationships {
}
interface Privilege_Result extends Privilege_Base, Privilege_Relationships {
}
interface Privilege_FormattedResult {
}
interface Privilege_Select {
}
interface Privilege_Expand {
}
interface Privilege_Filter {
}
interface Privilege_Create extends Privilege {
}
interface Privilege_Update extends Privilege {
}
interface PrivilegeObjectTypeCodes_Base extends WebEntity {
}
interface PrivilegeObjectTypeCodes_Fixed extends WebEntity_Fixed {
  privilegeobjecttypecodeid: string;
}
interface PrivilegeObjectTypeCodes extends PrivilegeObjectTypeCodes_Base, PrivilegeObjectTypeCodes_Relationships {
}
interface PrivilegeObjectTypeCodes_Relationships {
}
interface PrivilegeObjectTypeCodes_Result extends PrivilegeObjectTypeCodes_Base, PrivilegeObjectTypeCodes_Relationships {
}
interface PrivilegeObjectTypeCodes_FormattedResult {
}
interface PrivilegeObjectTypeCodes_Select {
}
interface PrivilegeObjectTypeCodes_Expand {
}
interface PrivilegeObjectTypeCodes_Filter {
}
interface PrivilegeObjectTypeCodes_Create extends PrivilegeObjectTypeCodes {
}
interface PrivilegeObjectTypeCodes_Update extends PrivilegeObjectTypeCodes {
}
interface ProcessSession_Base extends WebEntity {
}
interface ProcessSession_Fixed extends WebEntity_Fixed {
  processsessionid: string;
}
interface ProcessSession extends ProcessSession_Base, ProcessSession_Relationships {
}
interface ProcessSession_Relationships {
}
interface ProcessSession_Result extends ProcessSession_Base, ProcessSession_Relationships {
}
interface ProcessSession_FormattedResult {
}
interface ProcessSession_Select {
}
interface ProcessSession_Expand {
}
interface ProcessSession_Filter {
}
interface ProcessSession_Create extends ProcessSession {
}
interface ProcessSession_Update extends ProcessSession {
}
interface ProcessStage_Base extends WebEntity {
}
interface ProcessStage_Fixed extends WebEntity_Fixed {
  processstageid: string;
}
interface ProcessStage extends ProcessStage_Base, ProcessStage_Relationships {
}
interface ProcessStage_Relationships {
}
interface ProcessStage_Result extends ProcessStage_Base, ProcessStage_Relationships {
}
interface ProcessStage_FormattedResult {
}
interface ProcessStage_Select {
}
interface ProcessStage_Expand {
}
interface ProcessStage_Filter {
}
interface ProcessStage_Create extends ProcessStage {
}
interface ProcessStage_Update extends ProcessStage {
}
interface processstageparameter_Base extends WebEntity {
}
interface processstageparameter_Fixed extends WebEntity_Fixed {
  processstageparameterid: string;
}
interface processstageparameter extends processstageparameter_Base, processstageparameter_Relationships {
}
interface processstageparameter_Relationships {
}
interface processstageparameter_Result extends processstageparameter_Base, processstageparameter_Relationships {
}
interface processstageparameter_FormattedResult {
}
interface processstageparameter_Select {
}
interface processstageparameter_Expand {
}
interface processstageparameter_Filter {
}
interface processstageparameter_Create extends processstageparameter {
}
interface processstageparameter_Update extends processstageparameter {
}
interface ProcessTrigger_Base extends WebEntity {
}
interface ProcessTrigger_Fixed extends WebEntity_Fixed {
  processtriggerid: string;
}
interface ProcessTrigger extends ProcessTrigger_Base, ProcessTrigger_Relationships {
}
interface ProcessTrigger_Relationships {
}
interface ProcessTrigger_Result extends ProcessTrigger_Base, ProcessTrigger_Relationships {
}
interface ProcessTrigger_FormattedResult {
}
interface ProcessTrigger_Select {
}
interface ProcessTrigger_Expand {
}
interface ProcessTrigger_Filter {
}
interface ProcessTrigger_Create extends ProcessTrigger {
}
interface ProcessTrigger_Update extends ProcessTrigger {
}
interface Product_Base extends WebEntity {
}
interface Product_Fixed extends WebEntity_Fixed {
  productid: string;
}
interface Product extends Product_Base, Product_Relationships {
}
interface Product_Relationships {
}
interface Product_Result extends Product_Base, Product_Relationships {
}
interface Product_FormattedResult {
}
interface Product_Select {
}
interface Product_Expand {
}
interface Product_Filter {
}
interface Product_Create extends Product {
}
interface Product_Update extends Product {
}
interface ProductAssociation_Base extends WebEntity {
}
interface ProductAssociation_Fixed extends WebEntity_Fixed {
  productassociationid: string;
}
interface ProductAssociation extends ProductAssociation_Base, ProductAssociation_Relationships {
}
interface ProductAssociation_Relationships {
}
interface ProductAssociation_Result extends ProductAssociation_Base, ProductAssociation_Relationships {
}
interface ProductAssociation_FormattedResult {
}
interface ProductAssociation_Select {
}
interface ProductAssociation_Expand {
}
interface ProductAssociation_Filter {
}
interface ProductAssociation_Create extends ProductAssociation {
}
interface ProductAssociation_Update extends ProductAssociation {
}
interface ProductPriceLevel_Base extends WebEntity {
}
interface ProductPriceLevel_Fixed extends WebEntity_Fixed {
  productpricelevelid: string;
}
interface ProductPriceLevel extends ProductPriceLevel_Base, ProductPriceLevel_Relationships {
}
interface ProductPriceLevel_Relationships {
}
interface ProductPriceLevel_Result extends ProductPriceLevel_Base, ProductPriceLevel_Relationships {
}
interface ProductPriceLevel_FormattedResult {
}
interface ProductPriceLevel_Select {
}
interface ProductPriceLevel_Expand {
}
interface ProductPriceLevel_Filter {
}
interface ProductPriceLevel_Create extends ProductPriceLevel {
}
interface ProductPriceLevel_Update extends ProductPriceLevel {
}
interface ProductSalesLiterature_Base extends WebEntity {
}
interface ProductSalesLiterature_Fixed extends WebEntity_Fixed {
  productsalesliteratureid: string;
}
interface ProductSalesLiterature extends ProductSalesLiterature_Base, ProductSalesLiterature_Relationships {
}
interface ProductSalesLiterature_Relationships {
}
interface ProductSalesLiterature_Result extends ProductSalesLiterature_Base, ProductSalesLiterature_Relationships {
}
interface ProductSalesLiterature_FormattedResult {
}
interface ProductSalesLiterature_Select {
}
interface ProductSalesLiterature_Expand {
}
interface ProductSalesLiterature_Filter {
}
interface ProductSalesLiterature_Create extends ProductSalesLiterature {
}
interface ProductSalesLiterature_Update extends ProductSalesLiterature {
}
interface ProductSubstitute_Base extends WebEntity {
}
interface ProductSubstitute_Fixed extends WebEntity_Fixed {
  productsubstituteid: string;
}
interface ProductSubstitute extends ProductSubstitute_Base, ProductSubstitute_Relationships {
}
interface ProductSubstitute_Relationships {
}
interface ProductSubstitute_Result extends ProductSubstitute_Base, ProductSubstitute_Relationships {
}
interface ProductSubstitute_FormattedResult {
}
interface ProductSubstitute_Select {
}
interface ProductSubstitute_Expand {
}
interface ProductSubstitute_Filter {
}
interface ProductSubstitute_Create extends ProductSubstitute {
}
interface ProductSubstitute_Update extends ProductSubstitute {
}
interface ProvisionLanguageForUser_Base extends WebEntity {
}
interface ProvisionLanguageForUser_Fixed extends WebEntity_Fixed {
  provisionlanguageforuserid: string;
}
interface ProvisionLanguageForUser extends ProvisionLanguageForUser_Base, ProvisionLanguageForUser_Relationships {
}
interface ProvisionLanguageForUser_Relationships {
}
interface ProvisionLanguageForUser_Result extends ProvisionLanguageForUser_Base, ProvisionLanguageForUser_Relationships {
}
interface ProvisionLanguageForUser_FormattedResult {
}
interface ProvisionLanguageForUser_Select {
}
interface ProvisionLanguageForUser_Expand {
}
interface ProvisionLanguageForUser_Filter {
}
interface ProvisionLanguageForUser_Create extends ProvisionLanguageForUser {
}
interface ProvisionLanguageForUser_Update extends ProvisionLanguageForUser {
}
interface Publisher_Base extends WebEntity {
}
interface Publisher_Fixed extends WebEntity_Fixed {
  publisherid: string;
}
interface Publisher extends Publisher_Base, Publisher_Relationships {
}
interface Publisher_Relationships {
}
interface Publisher_Result extends Publisher_Base, Publisher_Relationships {
}
interface Publisher_FormattedResult {
}
interface Publisher_Select {
}
interface Publisher_Expand {
}
interface Publisher_Filter {
}
interface Publisher_Create extends Publisher {
}
interface Publisher_Update extends Publisher {
}
interface PublisherAddress_Base extends WebEntity {
}
interface PublisherAddress_Fixed extends WebEntity_Fixed {
  publisheraddressid: string;
}
interface PublisherAddress extends PublisherAddress_Base, PublisherAddress_Relationships {
}
interface PublisherAddress_Relationships {
}
interface PublisherAddress_Result extends PublisherAddress_Base, PublisherAddress_Relationships {
}
interface PublisherAddress_FormattedResult {
}
interface PublisherAddress_Select {
}
interface PublisherAddress_Expand {
}
interface PublisherAddress_Filter {
}
interface PublisherAddress_Create extends PublisherAddress {
}
interface PublisherAddress_Update extends PublisherAddress {
}
interface QuarterlyFiscalCalendar_Base extends WebEntity {
}
interface QuarterlyFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface QuarterlyFiscalCalendar extends QuarterlyFiscalCalendar_Base, QuarterlyFiscalCalendar_Relationships {
}
interface QuarterlyFiscalCalendar_Relationships {
}
interface QuarterlyFiscalCalendar_Result extends QuarterlyFiscalCalendar_Base, QuarterlyFiscalCalendar_Relationships {
}
interface QuarterlyFiscalCalendar_FormattedResult {
}
interface QuarterlyFiscalCalendar_Select {
}
interface QuarterlyFiscalCalendar_Expand {
}
interface QuarterlyFiscalCalendar_Filter {
}
interface QuarterlyFiscalCalendar_Create extends QuarterlyFiscalCalendar {
}
interface QuarterlyFiscalCalendar_Update extends QuarterlyFiscalCalendar {
}
interface Queue_Base extends WebEntity {
}
interface Queue_Fixed extends WebEntity_Fixed {
  queueid: string;
}
interface Queue extends Queue_Base, Queue_Relationships {
}
interface Queue_Relationships {
}
interface Queue_Result extends Queue_Base, Queue_Relationships {
}
interface Queue_FormattedResult {
}
interface Queue_Select {
}
interface Queue_Expand {
}
interface Queue_Filter {
}
interface Queue_Create extends Queue {
}
interface Queue_Update extends Queue {
}
interface QueueItem_Base extends WebEntity {
}
interface QueueItem_Fixed extends WebEntity_Fixed {
  queueitemid: string;
}
interface QueueItem extends QueueItem_Base, QueueItem_Relationships {
}
interface QueueItem_Relationships {
}
interface QueueItem_Result extends QueueItem_Base, QueueItem_Relationships {
}
interface QueueItem_FormattedResult {
}
interface QueueItem_Select {
}
interface QueueItem_Expand {
}
interface QueueItem_Filter {
}
interface QueueItem_Create extends QueueItem {
}
interface QueueItem_Update extends QueueItem {
}
interface QueueItemCount_Base extends WebEntity {
}
interface QueueItemCount_Fixed extends WebEntity_Fixed {
  queueitemcountid: string;
}
interface QueueItemCount extends QueueItemCount_Base, QueueItemCount_Relationships {
}
interface QueueItemCount_Relationships {
}
interface QueueItemCount_Result extends QueueItemCount_Base, QueueItemCount_Relationships {
}
interface QueueItemCount_FormattedResult {
}
interface QueueItemCount_Select {
}
interface QueueItemCount_Expand {
}
interface QueueItemCount_Filter {
}
interface QueueItemCount_Create extends QueueItemCount {
}
interface QueueItemCount_Update extends QueueItemCount {
}
interface QueueMemberCount_Base extends WebEntity {
}
interface QueueMemberCount_Fixed extends WebEntity_Fixed {
  queuemembercountid: string;
}
interface QueueMemberCount extends QueueMemberCount_Base, QueueMemberCount_Relationships {
}
interface QueueMemberCount_Relationships {
}
interface QueueMemberCount_Result extends QueueMemberCount_Base, QueueMemberCount_Relationships {
}
interface QueueMemberCount_FormattedResult {
}
interface QueueMemberCount_Select {
}
interface QueueMemberCount_Expand {
}
interface QueueMemberCount_Filter {
}
interface QueueMemberCount_Create extends QueueMemberCount {
}
interface QueueMemberCount_Update extends QueueMemberCount {
}
interface QueueMembership_Base extends WebEntity {
}
interface QueueMembership_Fixed extends WebEntity_Fixed {
  queuemembershipid: string;
}
interface QueueMembership extends QueueMembership_Base, QueueMembership_Relationships {
}
interface QueueMembership_Relationships {
}
interface QueueMembership_Result extends QueueMembership_Base, QueueMembership_Relationships {
}
interface QueueMembership_FormattedResult {
}
interface QueueMembership_Select {
}
interface QueueMembership_Expand {
}
interface QueueMembership_Filter {
}
interface QueueMembership_Create extends QueueMembership {
}
interface QueueMembership_Update extends QueueMembership {
}
interface Quote_Base extends WebEntity {
}
interface Quote_Fixed extends WebEntity_Fixed {
  quoteid: string;
}
interface Quote extends Quote_Base, Quote_Relationships {
}
interface Quote_Relationships {
}
interface Quote_Result extends Quote_Base, Quote_Relationships {
}
interface Quote_FormattedResult {
}
interface Quote_Select {
}
interface Quote_Expand {
}
interface Quote_Filter {
}
interface Quote_Create extends Quote {
}
interface Quote_Update extends Quote {
}
interface QuoteClose_Base extends WebEntity {
}
interface QuoteClose_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface QuoteClose extends QuoteClose_Base, QuoteClose_Relationships {
}
interface QuoteClose_Relationships {
}
interface QuoteClose_Result extends QuoteClose_Base, QuoteClose_Relationships {
}
interface QuoteClose_FormattedResult {
}
interface QuoteClose_Select {
}
interface QuoteClose_Expand {
}
interface QuoteClose_Filter {
}
interface QuoteClose_Create extends QuoteClose {
}
interface QuoteClose_Update extends QuoteClose {
}
interface QuoteDetail_Base extends WebEntity {
}
interface QuoteDetail_Fixed extends WebEntity_Fixed {
  quotedetailid: string;
}
interface QuoteDetail extends QuoteDetail_Base, QuoteDetail_Relationships {
}
interface QuoteDetail_Relationships {
}
interface QuoteDetail_Result extends QuoteDetail_Base, QuoteDetail_Relationships {
}
interface QuoteDetail_FormattedResult {
}
interface QuoteDetail_Select {
}
interface QuoteDetail_Expand {
}
interface QuoteDetail_Filter {
}
interface QuoteDetail_Create extends QuoteDetail {
}
interface QuoteDetail_Update extends QuoteDetail {
}
interface RatingModel_Base extends WebEntity {
}
interface RatingModel_Fixed extends WebEntity_Fixed {
  ratingmodelid: string;
}
interface RatingModel extends RatingModel_Base, RatingModel_Relationships {
}
interface RatingModel_Relationships {
}
interface RatingModel_Result extends RatingModel_Base, RatingModel_Relationships {
}
interface RatingModel_FormattedResult {
}
interface RatingModel_Select {
}
interface RatingModel_Expand {
}
interface RatingModel_Filter {
}
interface RatingModel_Create extends RatingModel {
}
interface RatingModel_Update extends RatingModel {
}
interface RatingValue_Base extends WebEntity {
}
interface RatingValue_Fixed extends WebEntity_Fixed {
  ratingvalueid: string;
}
interface RatingValue extends RatingValue_Base, RatingValue_Relationships {
}
interface RatingValue_Relationships {
}
interface RatingValue_Result extends RatingValue_Base, RatingValue_Relationships {
}
interface RatingValue_FormattedResult {
}
interface RatingValue_Select {
}
interface RatingValue_Expand {
}
interface RatingValue_Filter {
}
interface RatingValue_Create extends RatingValue {
}
interface RatingValue_Update extends RatingValue {
}
interface RecommendedDocument_Base extends WebEntity {
}
interface RecommendedDocument_Fixed extends WebEntity_Fixed {
  recommendeddocumentid: string;
}
interface RecommendedDocument extends RecommendedDocument_Base, RecommendedDocument_Relationships {
}
interface RecommendedDocument_Relationships {
}
interface RecommendedDocument_Result extends RecommendedDocument_Base, RecommendedDocument_Relationships {
}
interface RecommendedDocument_FormattedResult {
}
interface RecommendedDocument_Select {
}
interface RecommendedDocument_Expand {
}
interface RecommendedDocument_Filter {
}
interface RecommendedDocument_Create extends RecommendedDocument {
}
interface RecommendedDocument_Update extends RecommendedDocument {
}
interface RecordCountSnapshot_Base extends WebEntity {
}
interface RecordCountSnapshot_Fixed extends WebEntity_Fixed {
  recordcountsnapshotid: string;
}
interface RecordCountSnapshot extends RecordCountSnapshot_Base, RecordCountSnapshot_Relationships {
}
interface RecordCountSnapshot_Relationships {
}
interface RecordCountSnapshot_Result extends RecordCountSnapshot_Base, RecordCountSnapshot_Relationships {
}
interface RecordCountSnapshot_FormattedResult {
}
interface RecordCountSnapshot_Select {
}
interface RecordCountSnapshot_Expand {
}
interface RecordCountSnapshot_Filter {
}
interface RecordCountSnapshot_Create extends RecordCountSnapshot {
}
interface RecordCountSnapshot_Update extends RecordCountSnapshot {
}
interface RecurrenceRule_Base extends WebEntity {
}
interface RecurrenceRule_Fixed extends WebEntity_Fixed {
  ruleid: string;
}
interface RecurrenceRule extends RecurrenceRule_Base, RecurrenceRule_Relationships {
}
interface RecurrenceRule_Relationships {
}
interface RecurrenceRule_Result extends RecurrenceRule_Base, RecurrenceRule_Relationships {
}
interface RecurrenceRule_FormattedResult {
}
interface RecurrenceRule_Select {
}
interface RecurrenceRule_Expand {
}
interface RecurrenceRule_Filter {
}
interface RecurrenceRule_Create extends RecurrenceRule {
}
interface RecurrenceRule_Update extends RecurrenceRule {
}
interface RecurringAppointmentMaster_Base extends WebEntity {
}
interface RecurringAppointmentMaster_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface RecurringAppointmentMaster extends RecurringAppointmentMaster_Base, RecurringAppointmentMaster_Relationships {
}
interface RecurringAppointmentMaster_Relationships {
}
interface RecurringAppointmentMaster_Result extends RecurringAppointmentMaster_Base, RecurringAppointmentMaster_Relationships {
}
interface RecurringAppointmentMaster_FormattedResult {
}
interface RecurringAppointmentMaster_Select {
}
interface RecurringAppointmentMaster_Expand {
}
interface RecurringAppointmentMaster_Filter {
}
interface RecurringAppointmentMaster_Create extends RecurringAppointmentMaster {
}
interface RecurringAppointmentMaster_Update extends RecurringAppointmentMaster {
}
interface Relationship_Base extends WebEntity {
}
interface Relationship_Fixed extends WebEntity_Fixed {
  relationshipid: string;
}
interface Relationship extends Relationship_Base, Relationship_Relationships {
}
interface Relationship_Relationships {
}
interface Relationship_Result extends Relationship_Base, Relationship_Relationships {
}
interface Relationship_FormattedResult {
}
interface Relationship_Select {
}
interface Relationship_Expand {
}
interface Relationship_Filter {
}
interface Relationship_Create extends Relationship {
}
interface Relationship_Update extends Relationship {
}
interface RelationshipAttribute_Base extends WebEntity {
}
interface RelationshipAttribute_Fixed extends WebEntity_Fixed {
  relationshipattributeid: string;
}
interface RelationshipAttribute extends RelationshipAttribute_Base, RelationshipAttribute_Relationships {
}
interface RelationshipAttribute_Relationships {
}
interface RelationshipAttribute_Result extends RelationshipAttribute_Base, RelationshipAttribute_Relationships {
}
interface RelationshipAttribute_FormattedResult {
}
interface RelationshipAttribute_Select {
}
interface RelationshipAttribute_Expand {
}
interface RelationshipAttribute_Filter {
}
interface RelationshipAttribute_Create extends RelationshipAttribute {
}
interface RelationshipAttribute_Update extends RelationshipAttribute {
}
interface RelationshipRole_Base extends WebEntity {
}
interface RelationshipRole_Fixed extends WebEntity_Fixed {
  relationshiproleid: string;
}
interface RelationshipRole extends RelationshipRole_Base, RelationshipRole_Relationships {
}
interface RelationshipRole_Relationships {
}
interface RelationshipRole_Result extends RelationshipRole_Base, RelationshipRole_Relationships {
}
interface RelationshipRole_FormattedResult {
}
interface RelationshipRole_Select {
}
interface RelationshipRole_Expand {
}
interface RelationshipRole_Filter {
}
interface RelationshipRole_Create extends RelationshipRole {
}
interface RelationshipRole_Update extends RelationshipRole {
}
interface RelationshipRoleMap_Base extends WebEntity {
}
interface RelationshipRoleMap_Fixed extends WebEntity_Fixed {
  relationshiprolemapid: string;
}
interface RelationshipRoleMap extends RelationshipRoleMap_Base, RelationshipRoleMap_Relationships {
}
interface RelationshipRoleMap_Relationships {
}
interface RelationshipRoleMap_Result extends RelationshipRoleMap_Base, RelationshipRoleMap_Relationships {
}
interface RelationshipRoleMap_FormattedResult {
}
interface RelationshipRoleMap_Select {
}
interface RelationshipRoleMap_Expand {
}
interface RelationshipRoleMap_Filter {
}
interface RelationshipRoleMap_Create extends RelationshipRoleMap {
}
interface RelationshipRoleMap_Update extends RelationshipRoleMap {
}
interface ReplicationBacklog_Base extends WebEntity {
}
interface ReplicationBacklog_Fixed extends WebEntity_Fixed {
  replicationbacklogid: string;
}
interface ReplicationBacklog extends ReplicationBacklog_Base, ReplicationBacklog_Relationships {
}
interface ReplicationBacklog_Relationships {
}
interface ReplicationBacklog_Result extends ReplicationBacklog_Base, ReplicationBacklog_Relationships {
}
interface ReplicationBacklog_FormattedResult {
}
interface ReplicationBacklog_Select {
}
interface ReplicationBacklog_Expand {
}
interface ReplicationBacklog_Filter {
}
interface ReplicationBacklog_Create extends ReplicationBacklog {
}
interface ReplicationBacklog_Update extends ReplicationBacklog {
}
interface Report_Base extends WebEntity {
}
interface Report_Fixed extends WebEntity_Fixed {
  reportid: string;
}
interface Report extends Report_Base, Report_Relationships {
}
interface Report_Relationships {
}
interface Report_Result extends Report_Base, Report_Relationships {
}
interface Report_FormattedResult {
}
interface Report_Select {
}
interface Report_Expand {
}
interface Report_Filter {
}
interface Report_Create extends Report {
}
interface Report_Update extends Report {
}
interface ReportCategory_Base extends WebEntity {
}
interface ReportCategory_Fixed extends WebEntity_Fixed {
  reportcategoryid: string;
}
interface ReportCategory extends ReportCategory_Base, ReportCategory_Relationships {
}
interface ReportCategory_Relationships {
}
interface ReportCategory_Result extends ReportCategory_Base, ReportCategory_Relationships {
}
interface ReportCategory_FormattedResult {
}
interface ReportCategory_Select {
}
interface ReportCategory_Expand {
}
interface ReportCategory_Filter {
}
interface ReportCategory_Create extends ReportCategory {
}
interface ReportCategory_Update extends ReportCategory {
}
interface ReportEntity_Base extends WebEntity {
}
interface ReportEntity_Fixed extends WebEntity_Fixed {
  reportentityid: string;
}
interface ReportEntity extends ReportEntity_Base, ReportEntity_Relationships {
}
interface ReportEntity_Relationships {
}
interface ReportEntity_Result extends ReportEntity_Base, ReportEntity_Relationships {
}
interface ReportEntity_FormattedResult {
}
interface ReportEntity_Select {
}
interface ReportEntity_Expand {
}
interface ReportEntity_Filter {
}
interface ReportEntity_Create extends ReportEntity {
}
interface ReportEntity_Update extends ReportEntity {
}
interface ReportLink_Base extends WebEntity {
}
interface ReportLink_Fixed extends WebEntity_Fixed {
  reportlinkid: string;
}
interface ReportLink extends ReportLink_Base, ReportLink_Relationships {
}
interface ReportLink_Relationships {
}
interface ReportLink_Result extends ReportLink_Base, ReportLink_Relationships {
}
interface ReportLink_FormattedResult {
}
interface ReportLink_Select {
}
interface ReportLink_Expand {
}
interface ReportLink_Filter {
}
interface ReportLink_Create extends ReportLink {
}
interface ReportLink_Update extends ReportLink {
}
interface ReportVisibility_Base extends WebEntity {
}
interface ReportVisibility_Fixed extends WebEntity_Fixed {
  reportvisibilityid: string;
}
interface ReportVisibility extends ReportVisibility_Base, ReportVisibility_Relationships {
}
interface ReportVisibility_Relationships {
}
interface ReportVisibility_Result extends ReportVisibility_Base, ReportVisibility_Relationships {
}
interface ReportVisibility_FormattedResult {
}
interface ReportVisibility_Select {
}
interface ReportVisibility_Expand {
}
interface ReportVisibility_Filter {
}
interface ReportVisibility_Create extends ReportVisibility {
}
interface ReportVisibility_Update extends ReportVisibility {
}
interface Resource_Base extends WebEntity {
}
interface Resource_Fixed extends WebEntity_Fixed {
  resourceid: string;
}
interface Resource extends Resource_Base, Resource_Relationships {
}
interface Resource_Relationships {
}
interface Resource_Result extends Resource_Base, Resource_Relationships {
}
interface Resource_FormattedResult {
}
interface Resource_Select {
}
interface Resource_Expand {
}
interface Resource_Filter {
}
interface Resource_Create extends Resource {
}
interface Resource_Update extends Resource {
}
interface ResourceGroup_Base extends WebEntity {
}
interface ResourceGroup_Fixed extends WebEntity_Fixed {
  resourcegroupid: string;
}
interface ResourceGroup extends ResourceGroup_Base, ResourceGroup_Relationships {
}
interface ResourceGroup_Relationships {
}
interface ResourceGroup_Result extends ResourceGroup_Base, ResourceGroup_Relationships {
}
interface ResourceGroup_FormattedResult {
}
interface ResourceGroup_Select {
}
interface ResourceGroup_Expand {
}
interface ResourceGroup_Filter {
}
interface ResourceGroup_Create extends ResourceGroup {
}
interface ResourceGroup_Update extends ResourceGroup {
}
interface resourcegroupdatasource_Base extends WebEntity {
}
interface resourcegroupdatasource_Fixed extends WebEntity_Fixed {
  resourcegroupdatasourceid: string;
}
interface resourcegroupdatasource extends resourcegroupdatasource_Base, resourcegroupdatasource_Relationships {
}
interface resourcegroupdatasource_Relationships {
}
interface resourcegroupdatasource_Result extends resourcegroupdatasource_Base, resourcegroupdatasource_Relationships {
}
interface resourcegroupdatasource_FormattedResult {
}
interface resourcegroupdatasource_Select {
}
interface resourcegroupdatasource_Expand {
}
interface resourcegroupdatasource_Filter {
}
interface resourcegroupdatasource_Create extends resourcegroupdatasource {
}
interface resourcegroupdatasource_Update extends resourcegroupdatasource {
}
interface ResourceGroupExpansion_Base extends WebEntity {
}
interface ResourceGroupExpansion_Fixed extends WebEntity_Fixed {
  resourcegroupexpansionid: string;
}
interface ResourceGroupExpansion extends ResourceGroupExpansion_Base, ResourceGroupExpansion_Relationships {
}
interface ResourceGroupExpansion_Relationships {
}
interface ResourceGroupExpansion_Result extends ResourceGroupExpansion_Base, ResourceGroupExpansion_Relationships {
}
interface ResourceGroupExpansion_FormattedResult {
}
interface ResourceGroupExpansion_Select {
}
interface ResourceGroupExpansion_Expand {
}
interface ResourceGroupExpansion_Filter {
}
interface ResourceGroupExpansion_Create extends ResourceGroupExpansion {
}
interface ResourceGroupExpansion_Update extends ResourceGroupExpansion {
}
interface ResourceSpec_Base extends WebEntity {
}
interface ResourceSpec_Fixed extends WebEntity_Fixed {
  resourcespecid: string;
}
interface ResourceSpec extends ResourceSpec_Base, ResourceSpec_Relationships {
}
interface ResourceSpec_Relationships {
}
interface ResourceSpec_Result extends ResourceSpec_Base, ResourceSpec_Relationships {
}
interface ResourceSpec_FormattedResult {
}
interface ResourceSpec_Select {
}
interface ResourceSpec_Expand {
}
interface ResourceSpec_Filter {
}
interface ResourceSpec_Create extends ResourceSpec {
}
interface ResourceSpec_Update extends ResourceSpec {
}
interface revokeinheritedaccessrecordstracker_Base extends WebEntity {
}
interface revokeinheritedaccessrecordstracker_Fixed extends WebEntity_Fixed {
  revokeinheritedaccessrecordstrackerid: string;
}
interface revokeinheritedaccessrecordstracker extends revokeinheritedaccessrecordstracker_Base, revokeinheritedaccessrecordstracker_Relationships {
}
interface revokeinheritedaccessrecordstracker_Relationships {
}
interface revokeinheritedaccessrecordstracker_Result extends revokeinheritedaccessrecordstracker_Base, revokeinheritedaccessrecordstracker_Relationships {
}
interface revokeinheritedaccessrecordstracker_FormattedResult {
}
interface revokeinheritedaccessrecordstracker_Select {
}
interface revokeinheritedaccessrecordstracker_Expand {
}
interface revokeinheritedaccessrecordstracker_Filter {
}
interface revokeinheritedaccessrecordstracker_Create extends revokeinheritedaccessrecordstracker {
}
interface revokeinheritedaccessrecordstracker_Update extends revokeinheritedaccessrecordstracker {
}
interface RibbonClientMetadata_Base extends WebEntity {
}
interface RibbonClientMetadata_Fixed extends WebEntity_Fixed {
  ribbonid: string;
}
interface RibbonClientMetadata extends RibbonClientMetadata_Base, RibbonClientMetadata_Relationships {
}
interface RibbonClientMetadata_Relationships {
}
interface RibbonClientMetadata_Result extends RibbonClientMetadata_Base, RibbonClientMetadata_Relationships {
}
interface RibbonClientMetadata_FormattedResult {
}
interface RibbonClientMetadata_Select {
}
interface RibbonClientMetadata_Expand {
}
interface RibbonClientMetadata_Filter {
}
interface RibbonClientMetadata_Create extends RibbonClientMetadata {
}
interface RibbonClientMetadata_Update extends RibbonClientMetadata {
}
interface RibbonCommand_Base extends WebEntity {
}
interface RibbonCommand_Fixed extends WebEntity_Fixed {
  ribboncommandid: string;
}
interface RibbonCommand extends RibbonCommand_Base, RibbonCommand_Relationships {
}
interface RibbonCommand_Relationships {
}
interface RibbonCommand_Result extends RibbonCommand_Base, RibbonCommand_Relationships {
}
interface RibbonCommand_FormattedResult {
}
interface RibbonCommand_Select {
}
interface RibbonCommand_Expand {
}
interface RibbonCommand_Filter {
}
interface RibbonCommand_Create extends RibbonCommand {
}
interface RibbonCommand_Update extends RibbonCommand {
}
interface RibbonContextGroup_Base extends WebEntity {
}
interface RibbonContextGroup_Fixed extends WebEntity_Fixed {
  ribboncontextgroupid: string;
}
interface RibbonContextGroup extends RibbonContextGroup_Base, RibbonContextGroup_Relationships {
}
interface RibbonContextGroup_Relationships {
}
interface RibbonContextGroup_Result extends RibbonContextGroup_Base, RibbonContextGroup_Relationships {
}
interface RibbonContextGroup_FormattedResult {
}
interface RibbonContextGroup_Select {
}
interface RibbonContextGroup_Expand {
}
interface RibbonContextGroup_Filter {
}
interface RibbonContextGroup_Create extends RibbonContextGroup {
}
interface RibbonContextGroup_Update extends RibbonContextGroup {
}
interface RibbonCustomization_Base extends WebEntity {
}
interface RibbonCustomization_Fixed extends WebEntity_Fixed {
  ribboncustomizationid: string;
}
interface RibbonCustomization extends RibbonCustomization_Base, RibbonCustomization_Relationships {
}
interface RibbonCustomization_Relationships {
}
interface RibbonCustomization_Result extends RibbonCustomization_Base, RibbonCustomization_Relationships {
}
interface RibbonCustomization_FormattedResult {
}
interface RibbonCustomization_Select {
}
interface RibbonCustomization_Expand {
}
interface RibbonCustomization_Filter {
}
interface RibbonCustomization_Create extends RibbonCustomization {
}
interface RibbonCustomization_Update extends RibbonCustomization {
}
interface RibbonDiff_Base extends WebEntity {
}
interface RibbonDiff_Fixed extends WebEntity_Fixed {
  ribbondiffid: string;
}
interface RibbonDiff extends RibbonDiff_Base, RibbonDiff_Relationships {
}
interface RibbonDiff_Relationships {
}
interface RibbonDiff_Result extends RibbonDiff_Base, RibbonDiff_Relationships {
}
interface RibbonDiff_FormattedResult {
}
interface RibbonDiff_Select {
}
interface RibbonDiff_Expand {
}
interface RibbonDiff_Filter {
}
interface RibbonDiff_Create extends RibbonDiff {
}
interface RibbonDiff_Update extends RibbonDiff {
}
interface RibbonMetadataToProcess_Base extends WebEntity {
}
interface RibbonMetadataToProcess_Fixed extends WebEntity_Fixed {
  ribbonmetadatarowid: string;
}
interface RibbonMetadataToProcess extends RibbonMetadataToProcess_Base, RibbonMetadataToProcess_Relationships {
}
interface RibbonMetadataToProcess_Relationships {
}
interface RibbonMetadataToProcess_Result extends RibbonMetadataToProcess_Base, RibbonMetadataToProcess_Relationships {
}
interface RibbonMetadataToProcess_FormattedResult {
}
interface RibbonMetadataToProcess_Select {
}
interface RibbonMetadataToProcess_Expand {
}
interface RibbonMetadataToProcess_Filter {
}
interface RibbonMetadataToProcess_Create extends RibbonMetadataToProcess {
}
interface RibbonMetadataToProcess_Update extends RibbonMetadataToProcess {
}
interface RibbonRule_Base extends WebEntity {
}
interface RibbonRule_Fixed extends WebEntity_Fixed {
  ribbonruleid: string;
}
interface RibbonRule extends RibbonRule_Base, RibbonRule_Relationships {
}
interface RibbonRule_Relationships {
}
interface RibbonRule_Result extends RibbonRule_Base, RibbonRule_Relationships {
}
interface RibbonRule_FormattedResult {
}
interface RibbonRule_Select {
}
interface RibbonRule_Expand {
}
interface RibbonRule_Filter {
}
interface RibbonRule_Create extends RibbonRule {
}
interface RibbonRule_Update extends RibbonRule {
}
interface RibbonTabToCommandMap_Base extends WebEntity {
}
interface RibbonTabToCommandMap_Fixed extends WebEntity_Fixed {
  ribbontabtocommandmapid: string;
}
interface RibbonTabToCommandMap extends RibbonTabToCommandMap_Base, RibbonTabToCommandMap_Relationships {
}
interface RibbonTabToCommandMap_Relationships {
}
interface RibbonTabToCommandMap_Result extends RibbonTabToCommandMap_Base, RibbonTabToCommandMap_Relationships {
}
interface RibbonTabToCommandMap_FormattedResult {
}
interface RibbonTabToCommandMap_Select {
}
interface RibbonTabToCommandMap_Expand {
}
interface RibbonTabToCommandMap_Filter {
}
interface RibbonTabToCommandMap_Create extends RibbonTabToCommandMap {
}
interface RibbonTabToCommandMap_Update extends RibbonTabToCommandMap {
}
interface Role_Base extends WebEntity {
}
interface Role_Fixed extends WebEntity_Fixed {
  roleid: string;
}
interface Role extends Role_Base, Role_Relationships {
}
interface Role_Relationships {
}
interface Role_Result extends Role_Base, Role_Relationships {
}
interface Role_FormattedResult {
}
interface Role_Select {
}
interface Role_Expand {
}
interface Role_Filter {
}
interface Role_Create extends Role {
}
interface Role_Update extends Role {
}
interface RolePrivileges_Base extends WebEntity {
}
interface RolePrivileges_Fixed extends WebEntity_Fixed {
  roleprivilegeid: string;
}
interface RolePrivileges extends RolePrivileges_Base, RolePrivileges_Relationships {
}
interface RolePrivileges_Relationships {
}
interface RolePrivileges_Result extends RolePrivileges_Base, RolePrivileges_Relationships {
}
interface RolePrivileges_FormattedResult {
}
interface RolePrivileges_Select {
}
interface RolePrivileges_Expand {
}
interface RolePrivileges_Filter {
}
interface RolePrivileges_Create extends RolePrivileges {
}
interface RolePrivileges_Update extends RolePrivileges {
}
interface RoleTemplate_Base extends WebEntity {
}
interface RoleTemplate_Fixed extends WebEntity_Fixed {
  roletemplateid: string;
}
interface RoleTemplate extends RoleTemplate_Base, RoleTemplate_Relationships {
}
interface RoleTemplate_Relationships {
}
interface RoleTemplate_Result extends RoleTemplate_Base, RoleTemplate_Relationships {
}
interface RoleTemplate_FormattedResult {
}
interface RoleTemplate_Select {
}
interface RoleTemplate_Expand {
}
interface RoleTemplate_Filter {
}
interface RoleTemplate_Create extends RoleTemplate {
}
interface RoleTemplate_Update extends RoleTemplate {
}
interface RoleTemplatePrivileges_Base extends WebEntity {
}
interface RoleTemplatePrivileges_Fixed extends WebEntity_Fixed {
  roletemplateprivilegeid: string;
}
interface RoleTemplatePrivileges extends RoleTemplatePrivileges_Base, RoleTemplatePrivileges_Relationships {
}
interface RoleTemplatePrivileges_Relationships {
}
interface RoleTemplatePrivileges_Result extends RoleTemplatePrivileges_Base, RoleTemplatePrivileges_Relationships {
}
interface RoleTemplatePrivileges_FormattedResult {
}
interface RoleTemplatePrivileges_Select {
}
interface RoleTemplatePrivileges_Expand {
}
interface RoleTemplatePrivileges_Filter {
}
interface RoleTemplatePrivileges_Create extends RoleTemplatePrivileges {
}
interface RoleTemplatePrivileges_Update extends RoleTemplatePrivileges {
}
interface RollupField_Base extends WebEntity {
}
interface RollupField_Fixed extends WebEntity_Fixed {
  rollupfieldid: string;
}
interface RollupField extends RollupField_Base, RollupField_Relationships {
}
interface RollupField_Relationships {
}
interface RollupField_Result extends RollupField_Base, RollupField_Relationships {
}
interface RollupField_FormattedResult {
}
interface RollupField_Select {
}
interface RollupField_Expand {
}
interface RollupField_Filter {
}
interface RollupField_Create extends RollupField {
}
interface RollupField_Update extends RollupField {
}
interface RollupJob_Base extends WebEntity {
}
interface RollupJob_Fixed extends WebEntity_Fixed {
  rollupjobid: string;
}
interface RollupJob extends RollupJob_Base, RollupJob_Relationships {
}
interface RollupJob_Relationships {
}
interface RollupJob_Result extends RollupJob_Base, RollupJob_Relationships {
}
interface RollupJob_FormattedResult {
}
interface RollupJob_Select {
}
interface RollupJob_Expand {
}
interface RollupJob_Filter {
}
interface RollupJob_Create extends RollupJob {
}
interface RollupJob_Update extends RollupJob {
}
interface RollupProperties_Base extends WebEntity {
}
interface RollupProperties_Fixed extends WebEntity_Fixed {
  rolluppropertiesid: string;
}
interface RollupProperties extends RollupProperties_Base, RollupProperties_Relationships {
}
interface RollupProperties_Relationships {
}
interface RollupProperties_Result extends RollupProperties_Base, RollupProperties_Relationships {
}
interface RollupProperties_FormattedResult {
}
interface RollupProperties_Select {
}
interface RollupProperties_Expand {
}
interface RollupProperties_Filter {
}
interface RollupProperties_Create extends RollupProperties {
}
interface RollupProperties_Update extends RollupProperties {
}
interface RoutingRule_Base extends WebEntity {
}
interface RoutingRule_Fixed extends WebEntity_Fixed {
  routingruleid: string;
}
interface RoutingRule extends RoutingRule_Base, RoutingRule_Relationships {
}
interface RoutingRule_Relationships {
}
interface RoutingRule_Result extends RoutingRule_Base, RoutingRule_Relationships {
}
interface RoutingRule_FormattedResult {
}
interface RoutingRule_Select {
}
interface RoutingRule_Expand {
}
interface RoutingRule_Filter {
}
interface RoutingRule_Create extends RoutingRule {
}
interface RoutingRule_Update extends RoutingRule {
}
interface RoutingRuleItem_Base extends WebEntity {
}
interface RoutingRuleItem_Fixed extends WebEntity_Fixed {
  routingruleitemid: string;
}
interface RoutingRuleItem extends RoutingRuleItem_Base, RoutingRuleItem_Relationships {
}
interface RoutingRuleItem_Relationships {
}
interface RoutingRuleItem_Result extends RoutingRuleItem_Base, RoutingRuleItem_Relationships {
}
interface RoutingRuleItem_FormattedResult {
}
interface RoutingRuleItem_Select {
}
interface RoutingRuleItem_Expand {
}
interface RoutingRuleItem_Filter {
}
interface RoutingRuleItem_Create extends RoutingRuleItem {
}
interface RoutingRuleItem_Update extends RoutingRuleItem {
}
interface RuntimeDependency_Base extends WebEntity {
}
interface RuntimeDependency_Fixed extends WebEntity_Fixed {
  dependencyid: string;
}
interface RuntimeDependency extends RuntimeDependency_Base, RuntimeDependency_Relationships {
}
interface RuntimeDependency_Relationships {
}
interface RuntimeDependency_Result extends RuntimeDependency_Base, RuntimeDependency_Relationships {
}
interface RuntimeDependency_FormattedResult {
}
interface RuntimeDependency_Select {
}
interface RuntimeDependency_Expand {
}
interface RuntimeDependency_Filter {
}
interface RuntimeDependency_Create extends RuntimeDependency {
}
interface RuntimeDependency_Update extends RuntimeDependency {
}
interface SalesLiterature_Base extends WebEntity {
}
interface SalesLiterature_Fixed extends WebEntity_Fixed {
  salesliteratureid: string;
}
interface SalesLiterature extends SalesLiterature_Base, SalesLiterature_Relationships {
}
interface SalesLiterature_Relationships {
}
interface SalesLiterature_Result extends SalesLiterature_Base, SalesLiterature_Relationships {
}
interface SalesLiterature_FormattedResult {
}
interface SalesLiterature_Select {
}
interface SalesLiterature_Expand {
}
interface SalesLiterature_Filter {
}
interface SalesLiterature_Create extends SalesLiterature {
}
interface SalesLiterature_Update extends SalesLiterature {
}
interface SalesLiteratureItem_Base extends WebEntity {
}
interface SalesLiteratureItem_Fixed extends WebEntity_Fixed {
  salesliteratureitemid: string;
}
interface SalesLiteratureItem extends SalesLiteratureItem_Base, SalesLiteratureItem_Relationships {
}
interface SalesLiteratureItem_Relationships {
}
interface SalesLiteratureItem_Result extends SalesLiteratureItem_Base, SalesLiteratureItem_Relationships {
}
interface SalesLiteratureItem_FormattedResult {
}
interface SalesLiteratureItem_Select {
}
interface SalesLiteratureItem_Expand {
}
interface SalesLiteratureItem_Filter {
}
interface SalesLiteratureItem_Create extends SalesLiteratureItem {
}
interface SalesLiteratureItem_Update extends SalesLiteratureItem {
}
interface SalesOrder_Base extends WebEntity {
}
interface SalesOrder_Fixed extends WebEntity_Fixed {
  salesorderid: string;
}
interface SalesOrder extends SalesOrder_Base, SalesOrder_Relationships {
}
interface SalesOrder_Relationships {
}
interface SalesOrder_Result extends SalesOrder_Base, SalesOrder_Relationships {
}
interface SalesOrder_FormattedResult {
}
interface SalesOrder_Select {
}
interface SalesOrder_Expand {
}
interface SalesOrder_Filter {
}
interface SalesOrder_Create extends SalesOrder {
}
interface SalesOrder_Update extends SalesOrder {
}
interface SalesOrderDetail_Base extends WebEntity {
}
interface SalesOrderDetail_Fixed extends WebEntity_Fixed {
  salesorderdetailid: string;
}
interface SalesOrderDetail extends SalesOrderDetail_Base, SalesOrderDetail_Relationships {
}
interface SalesOrderDetail_Relationships {
}
interface SalesOrderDetail_Result extends SalesOrderDetail_Base, SalesOrderDetail_Relationships {
}
interface SalesOrderDetail_FormattedResult {
}
interface SalesOrderDetail_Select {
}
interface SalesOrderDetail_Expand {
}
interface SalesOrderDetail_Filter {
}
interface SalesOrderDetail_Create extends SalesOrderDetail {
}
interface SalesOrderDetail_Update extends SalesOrderDetail {
}
interface SalesProcessInstance_Base extends WebEntity {
}
interface SalesProcessInstance_Fixed extends WebEntity_Fixed {
  salesprocessinstanceid: string;
}
interface SalesProcessInstance extends SalesProcessInstance_Base, SalesProcessInstance_Relationships {
}
interface SalesProcessInstance_Relationships {
}
interface SalesProcessInstance_Result extends SalesProcessInstance_Base, SalesProcessInstance_Relationships {
}
interface SalesProcessInstance_FormattedResult {
}
interface SalesProcessInstance_Select {
}
interface SalesProcessInstance_Expand {
}
interface SalesProcessInstance_Filter {
}
interface SalesProcessInstance_Create extends SalesProcessInstance {
}
interface SalesProcessInstance_Update extends SalesProcessInstance {
}
interface SavedOrgInsightsConfiguration_Base extends WebEntity {
}
interface SavedOrgInsightsConfiguration_Fixed extends WebEntity_Fixed {
  savedorginsightsconfigurationid: string;
}
interface SavedOrgInsightsConfiguration extends SavedOrgInsightsConfiguration_Base, SavedOrgInsightsConfiguration_Relationships {
}
interface SavedOrgInsightsConfiguration_Relationships {
}
interface SavedOrgInsightsConfiguration_Result extends SavedOrgInsightsConfiguration_Base, SavedOrgInsightsConfiguration_Relationships {
}
interface SavedOrgInsightsConfiguration_FormattedResult {
}
interface SavedOrgInsightsConfiguration_Select {
}
interface SavedOrgInsightsConfiguration_Expand {
}
interface SavedOrgInsightsConfiguration_Filter {
}
interface SavedOrgInsightsConfiguration_Create extends SavedOrgInsightsConfiguration {
}
interface SavedOrgInsightsConfiguration_Update extends SavedOrgInsightsConfiguration {
}
interface SavedQuery_Base extends WebEntity {
}
interface SavedQuery_Fixed extends WebEntity_Fixed {
  savedqueryid: string;
}
interface SavedQuery extends SavedQuery_Base, SavedQuery_Relationships {
}
interface SavedQuery_Relationships {
}
interface SavedQuery_Result extends SavedQuery_Base, SavedQuery_Relationships {
}
interface SavedQuery_FormattedResult {
}
interface SavedQuery_Select {
}
interface SavedQuery_Expand {
}
interface SavedQuery_Filter {
}
interface SavedQuery_Create extends SavedQuery {
}
interface SavedQuery_Update extends SavedQuery {
}
interface SavedQueryVisualization_Base extends WebEntity {
}
interface SavedQueryVisualization_Fixed extends WebEntity_Fixed {
  savedqueryvisualizationid: string;
}
interface SavedQueryVisualization extends SavedQueryVisualization_Base, SavedQueryVisualization_Relationships {
}
interface SavedQueryVisualization_Relationships {
}
interface SavedQueryVisualization_Result extends SavedQueryVisualization_Base, SavedQueryVisualization_Relationships {
}
interface SavedQueryVisualization_FormattedResult {
}
interface SavedQueryVisualization_Select {
}
interface SavedQueryVisualization_Expand {
}
interface SavedQueryVisualization_Filter {
}
interface SavedQueryVisualization_Create extends SavedQueryVisualization {
}
interface SavedQueryVisualization_Update extends SavedQueryVisualization {
}
interface SdkMessage_Base extends WebEntity {
}
interface SdkMessage_Fixed extends WebEntity_Fixed {
  sdkmessageid: string;
}
interface SdkMessage extends SdkMessage_Base, SdkMessage_Relationships {
}
interface SdkMessage_Relationships {
}
interface SdkMessage_Result extends SdkMessage_Base, SdkMessage_Relationships {
}
interface SdkMessage_FormattedResult {
}
interface SdkMessage_Select {
}
interface SdkMessage_Expand {
}
interface SdkMessage_Filter {
}
interface SdkMessage_Create extends SdkMessage {
}
interface SdkMessage_Update extends SdkMessage {
}
interface SdkMessageFilter_Base extends WebEntity {
}
interface SdkMessageFilter_Fixed extends WebEntity_Fixed {
  sdkmessagefilterid: string;
}
interface SdkMessageFilter extends SdkMessageFilter_Base, SdkMessageFilter_Relationships {
}
interface SdkMessageFilter_Relationships {
}
interface SdkMessageFilter_Result extends SdkMessageFilter_Base, SdkMessageFilter_Relationships {
}
interface SdkMessageFilter_FormattedResult {
}
interface SdkMessageFilter_Select {
}
interface SdkMessageFilter_Expand {
}
interface SdkMessageFilter_Filter {
}
interface SdkMessageFilter_Create extends SdkMessageFilter {
}
interface SdkMessageFilter_Update extends SdkMessageFilter {
}
interface SdkMessagePair_Base extends WebEntity {
}
interface SdkMessagePair_Fixed extends WebEntity_Fixed {
  sdkmessagepairid: string;
}
interface SdkMessagePair extends SdkMessagePair_Base, SdkMessagePair_Relationships {
}
interface SdkMessagePair_Relationships {
}
interface SdkMessagePair_Result extends SdkMessagePair_Base, SdkMessagePair_Relationships {
}
interface SdkMessagePair_FormattedResult {
}
interface SdkMessagePair_Select {
}
interface SdkMessagePair_Expand {
}
interface SdkMessagePair_Filter {
}
interface SdkMessagePair_Create extends SdkMessagePair {
}
interface SdkMessagePair_Update extends SdkMessagePair {
}
interface SdkMessageProcessingStep_Base extends WebEntity {
}
interface SdkMessageProcessingStep_Fixed extends WebEntity_Fixed {
  sdkmessageprocessingstepid: string;
}
interface SdkMessageProcessingStep extends SdkMessageProcessingStep_Base, SdkMessageProcessingStep_Relationships {
}
interface SdkMessageProcessingStep_Relationships {
}
interface SdkMessageProcessingStep_Result extends SdkMessageProcessingStep_Base, SdkMessageProcessingStep_Relationships {
}
interface SdkMessageProcessingStep_FormattedResult {
}
interface SdkMessageProcessingStep_Select {
}
interface SdkMessageProcessingStep_Expand {
}
interface SdkMessageProcessingStep_Filter {
}
interface SdkMessageProcessingStep_Create extends SdkMessageProcessingStep {
}
interface SdkMessageProcessingStep_Update extends SdkMessageProcessingStep {
}
interface SdkMessageProcessingStepImage_Base extends WebEntity {
}
interface SdkMessageProcessingStepImage_Fixed extends WebEntity_Fixed {
  sdkmessageprocessingstepimageid: string;
}
interface SdkMessageProcessingStepImage extends SdkMessageProcessingStepImage_Base, SdkMessageProcessingStepImage_Relationships {
}
interface SdkMessageProcessingStepImage_Relationships {
}
interface SdkMessageProcessingStepImage_Result extends SdkMessageProcessingStepImage_Base, SdkMessageProcessingStepImage_Relationships {
}
interface SdkMessageProcessingStepImage_FormattedResult {
}
interface SdkMessageProcessingStepImage_Select {
}
interface SdkMessageProcessingStepImage_Expand {
}
interface SdkMessageProcessingStepImage_Filter {
}
interface SdkMessageProcessingStepImage_Create extends SdkMessageProcessingStepImage {
}
interface SdkMessageProcessingStepImage_Update extends SdkMessageProcessingStepImage {
}
interface SdkMessageProcessingStepSecureConfig_Base extends WebEntity {
}
interface SdkMessageProcessingStepSecureConfig_Fixed extends WebEntity_Fixed {
  sdkmessageprocessingstepsecureconfigid: string;
}
interface SdkMessageProcessingStepSecureConfig extends SdkMessageProcessingStepSecureConfig_Base, SdkMessageProcessingStepSecureConfig_Relationships {
}
interface SdkMessageProcessingStepSecureConfig_Relationships {
}
interface SdkMessageProcessingStepSecureConfig_Result extends SdkMessageProcessingStepSecureConfig_Base, SdkMessageProcessingStepSecureConfig_Relationships {
}
interface SdkMessageProcessingStepSecureConfig_FormattedResult {
}
interface SdkMessageProcessingStepSecureConfig_Select {
}
interface SdkMessageProcessingStepSecureConfig_Expand {
}
interface SdkMessageProcessingStepSecureConfig_Filter {
}
interface SdkMessageProcessingStepSecureConfig_Create extends SdkMessageProcessingStepSecureConfig {
}
interface SdkMessageProcessingStepSecureConfig_Update extends SdkMessageProcessingStepSecureConfig {
}
interface SdkMessageRequest_Base extends WebEntity {
}
interface SdkMessageRequest_Fixed extends WebEntity_Fixed {
  sdkmessagerequestid: string;
}
interface SdkMessageRequest extends SdkMessageRequest_Base, SdkMessageRequest_Relationships {
}
interface SdkMessageRequest_Relationships {
}
interface SdkMessageRequest_Result extends SdkMessageRequest_Base, SdkMessageRequest_Relationships {
}
interface SdkMessageRequest_FormattedResult {
}
interface SdkMessageRequest_Select {
}
interface SdkMessageRequest_Expand {
}
interface SdkMessageRequest_Filter {
}
interface SdkMessageRequest_Create extends SdkMessageRequest {
}
interface SdkMessageRequest_Update extends SdkMessageRequest {
}
interface SdkMessageRequestField_Base extends WebEntity {
}
interface SdkMessageRequestField_Fixed extends WebEntity_Fixed {
  sdkmessagerequestfieldid: string;
}
interface SdkMessageRequestField extends SdkMessageRequestField_Base, SdkMessageRequestField_Relationships {
}
interface SdkMessageRequestField_Relationships {
}
interface SdkMessageRequestField_Result extends SdkMessageRequestField_Base, SdkMessageRequestField_Relationships {
}
interface SdkMessageRequestField_FormattedResult {
}
interface SdkMessageRequestField_Select {
}
interface SdkMessageRequestField_Expand {
}
interface SdkMessageRequestField_Filter {
}
interface SdkMessageRequestField_Create extends SdkMessageRequestField {
}
interface SdkMessageRequestField_Update extends SdkMessageRequestField {
}
interface SdkMessageResponse_Base extends WebEntity {
}
interface SdkMessageResponse_Fixed extends WebEntity_Fixed {
  sdkmessageresponseid: string;
}
interface SdkMessageResponse extends SdkMessageResponse_Base, SdkMessageResponse_Relationships {
}
interface SdkMessageResponse_Relationships {
}
interface SdkMessageResponse_Result extends SdkMessageResponse_Base, SdkMessageResponse_Relationships {
}
interface SdkMessageResponse_FormattedResult {
}
interface SdkMessageResponse_Select {
}
interface SdkMessageResponse_Expand {
}
interface SdkMessageResponse_Filter {
}
interface SdkMessageResponse_Create extends SdkMessageResponse {
}
interface SdkMessageResponse_Update extends SdkMessageResponse {
}
interface SdkMessageResponseField_Base extends WebEntity {
}
interface SdkMessageResponseField_Fixed extends WebEntity_Fixed {
  sdkmessageresponsefieldid: string;
}
interface SdkMessageResponseField extends SdkMessageResponseField_Base, SdkMessageResponseField_Relationships {
}
interface SdkMessageResponseField_Relationships {
}
interface SdkMessageResponseField_Result extends SdkMessageResponseField_Base, SdkMessageResponseField_Relationships {
}
interface SdkMessageResponseField_FormattedResult {
}
interface SdkMessageResponseField_Select {
}
interface SdkMessageResponseField_Expand {
}
interface SdkMessageResponseField_Filter {
}
interface SdkMessageResponseField_Create extends SdkMessageResponseField {
}
interface SdkMessageResponseField_Update extends SdkMessageResponseField {
}
interface searchtelemetry_Base extends WebEntity {
}
interface searchtelemetry_Fixed extends WebEntity_Fixed {
  searchtelemetryid: string;
}
interface searchtelemetry extends searchtelemetry_Base, searchtelemetry_Relationships {
}
interface searchtelemetry_Relationships {
}
interface searchtelemetry_Result extends searchtelemetry_Base, searchtelemetry_Relationships {
}
interface searchtelemetry_FormattedResult {
}
interface searchtelemetry_Select {
}
interface searchtelemetry_Expand {
}
interface searchtelemetry_Filter {
}
interface searchtelemetry_Create extends searchtelemetry {
}
interface searchtelemetry_Update extends searchtelemetry {
}
interface SemiAnnualFiscalCalendar_Base extends WebEntity {
}
interface SemiAnnualFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface SemiAnnualFiscalCalendar extends SemiAnnualFiscalCalendar_Base, SemiAnnualFiscalCalendar_Relationships {
}
interface SemiAnnualFiscalCalendar_Relationships {
}
interface SemiAnnualFiscalCalendar_Result extends SemiAnnualFiscalCalendar_Base, SemiAnnualFiscalCalendar_Relationships {
}
interface SemiAnnualFiscalCalendar_FormattedResult {
}
interface SemiAnnualFiscalCalendar_Select {
}
interface SemiAnnualFiscalCalendar_Expand {
}
interface SemiAnnualFiscalCalendar_Filter {
}
interface SemiAnnualFiscalCalendar_Create extends SemiAnnualFiscalCalendar {
}
interface SemiAnnualFiscalCalendar_Update extends SemiAnnualFiscalCalendar {
}
interface Service_Base extends WebEntity {
}
interface Service_Fixed extends WebEntity_Fixed {
  serviceid: string;
}
interface Service extends Service_Base, Service_Relationships {
}
interface Service_Relationships {
}
interface Service_Result extends Service_Base, Service_Relationships {
}
interface Service_FormattedResult {
}
interface Service_Select {
}
interface Service_Expand {
}
interface Service_Filter {
}
interface Service_Create extends Service {
}
interface Service_Update extends Service {
}
interface ServiceAppointment_Base extends WebEntity {
}
interface ServiceAppointment_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface ServiceAppointment extends ServiceAppointment_Base, ServiceAppointment_Relationships {
}
interface ServiceAppointment_Relationships {
}
interface ServiceAppointment_Result extends ServiceAppointment_Base, ServiceAppointment_Relationships {
}
interface ServiceAppointment_FormattedResult {
}
interface ServiceAppointment_Select {
}
interface ServiceAppointment_Expand {
}
interface ServiceAppointment_Filter {
}
interface ServiceAppointment_Create extends ServiceAppointment {
}
interface ServiceAppointment_Update extends ServiceAppointment {
}
interface ServiceContractContacts_Base extends WebEntity {
}
interface ServiceContractContacts_Fixed extends WebEntity_Fixed {
  servicecontractcontactid: string;
}
interface ServiceContractContacts extends ServiceContractContacts_Base, ServiceContractContacts_Relationships {
}
interface ServiceContractContacts_Relationships {
}
interface ServiceContractContacts_Result extends ServiceContractContacts_Base, ServiceContractContacts_Relationships {
}
interface ServiceContractContacts_FormattedResult {
}
interface ServiceContractContacts_Select {
}
interface ServiceContractContacts_Expand {
}
interface ServiceContractContacts_Filter {
}
interface ServiceContractContacts_Create extends ServiceContractContacts {
}
interface ServiceContractContacts_Update extends ServiceContractContacts {
}
interface ServiceEndpoint_Base extends WebEntity {
}
interface ServiceEndpoint_Fixed extends WebEntity_Fixed {
  serviceendpointid: string;
}
interface ServiceEndpoint extends ServiceEndpoint_Base, ServiceEndpoint_Relationships {
}
interface ServiceEndpoint_Relationships {
}
interface ServiceEndpoint_Result extends ServiceEndpoint_Base, ServiceEndpoint_Relationships {
}
interface ServiceEndpoint_FormattedResult {
}
interface ServiceEndpoint_Select {
}
interface ServiceEndpoint_Expand {
}
interface ServiceEndpoint_Filter {
}
interface ServiceEndpoint_Create extends ServiceEndpoint {
}
interface ServiceEndpoint_Update extends ServiceEndpoint {
}
interface ServicePlan_Base extends WebEntity {
}
interface ServicePlan_Fixed extends WebEntity_Fixed {
  serviceplanid: string;
}
interface ServicePlan extends ServicePlan_Base, ServicePlan_Relationships {
}
interface ServicePlan_Relationships {
}
interface ServicePlan_Result extends ServicePlan_Base, ServicePlan_Relationships {
}
interface ServicePlan_FormattedResult {
}
interface ServicePlan_Select {
}
interface ServicePlan_Expand {
}
interface ServicePlan_Filter {
}
interface ServicePlan_Create extends ServicePlan {
}
interface ServicePlan_Update extends ServicePlan {
}
interface ServicePlanAppModules_Base extends WebEntity {
}
interface ServicePlanAppModules_Fixed extends WebEntity_Fixed {
  serviceplanappmodulesid: string;
}
interface ServicePlanAppModules extends ServicePlanAppModules_Base, ServicePlanAppModules_Relationships {
}
interface ServicePlanAppModules_Relationships {
}
interface ServicePlanAppModules_Result extends ServicePlanAppModules_Base, ServicePlanAppModules_Relationships {
}
interface ServicePlanAppModules_FormattedResult {
}
interface ServicePlanAppModules_Select {
}
interface ServicePlanAppModules_Expand {
}
interface ServicePlanAppModules_Filter {
}
interface ServicePlanAppModules_Create extends ServicePlanAppModules {
}
interface ServicePlanAppModules_Update extends ServicePlanAppModules {
}
interface ServicePlanMapping_Base extends WebEntity {
}
interface ServicePlanMapping_Fixed extends WebEntity_Fixed {
  serviceplanmappingid: string;
}
interface ServicePlanMapping extends ServicePlanMapping_Base, ServicePlanMapping_Relationships {
}
interface ServicePlanMapping_Relationships {
}
interface ServicePlanMapping_Result extends ServicePlanMapping_Base, ServicePlanMapping_Relationships {
}
interface ServicePlanMapping_FormattedResult {
}
interface ServicePlanMapping_Select {
}
interface ServicePlanMapping_Expand {
}
interface ServicePlanMapping_Filter {
}
interface ServicePlanMapping_Create extends ServicePlanMapping {
}
interface ServicePlanMapping_Update extends ServicePlanMapping {
}
interface SettingDefinition_Base extends WebEntity {
}
interface SettingDefinition_Fixed extends WebEntity_Fixed {
  settingdefinitionid: string;
}
interface SettingDefinition extends SettingDefinition_Base, SettingDefinition_Relationships {
}
interface SettingDefinition_Relationships {
}
interface SettingDefinition_Result extends SettingDefinition_Base, SettingDefinition_Relationships {
}
interface SettingDefinition_FormattedResult {
}
interface SettingDefinition_Select {
}
interface SettingDefinition_Expand {
}
interface SettingDefinition_Filter {
}
interface SettingDefinition_Create extends SettingDefinition {
}
interface SettingDefinition_Update extends SettingDefinition {
}
interface SharedObjectsForRead_Base extends WebEntity {
}
interface SharedObjectsForRead_Fixed extends WebEntity_Fixed {
  sharedobjectsforreadid: string;
}
interface SharedObjectsForRead extends SharedObjectsForRead_Base, SharedObjectsForRead_Relationships {
}
interface SharedObjectsForRead_Relationships {
}
interface SharedObjectsForRead_Result extends SharedObjectsForRead_Base, SharedObjectsForRead_Relationships {
}
interface SharedObjectsForRead_FormattedResult {
}
interface SharedObjectsForRead_Select {
}
interface SharedObjectsForRead_Expand {
}
interface SharedObjectsForRead_Filter {
}
interface SharedObjectsForRead_Create extends SharedObjectsForRead {
}
interface SharedObjectsForRead_Update extends SharedObjectsForRead {
}
interface SharePointData_Base extends WebEntity {
}
interface SharePointData_Fixed extends WebEntity_Fixed {
  sharepointdataid: string;
}
interface SharePointData extends SharePointData_Base, SharePointData_Relationships {
}
interface SharePointData_Relationships {
}
interface SharePointData_Result extends SharePointData_Base, SharePointData_Relationships {
}
interface SharePointData_FormattedResult {
}
interface SharePointData_Select {
}
interface SharePointData_Expand {
}
interface SharePointData_Filter {
}
interface SharePointData_Create extends SharePointData {
}
interface SharePointData_Update extends SharePointData {
}
interface SharePointDocument_Base extends WebEntity {
}
interface SharePointDocument_Fixed extends WebEntity_Fixed {
  sharepointdocumentid: string;
}
interface SharePointDocument extends SharePointDocument_Base, SharePointDocument_Relationships {
}
interface SharePointDocument_Relationships {
}
interface SharePointDocument_Result extends SharePointDocument_Base, SharePointDocument_Relationships {
}
interface SharePointDocument_FormattedResult {
}
interface SharePointDocument_Select {
}
interface SharePointDocument_Expand {
}
interface SharePointDocument_Filter {
}
interface SharePointDocument_Create extends SharePointDocument {
}
interface SharePointDocument_Update extends SharePointDocument {
}
interface SharePointDocumentLocation_Base extends WebEntity {
}
interface SharePointDocumentLocation_Fixed extends WebEntity_Fixed {
  sharepointdocumentlocationid: string;
}
interface SharePointDocumentLocation extends SharePointDocumentLocation_Base, SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_Result extends SharePointDocumentLocation_Base, SharePointDocumentLocation_Relationships {
}
interface SharePointDocumentLocation_FormattedResult {
}
interface SharePointDocumentLocation_Select {
}
interface SharePointDocumentLocation_Expand {
}
interface SharePointDocumentLocation_Filter {
}
interface SharePointDocumentLocation_Create extends SharePointDocumentLocation {
}
interface SharePointDocumentLocation_Update extends SharePointDocumentLocation {
}
interface SharePointSite_Base extends WebEntity {
}
interface SharePointSite_Fixed extends WebEntity_Fixed {
  sharepointsiteid: string;
}
interface SharePointSite extends SharePointSite_Base, SharePointSite_Relationships {
}
interface SharePointSite_Relationships {
}
interface SharePointSite_Result extends SharePointSite_Base, SharePointSite_Relationships {
}
interface SharePointSite_FormattedResult {
}
interface SharePointSite_Select {
}
interface SharePointSite_Expand {
}
interface SharePointSite_Filter {
}
interface SharePointSite_Create extends SharePointSite {
}
interface SharePointSite_Update extends SharePointSite {
}
interface SimilarityRule_Base extends WebEntity {
}
interface SimilarityRule_Fixed extends WebEntity_Fixed {
  similarityruleid: string;
}
interface SimilarityRule extends SimilarityRule_Base, SimilarityRule_Relationships {
}
interface SimilarityRule_Relationships {
}
interface SimilarityRule_Result extends SimilarityRule_Base, SimilarityRule_Relationships {
}
interface SimilarityRule_FormattedResult {
}
interface SimilarityRule_Select {
}
interface SimilarityRule_Expand {
}
interface SimilarityRule_Filter {
}
interface SimilarityRule_Create extends SimilarityRule {
}
interface SimilarityRule_Update extends SimilarityRule {
}
interface Site_Base extends WebEntity {
}
interface Site_Fixed extends WebEntity_Fixed {
  siteid: string;
}
interface Site extends Site_Base, Site_Relationships {
}
interface Site_Relationships {
}
interface Site_Result extends Site_Base, Site_Relationships {
}
interface Site_FormattedResult {
}
interface Site_Select {
}
interface Site_Expand {
}
interface Site_Filter {
}
interface Site_Create extends Site {
}
interface Site_Update extends Site {
}
interface SiteMap_Base extends WebEntity {
}
interface SiteMap_Fixed extends WebEntity_Fixed {
  sitemapid: string;
}
interface SiteMap extends SiteMap_Base, SiteMap_Relationships {
}
interface SiteMap_Relationships {
}
interface SiteMap_Result extends SiteMap_Base, SiteMap_Relationships {
}
interface SiteMap_FormattedResult {
}
interface SiteMap_Select {
}
interface SiteMap_Expand {
}
interface SiteMap_Filter {
}
interface SiteMap_Create extends SiteMap {
}
interface SiteMap_Update extends SiteMap {
}
interface SLA_Base extends WebEntity {
}
interface SLA_Fixed extends WebEntity_Fixed {
  slaid: string;
}
interface SLA extends SLA_Base, SLA_Relationships {
}
interface SLA_Relationships {
}
interface SLA_Result extends SLA_Base, SLA_Relationships {
}
interface SLA_FormattedResult {
}
interface SLA_Select {
}
interface SLA_Expand {
}
interface SLA_Filter {
}
interface SLA_Create extends SLA {
}
interface SLA_Update extends SLA {
}
interface SLAItem_Base extends WebEntity {
}
interface SLAItem_Fixed extends WebEntity_Fixed {
  slaitemid: string;
}
interface SLAItem extends SLAItem_Base, SLAItem_Relationships {
}
interface SLAItem_Relationships {
}
interface SLAItem_Result extends SLAItem_Base, SLAItem_Relationships {
}
interface SLAItem_FormattedResult {
}
interface SLAItem_Select {
}
interface SLAItem_Expand {
}
interface SLAItem_Filter {
}
interface SLAItem_Create extends SLAItem {
}
interface SLAItem_Update extends SLAItem {
}
interface SLAKPIInstance_Base extends WebEntity {
}
interface SLAKPIInstance_Fixed extends WebEntity_Fixed {
  slakpiinstanceid: string;
}
interface SLAKPIInstance extends SLAKPIInstance_Base, SLAKPIInstance_Relationships {
}
interface SLAKPIInstance_Relationships {
}
interface SLAKPIInstance_Result extends SLAKPIInstance_Base, SLAKPIInstance_Relationships {
}
interface SLAKPIInstance_FormattedResult {
}
interface SLAKPIInstance_Select {
}
interface SLAKPIInstance_Expand {
}
interface SLAKPIInstance_Filter {
}
interface SLAKPIInstance_Create extends SLAKPIInstance {
}
interface SLAKPIInstance_Update extends SLAKPIInstance {
}
interface SocialActivity_Base extends WebEntity {
}
interface SocialActivity_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface SocialActivity extends SocialActivity_Base, SocialActivity_Relationships {
}
interface SocialActivity_Relationships {
}
interface SocialActivity_Result extends SocialActivity_Base, SocialActivity_Relationships {
}
interface SocialActivity_FormattedResult {
}
interface SocialActivity_Select {
}
interface SocialActivity_Expand {
}
interface SocialActivity_Filter {
}
interface SocialActivity_Create extends SocialActivity {
}
interface SocialActivity_Update extends SocialActivity {
}
interface SocialInsightsConfiguration_Base extends WebEntity {
}
interface SocialInsightsConfiguration_Fixed extends WebEntity_Fixed {
  socialinsightsconfigurationid: string;
}
interface SocialInsightsConfiguration extends SocialInsightsConfiguration_Base, SocialInsightsConfiguration_Relationships {
}
interface SocialInsightsConfiguration_Relationships {
}
interface SocialInsightsConfiguration_Result extends SocialInsightsConfiguration_Base, SocialInsightsConfiguration_Relationships {
}
interface SocialInsightsConfiguration_FormattedResult {
}
interface SocialInsightsConfiguration_Select {
}
interface SocialInsightsConfiguration_Expand {
}
interface SocialInsightsConfiguration_Filter {
}
interface SocialInsightsConfiguration_Create extends SocialInsightsConfiguration {
}
interface SocialInsightsConfiguration_Update extends SocialInsightsConfiguration {
}
interface SocialProfile_Base extends WebEntity {
}
interface SocialProfile_Fixed extends WebEntity_Fixed {
  socialprofileid: string;
}
interface SocialProfile extends SocialProfile_Base, SocialProfile_Relationships {
}
interface SocialProfile_Relationships {
}
interface SocialProfile_Result extends SocialProfile_Base, SocialProfile_Relationships {
}
interface SocialProfile_FormattedResult {
}
interface SocialProfile_Select {
}
interface SocialProfile_Expand {
}
interface SocialProfile_Filter {
}
interface SocialProfile_Create extends SocialProfile {
}
interface SocialProfile_Update extends SocialProfile {
}
interface Solution_Base extends WebEntity {
}
interface Solution_Fixed extends WebEntity_Fixed {
  solutionid: string;
}
interface Solution extends Solution_Base, Solution_Relationships {
}
interface Solution_Relationships {
}
interface Solution_Result extends Solution_Base, Solution_Relationships {
}
interface Solution_FormattedResult {
}
interface Solution_Select {
}
interface Solution_Expand {
}
interface Solution_Filter {
}
interface Solution_Create extends Solution {
}
interface Solution_Update extends Solution {
}
interface SolutionComponent_Base extends WebEntity {
}
interface SolutionComponent_Fixed extends WebEntity_Fixed {
  solutioncomponentid: string;
}
interface SolutionComponent extends SolutionComponent_Base, SolutionComponent_Relationships {
}
interface SolutionComponent_Relationships {
}
interface SolutionComponent_Result extends SolutionComponent_Base, SolutionComponent_Relationships {
}
interface SolutionComponent_FormattedResult {
}
interface SolutionComponent_Select {
}
interface SolutionComponent_Expand {
}
interface SolutionComponent_Filter {
}
interface SolutionComponent_Create extends SolutionComponent {
}
interface SolutionComponent_Update extends SolutionComponent {
}
interface solutioncomponentattributeconfiguration_Base extends WebEntity {
}
interface solutioncomponentattributeconfiguration_Fixed extends WebEntity_Fixed {
  solutioncomponentattributeconfigurationid: string;
}
interface solutioncomponentattributeconfiguration extends solutioncomponentattributeconfiguration_Base, solutioncomponentattributeconfiguration_Relationships {
}
interface solutioncomponentattributeconfiguration_Relationships {
}
interface solutioncomponentattributeconfiguration_Result extends solutioncomponentattributeconfiguration_Base, solutioncomponentattributeconfiguration_Relationships {
}
interface solutioncomponentattributeconfiguration_FormattedResult {
}
interface solutioncomponentattributeconfiguration_Select {
}
interface solutioncomponentattributeconfiguration_Expand {
}
interface solutioncomponentattributeconfiguration_Filter {
}
interface solutioncomponentattributeconfiguration_Create extends solutioncomponentattributeconfiguration {
}
interface solutioncomponentattributeconfiguration_Update extends solutioncomponentattributeconfiguration {
}
interface solutioncomponentbatchconfiguration_Base extends WebEntity {
}
interface solutioncomponentbatchconfiguration_Fixed extends WebEntity_Fixed {
  solutioncomponentbatchconfigurationid: string;
}
interface solutioncomponentbatchconfiguration extends solutioncomponentbatchconfiguration_Base, solutioncomponentbatchconfiguration_Relationships {
}
interface solutioncomponentbatchconfiguration_Relationships {
}
interface solutioncomponentbatchconfiguration_Result extends solutioncomponentbatchconfiguration_Base, solutioncomponentbatchconfiguration_Relationships {
}
interface solutioncomponentbatchconfiguration_FormattedResult {
}
interface solutioncomponentbatchconfiguration_Select {
}
interface solutioncomponentbatchconfiguration_Expand {
}
interface solutioncomponentbatchconfiguration_Filter {
}
interface solutioncomponentbatchconfiguration_Create extends solutioncomponentbatchconfiguration {
}
interface solutioncomponentbatchconfiguration_Update extends solutioncomponentbatchconfiguration {
}
interface solutioncomponentconfiguration_Base extends WebEntity {
}
interface solutioncomponentconfiguration_Fixed extends WebEntity_Fixed {
  solutioncomponentconfigurationid: string;
}
interface solutioncomponentconfiguration extends solutioncomponentconfiguration_Base, solutioncomponentconfiguration_Relationships {
}
interface solutioncomponentconfiguration_Relationships {
}
interface solutioncomponentconfiguration_Result extends solutioncomponentconfiguration_Base, solutioncomponentconfiguration_Relationships {
}
interface solutioncomponentconfiguration_FormattedResult {
}
interface solutioncomponentconfiguration_Select {
}
interface solutioncomponentconfiguration_Expand {
}
interface solutioncomponentconfiguration_Filter {
}
interface solutioncomponentconfiguration_Create extends solutioncomponentconfiguration {
}
interface solutioncomponentconfiguration_Update extends solutioncomponentconfiguration {
}
interface SolutionComponentDefinition_Base extends WebEntity {
}
interface SolutionComponentDefinition_Fixed extends WebEntity_Fixed {
  solutioncomponentdefinitionid: string;
}
interface SolutionComponentDefinition extends SolutionComponentDefinition_Base, SolutionComponentDefinition_Relationships {
}
interface SolutionComponentDefinition_Relationships {
}
interface SolutionComponentDefinition_Result extends SolutionComponentDefinition_Base, SolutionComponentDefinition_Relationships {
}
interface SolutionComponentDefinition_FormattedResult {
}
interface SolutionComponentDefinition_Select {
}
interface SolutionComponentDefinition_Expand {
}
interface SolutionComponentDefinition_Filter {
}
interface SolutionComponentDefinition_Create extends SolutionComponentDefinition {
}
interface SolutionComponentDefinition_Update extends SolutionComponentDefinition {
}
interface solutioncomponentrelationshipconfiguration_Base extends WebEntity {
}
interface solutioncomponentrelationshipconfiguration_Fixed extends WebEntity_Fixed {
  solutioncomponentrelationshipconfigurationid: string;
}
interface solutioncomponentrelationshipconfiguration extends solutioncomponentrelationshipconfiguration_Base, solutioncomponentrelationshipconfiguration_Relationships {
}
interface solutioncomponentrelationshipconfiguration_Relationships {
}
interface solutioncomponentrelationshipconfiguration_Result extends solutioncomponentrelationshipconfiguration_Base, solutioncomponentrelationshipconfiguration_Relationships {
}
interface solutioncomponentrelationshipconfiguration_FormattedResult {
}
interface solutioncomponentrelationshipconfiguration_Select {
}
interface solutioncomponentrelationshipconfiguration_Expand {
}
interface solutioncomponentrelationshipconfiguration_Filter {
}
interface solutioncomponentrelationshipconfiguration_Create extends solutioncomponentrelationshipconfiguration {
}
interface solutioncomponentrelationshipconfiguration_Update extends solutioncomponentrelationshipconfiguration {
}
interface SolutionHistoryData_Base extends WebEntity {
}
interface SolutionHistoryData_Fixed extends WebEntity_Fixed {
  solutionhistorydataid: string;
}
interface SolutionHistoryData extends SolutionHistoryData_Base, SolutionHistoryData_Relationships {
}
interface SolutionHistoryData_Relationships {
}
interface SolutionHistoryData_Result extends SolutionHistoryData_Base, SolutionHistoryData_Relationships {
}
interface SolutionHistoryData_FormattedResult {
}
interface SolutionHistoryData_Select {
}
interface SolutionHistoryData_Expand {
}
interface SolutionHistoryData_Filter {
}
interface SolutionHistoryData_Create extends SolutionHistoryData {
}
interface SolutionHistoryData_Update extends SolutionHistoryData {
}
interface SqlEncryptionAudit_Base extends WebEntity {
}
interface SqlEncryptionAudit_Fixed extends WebEntity_Fixed {
  createdon: string;
}
interface SqlEncryptionAudit extends SqlEncryptionAudit_Base, SqlEncryptionAudit_Relationships {
}
interface SqlEncryptionAudit_Relationships {
}
interface SqlEncryptionAudit_Result extends SqlEncryptionAudit_Base, SqlEncryptionAudit_Relationships {
}
interface SqlEncryptionAudit_FormattedResult {
}
interface SqlEncryptionAudit_Select {
}
interface SqlEncryptionAudit_Expand {
}
interface SqlEncryptionAudit_Filter {
}
interface SqlEncryptionAudit_Create extends SqlEncryptionAudit {
}
interface SqlEncryptionAudit_Update extends SqlEncryptionAudit {
}
interface StageSolutionUpload_Base extends WebEntity {
}
interface StageSolutionUpload_Fixed extends WebEntity_Fixed {
  stagesolutionuploadid: string;
}
interface StageSolutionUpload extends StageSolutionUpload_Base, StageSolutionUpload_Relationships {
}
interface StageSolutionUpload_Relationships {
}
interface StageSolutionUpload_Result extends StageSolutionUpload_Base, StageSolutionUpload_Relationships {
}
interface StageSolutionUpload_FormattedResult {
}
interface StageSolutionUpload_Select {
}
interface StageSolutionUpload_Expand {
}
interface StageSolutionUpload_Filter {
}
interface StageSolutionUpload_Create extends StageSolutionUpload {
}
interface StageSolutionUpload_Update extends StageSolutionUpload {
}
interface StatusMap_Base extends WebEntity {
}
interface StatusMap_Fixed extends WebEntity_Fixed {
  statusmapid: string;
}
interface StatusMap extends StatusMap_Base, StatusMap_Relationships {
}
interface StatusMap_Relationships {
}
interface StatusMap_Result extends StatusMap_Base, StatusMap_Relationships {
}
interface StatusMap_FormattedResult {
}
interface StatusMap_Select {
}
interface StatusMap_Expand {
}
interface StatusMap_Filter {
}
interface StatusMap_Create extends StatusMap {
}
interface StatusMap_Update extends StatusMap {
}
interface StringMap_Base extends WebEntity {
}
interface StringMap_Fixed extends WebEntity_Fixed {
  stringmapid: string;
}
interface StringMap extends StringMap_Base, StringMap_Relationships {
}
interface StringMap_Relationships {
}
interface StringMap_Result extends StringMap_Base, StringMap_Relationships {
}
interface StringMap_FormattedResult {
}
interface StringMap_Select {
}
interface StringMap_Expand {
}
interface StringMap_Filter {
}
interface StringMap_Create extends StringMap {
}
interface StringMap_Update extends StringMap {
}
interface Subject_Base extends WebEntity {
}
interface Subject_Fixed extends WebEntity_Fixed {
  subjectid: string;
}
interface Subject extends Subject_Base, Subject_Relationships {
}
interface Subject_Relationships {
}
interface Subject_Result extends Subject_Base, Subject_Relationships {
}
interface Subject_FormattedResult {
}
interface Subject_Select {
}
interface Subject_Expand {
}
interface Subject_Filter {
}
interface Subject_Create extends Subject {
}
interface Subject_Update extends Subject {
}
interface Subscription_Base extends WebEntity {
}
interface Subscription_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface Subscription extends Subscription_Base, Subscription_Relationships {
}
interface Subscription_Relationships {
}
interface Subscription_Result extends Subscription_Base, Subscription_Relationships {
}
interface Subscription_FormattedResult {
}
interface Subscription_Select {
}
interface Subscription_Expand {
}
interface Subscription_Filter {
}
interface Subscription_Create extends Subscription {
}
interface Subscription_Update extends Subscription {
}
interface SubscriptionClients_Base extends WebEntity {
}
interface SubscriptionClients_Fixed extends WebEntity_Fixed {
  subscriptionclientid: string;
}
interface SubscriptionClients extends SubscriptionClients_Base, SubscriptionClients_Relationships {
}
interface SubscriptionClients_Relationships {
}
interface SubscriptionClients_Result extends SubscriptionClients_Base, SubscriptionClients_Relationships {
}
interface SubscriptionClients_FormattedResult {
}
interface SubscriptionClients_Select {
}
interface SubscriptionClients_Expand {
}
interface SubscriptionClients_Filter {
}
interface SubscriptionClients_Create extends SubscriptionClients {
}
interface SubscriptionClients_Update extends SubscriptionClients {
}
interface SubscriptionManuallyTrackedObject_Base extends WebEntity {
}
interface SubscriptionManuallyTrackedObject_Fixed extends WebEntity_Fixed {
  subscriptionmanuallytrackedobjectid: string;
}
interface SubscriptionManuallyTrackedObject extends SubscriptionManuallyTrackedObject_Base, SubscriptionManuallyTrackedObject_Relationships {
}
interface SubscriptionManuallyTrackedObject_Relationships {
}
interface SubscriptionManuallyTrackedObject_Result extends SubscriptionManuallyTrackedObject_Base, SubscriptionManuallyTrackedObject_Relationships {
}
interface SubscriptionManuallyTrackedObject_FormattedResult {
}
interface SubscriptionManuallyTrackedObject_Select {
}
interface SubscriptionManuallyTrackedObject_Expand {
}
interface SubscriptionManuallyTrackedObject_Filter {
}
interface SubscriptionManuallyTrackedObject_Create extends SubscriptionManuallyTrackedObject {
}
interface SubscriptionManuallyTrackedObject_Update extends SubscriptionManuallyTrackedObject {
}
interface SubscriptionStatisticsOffline_Base extends WebEntity {
}
interface SubscriptionStatisticsOffline_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface SubscriptionStatisticsOffline extends SubscriptionStatisticsOffline_Base, SubscriptionStatisticsOffline_Relationships {
}
interface SubscriptionStatisticsOffline_Relationships {
}
interface SubscriptionStatisticsOffline_Result extends SubscriptionStatisticsOffline_Base, SubscriptionStatisticsOffline_Relationships {
}
interface SubscriptionStatisticsOffline_FormattedResult {
}
interface SubscriptionStatisticsOffline_Select {
}
interface SubscriptionStatisticsOffline_Expand {
}
interface SubscriptionStatisticsOffline_Filter {
}
interface SubscriptionStatisticsOffline_Create extends SubscriptionStatisticsOffline {
}
interface SubscriptionStatisticsOffline_Update extends SubscriptionStatisticsOffline {
}
interface SubscriptionStatisticsOutlook_Base extends WebEntity {
}
interface SubscriptionStatisticsOutlook_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface SubscriptionStatisticsOutlook extends SubscriptionStatisticsOutlook_Base, SubscriptionStatisticsOutlook_Relationships {
}
interface SubscriptionStatisticsOutlook_Relationships {
}
interface SubscriptionStatisticsOutlook_Result extends SubscriptionStatisticsOutlook_Base, SubscriptionStatisticsOutlook_Relationships {
}
interface SubscriptionStatisticsOutlook_FormattedResult {
}
interface SubscriptionStatisticsOutlook_Select {
}
interface SubscriptionStatisticsOutlook_Expand {
}
interface SubscriptionStatisticsOutlook_Filter {
}
interface SubscriptionStatisticsOutlook_Create extends SubscriptionStatisticsOutlook {
}
interface SubscriptionStatisticsOutlook_Update extends SubscriptionStatisticsOutlook {
}
interface SubscriptionSyncEntryOffline_Base extends WebEntity {
}
interface SubscriptionSyncEntryOffline_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface SubscriptionSyncEntryOffline extends SubscriptionSyncEntryOffline_Base, SubscriptionSyncEntryOffline_Relationships {
}
interface SubscriptionSyncEntryOffline_Relationships {
}
interface SubscriptionSyncEntryOffline_Result extends SubscriptionSyncEntryOffline_Base, SubscriptionSyncEntryOffline_Relationships {
}
interface SubscriptionSyncEntryOffline_FormattedResult {
}
interface SubscriptionSyncEntryOffline_Select {
}
interface SubscriptionSyncEntryOffline_Expand {
}
interface SubscriptionSyncEntryOffline_Filter {
}
interface SubscriptionSyncEntryOffline_Create extends SubscriptionSyncEntryOffline {
}
interface SubscriptionSyncEntryOffline_Update extends SubscriptionSyncEntryOffline {
}
interface SubscriptionSyncEntryOutlook_Base extends WebEntity {
}
interface SubscriptionSyncEntryOutlook_Fixed extends WebEntity_Fixed {
  subscriptionid: string;
}
interface SubscriptionSyncEntryOutlook extends SubscriptionSyncEntryOutlook_Base, SubscriptionSyncEntryOutlook_Relationships {
}
interface SubscriptionSyncEntryOutlook_Relationships {
}
interface SubscriptionSyncEntryOutlook_Result extends SubscriptionSyncEntryOutlook_Base, SubscriptionSyncEntryOutlook_Relationships {
}
interface SubscriptionSyncEntryOutlook_FormattedResult {
}
interface SubscriptionSyncEntryOutlook_Select {
}
interface SubscriptionSyncEntryOutlook_Expand {
}
interface SubscriptionSyncEntryOutlook_Filter {
}
interface SubscriptionSyncEntryOutlook_Create extends SubscriptionSyncEntryOutlook {
}
interface SubscriptionSyncEntryOutlook_Update extends SubscriptionSyncEntryOutlook {
}
interface SubscriptionSyncInfo_Base extends WebEntity {
}
interface SubscriptionSyncInfo_Fixed extends WebEntity_Fixed {
  subscriptionsyncinfoid: string;
}
interface SubscriptionSyncInfo extends SubscriptionSyncInfo_Base, SubscriptionSyncInfo_Relationships {
}
interface SubscriptionSyncInfo_Relationships {
}
interface SubscriptionSyncInfo_Result extends SubscriptionSyncInfo_Base, SubscriptionSyncInfo_Relationships {
}
interface SubscriptionSyncInfo_FormattedResult {
}
interface SubscriptionSyncInfo_Select {
}
interface SubscriptionSyncInfo_Expand {
}
interface SubscriptionSyncInfo_Filter {
}
interface SubscriptionSyncInfo_Create extends SubscriptionSyncInfo {
}
interface SubscriptionSyncInfo_Update extends SubscriptionSyncInfo {
}
interface SubscriptionTrackingDeletedObject_Base extends WebEntity {
}
interface SubscriptionTrackingDeletedObject_Fixed extends WebEntity_Fixed {
  timestamp: string;
}
interface SubscriptionTrackingDeletedObject extends SubscriptionTrackingDeletedObject_Base, SubscriptionTrackingDeletedObject_Relationships {
}
interface SubscriptionTrackingDeletedObject_Relationships {
}
interface SubscriptionTrackingDeletedObject_Result extends SubscriptionTrackingDeletedObject_Base, SubscriptionTrackingDeletedObject_Relationships {
}
interface SubscriptionTrackingDeletedObject_FormattedResult {
}
interface SubscriptionTrackingDeletedObject_Select {
}
interface SubscriptionTrackingDeletedObject_Expand {
}
interface SubscriptionTrackingDeletedObject_Filter {
}
interface SubscriptionTrackingDeletedObject_Create extends SubscriptionTrackingDeletedObject {
}
interface SubscriptionTrackingDeletedObject_Update extends SubscriptionTrackingDeletedObject {
}
interface SuggestionCardTemplate_Base extends WebEntity {
}
interface SuggestionCardTemplate_Fixed extends WebEntity_Fixed {
  suggestioncardtemplateid: string;
}
interface SuggestionCardTemplate extends SuggestionCardTemplate_Base, SuggestionCardTemplate_Relationships {
}
interface SuggestionCardTemplate_Relationships {
}
interface SuggestionCardTemplate_Result extends SuggestionCardTemplate_Base, SuggestionCardTemplate_Relationships {
}
interface SuggestionCardTemplate_FormattedResult {
}
interface SuggestionCardTemplate_Select {
}
interface SuggestionCardTemplate_Expand {
}
interface SuggestionCardTemplate_Filter {
}
interface SuggestionCardTemplate_Create extends SuggestionCardTemplate {
}
interface SuggestionCardTemplate_Update extends SuggestionCardTemplate {
}
interface SyncAttributeMapping_Base extends WebEntity {
}
interface SyncAttributeMapping_Fixed extends WebEntity_Fixed {
  syncattributemappingid: string;
}
interface SyncAttributeMapping extends SyncAttributeMapping_Base, SyncAttributeMapping_Relationships {
}
interface SyncAttributeMapping_Relationships {
}
interface SyncAttributeMapping_Result extends SyncAttributeMapping_Base, SyncAttributeMapping_Relationships {
}
interface SyncAttributeMapping_FormattedResult {
}
interface SyncAttributeMapping_Select {
}
interface SyncAttributeMapping_Expand {
}
interface SyncAttributeMapping_Filter {
}
interface SyncAttributeMapping_Create extends SyncAttributeMapping {
}
interface SyncAttributeMapping_Update extends SyncAttributeMapping {
}
interface SyncAttributeMappingProfile_Base extends WebEntity {
}
interface SyncAttributeMappingProfile_Fixed extends WebEntity_Fixed {
  syncattributemappingprofileid: string;
}
interface SyncAttributeMappingProfile extends SyncAttributeMappingProfile_Base, SyncAttributeMappingProfile_Relationships {
}
interface SyncAttributeMappingProfile_Relationships {
}
interface SyncAttributeMappingProfile_Result extends SyncAttributeMappingProfile_Base, SyncAttributeMappingProfile_Relationships {
}
interface SyncAttributeMappingProfile_FormattedResult {
}
interface SyncAttributeMappingProfile_Select {
}
interface SyncAttributeMappingProfile_Expand {
}
interface SyncAttributeMappingProfile_Filter {
}
interface SyncAttributeMappingProfile_Create extends SyncAttributeMappingProfile {
}
interface SyncAttributeMappingProfile_Update extends SyncAttributeMappingProfile {
}
interface SyncError_Base extends WebEntity {
}
interface SyncError_Fixed extends WebEntity_Fixed {
  syncerrorid: string;
}
interface SyncError extends SyncError_Base, SyncError_Relationships {
}
interface SyncError_Relationships {
}
interface SyncError_Result extends SyncError_Base, SyncError_Relationships {
}
interface SyncError_FormattedResult {
}
interface SyncError_Select {
}
interface SyncError_Expand {
}
interface SyncError_Filter {
}
interface SyncError_Create extends SyncError {
}
interface SyncError_Update extends SyncError {
}
interface SystemApplicationMetadata_Base extends WebEntity {
}
interface SystemApplicationMetadata_Fixed extends WebEntity_Fixed {
  systemapplicationmetadataid: string;
}
interface SystemApplicationMetadata extends SystemApplicationMetadata_Base, SystemApplicationMetadata_Relationships {
}
interface SystemApplicationMetadata_Relationships {
}
interface SystemApplicationMetadata_Result extends SystemApplicationMetadata_Base, SystemApplicationMetadata_Relationships {
}
interface SystemApplicationMetadata_FormattedResult {
}
interface SystemApplicationMetadata_Select {
}
interface SystemApplicationMetadata_Expand {
}
interface SystemApplicationMetadata_Filter {
}
interface SystemApplicationMetadata_Create extends SystemApplicationMetadata {
}
interface SystemApplicationMetadata_Update extends SystemApplicationMetadata {
}
interface SystemForm_Base extends WebEntity {
}
interface SystemForm_Fixed extends WebEntity_Fixed {
  formid: string;
}
interface SystemForm extends SystemForm_Base, SystemForm_Relationships {
}
interface SystemForm_Relationships {
}
interface SystemForm_Result extends SystemForm_Base, SystemForm_Relationships {
}
interface SystemForm_FormattedResult {
}
interface SystemForm_Select {
}
interface SystemForm_Expand {
}
interface SystemForm_Filter {
}
interface SystemForm_Create extends SystemForm {
}
interface SystemForm_Update extends SystemForm {
}
interface SystemUser_Base extends WebEntity {
}
interface SystemUser_Fixed extends WebEntity_Fixed {
  systemuserid: string;
}
interface SystemUser extends SystemUser_Base, SystemUser_Relationships {
}
interface SystemUser_Relationships {
}
interface SystemUser_Result extends SystemUser_Base, SystemUser_Relationships {
}
interface SystemUser_FormattedResult {
}
interface SystemUser_Select {
}
interface SystemUser_Expand {
}
interface SystemUser_Filter {
}
interface SystemUser_Create extends SystemUser {
}
interface SystemUser_Update extends SystemUser {
}
interface SystemUserAuthorizationChangeTracker_Base extends WebEntity {
}
interface SystemUserAuthorizationChangeTracker_Fixed extends WebEntity_Fixed {
  systemuserid: string;
}
interface SystemUserAuthorizationChangeTracker extends SystemUserAuthorizationChangeTracker_Base, SystemUserAuthorizationChangeTracker_Relationships {
}
interface SystemUserAuthorizationChangeTracker_Relationships {
}
interface SystemUserAuthorizationChangeTracker_Result extends SystemUserAuthorizationChangeTracker_Base, SystemUserAuthorizationChangeTracker_Relationships {
}
interface SystemUserAuthorizationChangeTracker_FormattedResult {
}
interface SystemUserAuthorizationChangeTracker_Select {
}
interface SystemUserAuthorizationChangeTracker_Expand {
}
interface SystemUserAuthorizationChangeTracker_Filter {
}
interface SystemUserAuthorizationChangeTracker_Create extends SystemUserAuthorizationChangeTracker {
}
interface SystemUserAuthorizationChangeTracker_Update extends SystemUserAuthorizationChangeTracker {
}
interface SystemUserBusinessUnitEntityMap_Base extends WebEntity {
}
interface SystemUserBusinessUnitEntityMap_Fixed extends WebEntity_Fixed {
  systemuserbusinessunitentitymapid: string;
}
interface SystemUserBusinessUnitEntityMap extends SystemUserBusinessUnitEntityMap_Base, SystemUserBusinessUnitEntityMap_Relationships {
}
interface SystemUserBusinessUnitEntityMap_Relationships {
}
interface SystemUserBusinessUnitEntityMap_Result extends SystemUserBusinessUnitEntityMap_Base, SystemUserBusinessUnitEntityMap_Relationships {
}
interface SystemUserBusinessUnitEntityMap_FormattedResult {
}
interface SystemUserBusinessUnitEntityMap_Select {
}
interface SystemUserBusinessUnitEntityMap_Expand {
}
interface SystemUserBusinessUnitEntityMap_Filter {
}
interface SystemUserBusinessUnitEntityMap_Create extends SystemUserBusinessUnitEntityMap {
}
interface SystemUserBusinessUnitEntityMap_Update extends SystemUserBusinessUnitEntityMap {
}
interface SystemUserLicenses_Base extends WebEntity {
}
interface SystemUserLicenses_Fixed extends WebEntity_Fixed {
  systemuserlicenseid: string;
}
interface SystemUserLicenses extends SystemUserLicenses_Base, SystemUserLicenses_Relationships {
}
interface SystemUserLicenses_Relationships {
}
interface SystemUserLicenses_Result extends SystemUserLicenses_Base, SystemUserLicenses_Relationships {
}
interface SystemUserLicenses_FormattedResult {
}
interface SystemUserLicenses_Select {
}
interface SystemUserLicenses_Expand {
}
interface SystemUserLicenses_Filter {
}
interface SystemUserLicenses_Create extends SystemUserLicenses {
}
interface SystemUserLicenses_Update extends SystemUserLicenses {
}
interface SystemUserManagerMap_Base extends WebEntity {
}
interface SystemUserManagerMap_Fixed extends WebEntity_Fixed {
  systemusermanagermapid: string;
}
interface SystemUserManagerMap extends SystemUserManagerMap_Base, SystemUserManagerMap_Relationships {
}
interface SystemUserManagerMap_Relationships {
}
interface SystemUserManagerMap_Result extends SystemUserManagerMap_Base, SystemUserManagerMap_Relationships {
}
interface SystemUserManagerMap_FormattedResult {
}
interface SystemUserManagerMap_Select {
}
interface SystemUserManagerMap_Expand {
}
interface SystemUserManagerMap_Filter {
}
interface SystemUserManagerMap_Create extends SystemUserManagerMap {
}
interface SystemUserManagerMap_Update extends SystemUserManagerMap {
}
interface SystemUserPrincipals_Base extends WebEntity {
}
interface SystemUserPrincipals_Fixed extends WebEntity_Fixed {
  systemuserprincipalid: string;
}
interface SystemUserPrincipals extends SystemUserPrincipals_Base, SystemUserPrincipals_Relationships {
}
interface SystemUserPrincipals_Relationships {
}
interface SystemUserPrincipals_Result extends SystemUserPrincipals_Base, SystemUserPrincipals_Relationships {
}
interface SystemUserPrincipals_FormattedResult {
}
interface SystemUserPrincipals_Select {
}
interface SystemUserPrincipals_Expand {
}
interface SystemUserPrincipals_Filter {
}
interface SystemUserPrincipals_Create extends SystemUserPrincipals {
}
interface SystemUserPrincipals_Update extends SystemUserPrincipals {
}
interface SystemUserProfiles_Base extends WebEntity {
}
interface SystemUserProfiles_Fixed extends WebEntity_Fixed {
  systemuserprofileid: string;
}
interface SystemUserProfiles extends SystemUserProfiles_Base, SystemUserProfiles_Relationships {
}
interface SystemUserProfiles_Relationships {
}
interface SystemUserProfiles_Result extends SystemUserProfiles_Base, SystemUserProfiles_Relationships {
}
interface SystemUserProfiles_FormattedResult {
}
interface SystemUserProfiles_Select {
}
interface SystemUserProfiles_Expand {
}
interface SystemUserProfiles_Filter {
}
interface SystemUserProfiles_Create extends SystemUserProfiles {
}
interface SystemUserProfiles_Update extends SystemUserProfiles {
}
interface SystemUserRoles_Base extends WebEntity {
}
interface SystemUserRoles_Fixed extends WebEntity_Fixed {
  systemuserroleid: string;
}
interface SystemUserRoles extends SystemUserRoles_Base, SystemUserRoles_Relationships {
}
interface SystemUserRoles_Relationships {
}
interface SystemUserRoles_Result extends SystemUserRoles_Base, SystemUserRoles_Relationships {
}
interface SystemUserRoles_FormattedResult {
}
interface SystemUserRoles_Select {
}
interface SystemUserRoles_Expand {
}
interface SystemUserRoles_Filter {
}
interface SystemUserRoles_Create extends SystemUserRoles {
}
interface SystemUserRoles_Update extends SystemUserRoles {
}
interface SystemUserSyncMappingProfiles_Base extends WebEntity {
}
interface SystemUserSyncMappingProfiles_Fixed extends WebEntity_Fixed {
  systemusersyncmappingprofileid: string;
}
interface SystemUserSyncMappingProfiles extends SystemUserSyncMappingProfiles_Base, SystemUserSyncMappingProfiles_Relationships {
}
interface SystemUserSyncMappingProfiles_Relationships {
}
interface SystemUserSyncMappingProfiles_Result extends SystemUserSyncMappingProfiles_Base, SystemUserSyncMappingProfiles_Relationships {
}
interface SystemUserSyncMappingProfiles_FormattedResult {
}
interface SystemUserSyncMappingProfiles_Select {
}
interface SystemUserSyncMappingProfiles_Expand {
}
interface SystemUserSyncMappingProfiles_Filter {
}
interface SystemUserSyncMappingProfiles_Create extends SystemUserSyncMappingProfiles {
}
interface SystemUserSyncMappingProfiles_Update extends SystemUserSyncMappingProfiles {
}
interface Task_Base extends WebEntity {
}
interface Task_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface Task extends Task_Base, Task_Relationships {
}
interface Task_Relationships {
}
interface Task_Result extends Task_Base, Task_Relationships {
}
interface Task_FormattedResult {
}
interface Task_Select {
}
interface Task_Expand {
}
interface Task_Filter {
}
interface Task_Create extends Task {
}
interface Task_Update extends Task {
}
interface Team_Base extends WebEntity {
}
interface Team_Fixed extends WebEntity_Fixed {
  teamid: string;
}
interface Team extends Team_Base, Team_Relationships {
}
interface Team_Relationships {
}
interface Team_Result extends Team_Base, Team_Relationships {
}
interface Team_FormattedResult {
}
interface Team_Select {
}
interface Team_Expand {
}
interface Team_Filter {
}
interface Team_Create extends Team {
}
interface Team_Update extends Team {
}
interface TeamMembership_Base extends WebEntity {
}
interface TeamMembership_Fixed extends WebEntity_Fixed {
  teammembershipid: string;
}
interface TeamMembership extends TeamMembership_Base, TeamMembership_Relationships {
}
interface TeamMembership_Relationships {
}
interface TeamMembership_Result extends TeamMembership_Base, TeamMembership_Relationships {
}
interface TeamMembership_FormattedResult {
}
interface TeamMembership_Select {
}
interface TeamMembership_Expand {
}
interface TeamMembership_Filter {
}
interface TeamMembership_Create extends TeamMembership {
}
interface TeamMembership_Update extends TeamMembership {
}
interface teammobileofflineprofilemembership_Base extends WebEntity {
}
interface teammobileofflineprofilemembership_Fixed extends WebEntity_Fixed {
  teammobileofflineprofilemembershipid: string;
}
interface teammobileofflineprofilemembership extends teammobileofflineprofilemembership_Base, teammobileofflineprofilemembership_Relationships {
}
interface teammobileofflineprofilemembership_Relationships {
}
interface teammobileofflineprofilemembership_Result extends teammobileofflineprofilemembership_Base, teammobileofflineprofilemembership_Relationships {
}
interface teammobileofflineprofilemembership_FormattedResult {
}
interface teammobileofflineprofilemembership_Select {
}
interface teammobileofflineprofilemembership_Expand {
}
interface teammobileofflineprofilemembership_Filter {
}
interface teammobileofflineprofilemembership_Create extends teammobileofflineprofilemembership {
}
interface teammobileofflineprofilemembership_Update extends teammobileofflineprofilemembership {
}
interface TeamProfiles_Base extends WebEntity {
}
interface TeamProfiles_Fixed extends WebEntity_Fixed {
  teamprofileid: string;
}
interface TeamProfiles extends TeamProfiles_Base, TeamProfiles_Relationships {
}
interface TeamProfiles_Relationships {
}
interface TeamProfiles_Result extends TeamProfiles_Base, TeamProfiles_Relationships {
}
interface TeamProfiles_FormattedResult {
}
interface TeamProfiles_Select {
}
interface TeamProfiles_Expand {
}
interface TeamProfiles_Filter {
}
interface TeamProfiles_Create extends TeamProfiles {
}
interface TeamProfiles_Update extends TeamProfiles {
}
interface TeamRoles_Base extends WebEntity {
}
interface TeamRoles_Fixed extends WebEntity_Fixed {
  teamroleid: string;
}
interface TeamRoles extends TeamRoles_Base, TeamRoles_Relationships {
}
interface TeamRoles_Relationships {
}
interface TeamRoles_Result extends TeamRoles_Base, TeamRoles_Relationships {
}
interface TeamRoles_FormattedResult {
}
interface TeamRoles_Select {
}
interface TeamRoles_Expand {
}
interface TeamRoles_Filter {
}
interface TeamRoles_Create extends TeamRoles {
}
interface TeamRoles_Update extends TeamRoles {
}
interface TeamSyncAttributeMappingProfiles_Base extends WebEntity {
}
interface TeamSyncAttributeMappingProfiles_Fixed extends WebEntity_Fixed {
  teamsyncattributemappingprofileid: string;
}
interface TeamSyncAttributeMappingProfiles extends TeamSyncAttributeMappingProfiles_Base, TeamSyncAttributeMappingProfiles_Relationships {
}
interface TeamSyncAttributeMappingProfiles_Relationships {
}
interface TeamSyncAttributeMappingProfiles_Result extends TeamSyncAttributeMappingProfiles_Base, TeamSyncAttributeMappingProfiles_Relationships {
}
interface TeamSyncAttributeMappingProfiles_FormattedResult {
}
interface TeamSyncAttributeMappingProfiles_Select {
}
interface TeamSyncAttributeMappingProfiles_Expand {
}
interface TeamSyncAttributeMappingProfiles_Filter {
}
interface TeamSyncAttributeMappingProfiles_Create extends TeamSyncAttributeMappingProfiles {
}
interface TeamSyncAttributeMappingProfiles_Update extends TeamSyncAttributeMappingProfiles {
}
interface TeamTemplate_Base extends WebEntity {
}
interface TeamTemplate_Fixed extends WebEntity_Fixed {
  teamtemplateid: string;
}
interface TeamTemplate extends TeamTemplate_Base, TeamTemplate_Relationships {
}
interface TeamTemplate_Relationships {
}
interface TeamTemplate_Result extends TeamTemplate_Base, TeamTemplate_Relationships {
}
interface TeamTemplate_FormattedResult {
}
interface TeamTemplate_Select {
}
interface TeamTemplate_Expand {
}
interface TeamTemplate_Filter {
}
interface TeamTemplate_Create extends TeamTemplate {
}
interface TeamTemplate_Update extends TeamTemplate {
}
interface Template_Base extends WebEntity {
}
interface Template_Fixed extends WebEntity_Fixed {
  templateid: string;
}
interface Template extends Template_Base, Template_Relationships {
}
interface Template_Relationships {
}
interface Template_Result extends Template_Base, Template_Relationships {
}
interface Template_FormattedResult {
}
interface Template_Select {
}
interface Template_Expand {
}
interface Template_Filter {
}
interface Template_Create extends Template {
}
interface Template_Update extends Template {
}
interface Territory_Base extends WebEntity {
}
interface Territory_Fixed extends WebEntity_Fixed {
  territoryid: string;
}
interface Territory extends Territory_Base, Territory_Relationships {
}
interface Territory_Relationships {
}
interface Territory_Result extends Territory_Base, Territory_Relationships {
}
interface Territory_FormattedResult {
}
interface Territory_Select {
}
interface Territory_Expand {
}
interface Territory_Filter {
}
interface Territory_Create extends Territory {
}
interface Territory_Update extends Territory {
}
interface TextAnalyticsEntityMapping_Base extends WebEntity {
}
interface TextAnalyticsEntityMapping_Fixed extends WebEntity_Fixed {
  textanalyticsentitymappingid: string;
}
interface TextAnalyticsEntityMapping extends TextAnalyticsEntityMapping_Base, TextAnalyticsEntityMapping_Relationships {
}
interface TextAnalyticsEntityMapping_Relationships {
}
interface TextAnalyticsEntityMapping_Result extends TextAnalyticsEntityMapping_Base, TextAnalyticsEntityMapping_Relationships {
}
interface TextAnalyticsEntityMapping_FormattedResult {
}
interface TextAnalyticsEntityMapping_Select {
}
interface TextAnalyticsEntityMapping_Expand {
}
interface TextAnalyticsEntityMapping_Filter {
}
interface TextAnalyticsEntityMapping_Create extends TextAnalyticsEntityMapping {
}
interface TextAnalyticsEntityMapping_Update extends TextAnalyticsEntityMapping {
}
interface Theme_Base extends WebEntity {
}
interface Theme_Fixed extends WebEntity_Fixed {
  themeid: string;
}
interface Theme extends Theme_Base, Theme_Relationships {
}
interface Theme_Relationships {
}
interface Theme_Result extends Theme_Base, Theme_Relationships {
}
interface Theme_FormattedResult {
}
interface Theme_Select {
}
interface Theme_Expand {
}
interface Theme_Filter {
}
interface Theme_Create extends Theme {
}
interface Theme_Update extends Theme {
}
interface TimeStampDateMapping_Base extends WebEntity {
}
interface TimeStampDateMapping_Fixed extends WebEntity_Fixed {
  timestampdatemappingid: string;
}
interface TimeStampDateMapping extends TimeStampDateMapping_Base, TimeStampDateMapping_Relationships {
}
interface TimeStampDateMapping_Relationships {
}
interface TimeStampDateMapping_Result extends TimeStampDateMapping_Base, TimeStampDateMapping_Relationships {
}
interface TimeStampDateMapping_FormattedResult {
}
interface TimeStampDateMapping_Select {
}
interface TimeStampDateMapping_Expand {
}
interface TimeStampDateMapping_Filter {
}
interface TimeStampDateMapping_Create extends TimeStampDateMapping {
}
interface TimeStampDateMapping_Update extends TimeStampDateMapping {
}
interface TimeZoneDefinition_Base extends WebEntity {
}
interface TimeZoneDefinition_Fixed extends WebEntity_Fixed {
  timezonedefinitionid: string;
}
interface TimeZoneDefinition extends TimeZoneDefinition_Base, TimeZoneDefinition_Relationships {
}
interface TimeZoneDefinition_Relationships {
}
interface TimeZoneDefinition_Result extends TimeZoneDefinition_Base, TimeZoneDefinition_Relationships {
}
interface TimeZoneDefinition_FormattedResult {
}
interface TimeZoneDefinition_Select {
}
interface TimeZoneDefinition_Expand {
}
interface TimeZoneDefinition_Filter {
}
interface TimeZoneDefinition_Create extends TimeZoneDefinition {
}
interface TimeZoneDefinition_Update extends TimeZoneDefinition {
}
interface TimeZoneLocalizedName_Base extends WebEntity {
}
interface TimeZoneLocalizedName_Fixed extends WebEntity_Fixed {
  timezonelocalizednameid: string;
}
interface TimeZoneLocalizedName extends TimeZoneLocalizedName_Base, TimeZoneLocalizedName_Relationships {
}
interface TimeZoneLocalizedName_Relationships {
}
interface TimeZoneLocalizedName_Result extends TimeZoneLocalizedName_Base, TimeZoneLocalizedName_Relationships {
}
interface TimeZoneLocalizedName_FormattedResult {
}
interface TimeZoneLocalizedName_Select {
}
interface TimeZoneLocalizedName_Expand {
}
interface TimeZoneLocalizedName_Filter {
}
interface TimeZoneLocalizedName_Create extends TimeZoneLocalizedName {
}
interface TimeZoneLocalizedName_Update extends TimeZoneLocalizedName {
}
interface TimeZoneRule_Base extends WebEntity {
}
interface TimeZoneRule_Fixed extends WebEntity_Fixed {
  timezoneruleid: string;
}
interface TimeZoneRule extends TimeZoneRule_Base, TimeZoneRule_Relationships {
}
interface TimeZoneRule_Relationships {
}
interface TimeZoneRule_Result extends TimeZoneRule_Base, TimeZoneRule_Relationships {
}
interface TimeZoneRule_FormattedResult {
}
interface TimeZoneRule_Select {
}
interface TimeZoneRule_Expand {
}
interface TimeZoneRule_Filter {
}
interface TimeZoneRule_Create extends TimeZoneRule {
}
interface TimeZoneRule_Update extends TimeZoneRule {
}
interface Topic_Base extends WebEntity {
}
interface Topic_Fixed extends WebEntity_Fixed {
  topicid: string;
}
interface Topic extends Topic_Base, Topic_Relationships {
}
interface Topic_Relationships {
}
interface Topic_Result extends Topic_Base, Topic_Relationships {
}
interface Topic_FormattedResult {
}
interface Topic_Select {
}
interface Topic_Expand {
}
interface Topic_Filter {
}
interface Topic_Create extends Topic {
}
interface Topic_Update extends Topic {
}
interface TopicHistory_Base extends WebEntity {
}
interface TopicHistory_Fixed extends WebEntity_Fixed {
  topichistoryid: string;
}
interface TopicHistory extends TopicHistory_Base, TopicHistory_Relationships {
}
interface TopicHistory_Relationships {
}
interface TopicHistory_Result extends TopicHistory_Base, TopicHistory_Relationships {
}
interface TopicHistory_FormattedResult {
}
interface TopicHistory_Select {
}
interface TopicHistory_Expand {
}
interface TopicHistory_Filter {
}
interface TopicHistory_Create extends TopicHistory {
}
interface TopicHistory_Update extends TopicHistory {
}
interface TopicModel_Base extends WebEntity {
}
interface TopicModel_Fixed extends WebEntity_Fixed {
  topicmodelid: string;
}
interface TopicModel extends TopicModel_Base, TopicModel_Relationships {
}
interface TopicModel_Relationships {
}
interface TopicModel_Result extends TopicModel_Base, TopicModel_Relationships {
}
interface TopicModel_FormattedResult {
}
interface TopicModel_Select {
}
interface TopicModel_Expand {
}
interface TopicModel_Filter {
}
interface TopicModel_Create extends TopicModel {
}
interface TopicModel_Update extends TopicModel {
}
interface TopicModelConfiguration_Base extends WebEntity {
}
interface TopicModelConfiguration_Fixed extends WebEntity_Fixed {
  topicmodelconfigurationid: string;
}
interface TopicModelConfiguration extends TopicModelConfiguration_Base, TopicModelConfiguration_Relationships {
}
interface TopicModelConfiguration_Relationships {
}
interface TopicModelConfiguration_Result extends TopicModelConfiguration_Base, TopicModelConfiguration_Relationships {
}
interface TopicModelConfiguration_FormattedResult {
}
interface TopicModelConfiguration_Select {
}
interface TopicModelConfiguration_Expand {
}
interface TopicModelConfiguration_Filter {
}
interface TopicModelConfiguration_Create extends TopicModelConfiguration {
}
interface TopicModelConfiguration_Update extends TopicModelConfiguration {
}
interface TopicModelExecutionHistory_Base extends WebEntity {
}
interface TopicModelExecutionHistory_Fixed extends WebEntity_Fixed {
  topicmodelexecutionhistoryid: string;
}
interface TopicModelExecutionHistory extends TopicModelExecutionHistory_Base, TopicModelExecutionHistory_Relationships {
}
interface TopicModelExecutionHistory_Relationships {
}
interface TopicModelExecutionHistory_Result extends TopicModelExecutionHistory_Base, TopicModelExecutionHistory_Relationships {
}
interface TopicModelExecutionHistory_FormattedResult {
}
interface TopicModelExecutionHistory_Select {
}
interface TopicModelExecutionHistory_Expand {
}
interface TopicModelExecutionHistory_Filter {
}
interface TopicModelExecutionHistory_Create extends TopicModelExecutionHistory {
}
interface TopicModelExecutionHistory_Update extends TopicModelExecutionHistory {
}
interface TraceAssociation_Base extends WebEntity {
}
interface TraceAssociation_Fixed extends WebEntity_Fixed {
  traceassociationid: string;
}
interface TraceAssociation extends TraceAssociation_Base, TraceAssociation_Relationships {
}
interface TraceAssociation_Relationships {
}
interface TraceAssociation_Result extends TraceAssociation_Base, TraceAssociation_Relationships {
}
interface TraceAssociation_FormattedResult {
}
interface TraceAssociation_Select {
}
interface TraceAssociation_Expand {
}
interface TraceAssociation_Filter {
}
interface TraceAssociation_Create extends TraceAssociation {
}
interface TraceAssociation_Update extends TraceAssociation {
}
interface TraceLog_Base extends WebEntity {
}
interface TraceLog_Fixed extends WebEntity_Fixed {
  tracelogid: string;
}
interface TraceLog extends TraceLog_Base, TraceLog_Relationships {
}
interface TraceLog_Relationships {
}
interface TraceLog_Result extends TraceLog_Base, TraceLog_Relationships {
}
interface TraceLog_FormattedResult {
}
interface TraceLog_Select {
}
interface TraceLog_Expand {
}
interface TraceLog_Filter {
}
interface TraceLog_Create extends TraceLog {
}
interface TraceLog_Update extends TraceLog {
}
interface TraceRegarding_Base extends WebEntity {
}
interface TraceRegarding_Fixed extends WebEntity_Fixed {
  traceregardingid: string;
}
interface TraceRegarding extends TraceRegarding_Base, TraceRegarding_Relationships {
}
interface TraceRegarding_Relationships {
}
interface TraceRegarding_Result extends TraceRegarding_Base, TraceRegarding_Relationships {
}
interface TraceRegarding_FormattedResult {
}
interface TraceRegarding_Select {
}
interface TraceRegarding_Expand {
}
interface TraceRegarding_Filter {
}
interface TraceRegarding_Create extends TraceRegarding {
}
interface TraceRegarding_Update extends TraceRegarding {
}
interface TransactionCurrency_Base extends WebEntity {
}
interface TransactionCurrency_Fixed extends WebEntity_Fixed {
  transactioncurrencyid: string;
}
interface TransactionCurrency extends TransactionCurrency_Base, TransactionCurrency_Relationships {
}
interface TransactionCurrency_Relationships {
}
interface TransactionCurrency_Result extends TransactionCurrency_Base, TransactionCurrency_Relationships {
}
interface TransactionCurrency_FormattedResult {
}
interface TransactionCurrency_Select {
}
interface TransactionCurrency_Expand {
}
interface TransactionCurrency_Filter {
}
interface TransactionCurrency_Create extends TransactionCurrency {
}
interface TransactionCurrency_Update extends TransactionCurrency {
}
interface TransformationMapping_Base extends WebEntity {
}
interface TransformationMapping_Fixed extends WebEntity_Fixed {
  transformationmappingid: string;
}
interface TransformationMapping extends TransformationMapping_Base, TransformationMapping_Relationships {
}
interface TransformationMapping_Relationships {
}
interface TransformationMapping_Result extends TransformationMapping_Base, TransformationMapping_Relationships {
}
interface TransformationMapping_FormattedResult {
}
interface TransformationMapping_Select {
}
interface TransformationMapping_Expand {
}
interface TransformationMapping_Filter {
}
interface TransformationMapping_Create extends TransformationMapping {
}
interface TransformationMapping_Update extends TransformationMapping {
}
interface TransformationParameterMapping_Base extends WebEntity {
}
interface TransformationParameterMapping_Fixed extends WebEntity_Fixed {
  transformationparametermappingid: string;
}
interface TransformationParameterMapping extends TransformationParameterMapping_Base, TransformationParameterMapping_Relationships {
}
interface TransformationParameterMapping_Relationships {
}
interface TransformationParameterMapping_Result extends TransformationParameterMapping_Base, TransformationParameterMapping_Relationships {
}
interface TransformationParameterMapping_FormattedResult {
}
interface TransformationParameterMapping_Select {
}
interface TransformationParameterMapping_Expand {
}
interface TransformationParameterMapping_Filter {
}
interface TransformationParameterMapping_Create extends TransformationParameterMapping {
}
interface TransformationParameterMapping_Update extends TransformationParameterMapping {
}
interface TranslationProcess_Base extends WebEntity {
}
interface TranslationProcess_Fixed extends WebEntity_Fixed {
  businessprocessflowinstanceid: string;
}
interface TranslationProcess extends TranslationProcess_Base, TranslationProcess_Relationships {
}
interface TranslationProcess_Relationships {
}
interface TranslationProcess_Result extends TranslationProcess_Base, TranslationProcess_Relationships {
}
interface TranslationProcess_FormattedResult {
}
interface TranslationProcess_Select {
}
interface TranslationProcess_Expand {
}
interface TranslationProcess_Filter {
}
interface TranslationProcess_Create extends TranslationProcess {
}
interface TranslationProcess_Update extends TranslationProcess {
}
interface UII_action_Base extends WebEntity {
}
interface UII_action_Fixed extends WebEntity_Fixed {
  uii_actionid: string;
}
interface UII_action extends UII_action_Base, UII_action_Relationships {
}
interface UII_action_Relationships {
}
interface UII_action_Result extends UII_action_Base, UII_action_Relationships {
}
interface UII_action_FormattedResult {
}
interface UII_action_Select {
}
interface UII_action_Expand {
}
interface UII_action_Filter {
}
interface UII_action_Create extends UII_action {
}
interface UII_action_Update extends UII_action {
}
interface UII_audit_Base extends WebEntity {
}
interface UII_audit_Fixed extends WebEntity_Fixed {
  uii_auditid: string;
}
interface UII_audit extends UII_audit_Base, UII_audit_Relationships {
}
interface UII_audit_Relationships {
}
interface UII_audit_Result extends UII_audit_Base, UII_audit_Relationships {
}
interface UII_audit_FormattedResult {
}
interface UII_audit_Select {
}
interface UII_audit_Expand {
}
interface UII_audit_Filter {
}
interface UII_audit_Create extends UII_audit {
}
interface UII_audit_Update extends UII_audit {
}
interface UII_context_Base extends WebEntity {
}
interface UII_context_Fixed extends WebEntity_Fixed {
  uii_contextid: string;
}
interface UII_context extends UII_context_Base, UII_context_Relationships {
}
interface UII_context_Relationships {
}
interface UII_context_Result extends UII_context_Base, UII_context_Relationships {
}
interface UII_context_FormattedResult {
}
interface UII_context_Select {
}
interface UII_context_Expand {
}
interface UII_context_Filter {
}
interface UII_context_Create extends UII_context {
}
interface UII_context_Update extends UII_context {
}
interface UII_hostedapplication_Base extends WebEntity {
}
interface UII_hostedapplication_Fixed extends WebEntity_Fixed {
  uii_hostedapplicationid: string;
}
interface UII_hostedapplication extends UII_hostedapplication_Base, UII_hostedapplication_Relationships {
}
interface UII_hostedapplication_Relationships {
}
interface UII_hostedapplication_Result extends UII_hostedapplication_Base, UII_hostedapplication_Relationships {
}
interface UII_hostedapplication_FormattedResult {
}
interface UII_hostedapplication_Select {
}
interface UII_hostedapplication_Expand {
}
interface UII_hostedapplication_Filter {
}
interface UII_hostedapplication_Create extends UII_hostedapplication {
}
interface UII_hostedapplication_Update extends UII_hostedapplication {
}
interface UII_nonhostedapplication_Base extends WebEntity {
}
interface UII_nonhostedapplication_Fixed extends WebEntity_Fixed {
  uii_nonhostedapplicationid: string;
}
interface UII_nonhostedapplication extends UII_nonhostedapplication_Base, UII_nonhostedapplication_Relationships {
}
interface UII_nonhostedapplication_Relationships {
}
interface UII_nonhostedapplication_Result extends UII_nonhostedapplication_Base, UII_nonhostedapplication_Relationships {
}
interface UII_nonhostedapplication_FormattedResult {
}
interface UII_nonhostedapplication_Select {
}
interface UII_nonhostedapplication_Expand {
}
interface UII_nonhostedapplication_Filter {
}
interface UII_nonhostedapplication_Create extends UII_nonhostedapplication {
}
interface UII_nonhostedapplication_Update extends UII_nonhostedapplication {
}
interface uii_option_Base extends WebEntity {
}
interface uii_option_Fixed extends WebEntity_Fixed {
  uii_optionid: string;
}
interface uii_option extends uii_option_Base, uii_option_Relationships {
}
interface uii_option_Relationships {
}
interface uii_option_Result extends uii_option_Base, uii_option_Relationships {
}
interface uii_option_FormattedResult {
}
interface uii_option_Select {
}
interface uii_option_Expand {
}
interface uii_option_Filter {
}
interface uii_option_Create extends uii_option {
}
interface uii_option_Update extends uii_option {
}
interface UII_savedsession_Base extends WebEntity {
}
interface UII_savedsession_Fixed extends WebEntity_Fixed {
  uii_savedsessionid: string;
}
interface UII_savedsession extends UII_savedsession_Base, UII_savedsession_Relationships {
}
interface UII_savedsession_Relationships {
}
interface UII_savedsession_Result extends UII_savedsession_Base, UII_savedsession_Relationships {
}
interface UII_savedsession_FormattedResult {
}
interface UII_savedsession_Select {
}
interface UII_savedsession_Expand {
}
interface UII_savedsession_Filter {
}
interface UII_savedsession_Create extends UII_savedsession {
}
interface UII_savedsession_Update extends UII_savedsession {
}
interface UII_sessiontransfer_Base extends WebEntity {
}
interface UII_sessiontransfer_Fixed extends WebEntity_Fixed {
  uii_sessiontransferid: string;
}
interface UII_sessiontransfer extends UII_sessiontransfer_Base, UII_sessiontransfer_Relationships {
}
interface UII_sessiontransfer_Relationships {
}
interface UII_sessiontransfer_Result extends UII_sessiontransfer_Base, UII_sessiontransfer_Relationships {
}
interface UII_sessiontransfer_FormattedResult {
}
interface UII_sessiontransfer_Select {
}
interface UII_sessiontransfer_Expand {
}
interface UII_sessiontransfer_Filter {
}
interface UII_sessiontransfer_Create extends UII_sessiontransfer {
}
interface UII_sessiontransfer_Update extends UII_sessiontransfer {
}
interface UII_workflow_Base extends WebEntity {
}
interface UII_workflow_Fixed extends WebEntity_Fixed {
  uii_workflowid: string;
}
interface UII_workflow extends UII_workflow_Base, UII_workflow_Relationships {
}
interface UII_workflow_Relationships {
}
interface UII_workflow_Result extends UII_workflow_Base, UII_workflow_Relationships {
}
interface UII_workflow_FormattedResult {
}
interface UII_workflow_Select {
}
interface UII_workflow_Expand {
}
interface UII_workflow_Filter {
}
interface UII_workflow_Create extends UII_workflow {
}
interface UII_workflow_Update extends UII_workflow {
}
interface UII_workflow_workflowstep_mapping_Base extends WebEntity {
}
interface UII_workflow_workflowstep_mapping_Fixed extends WebEntity_Fixed {
  uii_workflow_workflowstep_mappingid: string;
}
interface UII_workflow_workflowstep_mapping extends UII_workflow_workflowstep_mapping_Base, UII_workflow_workflowstep_mapping_Relationships {
}
interface UII_workflow_workflowstep_mapping_Relationships {
}
interface UII_workflow_workflowstep_mapping_Result extends UII_workflow_workflowstep_mapping_Base, UII_workflow_workflowstep_mapping_Relationships {
}
interface UII_workflow_workflowstep_mapping_FormattedResult {
}
interface UII_workflow_workflowstep_mapping_Select {
}
interface UII_workflow_workflowstep_mapping_Expand {
}
interface UII_workflow_workflowstep_mapping_Filter {
}
interface UII_workflow_workflowstep_mapping_Create extends UII_workflow_workflowstep_mapping {
}
interface UII_workflow_workflowstep_mapping_Update extends UII_workflow_workflowstep_mapping {
}
interface UII_workflowstep_Base extends WebEntity {
}
interface UII_workflowstep_Fixed extends WebEntity_Fixed {
  uii_workflowstepid: string;
}
interface UII_workflowstep extends UII_workflowstep_Base, UII_workflowstep_Relationships {
}
interface UII_workflowstep_Relationships {
}
interface UII_workflowstep_Result extends UII_workflowstep_Base, UII_workflowstep_Relationships {
}
interface UII_workflowstep_FormattedResult {
}
interface UII_workflowstep_Select {
}
interface UII_workflowstep_Expand {
}
interface UII_workflowstep_Filter {
}
interface UII_workflowstep_Create extends UII_workflowstep {
}
interface UII_workflowstep_Update extends UII_workflowstep {
}
interface UnresolvedAddress_Base extends WebEntity {
}
interface UnresolvedAddress_Fixed extends WebEntity_Fixed {
  unresolvedaddressid: string;
}
interface UnresolvedAddress extends UnresolvedAddress_Base, UnresolvedAddress_Relationships {
}
interface UnresolvedAddress_Relationships {
}
interface UnresolvedAddress_Result extends UnresolvedAddress_Base, UnresolvedAddress_Relationships {
}
interface UnresolvedAddress_FormattedResult {
}
interface UnresolvedAddress_Select {
}
interface UnresolvedAddress_Expand {
}
interface UnresolvedAddress_Filter {
}
interface UnresolvedAddress_Create extends UnresolvedAddress {
}
interface UnresolvedAddress_Update extends UnresolvedAddress {
}
interface UntrackedEmail_Base extends WebEntity {
}
interface UntrackedEmail_Fixed extends WebEntity_Fixed {
  activityid: string;
}
interface UntrackedEmail extends UntrackedEmail_Base, UntrackedEmail_Relationships {
}
interface UntrackedEmail_Relationships {
}
interface UntrackedEmail_Result extends UntrackedEmail_Base, UntrackedEmail_Relationships {
}
interface UntrackedEmail_FormattedResult {
}
interface UntrackedEmail_Select {
}
interface UntrackedEmail_Expand {
}
interface UntrackedEmail_Filter {
}
interface UntrackedEmail_Create extends UntrackedEmail {
}
interface UntrackedEmail_Update extends UntrackedEmail {
}
interface UoM_Base extends WebEntity {
}
interface UoM_Fixed extends WebEntity_Fixed {
  uomid: string;
}
interface UoM extends UoM_Base, UoM_Relationships {
}
interface UoM_Relationships {
}
interface UoM_Result extends UoM_Base, UoM_Relationships {
}
interface UoM_FormattedResult {
}
interface UoM_Select {
}
interface UoM_Expand {
}
interface UoM_Filter {
}
interface UoM_Create extends UoM {
}
interface UoM_Update extends UoM {
}
interface UoMSchedule_Base extends WebEntity {
}
interface UoMSchedule_Fixed extends WebEntity_Fixed {
  uomscheduleid: string;
}
interface UoMSchedule extends UoMSchedule_Base, UoMSchedule_Relationships {
}
interface UoMSchedule_Relationships {
}
interface UoMSchedule_Result extends UoMSchedule_Base, UoMSchedule_Relationships {
}
interface UoMSchedule_FormattedResult {
}
interface UoMSchedule_Select {
}
interface UoMSchedule_Expand {
}
interface UoMSchedule_Filter {
}
interface UoMSchedule_Create extends UoMSchedule {
}
interface UoMSchedule_Update extends UoMSchedule {
}
interface UserApplicationMetadata_Base extends WebEntity {
}
interface UserApplicationMetadata_Fixed extends WebEntity_Fixed {
  userapplicationmetadataid: string;
}
interface UserApplicationMetadata extends UserApplicationMetadata_Base, UserApplicationMetadata_Relationships {
}
interface UserApplicationMetadata_Relationships {
}
interface UserApplicationMetadata_Result extends UserApplicationMetadata_Base, UserApplicationMetadata_Relationships {
}
interface UserApplicationMetadata_FormattedResult {
}
interface UserApplicationMetadata_Select {
}
interface UserApplicationMetadata_Expand {
}
interface UserApplicationMetadata_Filter {
}
interface UserApplicationMetadata_Create extends UserApplicationMetadata {
}
interface UserApplicationMetadata_Update extends UserApplicationMetadata {
}
interface UserEntityInstanceData_Base extends WebEntity {
}
interface UserEntityInstanceData_Fixed extends WebEntity_Fixed {
  userentityinstancedataid: string;
}
interface UserEntityInstanceData extends UserEntityInstanceData_Base, UserEntityInstanceData_Relationships {
}
interface UserEntityInstanceData_Relationships {
}
interface UserEntityInstanceData_Result extends UserEntityInstanceData_Base, UserEntityInstanceData_Relationships {
}
interface UserEntityInstanceData_FormattedResult {
}
interface UserEntityInstanceData_Select {
}
interface UserEntityInstanceData_Expand {
}
interface UserEntityInstanceData_Filter {
}
interface UserEntityInstanceData_Create extends UserEntityInstanceData {
}
interface UserEntityInstanceData_Update extends UserEntityInstanceData {
}
interface UserEntityUISettings_Base extends WebEntity {
}
interface UserEntityUISettings_Fixed extends WebEntity_Fixed {
  userentityuisettingsid: string;
}
interface UserEntityUISettings extends UserEntityUISettings_Base, UserEntityUISettings_Relationships {
}
interface UserEntityUISettings_Relationships {
}
interface UserEntityUISettings_Result extends UserEntityUISettings_Base, UserEntityUISettings_Relationships {
}
interface UserEntityUISettings_FormattedResult {
}
interface UserEntityUISettings_Select {
}
interface UserEntityUISettings_Expand {
}
interface UserEntityUISettings_Filter {
}
interface UserEntityUISettings_Create extends UserEntityUISettings {
}
interface UserEntityUISettings_Update extends UserEntityUISettings {
}
interface UserFiscalCalendar_Base extends WebEntity {
}
interface UserFiscalCalendar_Fixed extends WebEntity_Fixed {
  userfiscalcalendarid: string;
}
interface UserFiscalCalendar extends UserFiscalCalendar_Base, UserFiscalCalendar_Relationships {
}
interface UserFiscalCalendar_Relationships {
}
interface UserFiscalCalendar_Result extends UserFiscalCalendar_Base, UserFiscalCalendar_Relationships {
}
interface UserFiscalCalendar_FormattedResult {
}
interface UserFiscalCalendar_Select {
}
interface UserFiscalCalendar_Expand {
}
interface UserFiscalCalendar_Filter {
}
interface UserFiscalCalendar_Create extends UserFiscalCalendar {
}
interface UserFiscalCalendar_Update extends UserFiscalCalendar {
}
interface UserForm_Base extends WebEntity {
}
interface UserForm_Fixed extends WebEntity_Fixed {
  userformid: string;
}
interface UserForm extends UserForm_Base, UserForm_Relationships {
}
interface UserForm_Relationships {
}
interface UserForm_Result extends UserForm_Base, UserForm_Relationships {
}
interface UserForm_FormattedResult {
}
interface UserForm_Select {
}
interface UserForm_Expand {
}
interface UserForm_Filter {
}
interface UserForm_Create extends UserForm {
}
interface UserForm_Update extends UserForm {
}
interface UserMapping_Base extends WebEntity {
}
interface UserMapping_Fixed extends WebEntity_Fixed {
  usermappingid: string;
}
interface UserMapping extends UserMapping_Base, UserMapping_Relationships {
}
interface UserMapping_Relationships {
}
interface UserMapping_Result extends UserMapping_Base, UserMapping_Relationships {
}
interface UserMapping_FormattedResult {
}
interface UserMapping_Select {
}
interface UserMapping_Expand {
}
interface UserMapping_Filter {
}
interface UserMapping_Create extends UserMapping {
}
interface UserMapping_Update extends UserMapping {
}
interface usermobileofflineprofilemembership_Base extends WebEntity {
}
interface usermobileofflineprofilemembership_Fixed extends WebEntity_Fixed {
  usermobileofflineprofilemembershipid: string;
}
interface usermobileofflineprofilemembership extends usermobileofflineprofilemembership_Base, usermobileofflineprofilemembership_Relationships {
}
interface usermobileofflineprofilemembership_Relationships {
}
interface usermobileofflineprofilemembership_Result extends usermobileofflineprofilemembership_Base, usermobileofflineprofilemembership_Relationships {
}
interface usermobileofflineprofilemembership_FormattedResult {
}
interface usermobileofflineprofilemembership_Select {
}
interface usermobileofflineprofilemembership_Expand {
}
interface usermobileofflineprofilemembership_Filter {
}
interface usermobileofflineprofilemembership_Create extends usermobileofflineprofilemembership {
}
interface usermobileofflineprofilemembership_Update extends usermobileofflineprofilemembership {
}
interface UserQuery_Base extends WebEntity {
}
interface UserQuery_Fixed extends WebEntity_Fixed {
  userqueryid: string;
}
interface UserQuery extends UserQuery_Base, UserQuery_Relationships {
}
interface UserQuery_Relationships {
}
interface UserQuery_Result extends UserQuery_Base, UserQuery_Relationships {
}
interface UserQuery_FormattedResult {
}
interface UserQuery_Select {
}
interface UserQuery_Expand {
}
interface UserQuery_Filter {
}
interface UserQuery_Create extends UserQuery {
}
interface UserQuery_Update extends UserQuery {
}
interface UserQueryVisualization_Base extends WebEntity {
}
interface UserQueryVisualization_Fixed extends WebEntity_Fixed {
  userqueryvisualizationid: string;
}
interface UserQueryVisualization extends UserQueryVisualization_Base, UserQueryVisualization_Relationships {
}
interface UserQueryVisualization_Relationships {
}
interface UserQueryVisualization_Result extends UserQueryVisualization_Base, UserQueryVisualization_Relationships {
}
interface UserQueryVisualization_FormattedResult {
}
interface UserQueryVisualization_Select {
}
interface UserQueryVisualization_Expand {
}
interface UserQueryVisualization_Filter {
}
interface UserQueryVisualization_Create extends UserQueryVisualization {
}
interface UserQueryVisualization_Update extends UserQueryVisualization {
}
interface UserSearchFacet_Base extends WebEntity {
}
interface UserSearchFacet_Fixed extends WebEntity_Fixed {
  usersearchfacetid: string;
}
interface UserSearchFacet extends UserSearchFacet_Base, UserSearchFacet_Relationships {
}
interface UserSearchFacet_Relationships {
}
interface UserSearchFacet_Result extends UserSearchFacet_Base, UserSearchFacet_Relationships {
}
interface UserSearchFacet_FormattedResult {
}
interface UserSearchFacet_Select {
}
interface UserSearchFacet_Expand {
}
interface UserSearchFacet_Filter {
}
interface UserSearchFacet_Create extends UserSearchFacet {
}
interface UserSearchFacet_Update extends UserSearchFacet {
}
interface UserSettings_Base extends WebEntity {
}
interface UserSettings_Fixed extends WebEntity_Fixed {
  systemuserid: string;
}
interface UserSettings extends UserSettings_Base, UserSettings_Relationships {
}
interface UserSettings_Relationships {
}
interface UserSettings_Result extends UserSettings_Base, UserSettings_Relationships {
}
interface UserSettings_FormattedResult {
}
interface UserSettings_Select {
}
interface UserSettings_Expand {
}
interface UserSettings_Filter {
}
interface UserSettings_Create extends UserSettings {
}
interface UserSettings_Update extends UserSettings {
}
interface VirtualEntityMetadata_Base extends WebEntity {
}
interface VirtualEntityMetadata_Fixed extends WebEntity_Fixed {
  virtualentitymetadataid: string;
}
interface VirtualEntityMetadata extends VirtualEntityMetadata_Base, VirtualEntityMetadata_Relationships {
}
interface VirtualEntityMetadata_Relationships {
}
interface VirtualEntityMetadata_Result extends VirtualEntityMetadata_Base, VirtualEntityMetadata_Relationships {
}
interface VirtualEntityMetadata_FormattedResult {
}
interface VirtualEntityMetadata_Select {
}
interface VirtualEntityMetadata_Expand {
}
interface VirtualEntityMetadata_Filter {
}
interface VirtualEntityMetadata_Create extends VirtualEntityMetadata {
}
interface VirtualEntityMetadata_Update extends VirtualEntityMetadata {
}
interface virtualresourcegroupresource_Base extends WebEntity {
}
interface virtualresourcegroupresource_Fixed extends WebEntity_Fixed {
  virtualresourcegroupresourceid: string;
}
interface virtualresourcegroupresource extends virtualresourcegroupresource_Base, virtualresourcegroupresource_Relationships {
}
interface virtualresourcegroupresource_Relationships {
}
interface virtualresourcegroupresource_Result extends virtualresourcegroupresource_Base, virtualresourcegroupresource_Relationships {
}
interface virtualresourcegroupresource_FormattedResult {
}
interface virtualresourcegroupresource_Select {
}
interface virtualresourcegroupresource_Expand {
}
interface virtualresourcegroupresource_Filter {
}
interface virtualresourcegroupresource_Create extends virtualresourcegroupresource {
}
interface virtualresourcegroupresource_Update extends virtualresourcegroupresource {
}
interface WebResource_Base extends WebEntity {
}
interface WebResource_Fixed extends WebEntity_Fixed {
  webresourceid: string;
}
interface WebResource extends WebResource_Base, WebResource_Relationships {
}
interface WebResource_Relationships {
}
interface WebResource_Result extends WebResource_Base, WebResource_Relationships {
}
interface WebResource_FormattedResult {
}
interface WebResource_Select {
}
interface WebResource_Expand {
}
interface WebResource_Filter {
}
interface WebResource_Create extends WebResource {
}
interface WebResource_Update extends WebResource {
}
interface WebWizard_Base extends WebEntity {
}
interface WebWizard_Fixed extends WebEntity_Fixed {
  webwizardid: string;
}
interface WebWizard extends WebWizard_Base, WebWizard_Relationships {
}
interface WebWizard_Relationships {
}
interface WebWizard_Result extends WebWizard_Base, WebWizard_Relationships {
}
interface WebWizard_FormattedResult {
}
interface WebWizard_Select {
}
interface WebWizard_Expand {
}
interface WebWizard_Filter {
}
interface WebWizard_Create extends WebWizard {
}
interface WebWizard_Update extends WebWizard {
}
interface WizardAccessPrivilege_Base extends WebEntity {
}
interface WizardAccessPrivilege_Fixed extends WebEntity_Fixed {
  wizardaccessprivilegeid: string;
}
interface WizardAccessPrivilege extends WizardAccessPrivilege_Base, WizardAccessPrivilege_Relationships {
}
interface WizardAccessPrivilege_Relationships {
}
interface WizardAccessPrivilege_Result extends WizardAccessPrivilege_Base, WizardAccessPrivilege_Relationships {
}
interface WizardAccessPrivilege_FormattedResult {
}
interface WizardAccessPrivilege_Select {
}
interface WizardAccessPrivilege_Expand {
}
interface WizardAccessPrivilege_Filter {
}
interface WizardAccessPrivilege_Create extends WizardAccessPrivilege {
}
interface WizardAccessPrivilege_Update extends WizardAccessPrivilege {
}
interface WizardPage_Base extends WebEntity {
}
interface WizardPage_Fixed extends WebEntity_Fixed {
  wizardpageid: string;
}
interface WizardPage extends WizardPage_Base, WizardPage_Relationships {
}
interface WizardPage_Relationships {
}
interface WizardPage_Result extends WizardPage_Base, WizardPage_Relationships {
}
interface WizardPage_FormattedResult {
}
interface WizardPage_Select {
}
interface WizardPage_Expand {
}
interface WizardPage_Filter {
}
interface WizardPage_Create extends WizardPage {
}
interface WizardPage_Update extends WizardPage {
}
interface Workflow_Base extends WebEntity {
}
interface Workflow_Fixed extends WebEntity_Fixed {
  workflowid: string;
}
interface Workflow extends Workflow_Base, Workflow_Relationships {
}
interface Workflow_Relationships {
}
interface Workflow_Result extends Workflow_Base, Workflow_Relationships {
}
interface Workflow_FormattedResult {
}
interface Workflow_Select {
}
interface Workflow_Expand {
}
interface Workflow_Filter {
}
interface Workflow_Create extends Workflow {
}
interface Workflow_Update extends Workflow {
}
interface workflowbinary_Base extends WebEntity {
}
interface workflowbinary_Fixed extends WebEntity_Fixed {
  workflowbinaryid: string;
}
interface workflowbinary extends workflowbinary_Base, workflowbinary_Relationships {
}
interface workflowbinary_Relationships {
}
interface workflowbinary_Result extends workflowbinary_Base, workflowbinary_Relationships {
}
interface workflowbinary_FormattedResult {
}
interface workflowbinary_Select {
}
interface workflowbinary_Expand {
}
interface workflowbinary_Filter {
}
interface workflowbinary_Create extends workflowbinary {
}
interface workflowbinary_Update extends workflowbinary {
}
interface WorkflowDependency_Base extends WebEntity {
}
interface WorkflowDependency_Fixed extends WebEntity_Fixed {
  workflowdependencyid: string;
}
interface WorkflowDependency extends WorkflowDependency_Base, WorkflowDependency_Relationships {
}
interface WorkflowDependency_Relationships {
}
interface WorkflowDependency_Result extends WorkflowDependency_Base, WorkflowDependency_Relationships {
}
interface WorkflowDependency_FormattedResult {
}
interface WorkflowDependency_Select {
}
interface WorkflowDependency_Expand {
}
interface WorkflowDependency_Filter {
}
interface WorkflowDependency_Create extends WorkflowDependency {
}
interface WorkflowDependency_Update extends WorkflowDependency {
}
interface WorkflowLog_Base extends WebEntity {
}
interface WorkflowLog_Fixed extends WebEntity_Fixed {
  workflowlogid: string;
}
interface WorkflowLog extends WorkflowLog_Base, WorkflowLog_Relationships {
}
interface WorkflowLog_Relationships {
}
interface WorkflowLog_Result extends WorkflowLog_Base, WorkflowLog_Relationships {
}
interface WorkflowLog_FormattedResult {
}
interface WorkflowLog_Select {
}
interface WorkflowLog_Expand {
}
interface WorkflowLog_Filter {
}
interface WorkflowLog_Create extends WorkflowLog {
}
interface WorkflowLog_Update extends WorkflowLog {
}
interface WorkflowWaitSubscription_Base extends WebEntity {
}
interface WorkflowWaitSubscription_Fixed extends WebEntity_Fixed {
  workflowwaitsubscriptionid: string;
}
interface WorkflowWaitSubscription extends WorkflowWaitSubscription_Base, WorkflowWaitSubscription_Relationships {
}
interface WorkflowWaitSubscription_Relationships {
}
interface WorkflowWaitSubscription_Result extends WorkflowWaitSubscription_Base, WorkflowWaitSubscription_Relationships {
}
interface WorkflowWaitSubscription_FormattedResult {
}
interface WorkflowWaitSubscription_Select {
}
interface WorkflowWaitSubscription_Expand {
}
interface WorkflowWaitSubscription_Filter {
}
interface WorkflowWaitSubscription_Create extends WorkflowWaitSubscription {
}
interface WorkflowWaitSubscription_Update extends WorkflowWaitSubscription {
}
