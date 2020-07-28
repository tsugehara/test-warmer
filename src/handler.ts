import { warmDatabases } from "sls-db-warmer";

export async function warmDb() {
	const databasesToWarm = {
		[process.env.DB_NAME || ""]: {
			secretArn: process.env.DB_SECRET_ARN || "",
			resourceArn: process.env.DB_RESOURCE_ARN || "",
			region: process.env.DB_REGION || "",
			// When warming database from same AWS account as lambda function, credentials are optional. AWS_ACCESS_KEY_ID environment variable automatically passed to lambda will be used.
			credentials: {
				accessKeyId: process.env.DB_ACCESS_KEY_ID || "",
				secretAccessKey: process.env.DB_SECRET_ACCESS_KEY || "",
			},
		},
	};

	await warmDatabases(databasesToWarm);
}
