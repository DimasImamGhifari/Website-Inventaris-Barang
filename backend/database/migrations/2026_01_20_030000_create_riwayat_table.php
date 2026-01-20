<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('riwayat', function (Blueprint $table) {
            $table->id();
            $table->timestamp('waktu')->useCurrent();
            $table->string('kode_barang');
            $table->string('nama_aset');
            $table->string('perubahan'); // update stok, update nama, +1, -1, dll
            $table->integer('stok_sebelum')->nullable();
            $table->integer('stok_sesudah')->nullable();
            $table->text('keterangan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('riwayat');
    }
};
