/*
  Warnings:

  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `salt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Chore` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Time_Record` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Chore" DROP CONSTRAINT "Chore_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Chore" DROP CONSTRAINT "Chore_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Time_Record" DROP CONSTRAINT "Time_Record_chore_id_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "salt";

-- DropTable
DROP TABLE "Category";

-- DropTable
DROP TABLE "Chore";

-- DropTable
DROP TABLE "Time_Record";
