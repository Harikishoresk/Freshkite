import dot from "dotenv"

dot.config()

export const appconfig = {
    port: process.env.PORT || 3000,
    jwt_key: process.env.JWT_SECRET || "JWT_SECRET_KEY",
    mongo_url: process.env.mongo_url,
    db: process.env.DB

}