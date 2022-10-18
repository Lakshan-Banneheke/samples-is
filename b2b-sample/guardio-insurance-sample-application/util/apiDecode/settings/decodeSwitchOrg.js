/*
 * Copyright (c) 2022 WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *http://www.apache.org/licenses/LICENSE-2.
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import callSwitchOrg from "../../apiCall/settings/callSwitchOrg";
import { commonDecode } from "../../util/apiUtil/commonDecode";
import { parseCookies } from '../../util/routerUtil/routerUtil';

function getSubOrgId(request) {
    const cookies = parseCookies(request);
    const subOrgId = cookies.orgId;

    return subOrgId;
}

export default async function decodeSwitchOrg(request, token) {

    const subOrgId = getSubOrgId(request);
    const accessToken = token.accessToken;

    try {
        const orgSession = await commonDecode(()=> callSwitchOrg(subOrgId, accessToken), null);

        return orgSession;
    } catch (err) {
        
        return null;
    }
}
