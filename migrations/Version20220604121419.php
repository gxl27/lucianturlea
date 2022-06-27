<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220604121419 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE technology DROP FOREIGN KEY FK_F463524D166D1F9C');
        $this->addSql('DROP INDEX IDX_F463524D166D1F9C ON technology');
        $this->addSql('ALTER TABLE technology ADD updated_at DATETIME NOT NULL, ADD document VARCHAR(255) DEFAULT NULL, DROP project_id, DROP icon');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE technology ADD project_id INT DEFAULT NULL, ADD icon VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, DROP updated_at, DROP document');
        $this->addSql('ALTER TABLE technology ADD CONSTRAINT FK_F463524D166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('CREATE INDEX IDX_F463524D166D1F9C ON technology (project_id)');
    }
}
